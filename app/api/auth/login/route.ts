import { createClient } from "@/lib/supaBase/Server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  return NextResponse.json({ user });
}

export async function POST(req: NextRequest) {
  const { userData } = await req.json();
  const { email, password } = userData;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.session) {
    return NextResponse.json({ error: error?.message || "Login failed" }, { status: 401 });
  }

  const accessToken = data.session.access_token;

  const response = NextResponse.json({ user: data.user });

  response.cookies.set("sb-access-token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
