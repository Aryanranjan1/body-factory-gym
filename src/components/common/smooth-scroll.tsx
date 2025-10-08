"use client";

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, [pathname]);

  useEffect(() => {
    lenis.current = new Lenis({
        lerp: 0.1,
        duration: 1.2
    });

    lenis.current.on('scroll', ScrollTrigger.update);
    
    const scrollFn = (time: number) => {
        lenis.current?.raf(time);
        requestAnimationFrame(scrollFn);
    };
    
    gsap.ticker.add((time)=>{
        lenis.current?.raf(time * 1000)
    })
      
    gsap.ticker.lagSmoothing(0)

    requestAnimationFrame(scrollFn);

    return () => {
        lenis.current?.destroy();
        lenis.current = null;
    }
  }, []);

  return <>{children}</>;
};
