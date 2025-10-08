
'use client';

import { placeholderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const leftColIds = [
  "facility-cardio",
  "facility-weights",
  "facility-machines",
  "about-1",
  "about-3",
];
const middleColIds = [
  "founder",
  "trainer-1",
  "trainer-2"
];
const rightColIds = [
  "about-2",
  "about-4",
  "trainer-3",
  "contact-background",
  "core-workout"
];

const getImage = (id: string) => placeholderImages.find(p => p.id === id);

const GalleryColumn = ({ ids, y }: { ids: string[], y: any }) => (
  <motion.div className='grid gap-2 col-span-4' style={{ y }}>
    {ids.map(id => {
      const img = getImage(id);
      if (!img) return null;
      return (
        <figure key={id} className='w-full'>
          <Image
            src={img.imageUrl}
            alt={img.description}
            width={500}
            height={384}
            data-ai-hint={img.imageHint}
            className='transition-all duration-300 w-full h-96 align-bottom object-cover rounded-md'
          />
        </figure>
      )
    })}
  </motion.div>
);


export function GallerySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={ref} className='w-full bg-background overflow-hidden'>
      <div className='grid grid-cols-12 gap-2 p-2'>
        <GalleryColumn ids={leftColIds} y={y1} />
        <div className='sticky top-0 h-screen w-full col-span-4 gap-2 grid grid-rows-3'>
          {middleColIds.map(id => {
            const img = getImage(id);
            if (!img) return null;
            return (
              <figure key={id} className='w-full h-full'>
                <motion.div 
                  className="w-full h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    width={500}
                    height={500}
                    data-ai-hint={img.imageHint}
                    className='transition-all duration-300 h-full w-full align-bottom object-cover rounded-md'
                  />
                </motion.div>
              </figure>
            )
          })}
        </div>
        <GalleryColumn ids={rightColIds} y={y2} />
      </div>
    </section>
  );
}
