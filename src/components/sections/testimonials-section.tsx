
"use client";

import { placeholderImages, testimonials } from "@/lib/data";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { AnimatedSection } from "../common/animated-section";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-black text-white py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
            <motion.div 
                className="mb-12 md:text-right"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <p className="font-semibold text-primary tracking-widest uppercase">
                Member Stories
                </p>
                <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
                REAL <span className="text-primary">STORIES</span>, REAL <span className="text-primary">RESULTS</span>
                </h2>
                <p className="mx-auto md:ml-auto md:mr-0 mt-4 max-w-2xl text-lg text-muted-foreground">
                See what our members have accomplished and what they love about Body Factory.
                </p>
            </motion.div>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}
