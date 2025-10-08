
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FounderSection } from "@/components/sections/founder-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CommunitySection } from "@/components/sections/community-section";
import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";
import { GallerySection } from "@/components/sections/gallery-section";
import { AnimatedSection } from "@/components/common/animated-section";

const bentoItems = [
  {
    id: "strength-training",
    title: "Strength Training",
    desc: "Extensive free weights and machines.",
    url: "https://picsum.photos/seed/bento-strength/800/600",
    span: "md:col-span-2 md:row-span-2",
    imageHint: "strength training",
    targetAudience: "Anyone looking to build muscle mass, increase raw strength, or improve body composition.",
    equipment: [
      "Olympic Barbells & Bumper Plates",
      "Full Range of Dumbbells (5kg - 50kg)",
      "Squat Racks & Power Cages",
      "Bench Presses (Incline, Decline, Flat)",
      "Selectorized Strength Machines for all muscle groups",
    ],
    coachTip: "Focus on progressive overload. Aim to increase weight, reps, or sets each week to keep challenging your muscles.",
    cta: "Explore Strength Zone",
  },
  {
    id: "cardio-zone",
    title: "Cardio Zone",
    desc: "Boost your endurance.",
    url: "https://picsum.photos/seed/bento-cardio/800/600",
    span: "md:row-span-1",
    imageHint: "cardio machines",
    targetAudience: "Individuals aiming to improve cardiovascular health, increase stamina, or manage weight.",
     equipment: [
      "Treadmills with Incline & Programs",
      "Elliptical Trainers",
      "Stationary & Recumbent Bikes",
      "Concept2 Rowing Machines",
      "Stair Climbers",
    ],
    coachTip: "Mix steady-state sessions with HIIT intervals to maximize both endurance and calorie burn.",
    cta: "Start Your Cardio",
  },
  {
    id: "functional-training",
    title: "Functional Training",
    desc: "Move with purpose.",
    url: "https://picsum.photos/seed/bento-functional/800/600",
    span: "md:row-span-1",
    imageHint: "functional training",
    targetAudience: "Athletes and individuals who want to improve real-world strength, coordination, and mobility.",
     equipment: [
      "Kettlebells (various weights)",
      "Battle Ropes",
      "TRX Suspension Trainers",
      "Plyometric Boxes & Medicine Balls",
      "Open Turf Area for agility drills",
    ],
    coachTip: "Master the fundamental movements like squats, lunges, and hinges before adding complex variations.",
    cta: "Get Functional",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    desc: "Expert guidance tailored to you.",
    url: "https://picsum.photos/seed/bento-personal/800/600",
    span: "md:row-span-2",
    imageHint: "personal trainer",
    targetAudience: "Beginners needing direction, experienced members breaking plateaus, or anyone with specific goals.",
    features: [
      "1-on-1 Coaching with Champion Trainers",
      "Customized Workout & Nutrition Plans",
      "Body Composition Analysis & Tracking",
      "Goal-Specific Training (Weight Loss, Muscle Gain, etc.)",
      "Flexible Scheduling",
    ],
    coachTip: "Communication is key. Be open with your trainer about your challenges and successes to get the best results.",
    cta: "Book a Trainer",
  },
  {
    id: "sauna",
    title: "Infrared Sauna",
    desc: "Relax and accelerate recovery.",
    url: "https://picsum.photos/seed/bento-sauna/800/600",
    span: "md:row-span-1",
    imageHint: "infrared sauna",
    targetAudience: "Everyone looking to reduce muscle soreness, improve circulation, and de-stress after a hard workout.",
    features: [
      "Deep Tissue Relaxation",
      "Improved Circulation & Detoxification",
      "Reduced Muscle Soreness & Joint Pain",
      "Private & Hygienic Environment",
    ],
    coachTip: "Hydrate well before and after your session. Start with shorter durations (15-20 minutes) and see how your body feels.",
    cta: "Recover Now",
  },
  {
    id: "challenges",
    title: "Community Challenges",
    desc: "Compete and grow together.",
    url: "https://picsum.photos/seed/bento-challenge/800/600",
    span: "md:col-span-2 md:row-span-1",
    imageHint: "gym community",
    targetAudience: "Members who thrive on competition, accountability, and community support to stay motivated.",
    features: [
      "Monthly Fitness & Strength Challenges",
      "Leaderboards with Prizes",
      "Team-based Competitions",
      "Nutrition & Habit Tracking Goals",
      "Exclusive Member Events & Workshops",
    ],
    coachTip: "Don't just compete, connect! Use challenges as a way to meet new training partners and learn from others.",
    cta: "Join a Challenge",
  },
];


export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedSection once={false} amount={0.3}>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <InteractiveImageBentoGallery
          items={bentoItems}
          title="World-Class Facilities"
          description="A tour of our zones, designed for every fitness goal. Drag to explore, click to expand."
        />
      </AnimatedSection>
      <FounderSection />
      <CommunitySection />
      <MembershipSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
