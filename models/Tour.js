import mongoose, { mongo } from "mongoose";

const JourneySchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  hours: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  activities: {
    type: [String],
    required: true,
  },
  journey: {
    type: [JourneySchema],
    required: true,
  },
});

const Tour = mongoose.model("Tour", TourSchema);

export default mongoose.models.Tour || Tour;
