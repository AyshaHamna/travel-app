"use client";

import AdminSidebar from "@/components/AdminSidebar";
import { ClerkLoaded } from "@clerk/nextjs";
import { useState } from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col h-screen w-full bg-gray-100 dark:bg-neutral-800 overflow-hidden md:flex-row">
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* dashboard main content */}
        <main className="flex-1 flex">
          <div className="p-2 md:p-10 overflow-y-auto rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            {children}
          </div>
        </main>
      </div>
    </ClerkLoaded>
  );
}
export default AdminLayout;
