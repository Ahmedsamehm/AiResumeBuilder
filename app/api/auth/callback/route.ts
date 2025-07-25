import { createClient } from "@/lib/supaBase/Server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();

    if (!idToken) {
      return NextResponse.json({ error: "ID token is required" }, { status: 400 });
    }

    const supabase = await createClient();

    // Sign in with the Google ID token
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: idToken,
    });

    if (error || !data.session) {
      return NextResponse.json({ error: error?.message || "Google login failed" }, { status: 401 });
    }

    const accessToken = data.session.access_token;

    const response = NextResponse.json({ user: data.user });

    // Set the cookie for middleware authentication
    response.cookies.set("sb-access-token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Google login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
