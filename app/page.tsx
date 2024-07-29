import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import PlanYourNextTrip from "@/components/PlanYourNextTrip";
import TripTours from "@/components/TripTours";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="p-5 bg-slate-500 min-h-screen bg-cover bg-center bg-no-repeat px-10"
      style={{ backgroundImage: "url('/background-image.png" }}
    >
      <Header />
      <main>
        <Hero />
        <PopularDestinations />
        <PlanYourNextTrip />
        <TripTours />
        <Footer />
      </main>
    </div>
  );
}
