
"use client";

import { placeholderImages } from "@/lib/data";
import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { AnimatedSection } from "../common/animated-section";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Zul",
    designation: "Student",
    quote: "The 24/7 access is a lifesaver for my weird study schedule. Plus, it's super clean and the price is unbeatable for a student budget. Highly recommend!",
    beforeSrc: placeholderImages.find(p => p.id === 'trainer-1')?.imageUrl ?? '',
    afterSrc: placeholderImages.find(p => p.id === 'founder')?.imageUrl ?? '',
  },
  {
    name: "Aisha",
    designation: "Bodybuilder",
    quote: "Body Factory has the best community. Everyone is so supportive. The equipment is solid and you can tell the owner knows his stuff. It feels like a real training ground.",
    beforeSrc: placeholderImages.find(p => p.id === 'trainer-2')?.imageUrl ?? '',
    afterSrc: placeholderImages.find(p => p.id === 'about-1')?.imageUrl ?? '',
  },
  {
    name: "Michael",
    designation: "Shift Worker",
    quote: "Finally, a gym that fits my lifestyle. It's affordable, has everything I need for a great workout, and the atmosphere is always positive and motivating.",
    beforeSrc: placeholderImages.find(p => p.id === 'trainer-3')?.imageUrl ?? '',
    afterSrc: placeholderImages.find(p => p.id === 'about-3')?.imageUrl ?? '',
  },
];

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
