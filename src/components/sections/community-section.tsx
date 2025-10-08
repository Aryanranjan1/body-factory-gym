
"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Instagram, Facebook, Youtube, PlayCircle } from "lucide-react";
import { motion } from 'framer-motion';
import { placeholderImages } from "@/lib/placeholder-images";
import { cn } from '@/lib/utils';
import Link from 'next/link';

const carouselSlides = [
  {
    id: "event-1",
    label: "Past Events",
    title: "Annual Powerlifting Meet",
    image: placeholderImages.find(p => p.id === 'trainer-1')
  },
  {
    id: "event-2",
    label: "Past Events",
    title: "Outdoor Yoga Session",
    image: placeholderImages.find(p => p.id === 'trainer-2')
  },
  {
    id: "event-3",
    label: "Past Events",
    title: "Member Appreciation Night",
    image: placeholderImages.find(p => p.id === 'founder')
  }
];

const trainerImage = placeholderImages.find(p => p.id === 'trainer-1');
const liveStreamImage = placeholderImages.find(p => p.id === 'trainer-3');
const smoothieImage = placeholderImages.find(p => p.id === 'recipe-smoothie');
const coreWorkoutImage = placeholderImages.find(p => p.id === 'core-workout');


const socialLinks = [
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Youtube className="h-5 w-5" />, href: "#" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export function CommunitySection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="community" className="bg-background text-foreground py-20 md:py-28 px-4 sm:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                JOIN THE <span className="text-primary">COMMUNITY</span>
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-muted-foreground">
                Connect and grow with thousands of fitness enthusiasts and professionals dedicated to a healthier lifestyle.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}>
            <div className="relative">
                <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
                    <CarouselContent>
                    {carouselSlides.map((slide) => (
                        <CarouselItem key={slide.id}>
                            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl">
                                {slide.image && (
                                    <Image
                                        src={slide.image.imageUrl}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={slide.image.imageHint}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-sm font-semibold bg-black/50 px-3 py-1 rounded-full">
                                        {slide.label}
                                    </p>
                                    <h3 className="text-2xl font-bold mt-2 max-w-md">
                                        {slide.title}
                                    </h3>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
                 <div className="absolute bottom-6 right-6 flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/20 text-white backdrop-blur-sm border-white/30 hover:bg-white/30"
                        onClick={() => api?.scrollPrev()}
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/20 text-white backdrop-blur-sm border-white/30 hover:bg-white/30"
                        onClick={() => api?.scrollNext()}
                    >
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
             <p className="text-sm text-muted-foreground mt-4">We host exclusive fitness challenges & events to connect our community.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Card 1: Join Telegram/WhatsApp */}
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
                <Card className="bg-card h-full flex flex-col rounded-xl shadow-md overflow-hidden">
                    <CardContent className="p-6 flex-grow flex flex-col">
                         <div className="flex justify-between items-start">
                             <h3 className="text-xl font-bold max-w-[80%]">Join Our WhatsApp</h3>
                             <div className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-full text-white">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                             </div>
                         </div>
                        <p className="text-muted-foreground mt-2 flex-grow">Stay updated with fitness challenges, tips, and new workout releases in our active community.</p>
                        <div className="flex items-center gap-3 mt-4">
                            {trainerImage && <Image src={trainerImage.imageUrl} alt="Admin" width={40} height={40} className="rounded-full object-cover" />}
                            <div>
                                <p className="font-semibold text-sm">Kumareswarren</p>
                                <p className="text-xs text-muted-foreground">Admin</p>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full mt-4">Join Now</Button>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Card 2: Connect With Members */}
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
                <Card className="bg-card h-full flex flex-col rounded-xl shadow-md overflow-hidden">
                    <CardContent className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold">Connect With Gym Members</h3>
                        <p className="text-muted-foreground mt-2 flex-grow italic">“Network online and stay inspired.”</p>
                        <p className='text-muted-foreground mt-2'>Engage online and share your journey. Network and stay motivated with updates, recipes, and training insights.</p>
                         <div className="flex items-center justify-center space-x-3 mt-auto pt-4">
                            {socialLinks.map((link, index) => (
                                <Link key={index} href={link.href} className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Card 3: Watch Online Sessions */}
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
                <Card className="bg-card h-full rounded-xl shadow-md overflow-hidden">
                    <CardContent className="p-0 flex flex-col h-full">
                        <div className="p-6 pb-0 flex-grow">
                            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Webinars · Live Sessions</p>
                            <h3 className="text-xl font-bold mt-2">JOIN OUR ONLINE WORKOUTS WITH BFG COACHES</h3>
                            <Button variant="outline" className="mt-4 w-full">Watch Live <PlayCircle className="ml-2 h-4 w-4" /></Button>
                        </div>
                        {liveStreamImage && (
                            <div className="relative h-48 mt-4">
                                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-card to-transparent" />
                                <Image
                                    src={liveStreamImage.imageUrl}
                                    alt="Online workouts"
                                    layout="fill"
                                    className="object-cover object-top"
                                    data-ai-hint="online fitness class"
                                />
                            </div>
                        )}
                    </CardContent>
                </Card>
            </motion.div>
        </div>

        <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <hr className="my-12 border-border" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Post 1: Recipe */}
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
                <Card className="bg-card h-full rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 aspect-square md:aspect-auto">
                        {smoothieImage && <Image src={smoothieImage.imageUrl} alt="High-Protein Smoothie" fill className="object-cover" />}
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h4 className="font-bold text-lg">High-Protein Smoothie for Muscle Recovery</h4>
                            <p className="text-muted-foreground mt-2 text-sm">A simple post-workout recipe using oats, banana, and whey.</p>
                        </div>
                        <Button variant="link" className="p-0 h-auto self-start mt-4">View Recipe <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Post 2: Exercise */}
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
                <Card className="bg-card h-full rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                     <div className="relative w-full md:w-1/3 aspect-square md:aspect-auto">
                        {coreWorkoutImage && <Image src={coreWorkoutImage.imageUrl} alt="Core Blaster Workout" fill className="object-cover" />}
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                            <h4 className="font-bold text-lg">5-Minute Core Blaster You Can Do Anywhere</h4>
                            <p className="text-muted-foreground mt-2 text-sm">Quick routine to strengthen your abs without equipment.</p>
                        </div>
                         <Button variant="link" className="p-0 h-auto self-start mt-4">Try Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

    