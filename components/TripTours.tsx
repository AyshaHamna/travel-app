'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import seaImage from "/Images/sea.jpg";

// const tours = [
//   {
//     name: "Southern Sri Lanka",
//     duration: "5 Days Trip",
//     price: "45,000",
//     imageUrl: "/surf.jpg",
//     recommended: true,
//   },
//   {
//     name: "Sri Lanka Grand Tour",
//     duration: "12 Days Trip",
//     price: "80,000",
//     imageUrl: "/rainforest.jpg",
//   },
//   {
//     name: "Sri Lanka Wellness Tour",
//     duration: "3 Days Trip",
//     price: "15,000",
//     imageUrl: "/spa.jpg",
//   },
// ];

interface JourneyItem {
  day: string;
  location: string;
  hours: string;
  description: string;
  image?: string; // Image is optional
}

interface Tour {
  _id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
  recommended: boolean;
  activities: string[];
  journey: JourneyItem[];
}

function TripTours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/tours");
        console.log("---res---", res);
        if (!res.ok) {
          throw new Error("Failed to fetch tours");
        }

        const data = await res.json();

        setTours(data);
        // if (data.success) {
        //   setTours(data);
        // }
        console.log("--- data---- ", data);
      } catch (error) {
        console.log("Failed to fetch tours ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, []);

  return (
    <section className="max-w-6xl mx-auto flex flex-col justify-around py-16">
      <h1 className="text-4xl font-semibold text-center mb-16">Trip Tours</h1>

      <div className="max-w-lg sm:max-w-full mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* get all tours */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {tours.map((tour, index) => (
              <Card key={index} className="rounded-3xl drop-shadow-md">
                <CardHeader>
                  <Image
                    // src={tour.imageUrl}
                    src={seaImage}
                    alt={tour.name}
                    width="100"
                    height="100"
                    className="rounded-3xl w-full h-40 object-cover mb-2"
                  />
                  {tour.recommended && (
                    <div className="absolute bg-[#ECA400] rounded-xl px-3 mx-2 my-3 text-white text-sm">
                      Recommended
                    </div>
                  )}
                  <CardTitle className="font-semibold">{tour.name}</CardTitle>
                  <CardDescription>{tour.duration}</CardDescription>
                </CardHeader>

                <CardFooter className="flex justify-between text-sm">
                  <p>
                    From{" "}
                    <span className="text-blue-800 text-lg">
                      Rs. {tour.price}
                    </span>
                  </p>
                  <Button className="bg-[#43B97F] hover:bg-green-700">
                    Explore
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
export default TripTours;
