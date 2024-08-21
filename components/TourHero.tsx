import Image from "next/image";
import seaImage from "/Images/sea.jpg";

interface TourHeroProps{
  name: string;
  duration: number;
}

function TourHero({name, duration}: TourHeroProps) {
  return (
    <section className="text-white flex flex-col items-center justify-center mx-auto py-5">
      <div className="relative w-full">
        {/* Image */}
        <Image
          src={seaImage}
          alt="Sea"
          className="rounded-3xl object-cover h-80 w-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-white font-bold text-center tracking-wider sm:text-4xl lg:text-5xl">{name}</h1>
          <div className="absolute right-0 bottom-0 bg-[#ECA400] rounded-xl px-5 py-2 m-7 text-white text-md">
            {duration} Days Trip
          </div>
        </div>
      </div>
    </section>
  );
}
export default TourHero;
