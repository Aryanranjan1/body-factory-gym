import type { ImagePlaceholder } from './placeholder-images';

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

export type Facility = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: ImagePlaceholder;
  layout: '1x1' | '2x1' | '1x2' | '2x2';
};


export type MembershipPlan = {
  title: string;
  price: string;
  period: string;
  features: string[];
  isFeatured: boolean;
};
