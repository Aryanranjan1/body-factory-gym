
"use client";

import { ContactForm } from "./contact-form";
import { ChevronRight } from "lucide-react";
import { placeholderImages } from "@/lib/placeholder-images";
import { ParallaxImage } from "../common/animated-section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

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
    <motion.section 
      id="contact-us" 
      ref={ref}
      className="relative text-white py-20 md:py-28 overflow-hidden"
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
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
            <div className="space-y-6">
                <p className="font-semibold text-primary tracking-widest uppercase">Get Started</p>
                <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
                   START YOUR <span className="text-primary">JOURNEY</span>
                </h2>
                <p className="text-lg text-muted-foreground">Here’s what you’ll receive access to:</p>
                <motion.ul 
                    className="space-y-4 text-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.li 
                            key={index} 
                            className="flex items-center gap-3"
                            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                        >
                            <ChevronRight className="h-6 w-6 text-primary" />
                            <span>{benefit}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
            <div className="rounded-lg bg-card border border-border p-8 shadow-2xl">
                <ContactForm />
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
