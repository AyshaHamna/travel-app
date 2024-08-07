import BookTripButton from "@/components/BookTripButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TourHero from "@/components/TourHero";
import TourJourney from "@/components/TourJourney";
import TourSummary from "@/components/TourSummary";

function TourPage() {
  return (
    <div className="p-5 min-h-screen bg-cover bg-center bg-no-repeat px-10">
      <Header />
      <main>
        <TourHero />
        <div className="lg:px-10 xl:px-20">
          <TourSummary />
          <TourJourney />
          <BookTripButton />
          <Footer/>
        </div>
      </main>
    </div>
  );
}
export default TourPage;
