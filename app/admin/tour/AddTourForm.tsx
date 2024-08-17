"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

type JourneyItem = {
  day: string;
  location: string;
  hours: string;
  description: string;
  image: string;
};

function AddTourForm({ onCancel }: { onCancel: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    price: "",
    description: "",
    activities: [""],
    journey: [{ day: "", location: "", hours: "", description: "", image: "" }],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleActivityChange = (index: number, value: string) => {
    const updatedActivities = [...formData.activities];
    updatedActivities[index] = value;
    setFormData({ ...formData, activities: updatedActivities });
  };

  const handleAddActivity = () => {
    setFormData({ ...formData, activities: [...formData.activities, ""] });
  };

  const handleDayChange = (
    index: number,
    field: keyof JourneyItem,
    value: string
  ) => {
    const updatedjourney = [...formData.journey];
    updatedjourney[index][field] = value;
    setFormData({ ...formData, journey: updatedjourney });
  };

  const handleAddDay = () => {
    setFormData({
      ...formData,
      journey: [
        ...formData.journey,
        { day: "", location: "", hours: "", description: "", image: "" },
      ],
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      `${formData.name}, ${formData.duration},  ${formData.activities},  ${formData.description}`
    );

    try {
      const res = await fetch("/api/tours", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("res: ", res);

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();
      console.log("Tour added: ", data);

      // Optionally, clear the form and show success message here
    } catch (error) {
      console.log("Failed to add tour, ", error);
    }
  };

  return (
    <section className="container w-full rounded-lg  bg-gray-100 dark:bg-neutral-800">
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

          <div>
            <h3>Activities</h3>

            {formData.activities.map((activity, index) => (
              <Input
                key={index}
                type="text"
                value={activity}
                onChange={(e) => handleActivityChange(index, e.target.value)}
                className="mt-2 "
                placeholder={`Activity ${index + 1}`}
                required
              />
            ))}
            <button
              type="button"
              onClick={handleAddActivity}
              className="mt-2 text-blue-500"
            >
              <div className="flex gap-2">
                <Plus />
                Add Another Activity
              </div>
            </button>
          </div>
        </div>

        {/* Journey Days */}
        <div className="border p-5 mt-4 rounded-lg flex flex-col">
          <h3>Journey</h3>
          {formData.journey.map((day, index) => (
            <div key={index} className="p-2 mt-2">
              <Input
                type="text"
                value={day.day}
                onChange={(e) => handleDayChange(index, "day", e.target.value)}
                className="mt-1 mb-2"
                placeholder={`Day ${index + 1}`}
                required
              />
              <Input
                type="text"
                value={day.location}
                onChange={(e) =>
                  handleDayChange(index, "location", e.target.value)
                }
                className="mt-1 mb-2"
                placeholder="Location"
                required
              />
              <Input
                type="text"
                value={day.hours}
                onChange={(e) =>
                  handleDayChange(index, "hours", e.target.value)
                }
                className="mt-1 mb-2 "
                placeholder="Hours"
                required
              />
              <textarea
                value={day.description}
                onChange={(e) =>
                  handleDayChange(index, "description", e.target.value)
                }
                className="mt-1 mb-2 w-full p-2 border rounded-lg"
                placeholder="Description"
                required
              />
              <Input
                type="text"
                value={day.image}
                onChange={(e) =>
                  handleDayChange(index, "image", e.target.value)
                }
                className="mt-1 mb-2 "
                placeholder="Image URL"
              />
            </div>
          ))}
          <Button
            variant="secondary"
            onClick={handleAddDay}
            className="mt-2 w-1/3"
          >
            <Plus />
            Add Another Day
          </Button>
        </div>

        <div className="flex items-center justify-center mt-8 gap-x-10">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Add Tour</Button>
        </div>
      </form>
    </section>
  );
}
export default AddTourForm;
