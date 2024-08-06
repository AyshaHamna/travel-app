import Image from "next/image";
import seaImage from "/Images/sea.jpg";

function TourHero() {
  return (
    <section className="text-white flex flex-col items-center justify-center mx-auto py-16">
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
          <h1 className="text-4xl text-white font-bold text-center">Southern Sri Lanka</h1>
          <div className="absolute right-0 bottom-0 bg-[#ECA400] rounded-xl px-5 py-2 m-7 text-white text-md">
            5 Days Trip
          </div>
        </div>
      </div>
    </section>
  );
}
export default TourHero;
