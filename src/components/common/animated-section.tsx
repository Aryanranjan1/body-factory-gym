"use client";

import { useRef, useEffect, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  [key: string]: any;
}

export function AnimatedSection({
  children,
  className,
  as: Comp = 'section',
  ...props
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove('opacity-0', 'translate-y-4');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      if(element) {
        observer.unobserve(element);
      }
    }
  }, []);

  return (
    <Comp
      ref={ref}
      className={cn(
        'py-16 md:py-24 opacity-0 translate-y-4 transition-all duration-700 ease-out',
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4">{children}</div>
    </Comp>
  );
}
