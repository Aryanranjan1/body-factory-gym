import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FounderSection } from "@/components/sections/founder-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CommunitySection } from "@/components/sections/community-section";
import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";

const bentoItems = [
  {
    id: "strength-training",
    title: "Strength Training",
    desc: "Extensive free weights and machines.",
    url: "https://picsum.photos/seed/bento-strength/800/600",
    span: "md:col-span-2 md:row-span-2",
    imageHint: "strength training",
    features: [
      "Olympic Barbells & Bumper Plates",
      "Full Range of Dumbbells (5kg - 50kg)",
      "Squat Racks & Power Cages",
      "Bench Presses (Incline, Decline, Flat)",
      "Selectorized Strength Machines",
    ],
    cta: "Explore Strength Zone",
  },
  {
    id: "cardio-zone",
    title: "Cardio Zone",
    desc: "Boost your endurance.",
    url: "https://picsum.photos/seed/bento-cardio/800/600",
    span: "md:row-span-1",
    imageHint: "cardio machines",
    features: [
      "Treadmills with Incline",
      "Elliptical Trainers",
      "Stationary Bikes",
      "Rowing Machines",
      "Stair Climbers",
    ],
    cta: "Start Your Cardio",
  },
  {
    id: "functional-training",
    title: "Functional Training",
    desc: "Move with purpose.",
    url: "https://picsum.photos/seed/bento-functional/800/600",
    span: "md:row-span-1",
    imageHint: "functional training",
    features: [
      "Kettlebells & Battle Ropes",
      "TRX Suspension Trainers",
      "Plyo Boxes & Medicine Balls",
      "Open Turf Area",
      "Pull-up Bars",
    ],
    cta: "Get Functional",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    desc: "Expert guidance tailored to you.",
    url: "https://picsum.photos/seed/bento-personal/800/600",
    span: "md:row-span-2",
    imageHint: "personal trainer",
    features: [
      "1-on-1 Coaching with Champions",
      "Customized Workout & Nutrition Plans",
      "Body Composition Analysis",
      "Goal-Specific Training",
      "Flexible Scheduling",
    ],
    cta: "Book a Trainer",
  },
  {
    id: "sauna",
    title: "Infrared Sauna",
    desc: "Relax and accelerate recovery.",
    url: "https://picsum.photos/seed/bento-sauna/800/600",
    span: "md:row-span-1",
    imageHint: "infrared sauna",
    features: [
      "Deep Tissue Relaxation",
      "Improved Circulation",
      "Detoxification through Sweating",
      "Reduced Muscle Soreness",
      "Private & Hygienic Environment",
    ],
    cta: "Recover Now",
  },
  {
    id: "challenges",
    title: "Community Challenges",
    desc: "Compete and grow together.",
    url: "https://picsum.photos/seed/bento-challenge/800/600",
    span: "md:col-span-2 md:row-span-1",
    imageHint: "gym community",
    features: [
      "Monthly Fitness Challenges",
      "Leaderboards & Prizes",
      "Team-based Competitions",
      "Nutrition & Habit Tracking",
      "Exclusive Member Events",
    ],
    cta: "Join a Challenge",
  },
];


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <InteractiveImageBentoGallery
        items={bentoItems}
        title="Explore Our World-Class Facilities"
        description="A tour of our zones, designed for every fitness goal. Drag to explore, click to expand."
      />
      <FounderSection />
      <CommunitySection />
      <MembershipSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
