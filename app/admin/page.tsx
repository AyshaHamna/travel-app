import React, { ReactNode } from "react";

interface AdminPageProps {
  children: ReactNode;
}

const AdminPage: React.FC<AdminPageProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminPage;
