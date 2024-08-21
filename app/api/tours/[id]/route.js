import Tour from "@/models/Tour";
import connectDB from "@/mongodb/db";
import { NextResponse } from "next/server";

//GET: Fetch Tour from Id
export async function GETById(req, {params}) {
    try {
      await connectDB();
      console.log("db connected");
  
      const { id } = params;
      const tour = await Tour.findById(id);
      console.log(`tour of id: ${id} ---  ${tour}`);
  
      if (!tour) {
        return NextResponse.json(
          { error: "Tour Not Found" },
          { status: 404 }
        );
      }
  
      return NextResponse.json(tour, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to fetch the tour" },
        { status: 500 }
      );
    }
  }