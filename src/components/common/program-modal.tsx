"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, Check } from "lucide-react";
import type { Program } from "@/lib/definitions";
import { Button } from "@/components/ui/button";

type ProgramModalProps = {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ProgramModal({ program, isOpen, onClose }: ProgramModalProps) {
  return (
    <AnimatePresence>
      {isOpen && program && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl h-[90vh] bg-card text-card-foreground rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } }}
            exit={{ scale: 0.9, y: 50, opacity: 0, transition: { duration: 0.2 } }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-1/2">
              <Image
                src={program.image.imageUrl}
                alt={program.title}
                fill
                className="object-cover"
                data-ai-hint={program.image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>

            <div className="flex-grow p-8 overflow-y-auto">
              <h2 className="text-4xl font-extrabold text-primary">{program.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{program.details.description}</p>
              
              <h3 className="mt-8 text-2xl font-bold">Features & Benefits</h3>
              <ul className="mt-4 space-y-3">
                {program.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button size="lg" className="w-full sm:w-auto">Start This Program</Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
