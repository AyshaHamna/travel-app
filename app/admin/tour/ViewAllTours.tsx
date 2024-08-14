import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
  recommended: boolean,
  activities: string[];
  journey: JourneyItem[];
}

function ViewAllTours({ onAddTourClick }: { onAddTourClick: () => void }) {
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
    <section className="flex flex-col container w-full h-full rounded-lg p-5 bg-gray-100 dark:bg-neutral-800">
      <div className="flex justify-between">
        <h1 className=" text-center text-2xl">All Tours</h1>
        <Button
          className="bg-[#43B97F] hover:bg-green-700"
          onClick={onAddTourClick}
        >
          Add Tour
        </Button>
      </div>
      <div>
        {/* get all tours */}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {tours.map((tour, index) => (
              <li key={index} className="my-5 border p-3">
                <p>{tour.name}</p>
                <p>{tour.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
export default ViewAllTours;
