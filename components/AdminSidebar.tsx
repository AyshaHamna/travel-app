import { motion } from "framer-motion";
import { link } from "fs";
import {
  BookCheck,
  CarFront,
  LayoutDashboard,
  MapPin,
  TentTree,
} from "lucide-react";
import Link from "next/link";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import Image from "next/image";
import seaImage from "/Images/sea.jpg";

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

function AdminSidebar({ sidebarOpen, setSidebarOpen }: AdminSidebarProps) {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Tours",
      href: "/admin/tour",
      icon: (
        <CarFront className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Bookings",
      href: "#",
      icon: (
        <BookCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Popular Destinations",
      href: "#",
      icon: (
        <MapPin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {sidebarOpen ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Manu Arora",
              href: "#",
              icon: (
                <Image
                  src={seaImage}
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              ),
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <TentTree className="h-5 w-5 " />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Travel Dashboard
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <TentTree className="h-5 w-5 " />
    </Link>
  );
};

export default AdminSidebar;
