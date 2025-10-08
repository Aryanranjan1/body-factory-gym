import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FounderSection } from "@/components/sections/founder-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <FacilitiesSection />
      <MembershipSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
