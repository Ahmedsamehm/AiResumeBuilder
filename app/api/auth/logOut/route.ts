import { createClient } from "@/lib/supaBase/Server";

import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  const response = NextResponse.json({ message: "Logged out successfully" });

  response.cookies.delete("sb-access-token");
  response.cookies.delete("sb-refresh-token");
  response.cookies.delete("supabase-auth-token");
  response.cookies.delete("supabase.auth.token");

  return response;
}
