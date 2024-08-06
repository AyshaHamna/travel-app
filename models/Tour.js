import mongoose, { mongo } from "mongoose";

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
});

const Tour = mongoose.model("Tour", TourSchema);

export default mongoose.models.Tour || Tour;
