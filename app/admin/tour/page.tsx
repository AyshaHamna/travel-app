"use client";

import { useState } from "react";
import AdminPage from "../page";
import AddTourForm from "./AddTourForm";
import ViewAllTours from "./ViewAllTours";

function TourPage() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <AdminPage>
      {showAddForm ? (
        <AddTourForm onCancel={() => setShowAddForm(false)} />
      ) : (
        <ViewAllTours onAddTourClick={() => setShowAddForm(true)} />
      )}
    </AdminPage>
  );
}
export default TourPage;
