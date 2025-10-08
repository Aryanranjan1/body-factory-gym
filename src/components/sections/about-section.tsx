
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { placeholderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

const leftImageIds = ["about-1", "about-3"];
const rightImageIds = ["about-2", "about-4"];

const getImageById = (id: string) => placeholderImages.find(p => p.id === id);

export function AboutSection() {
  const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
  const [currentRightIndex, setCurrentRightIndex] = useState(0);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setCurrentLeftIndex((prevIndex) => (prevIndex + 1) % leftImageIds.length);
    }, 5000);

    const rightInterval = setInterval(() => {
      // Add a slight delay to desynchronize the two image changes
      setTimeout(() => {
        setCurrentRightIndex((prevIndex) => (prevIndex + 1) % rightImageIds.length);
      }, 2500);
    }, 5000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  const currentLeftImage = getImageById(leftImageIds[currentLeftIndex]);
  const currentRightImage = getImageById(rightImageIds[currentRightIndex]);

  return (
    <section id="about-us" className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex gap-4 sm:gap-8 justify-center">
            <div className="w-1/2 relative aspect-[3/4] rounded-lg overflow-hidden mt-8">
              <AnimatePresence initial={false}>
                {currentLeftImage && (
                  <motion.div
                    key={currentLeftImage.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentLeftImage.imageUrl}
                      alt={currentLeftImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={currentLeftImage.imageHint}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-1/2 relative aspect-[3/4] rounded-lg overflow-hidden mb-8">
               <AnimatePresence initial={false}>
                {currentRightImage && (
                  <motion.div
                    key={currentRightImage.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentRightImage.imageUrl}
                      alt={currentRightImage.description}
                      fill
                      className="object-cover"
                      data-ai-hint={currentRightImage.imageHint}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="space-y-6">
            <p className="font-semibold text-primary tracking-widest uppercase">
              What We Believe
            </p>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
              WORK HARD. LIVE FIT.
            </h2>
            <p className="text-lg text-muted-foreground">
              Body Factory is more than a gym, it's a lifestyle. We believe in the transformative power of hard work. Through dedication and effort, you'll build mental and physical strength to conquer life's challenges, inside and outside of the gym.
            </p>
            <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#testimonials">Discover Why Members Love Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
