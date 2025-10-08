import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import type { Facility } from "@/lib/definitions";
import { AnimatedSection } from "../common/animated-section";

const facilitiesData: Facility[] = [
  {
    id: "facility-cardio",
    title: "Cardio Zone",
    description: "Get your heart pumping with our top-of-the-line treadmills, ellipticals, and bikes.",
    imageUrl: placeholderImages.find((p) => p.id === "facility-cardio")?.imageUrl || "",
    imageHint: placeholderImages.find((p) => p.id === "facility-cardio")?.imageHint || "",
  },
  {
    id: "facility-weights",
    title: "Free Weights Area",
    description: "Build serious strength with a massive selection of dumbbells, barbells, and benches.",
    imageUrl: placeholderImages.find((p) => p.id === "facility-weights")?.imageUrl || "",
    imageHint: placeholderImages.find((p) => p.id === "facility-weights")?.imageHint || "",
  },
  {
    id: "facility-machines",
    title: "Machine Zone",
    description: "Target every muscle group with our extensive range of modern strength machines.",
    imageUrl: placeholderImages.find((p) => p.id === "facility-machines")?.imageUrl || "",
    imageHint: placeholderImages.find((p) => p.id === "facility-machines")?.imageHint || "",
  },
  {
    id: "facility-sauna",
    title: "Infrared Sauna",
    description: "Relax and recover after a hard workout. Available for a small extra fee of RM5.",
    imageUrl: placeholderImages.find((p) => p.id === "facility-sauna")?.imageUrl || "",
    imageHint: placeholderImages.find((p) => p.id === "facility-sauna")?.imageHint || "",
  },
];

export function FacilitiesSection() {
  return (
    <AnimatedSection className="bg-background">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          {/* CMS: facilities_headline */}
          Explore Our 3 Floors of Fitness
          {/* /CMS */}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {/* CMS: facilities_subheadline */}
          We've got everything you need to crush your goals, from heavy iron to high-tech recovery.
          {/* /CMS */}
        </p>
      </div>
      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {facilitiesData.map((facility, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="relative aspect-video p-0">
                      <Image
                        src={facility.imageUrl}
                        alt={facility.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint={facility.imageHint}
                      />
                       <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                        <h3 className="font-bold">{facility.title}</h3>
                        <p className="text-sm opacity-90">{facility.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-14" />
          <CarouselNext className="mr-14" />
        </Carousel>
      </div>
    </AnimatedSection>
  );
}
