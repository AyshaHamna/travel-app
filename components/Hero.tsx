import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function Hero() {
  return (
    <section className="h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-semibold mb-20">Explore Sri Lanka</h1>

      {/* search bar */}
      <div className="flex space-x-2 justify-between rounded-md bg-black bg-opacity-50 min-w-4xl">
        <Input
          type="text"
          placeholder="Search Destination, City"
          className=""
        />
        <Button className="">
          <Search />
        </Button>
      </div>
    </section>
  );
}
export default Hero;
