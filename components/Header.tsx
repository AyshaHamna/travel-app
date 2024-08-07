"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header({ textColor = "text-black" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`relative z-10 flex justify-between p-5 items-center ${textColor}`}
    >
      {/* logo */}
      <h1 className="text-4xl font-bold">Travel App</h1>

      {/* menu icon - smaller screen */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        />
      )}

      {/* mobile menu */}
      {isMenuOpen && (
       
          <div className="fixed top-24 sm:top-20 left-0 right-0 z-20 bg-white p-5 md:hidden rounded-lg">
            <nav className="flex flex-col space-y-4">
              <Link href="" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="" onClick={toggleMenu}>
                Destinations
              </Link>
              <Link href="" onClick={toggleMenu}>
                Tours
              </Link>
              <Link href="" onClick={toggleMenu}>
                Contact
              </Link>
            </nav>
            <div className="mt-5">
              <SignedOut>
                <SignInButton>
                  <Button className="bg-[#43B97F] hover:bg-green-700 w-full">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
   
      )}

      {/* nav menu - medium screen & above*/}
      <div className="hidden md:flex md:space-x-10">
        {/* nav link */}
        <nav className="flex space-x-5">
          <Link href="">Home</Link> <Link href="">Destinations</Link>{" "}
          <Link href="">Tours</Link> <Link href="">Contact</Link>{" "}
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
