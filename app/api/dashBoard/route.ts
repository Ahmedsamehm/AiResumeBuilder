import { Resume } from "@/app/dashBoard/_types/types";
import { createClient } from "@/lib/supaBase/Server";

import { NextRequest, NextResponse } from "next/server";

type TResume = { data: Resume[]; error: string | null };

export async function GET(): Promise<NextResponse> {
  const supabase = await createClient();

  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) throw userError || new Error("User not found");

    const { data: Resumes, error } = (await supabase.from("Resumes").select("*").eq("user_id", user.id)) as unknown as TResume;

    if (error) throw error;

    return NextResponse.json(Resumes, { status: 200 });
  } catch (error) {
    console.error("Supabase error:", error);
    return NextResponse.json({ message: "Error fetching resumes", error: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const supabase = await createClient();

  try {
    const body = await req.json();
    const { title } = body;

    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError) throw userError;

    const user = userData?.user;
    if (!user) throw new Error("No user found");

    const { data, error } = (await supabase
      .from("Resumes")
      .insert([
        {
          title,
          user_id: user.id,
          created_at: new Date().toISOString(),
        },
      ])
      .select()) as unknown as TResume;

    if (error) throw error;

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error("Error creating resume:", error);
    return NextResponse.json({ message: "Error creating resume", error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  if (!req.url) return NextResponse.json({ message: "Invalid request URL" }, { status: 400 });
  const supabase = await createClient();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    const { error } = await supabase.from("Resumes").delete().eq("id", id);
    if (error) throw error;
  } catch (error) {
    console.error("Error deleting resume:", error);
    return NextResponse.json({ message: "Error deleting resume", error: String(error) }, { status: 500 });
  }
  return NextResponse.json({ message: "Resume deleted successfully" }, { status: 200 });
}
