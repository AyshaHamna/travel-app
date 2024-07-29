import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="grid grid-cols-3 max-w-6xl mx-auto py-16">
      <div className="flex flex-col gap-2 col-span-1">
        <h3 className="text-3xl font-semibold">Travel Logo</h3>
        <p>Discover, Explore, Experience More</p>
      </div>

      <div className="flex col-span-2 justify-evenly">
        <div className="flex flex-col gap-3">
          <Link href="">Destinations</Link> <Link href="">Tour</Link>{" "}
          <Link href="">Contact</Link>{" "}
        </div>

        {/* social media icons */}
        <div className="flex">
          <Youtube />
          <Facebook />
          <Instagram />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
