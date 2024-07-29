import { CarFront } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    name: "Choose your Destination",
    description:
      "Choose your perfect destination and start planning your dream gateway now",
    icon: <CarFront />,
  },
  {
    name: "Book your Tour",
    description:
      "Book your tour easily and secure your spot for unforgettable adventures",
    icon: <CarFront />,
  },
  {
    name: "Pack and Enjoy",
    description: "Pack your bags and get ready to enjoy an amazing trip",
    icon: <CarFront />,
  },
];

function PlanYourNextTrip() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col gap-5 justify-around py-16">
      <div className="">
        <h1 className="text-4xl font-semibold text-center mb-16">
          Plan Your Next Trip
        </h1>
        {steps.map((step, index) => (
          <div key={index} className="flex gap-x-6 gap-y-10 max-w-2xl">
            {step.icon}
            <div>
              <h3 className="font-bold text-lg">{step.name}</h3>
              <p className="text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <Image src="/traveller.png" alt="Traveller" width="473" height="473" className=""/>
      </div>
    </section>
  );
}
export default PlanYourNextTrip;
