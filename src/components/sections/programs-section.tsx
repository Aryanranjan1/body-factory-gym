"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { programs } from "@/lib/programs-data";
import { ProgramCard } from "@/components/common/program-card";
import { ProgramModal } from "@/components/common/program-modal";
import type { Program } from "@/lib/definitions";

export function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: carouselRef });

  const handleCardClick = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section className="bg-background py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Specialised Gym Programs & Challenges
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Machine zones and fitness challenges designed for every level.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Click or drag to explore →</p>
        </div>
      </div>

      <div className="relative">
        <div 
          className="flex gap-4 sm:gap-8 px-4 sm:px-8 overflow-x-auto cursor-grab active:cursor-grabbing" 
          ref={carouselRef}
          style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
        >
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              onClick={() => handleCardClick(program)}
              index={index}
            />
          ))}
        </div>
        {/* Edge gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent" />
      </div>

      <ProgramModal
        program={selectedProgram}
        isOpen={selectedProgram !== null}
        onClose={handleCloseModal}
      />
    </section>
  );
}
