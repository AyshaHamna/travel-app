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

const tours = [
  {
    name: "Southern Sri Lanka",
    duration: "5 Days Trip",
    price: "45,000",
    imageUrl: "/surf.jpg",
    recommended: true,
  },
  {
    name: "Sri Lanka Grand Tour",
    duration: "12 Days Trip",
    price: "80,000",
    imageUrl: "/rainforest.jpg",
  },
  {
    name: "Sri Lanka Wellness Tour",
    duration: "3 Days Trip",
    price: "15,000",
    imageUrl: "/spa.jpg",
  },
];

function TripTours() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col justify-around py-16">
      <h1 className="text-4xl font-semibold text-center mb-16">Trip Tours</h1>

      <div className="max-w-lg sm:max-w-full mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour, index) => (
          <Card key={index} className="rounded-3xl drop-shadow-md">
            <CardHeader>
              <Image
                src={tour.imageUrl}
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
                <span className="text-blue-800 text-lg">Rs. {tour.price}</span>
              </p>
              <Button className="bg-[#43B97F] hover:bg-green-700">
                Explore
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
export default TripTours;
