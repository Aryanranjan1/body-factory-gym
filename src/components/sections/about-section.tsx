
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { placeholderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import React from 'react';

const leftImageIds = ["about-1", "about-3"];
const rightImageIds = ["about-2", "about-4"];

const getImageById = (id: string) => placeholderImages.find(p => p.id === id);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const imageContainerVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const sentenceVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const popInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    },
  },
};

export function AboutSection() {
  const [currentLeftIndex, setCurrentLeftIndex] = useState(0);
  const [currentRightIndex, setCurrentRightIndex] = useState(0);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      setCurrentLeftIndex((prevIndex) => (prevIndex + 1) % leftImageIds.length);
    }, 5000);

    const rightInterval = setInterval(() => {
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

  const line1 = "WORK HARD.";
  const line2 = "LIVE FIT.";

  return (
    <motion.section 
      id="about-us" 
      className="bg-black text-white py-20 md:py-28 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            variants={imageContainerVariants}
            className="flex gap-4 sm:gap-8 justify-center"
          >
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
          </motion.div>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.p 
              className="font-semibold text-primary tracking-widest uppercase"
              variants={popInVariants}
            >
              What We Believe
            </motion.p>
            <motion.h2 
              className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight"
              variants={sentenceVariants}
            >
              <span className="block">
                {line1.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
              <span className="text-primary">
                 {line2.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={popInVariants}
            >
              Body Factory is more than a gym, it's a lifestyle. We believe in the transformative power of hard work. Through dedication and effort, you'll build mental and physical strength to conquer life's challenges, inside and outside of the gym.
            </motion.p>
            <motion.div variants={popInVariants}>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#testimonials">Discover Why Members Love Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
