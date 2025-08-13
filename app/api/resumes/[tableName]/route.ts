import { createClient } from "@/lib/supaBase/Server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ tableName: string; resume_id?: string }> }): Promise<NextResponse> {
  const supabase = await createClient();
  const resume_id = req.nextUrl.searchParams.get("resume_id");
  const { tableName } = await params;

  if (!resume_id) {
    return NextResponse.json({ message: "Missing resume_id" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase.from(tableName).select("*").eq("resume_id", resume_id);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching data", error: String(error) }, { status: 500 });
  }
}
export async function POST(req: NextRequest, { params }: { params: Promise<{ tableName: string }> }): Promise<NextResponse> {
  const supabase = await createClient();
  const { tableName } = await params;

  const body = await req.json();
  const { formData, resume_id } = await body;
  const { id, ...clearFormData } = formData;
  if (!formData) {
    return NextResponse.json({ message: "Missing data" }, { status: 400 });
  }

  if (!tableName) {
    return NextResponse.json({ message: "Missing table name" }, { status: 400 });
  }

  const insertData = {
    ...clearFormData,
    resume_id,
  };

  try {
    const { data, error } = await supabase.from(tableName).insert([insertData]).select().order("id", { ascending: true });

    if (error) {
      throw new Error(`Failed to add data to ${tableName}: ${error.message}`);
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `Error adding data to ${tableName}`, error: String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ tableName: string }> }): Promise<NextResponse> {
  const supabase = await createClient();
  const { tableName } = await params;

  const body = await req.json();
  const { formData, currentId } = body;
  const { id } = formData;

  if (!tableName) {
    return NextResponse.json({ message: "Missing table name" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase
      .from(tableName)
      .update(formData)
      .eq("id", id || currentId)
      .select()
      .order("id", { ascending: true });

    if (error) throw new Error(`Failed to update data in ${tableName}: ${error.message}`);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error updating data in ${tableName}`, error: String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ tableName: string }> }): Promise<NextResponse> {
  const supabase = await createClient();
  const { tableName } = await params;

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "No id provided" }, { status: 400 });
  }

  if (!tableName) {
    return NextResponse.json({ message: "Missing table name" }, { status: 400 });
  }

  try {
    const { data, error } = await supabase.from(tableName).delete().eq("id", id).select();

    if (error) throw new Error(`Failed to delete data from ${tableName}: ${error.message}`);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error deleting data from ${tableName}`,
        error: String(error),
      },
      { status: 500 }
    );
  }
}
