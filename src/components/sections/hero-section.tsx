import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/placeholder-images";
import Link from 'next/link';

export function HeroSection() {
  const heroImage = placeholderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[calc(100vh-3.5rem)] w-full flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center text-white container px-4">
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
