import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import type { Facility } from "@/lib/definitions";
import { AnimatedItem, AnimatedSection } from "../common/animated-section";
import { Button } from "../ui/button";
import { Dumbbell, HeartPulse, Sparkles, User, Flame } from "lucide-react";
import { ReactElement } from "react";

const facilitiesData: (Omit<Facility, 'id' | 'imageUrl' | 'imageHint'> & { icon: ReactElement, imageId: string, imageHint: string})[] = [
  {
    title: "Strength Training",
    description: "Extensive free weights, racks, and machines to build pure strength.",
    icon: <Dumbbell />,
    imageId: 'facility-weights',
    imageHint: 'free weights'
  },
  {
    title: "Functional Training",
    description: "Kettlebells, battle ropes, and open space for dynamic workouts.",
    icon: <HeartPulse />,
    imageId: 'trainer-3',
    imageHint: 'functional training'
  },
  {
    title: "Cardio Zone",
    description: "Treadmills, ellipticals, and rowers to boost your endurance.",
    icon: <Sparkles />,
    imageId: 'facility-cardio',
    imageHint: 'cardio zone'
  },
  {
    title: "Infrared Sauna",
    description: "Relax and accelerate recovery in our state-of-the-art infrared sauna.",
    icon: <Flame />,
    imageId: 'facility-sauna',
    imageHint: 'infrared sauna'
  },
  {
    title: "Personal Training",
    description: "Get expert guidance tailored to your specific fitness goals.",
    icon: <User />,
    imageId: 'trainer-1',
    imageHint: 'personal training'
  },
];

export function FacilitiesSection() {
  return (
    <AnimatedSection className="bg-background">
        <div className="text-center space-y-4 mb-12">
            <AnimatedItem>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Programs & Facilities
                </h2>
            </AnimatedItem>
            <AnimatedItem>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Everything you need to build strength, improve endurance, and recover like a pro.
                </p>
            </AnimatedItem>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {facilitiesData.map((facility, index) => {
                 const image = placeholderImages.find(p => p.id === facility.imageId);
                 if (!image) return null;
                return (
                    <AnimatedItem key={index}>
                        <Card className="h-full overflow-hidden flex flex-col">
                            <div className="relative aspect-[4/5] w-full">
                                <Image
                                src={image.imageUrl}
                                alt={facility.title}
                                fill
                                className="object-cover"
                                data-ai-hint={facility.imageHint}
                                />
                            </div>
                            <CardContent className="p-4 flex-grow flex flex-col">
                                <div className="flex-grow">
                                    <div className="text-primary mb-2">{facility.icon}</div>
                                    <h3 className="font-semibold text-lg mb-1">{facility.title}</h3>
                                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedItem>
            )})}
        </div>
        <AnimatedItem className="text-center mt-12">
            <Button size="lg">View Full Facility</Button>
        </AnimatedItem>
    </AnimatedSection>
  );
}
