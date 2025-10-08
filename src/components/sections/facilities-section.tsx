"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { facilitiesData } from '@/lib/facilities-data';
import type { Facility } from '@/lib/definitions';
import { Button } from '../ui/button';
import { CheckCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FacilitiesSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedFacility = facilitiesData.find(f => f.id === selectedId);

  const gridStyles: {[key: string]: string} = {
    "2x2": "md:col-span-2 md:row-span-2",
    "1x2": "md:row-span-2",
    "2x1": "md:col-span-2",
    "1x1": "",
  }

  return (
    <section id="facilities" className="bg-black text-white w-full">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            World-Class Facilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our state-of-the-art zones, designed for every aspect of your fitness journey.
          </p>
        </motion.div>
      </div>

      <div className="w-full px-2 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[25vh] gap-2 sm:gap-4">
          {facilitiesData.map((facility) => (
            <motion.div
              key={facility.id}
              layoutId={facility.id}
              onClick={() => setSelectedId(facility.id)}
              className={cn(
                "relative rounded-xl overflow-hidden cursor-pointer group",
                gridStyles[facility.layout] || ""
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src={facility.image.imageUrl}
                alt={facility.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={facility.image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl">{facility.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-300">{facility.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            />
            <motion.div
              layoutId={selectedFacility.id}
              className="relative z-10 w-[95vw] h-[90vh] max-w-4xl bg-card rounded-2xl overflow-hidden"
            >
              <div className="relative h-1/2 w-full">
                <Image
                  src={selectedFacility.image.imageUrl}
                  alt={selectedFacility.title}
                  fill
                  className="object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="absolute top-0 right-0 p-4">
                <motion.button
                    onClick={() => setSelectedId(null)}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X className="h-5 w-5" />
                </motion.button>
              </div>
              <div className="absolute top-1/2 left-0 w-full h-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="text-foreground">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-extrabold text-primary"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                    >
                        {selectedFacility.title}
                    </motion.h2>
                    <motion.p
                        className="mt-2 text-muted-foreground"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
                    >
                        {selectedFacility.description}
                    </motion.p>
                    <ul className="mt-6 space-y-3">
                        {selectedFacility.features.map((feature, i) => (
                            <motion.li
                                key={feature}
                                className="flex items-center gap-3"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1, transition: { delay: 0.3 + i * 0.05 } }}
                            >
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <motion.div
                    className="mt-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
                >
                    <Button size="lg" className="w-full sm:w-auto">
                        Experience This Zone
                    </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
