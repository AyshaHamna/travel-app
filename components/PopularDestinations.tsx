import { MapPin } from "lucide-react";
import Image from "next/image";

const destinations = [
  {
    name: "Sigiriya Rock",
    location: "Dambulla",
    imageUrl: "/sigiriya-rock.jpg",
  },
  { name: "Galle Fort", location: "Galle", imageUrl: "/galle-fort.jpg" },
  {
    name: "Yala National Park",
    location: "Yala",
    imageUrl: "/yala-national-park.jpg",
  },
  {
    name: "Temple of the Tooth",
    location: "Kandy",
    imageUrl: "/temple-of-tooth-relic.png",
  },
];

function PopularDestinations() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h1 className="text-4xl font-semibold text-center mb-16">
        Popular Destinations
      </h1>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {destinations.map((destination, index) => (
          <div key={index} className="relative rounded-xl shadow-lg group">
            <div className="relative w-full h-80">
              <Image
                src={destination.imageUrl}
                alt={destination.name}
                fill
                sizes="(max-width: 640px) 100vw, 
                       (max-width: 1024px) 50vw, 
                       25vw"
                className="object-cover rounded-xl"
              />
            </div>
            <div className="">
              <div className="absolute inset-0 items-start justify-end p-4 w-full bg-black bg-opacity-25 flex flex-col text-gray-100 rounded-xl">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
                <div className="flex items-center gap-1 text-gray-200 text-sm">
                  <MapPin className="h-4 w-4" />
                  <p>{destination.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default PopularDestinations;
