
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/placeholder-images";
import { AnimatedSection } from "../common/animated-section";
import { motion } from 'framer-motion';

const founderImage = placeholderImages.find((p) => p.id === "founder");

const pressLogos = [
    { name: "FMT", url: "https://www.freemalaysiatoday.com/", hint: "FMT logo" },
    { name: "NST", url: "https://www.nst.com.my/", hint: "NST logo" },
    { name: "Bernama", url: "https://www.bernama.com/", hint: "Bernama logo" }
]

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.04,
    },
  },
}

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function FounderSection() {
  const line1 = "LED BY A CHAMPION.";
  const line2 = "BUILT FOR CHAMPIONS.";

  return (
    <AnimatedSection className="bg-black text-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="lg:order-first"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.5 }}
            >
                {founderImage && (
                    <div className="relative aspect-square max-w-md mx-auto">
                        <Image
                        src={founderImage.imageUrl}
                        alt={founderImage.description}
                        fill
                        className="rounded-lg object-cover"
                        data-ai-hint={founderImage.imageHint}
                        />
                    </div>
                )}
            </motion.div>
            <div className="space-y-6">
                <p className="font-semibold text-primary tracking-widest uppercase">
                  MEET THE FOUNDER
                </p>
                <motion.h1 
                  className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight uppercase"
                  variants={sentence}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true}}
                >
                   <span className="block">
                    {line1.split("").map((char, index) => (
                      <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <span className="text-primary block">
                    {line2.split("").map((char, index) => (
                      <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </motion.h1>
                <p className="text-lg text-muted-foreground">
                    Our founder, Mr. Kumareswarren, transformed himself from a 110kg enthusiast into the Mr. Malaysia 2023 Champion. He built Body Factory on the principles of hard work, dedication, and community, and he is passionate about helping everyone unlock their true potential.
                </p>
                <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">As Featured In</h3>
                    <div className="flex items-center gap-8">
                        {pressLogos.map(logo => (
                            <a key={logo.name} href={logo.url} target="_blank" rel="noopener noreferrer" className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                                <Image src={`https://logo.clearbit.com/${logo.url.split('//')[1]}`} alt={logo.name} width={100} height={40} className="object-contain" data-ai-hint={logo.hint} />
                            </a>
                        ))}
                    </div>
                </div>
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 1 }}
                 >
                    <Button size="lg">Train with Kumareswarren</Button>
                 </motion.div>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
