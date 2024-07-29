"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";

function AdminPage() {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    price: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `${formData.name}, ${formData.duration},  ${formData.price},  ${formData.description}`
    );
  };

  return (
    <section className="container">
      <h1 className=" text-center text-3xl p-5">Add Tour Details</h1>

      <form className="py-8" onSubmit={handleSubmit}>
        <div className="border p-5 rounded-lg flex flex-col">
          <h3>Name</h3>
          <Input
            type="text"
            className="m-2"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <h3>Duration</h3>
          <Input
            type="number"
            className="m-2"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
          <h3>Price (Rs.)</h3>
          <Input
            type="number"
            className="m-2"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <h3>Description</h3>
          <textarea
            className="m-2 w-full p-2 border rounded-lg"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <Button type="submit" className="mt-8">
            Add Tour
          </Button>
        </div>
      </form>
    </section>
  );
}
export default AdminPage;
