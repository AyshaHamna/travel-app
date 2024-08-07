import TourJourneyCard from "./TourJourneyCard"

function TourJourney() {
    const journey = [
        {
            day: 1,
            title: 'Mirissa',
            duration: '3 hours',
            description: 'Experience the thrill of South Sri Lanka with our adventure-packed tour. Dive into crystal-clear waters for surfing & diving and explore lush landscapes with trekking and hiking. Enjoy deep sea fishing expeditions and soar above stunning scenery with hot air ballooning. Witness majestic giants on a whale watching tour. This trip promises unforgettable moments and exhilarating activities amidst South Sri Lankas natural beauty.',
            imageSrc: "/surf.jpg",
        },
        {
            day: 2,
            title: 'Galle',
            duration: '1 hour',
            description: 'Experience the thrill of South Sri Lanka with our adventure-packed tour. Dive into crystal-clear waters for surfing & diving and explore lush landscapes with trekking and hiking. Enjoy deep sea fishing expeditions and soar above stunning scenery with hot air ballooning. Witness majestic giants on a whale watching tour. This trip promises unforgettable moments and exhilarating activities amidst South Sri Lankas natural beauty.',
            imageSrc: "/surf.jpg",
        },
        {
            day: 3,
            title: 'Hikkaduwa',
            duration: '1 hour',
            description: 'Experience the thrill of South Sri Lanka with our adventure-packed tour. Dive into crystal-clear waters for surfing & diving and explore lush landscapes with trekking and hiking. Enjoy deep sea fishing expeditions and soar above stunning scenery with hot air ballooning. Witness majestic giants on a whale watching tour. This trip promises unforgettable moments and exhilarating activities amidst South Sri Lankas natural beauty.',
            imageSrc: "/surf.jpg",
        },
        // Add more days...
    ];
        
  return (
      <section className="flex flex-col justify-center mx-auto py-5">
          {journey.map((item, index) => (
              <TourJourneyCard key={index} {...item} />
          ))}
   </section>
  )
}
export default TourJourney