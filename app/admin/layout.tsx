import AdminHeader from "@/components/AdminHeader";
import { ClerkLoaded } from "@clerk/nextjs";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col h-screen dark:bg-gray-900">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ClerkLoaded>
  );
}
export default AdminLayout;
