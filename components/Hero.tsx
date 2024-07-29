import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Hero() {
  return (
    <section className="h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold mb-20">Explore Sri Lanka</h1>

      {/* search bar */}
      <div className="flex space-x-2 w-full mx-auto justify-between rounded-full  border-2 border-gray-300 bg-black bg-opacity-20 sm:w-2/3 lg:w-1/2 ">
        <Input
          type="text"
          placeholder="Search Destination, City"
          className="bg-transparent border-none text-white placeholder:text-gray-300 rounded-full focus:outline-none focus:ring-0"
        />
        <Button className="bg-transparent text-gray-300">
          <Search />
        </Button>
      </div>
    </section>
  );
}
export default Hero;
