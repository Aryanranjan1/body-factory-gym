'use client';

import { placeholderImages } from "@/lib/placeholder-images";
import Image from "next/image";

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

export function GallerySection() {
  return (
    <section className='w-full bg-background'>
      <div className='grid grid-cols-12 gap-2 p-2'>
        <div className='grid gap-2 col-span-4'>
          {leftColIds.map(id => {
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
        </div>
        <div className='sticky top-0 h-screen w-full col-span-4 gap-2  grid grid-rows-3'>
          {middleColIds.map(id => {
            const img = getImage(id);
            if (!img) return null;
            return (
              <figure key={id} className='w-full h-full '>
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  width={500}
                  height={500}
                  data-ai-hint={img.imageHint}
                  className='transition-all duration-300 h-full w-full  align-bottom object-cover rounded-md '
                />
              </figure>
            )
          })}
        </div>
        <div className='grid gap-2 col-span-4'>
        {rightColIds.map(id => {
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
        </div>
      </div>
    </section>
  );
}
