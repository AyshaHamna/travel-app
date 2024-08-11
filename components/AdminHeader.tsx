import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { FilePlus2 } from "lucide-react";

function AdminHeader() {
  return (
    <div className="flex-1 flex justify-between bg-white shadow-sm p-5 border-b dark:bg-gray-900">
      <Link href="/" className="text-2xl">
        Travel App
      </Link>

      <SignedIn>
        <div className="flex items-center space-x-2 ">
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
export default AdminHeader;
