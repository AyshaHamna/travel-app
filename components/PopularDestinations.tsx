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
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            <div className="absolute inset-0 bottom-0 bg-black bg-opacity-50 flex flex-cols gap-2 items-end p-5 text-white rounded-xl">
              <h3 className="text-lg font-semibold">{destination.name}</h3>
              <div>
                <MapPin className="h-5 w-5 flex" />
                <p className="mt-2">{destination.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default PopularDestinations;
