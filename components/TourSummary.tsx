function TourSummary() {
  const activities = [
    "Surfing",
    "Diving",
    "Deep Sea Fishing",
    "Trekking and Hiking",
    "Whale Watching",
  ];
  const included = [
    "Meals Provided",
    "Hotel Accomodation",
    "Local Transportation",
    "Entrance Fee to Attractions",
    "Tour Guide Services",
  ];

  return (
    <section className=" flex flex-col mx-auto py-5 text-sm">
      <p>
        Experience the thrill of South Sri Lanka with our adventure-packed tour.
        Dive into crystal-clear waters for surfing & diving and explore lush
        landscapes with trekking and hiking. Enjoy deep sea fishing expeditions
        and soar above stunning scenery with hot air ballooning. Witness
        majestic giants on a whale watching tour. This trip promises
        unforgettable moments and exhilarating activities amidst South Sri
        Lankas natural beauty.
      </p>
      <h2 className="text-2xl font-semibold py-5">Activities</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 text-md">
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <ul>
          {included.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default TourSummary;
