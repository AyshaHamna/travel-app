export interface JourneyItem {
  day: string;
  location: string;
  hours: string;
  description: string;
  image?: string; // Image is optional
}

export interface Tour {
  _id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
  recommended: boolean;
  activities: string[];
  journey: JourneyItem[];
}
