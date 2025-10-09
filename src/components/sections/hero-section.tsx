
"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { placeholderImages } from "@/lib/data";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';
import { AnimatedSection } from "../common/animated-section";

export function HeroSection() {
  const heroVideo = placeholderImages.find(p => p.id === 'hero-video');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {heroVideo && (
        <motion.video
          style={{ scale }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src={heroVideo.imageUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div 
        className="absolute inset-0 z-10"
        style={{background: 'linear-gradient(to bottom, transparent 50%, black 100%)'}} 
      />
      
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-20 text-center text-white container px-4"
      >
        <AnimatedSection once={false}>
          <div className="flex justify-center items-center gap-3 mb-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit mx-auto">
            <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-sm">4.9 Stars on Google</p>
          </div>
          <h1 
            className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Petaling Jaya’s 24/7 Budget Gym Since 2013.
          </h1>
          <p
            className="mx-auto mt-6 max-w-3xl font-body text-lg text-neutral-200 md:text-xl"
          >
            Train Anytime. RM12 Entry. RM110 Monthly. No Excuses.
          </p>
          <div
            className="mt-8 flex justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="#membership">
                Join Now
              </Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
              <Link href="#contact-us">
                Visit Us Today
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </motion.div>
    </section>
  );
}
