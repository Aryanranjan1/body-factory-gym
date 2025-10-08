
"use client";

import React, { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
};

export function AnimatedSection({
  children,
  className,
  stagger = 0.1,
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const childrenArray = React.Children.toArray(children);

  return (
    <motion.section
      ref={ref}
      className={cn("relative", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger }}
    >
      {childrenArray.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {child}
        </motion.div>
      ))}
    </motion.section>
  );
}

export function ParallaxImage({ src, alt, className, hint }: { src: string; alt: string; className?: string; hint?: string; }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        data-ai-hint={hint}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
