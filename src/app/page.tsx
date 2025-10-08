import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FounderSection } from "@/components/sections/founder-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CommunitySection } from "@/components/sections/community-section";
import { GallerySection } from "@/components/sections/gallery-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FounderSection />
      <CommunitySection />
      <MembershipSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
