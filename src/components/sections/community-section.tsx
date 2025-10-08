
"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";
import { placeholderImages } from "@/lib/placeholder-images";
import Link from 'next/link';

const carouselSlides = [
  {
    id: "event-1",
    title: "Annual Powerlifting Meet",
    image: placeholderImages.find(p => p.id === 'trainer-1'),
    imageHint: "gym competition"
  },
  {
    id: "event-2",
    title: "Outdoor Yoga Session",
    image: placeholderImages.find(p => p.id === 'trainer-2'),
    imageHint: "group fitness event"
  },
  {
    id: "event-3",
    title: "Member Appreciation Night",
    image: placeholderImages.find(p => p.id === 'founder'),
    imageHint: "gym owner award"
  }
];

const trainerImage = placeholderImages.find(p => p.id === 'trainer-1');

const socialLinks = [
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Youtube className="h-5 w-5" />, href: "#" },
];

const blogPosts = [
    {
        id: "recipe-smoothie",
        title: "High-Protein Smoothie for Muscle Recovery",
        description: "A simple post-workout recipe using oats, banana, and whey.",
        image: placeholderImages.find(p => p.id === 'recipe-smoothie')
    },
    {
        id: "core-workout",
        title: "5-Minute Core Blaster You Can Do Anywhere",
        description: "Quick routine to strengthen your abs without equipment.",
        image: placeholderImages.find(p => p.id === 'core-workout')
    },
     {
      id: "trainer-3",
      title: "How to Improve Your Bench Press",
      description: "Expert tips from our champion trainers.",
      image: placeholderImages.find(p => p.id === 'trainer-3')
    },
]

export function CommunitySection() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="community" className="bg-background text-foreground py-20 md:py-28">
      <div className="container mx-auto px-4">
        
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
                JOIN THE <span className="text-primary">COMMUNITY</span>
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-muted-foreground">
                Connect and grow with thousands of fitness enthusiasts and professionals dedicated to a healthier lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
                {/* Top part: Carousel + Text */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
                                <CarouselContent>
                                {carouselSlides.map((slide) => (
                                    <CarouselItem key={slide.id}>
                                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                            {slide.image && (
                                                <Image
                                                    src={slide.image.imageUrl}
                                                    alt={slide.title}
                                                    fill
                                                    className="object-cover"
                                                    data-ai-hint={slide.imageHint}
                                                />
                                            )}
                                        </div>
                                    </CarouselItem>
                                ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                            </Carousel>
                        </div>
                        <div className="space-y-4">
                            <p className="font-semibold text-primary">PAST EVENTS</p>
                            <p className="text-2xl font-semibold">We host exclusive fitness challenges & events to connect our community.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom part: Two cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                       <Card className="bg-card h-full flex flex-col rounded-xl shadow-md overflow-hidden">
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold">Join Our WhatsApp</h3>
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
                    </div>
                    <div>
                       <Card className="bg-card h-full flex flex-col rounded-xl shadow-md overflow-hidden">
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold">Connect With Gym Members</h3>
                                <p className="text-muted-foreground mt-2 italic">“Network online and stay inspired.”</p>
                                <p className='text-muted-foreground mt-2 flex-grow'>Engage online and share your journey. Network and stay motivated with updates, recipes, and training insights.</p>
                                <div className="flex items-center justify-center space-x-3 mt-auto pt-4">
                                    {socialLinks.map((link, index) => (
                                        <Link key={index} href={link.href} className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                            {link.icon}
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Sidebar / Blog section */}
            <div>
                <Card className="bg-card h-full rounded-xl shadow-md overflow-hidden">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">See Our Latest Posts</h3>
                        <div className="space-y-4">
                            {blogPosts.map(post => (
                                <Link href="#" key={post.id} className="group block">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-20 h-20 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                                            {post.image && (
                                                <Image src={post.image.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold group-hover:text-primary transition-colors">{post.title}</h4>
                                            <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
