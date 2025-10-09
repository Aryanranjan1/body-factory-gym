
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
      <div 
        className="absolute inset-0 z-10"
        style={{background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)'}} 
      />
      <div 
        className="absolute inset-0 z-10"
        style={{background: 'linear-gradient(to bottom, transparent 50%, black 100%)'}} 
      />
      
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-20 text-center md:text-left text-white container px-4"
      >
        <AnimatedSection once={false} className="max-w-3xl md:w-1/2">
          <h1 
            className="font-headline text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            BUILDING <span className="text-primary">STRONGER</span> LIVES
          </h1>
          <p
            className="mt-6 font-body text-lg text-neutral-200 md:text-xl"
          >
            Founded by a champion, built for everyone. Discover Petaling Jaya's premier 24/7 fitness destination.
          </p>
          <div
            className="mt-8 flex justify-center md:justify-start"
          >
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold">
              <Link href="#membership">
                Start Your Journey
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </motion.div>
    </section>
  );
}

