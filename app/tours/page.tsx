'use client'

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

function ToursPage() {
  
  const tours = [
    {
      id: "1",
      name: "Southern Sri Lanka",
      duration: "5 Days Trip",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "45,000",
      activities: [
        "Surfing",
        "Diving",
        "Deep Sea Fishing",
        "Trekking and Hiking",
        "Whale Watching",
      ],
      included: [
        "Meals Provided",
        "Hotel Accomodation",
        "Local Transportation",
        "Entrance Fee to Attractions",
        "Tour Guide Services",
      ],
      itinerary: [
        {
          day: 1,
          title: 'Mirissa',
          duration: '3 hours',
          description: 'Lorem ipsum dolor sit amet...',
          imageSrc: "/surf.jpg",
        },
        {
          day: 2,
          title: 'Galle',
          duration: '1 hours',
          description: 'Lorem ipsum dolor sit amet...',
          imageSrc: "/surf.jpg",
        },
        // Add more days...
      ],
      imageUrl: "/surf.jpg",
      recommended: true,
    },
    {
      id: "2",
      name: "Sri Lanka Grand Tour",
      duration: "12 Days Trip",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "80,000",
      activities: ["Surfing", "Diving", "Whale Watching"],
      included: [
        "Meals Provided",
        "Local Transportation",
        "Entrance Fee to Attractions",
        "Tour Guide Services",
      ],
      itinerary: [
        {
          day: 1,
          title: 'Mirissa',
          duration: '3 hours',
          description: 'Lorem ipsum dolor sit amet...',
          imageSrc: "/surf.jpg",
        },
        {
          day: 2,
          title: 'Galle',
          duration: '1 hours',
          description: 'Lorem ipsum dolor sit amet...',
          imageSrc: "/surf.jpg",
        },
        // Add more days...
      ],
      imageUrl: "/rainforest.jpg",
    },
    {
      id: "3",
      name: "Sri Lanka Wellness Tour",
      duration: "3 Days Trip",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: "15,000",
      activities: ["Surfing", "Diving"],
      included: [
        "Local Transportation",
        "Entrance Fee to Attractions",
        "Tour Guide Services",
      ],
      itinerary: [
        {
          day: 1,
          title: 'Mirissa',
          duration: '3 hours',
          description: 'Lorem ipsum dolor sit amet...',
          imageSrc: "/surf.jpg",
        },
        {
          day: 2,
          title: 'Galle',
          duration: '1 hours',
          description: 'Lorem ipsum dolor sit amet...',
          imageSrc: "/surf.jpg",
        },
        // Add more days...
      ],
      imageUrl: "/spa.jpg",
    },
  ];

  const router = useRouter();

  return (
    <div className="p-5 min-h-screen bg-cover bg-center bg-no-repeat px-10">
      <Header />
      <main>
        <div className="max-w-lg sm:max-w-full mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <Card key={index} className="rounded-3xl drop-shadow-md" onClick={() => {router.push(`tours/${tour.id}`)}}>
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
                <CardDescription className="flex flex-col py-2">
                  <p>{tour.duration}</p>
                  <p>{tour.description.substring(0,120)} ...</p>
                  
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex justify-between text-sm">
                <p>
                  From{" "}
                  <span className="text-blue-800 text-lg">
                    Rs. {tour.price}
                  </span>
                </p>
                <Button asChild className="bg-[#43B97F] hover:bg-green-700"><Link href="">Explore</Link>
                  
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
export default ToursPage;
