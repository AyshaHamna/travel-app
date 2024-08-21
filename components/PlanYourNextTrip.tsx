import { CarFront } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    name: "Choose your Destination",
    description:
      "Choose your perfect destination and start planning your dream gateway now",
    icon: <CarFront className="text-xl sm:h-10 sm:w-10"/>,
  },
  {
    name: "Book your Tour",
    description:
      "Book your tour easily and secure your spot for unforgettable adventures",
    icon: <CarFront className="text-xl sm:h-10 sm:w-10"/>,
  },
  {
    name: "Pack and Enjoy",
    description: "Pack your bags and get ready to enjoy an amazing trip",
    icon: <CarFront className="text-xl sm:h-10 sm:w-10"/>,
  },
];

function PlanYourNextTrip() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col gap-5 justify-around items-center py-16 lg:flex-row">
      <div className="">
        <h1 className="text-4xl font-semibold text-center mb-16 md:text-5xl">
          Plan Your Next Trip
        </h1>


        {steps.map((step, index) => (
          <div key={index} className="flex gap-x-6 gap-y-10 max-w-2xl pb-7 sm:max-w-sm md:max-w-md lg:max-w-sm">
            <div>{step.icon}</div>
            <div>
              <h3 className="font-bold text-lg xl:text-2xl">{step.name}</h3>
              <p className="text-sm xl:text-base">{step.description}</p>
            </div>
          </div>
        ))}


      </div>
      <div className="">
        <Image
          src="/traveller.png"
          alt="Traveller"
          width="473"
          height="473"
          className=""
        />
      </div>
    </section>
  );
}
export default PlanYourNextTrip;
