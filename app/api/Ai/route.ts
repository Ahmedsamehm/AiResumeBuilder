// app/api/ai/route.ts

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  const body = await req.json();
  const { prompt } = body;

  if (!prompt) {
    return NextResponse.json({ message: "No prompt provided" }, { status: 400 });
  }
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text;
  return NextResponse.json(text);
}
