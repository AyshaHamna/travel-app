import Image from "next/image";

interface TourJourneyCardProps {
  day: number;
  title: string;
  duration: string;
  description: string;
  imageSrc: string;
}

const TourJourneyCard: React.FC<TourJourneyCardProps> = ({
  day,
  title,
  duration,
  description,
  imageSrc,
}) => (
  //
  <div className="flex flex-col gap-y-5 py-7">
    <div className="flex flex-col sm:grid sm:grid-cols-6 xl:grid-cols-8 p-2">
      <h3 className="text-xl font-bold">Day {day}</h3>
      <p>{title}</p>
      <p>{duration}</p>
    </div>

    <div className="flex flex-col gap-y-5 text-justify items-center sm:grid sm:grid-cols-3 sm:gap-x-5">
      <div className="relative col-span-1 h-44 w-52 lg:w-72 sm:w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg drop-shadow-md"
        />
      </div>

      <p className="col-span-2 lg:w-3/4 lg:pl-10">{description}</p>
    </div>
  </div>
);

export default TourJourneyCard;
