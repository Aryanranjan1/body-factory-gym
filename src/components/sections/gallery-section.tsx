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
      <main className='bg-black'>
        <div className='wrapper'>
          <section className='text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0'>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

            <h1 className='2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
              A Glimpse Inside
              <br />
              Body Factory Gym
            </h1>
          </section>
        </div>

        <section className='text-white w-full bg-slate-950'>
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
      </main>
  );
}
