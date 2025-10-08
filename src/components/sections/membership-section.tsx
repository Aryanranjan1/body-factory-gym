
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { AnimatedSection } from "../common/animated-section";

const plans = [
  {
    title: "Walk-In",
    description: "The perfect balance of structure and flexibility to kickstart your fitness journey.",
    features: ["Full Gym Access", "One-Time Entry", "No Commitment"],
    cta: "Get Started Now",
  },
  {
    title: "Monthly",
    description: "Designed for those ready to build consistency and make steady, sustainable progress.",
    features: ["24/7 Gym Access", "Unlimited Entries", "Community Access", "Infrared Sauna (Premium)"],
    cta: "Get Started Now",
  },
  {
    title: "Personal Training",
    description: "Ideal for maintaining and building on your fitness foundation with a consistent, balanced routine.",
    features: ["1-on-1 Coaching", "Personalized Programming", "Nutritional Guidance", "Direct Champion Mentorship"],
    cta: "Get Started Now",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export function MembershipSection() {
  return (
    <AnimatedSection id="membership" className="bg-black py-20 md:py-28 overflow-hidden" once={false}>
      <div className="container mx-auto px-4">
        <motion.div 
            className="text-left mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <p className="font-semibold text-primary tracking-widest uppercase">
                Our Memberships
            </p>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
                MORE <span className="text-primary">OPTIONS</span>, <br /> MORE VALUE.
            </h2>
        </motion.div>
        <motion.div 
          className="grid max-w-5xl mx-auto gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col h-full bg-transparent border-white/20 rounded-lg p-6">
                <CardHeader className="p-0 text-left">
                  <p className="text-lg font-bold tracking-widest uppercase text-primary">{plan.title}</p>
                  <CardTitle className="font-semibold tracking-wider uppercase text-foreground/50 text-sm">
                    Membership
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 mt-4">
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-foreground font-medium">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ type: 'spring', stiffness: 100 }}
        >
            <Button variant="outline" size="lg">View All Plans</Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
