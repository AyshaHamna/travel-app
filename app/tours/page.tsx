"use client";

import Header from "@/components/Header";
import TourHero from "@/components/TourHero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Tour } from "@/types/tour";
import seaImage from "/Images/sea.jpg";

function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/tours");
        if (!res.ok) throw new Error("Failed to fetch tours");
        const data = await res.json();
        setTours(data);
        console.log("Tours:", data);
      } catch (error) {
        console.log("Failed to fetch tours ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTours();
  }, []);

  const router = useRouter();

  const handleCardClik = (tourId: string) => {
    router.push(`tours/${tourId}`);
  };

  return (
    <div className="p-5 min-h-screen bg-cover bg-center bg-no-repeat px-10">
      <Header />
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="max-w-lg sm:max-w-full mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour, index) => (
              <Card
                key={index}
                className="rounded-3xl drop-shadow-md"
                onClick={() => handleCardClik(tour._id)}
              >
                <CardHeader>
                  {/* set image from db here */}
                  <Image
                    src={seaImage}
                    alt={tour.name}
                    width={100}
                    height={100}
                    className="rounded-3xl w-full h-40 object-cover mb-2"
                  />
                  {tour.recommended && (
                    <div className="absolute bg-[#ECA400] rounded-xl px-3 mx-2 my-3 text-white text-sm">
                      Recommended
                    </div>
                  )}
                  <CardTitle className="font-semibold">{tour.name}</CardTitle>
                  <CardDescription className="flex flex-col py-2">
                    <p>{tour.duration}</p>
                    <p>{tour.description.substring(0, 120)} ...</p>
                  </CardDescription>
                </CardHeader>

                <CardFooter className="flex justify-between text-sm">
                  <p>
                    From{" "}
                    <span className="text-blue-800 text-lg">
                      Rs. {tour.price}
                    </span>
                  </p>
                  <Button asChild className="bg-[#43B97F] hover:bg-green-700">
                    <Link href="">Explore</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
export default ToursPage;
