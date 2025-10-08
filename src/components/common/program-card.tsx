"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Program } from "@/lib/definitions";
import { ArrowRight } from "lucide-react";

type ProgramCardProps = {
  program: Program;
  onClick: () => void;
  index: number;
};

export function ProgramCard({ program, onClick, index }: ProgramCardProps) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] h-[60vh] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <Image
        src={program.image.imageUrl}
        alt={program.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        data-ai-hint={program.image.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{program.title}</h3>
        <p className="text-base text-neutral-300 mt-1">{program.tagline}</p>
        <div className="flex items-center mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-semibold">Learn More</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </div>
      </div>
    </motion.div>
  );
}
