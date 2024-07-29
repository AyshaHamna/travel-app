import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex justify-between p-5 items-center text-white">
      {/* logo */}
      <h1 className="text-4xl font-bold">Travel App</h1>

      {/* nav menu */}
      <div className="flex space-x-10">
        {/* nav link */}
        <nav className="flex space-x-5">
          <Link href="">Home</Link> <Link href="">Destinations</Link>{" "}
          <Link href="">Tour</Link> <Link href="">Contact</Link>{" "}
        </nav>
        {/* user profile */}
        <SignedOut>
          <SignInButton>
            <Button className="bg-[#43B97F] hover:bg-green-700">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
export default Header;
