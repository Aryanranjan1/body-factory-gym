
"use client";

import { ContactForm } from "./contact-form";
import { ChevronRight } from "lucide-react";
import { placeholderImages } from "@/lib/data";
import { ParallaxImage } from "../common/animated-section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';
import { AnimatedSection } from "../common/animated-section";

const benefits = [
    "One-Day Free Trial Pass",
    "Personalized Starter Plan",
    "Exclusive Community Access",
]

export function ContactSection() {
    const contactBg = placeholderImages.find(p => p.id === 'contact-background');
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <section 
      id="contact-us" 
      ref={ref}
      className="relative text-white py-20 md:py-28 overflow-hidden bg-background"
    >
        {contactBg && (
            <motion.div style={{ scale }} className="absolute inset-0">
                <ParallaxImage
                    src={contactBg.imageUrl}
                    alt={contactBg.description}
                    className="absolute inset-0"
                    hint={contactBg.imageHint}
                />
            </motion.div>
        )}
       <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
      <div className="relative z-20 container mx-auto px-4">
        <AnimatedSection 
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
            once={false}
        >
            <div className="space-y-6">
                <p className="font-semibold text-primary tracking-widest uppercase">Get Started</p>
                <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
                   START YOUR <span className="text-primary">JOURNEY</span>
                </h2>
                <p className="text-lg text-muted-foreground">Here’s what you’ll receive access to:</p>
                <ul 
                    className="space-y-4 text-xl"
                >
                    {benefits.map((benefit, index) => (
                        <li 
                            key={index} 
                            className="flex items-center gap-3"
                        >
                            <ChevronRight className="h-6 w-6 text-primary" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="rounded-lg bg-card border border-border p-8 shadow-2xl">
                <ContactForm />
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
