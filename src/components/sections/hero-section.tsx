
"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { placeholderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

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
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" 
      />
      
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative z-20 text-center text-white container px-4"
      >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center items-center gap-3 mb-4 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit mx-auto"
          >
            <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-sm">4.9 Stars on Google</p>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Petaling Jaya’s 24/7 Budget Gym Since 2013.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto mt-6 max-w-3xl font-body text-lg text-neutral-200 md:text-xl"
          >
            Train Anytime. RM12 Entry. RM110 Monthly. No Excuses.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150, damping: 15 }}
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
          </motion.div>
      </motion.div>
    </section>
  );
}
