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
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type MembershipPlan = {
  title: string;
  price: string;
  period: string;
  features: string[];
  isFeatured: boolean;
};
