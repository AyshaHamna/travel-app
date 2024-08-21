"use client";

import BookTripButton from "@/components/BookTripButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TourHero from "@/components/TourHero";
import TourJourney from "@/components/TourJourney";
import TourSummary from "@/components/TourSummary";
import { Tour } from "@/types/tour";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function TourPage() {
  const [tour, setTour] = useState<Tour | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { tourId } = useParams();

  useEffect(() => {
    const fetchTourData = async () => {
      if (!tourId) return;

      try {
        const res = await fetch(`/api/tours/${tourId}`);
        if (!res.ok) throw new Error("Failed to fetch tour data");
        const data = await res.json();
        console.log("---tour with ID --- ", data);
        setTour(data);
      } catch (error) {
        console.log("Error fetching tour data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTourData();
  }, [tourId]);

  return (
    <div className="p-5 min-h-screen bg-cover bg-center bg-no-repeat px-10">
      <Header />
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : !tour ? (
          <div>Tour Not Found {tourId}</div>
        ) : (
          <div className="lg:px-8 xl:px-20">
            <TourHero name={tour.name} duration={tour.duration} />
            <TourSummary />
            <TourJourney />
            <BookTripButton />
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
}
export default TourPage;
