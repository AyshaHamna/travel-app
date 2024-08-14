import Tour from "@/models/Tour";
import connectDB from "@/mongodb/db";
import { NextResponse } from "next/server";

//POST: Add a new Tour
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate the request body here if needed
    const requiredFields = [
      "name",
      "duration",
      "price",
      "description",
      "activities",
      "journey",
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const tour = new Tour(body);
    const res = await tour.save();

    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add Tour" }, { status: 400 });
  }
}

//GET: Fetch all Tours
export async function GET() {
  try {
    await connectDB();
    console.log("db connected");
    const tours = await Tour.find({});
    console.log("--- tours --- ", tours);
    return NextResponse.json(tours, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Tours" },
      { status: 500 }
    );
  }
}
