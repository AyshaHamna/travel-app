"use client";

import { Button } from "./ui/button";

function BookTripButton() {
  return (
    <section className="flex items-center justify-center mx-auto py-24">
      <Button className="bg-[#ECA400] w-full rounded-xl sm:w-2/3 md:w-2/4 md:text-lg xl:w-2/5">Book Trip</Button>
    </section>
  );
}
export default BookTripButton;
