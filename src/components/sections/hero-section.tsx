import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/placeholder-images";
import Link from 'next/link';

export function HeroSection() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-background');
  const heroVideo = placeholderImages.find(p => p.id === 'hero-video');

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {heroVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
          poster={heroImage?.imageUrl}
        >
          <source src={heroVideo.imageUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="relative z-20 text-center text-white container px-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {/* CMS: hero_headline */}
            Train Like a Champion, Anytime—24/7.
            {/* /CMS */}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-neutral-200 md:text-xl">
            {/* CMS: hero_subheadline */}
            Affordable memberships from RM110 with Mr. Malaysia 2023 guidance.
            {/* /CMS */}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="#contact-us">
                {/* CMS: hero_cta_button */}
                Start Your RM12 Trial
                {/* /CMS */}
              </Link>
            </Button>
          </div>
      </div>
    </section>
  );
}
