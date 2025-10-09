import React from 'react';
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
import { bentoItems } from '@/lib/data';


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AnimatedSection once={false} amount={0.3}>
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
