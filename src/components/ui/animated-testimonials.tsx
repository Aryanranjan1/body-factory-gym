
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  beforeSrc: string;
  afterSrc: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 7000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);


  return (
    <div className={cn("max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="relative h-80 w-full">
            <AnimatePresence mode="sync">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 grid grid-cols-2 gap-4"
                >
                    <div className="relative h-full w-full">
                        <Image
                            src={testimonials[active].beforeSrc}
                            alt={`${testimonials[active].name} - Before`}
                            width={500}
                            height={500}
                            draggable={false}
                            className="h-full w-full rounded-3xl object-cover object-center"
                        />
                         <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded">BEFORE</div>
                    </div>
                     <div className="relative h-full w-full">
                        <Image
                            src={testimonials[active].afterSrc}
                            alt={`${testimonials[active].name} - After`}
                            width={500}
                            height={500}
                            draggable={false}
                            className="h-full w-full rounded-3xl object-cover object-center"
                        />
                        <div className="absolute bottom-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">AFTER</div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
        <div className="flex justify-between flex-col py-4 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="flex-grow"
            >
              <p className="text-lg text-muted-foreground italic">
                "{testimonials[active].quote}"
              </p>
              <h3 className="text-xl font-bold text-foreground mt-6">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {testimonials[active].designation}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12 md:pt-0 mt-auto">
            <button
              onClick={handlePrev}
              className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ArrowLeft className="h-5 w-5 text-foreground transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <ArrowRight className="h-5 w-5 text-foreground transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
