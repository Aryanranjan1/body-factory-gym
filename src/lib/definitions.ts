import type { ImagePlaceholder } from './data';

export type Trainer = {
  name: string;
  expertise: string;
  imageUrl: string;
  imageHint: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type MembershipPlan = {
  title: string;
  price: string;
  period: string;
  features: string[];
  isFeatured: boolean;
};
