import dbConnect from "@/lib/db";
import Tour from "@/models/Tour";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();
  await dbConnect();
  await Tour.create(body);
  return NextResponse.json({ message: "Tour Created" }, { status: 201 });
}
