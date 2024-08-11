import AdminHeader from "@/components/AdminHeader";
import Sidebar from "@/components/Sidebar";
import { ClerkLoaded } from "@clerk/nextjs";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      {/* <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 md:flex-row">
        <div className="order-2"><Sidebar/></div>
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-4 md:p-6 md:m-2 overflow-y-auto">{children}</main>
        </div>
      </div> */}
      <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 ">
        <div className="flex flex-row">
          <Sidebar />
          <AdminHeader />
        </div>
        <main>{children}</main>
      </div>
    </ClerkLoaded>
  );
}
export default AdminLayout;
