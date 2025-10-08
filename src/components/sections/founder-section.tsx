import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/placeholder-images";
import type { Trainer } from "@/lib/definitions";
import { LockedFeatureModal } from "../common/locked-feature-modal";
import { AnimatedSection } from "../common/animated-section";

const founderImage = placeholderImages.find((p) => p.id === "founder");

const trainersData: Trainer[] = [
  {
    name: "Ahmad Faisal",
    expertise: "Powerlifting & Strength",
    imageUrl: placeholderImages.find((p) => p.id === "trainer-1")?.imageUrl || "",
    imageHint: placeholderImages.find((p) => p.id === "trainer-1")?.imageHint || ""
  },
  {
    name: "Siti Nurhaliza",
    expertise: "Yoga & Flexibility",
    imageUrl: placeholderImages.find((p) => p.id === "trainer-2")?.imageUrl || "",
    imageHint: placeholderImages.find((p) => p.id === "trainer-2")?.imageHint || ""
  },
  {
    name: "David Chen",
    expertise: "HIIT & Functional Fitness",
    imageUrl: placeholderImages.find((p) => p.id === "trainer-3")?.imageUrl || "",
    imageHint: placeholderImages.find((p) => p.id === "trainer-3")?.imageHint || ""
  },
];

export function FounderSection() {
  return (
    <AnimatedSection className="bg-card">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          {/* CMS: founder_headline */}
          Learn From a Champion
          {/* /CMS */}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {/* CMS: founder_subheadline */}
          Our founder and expert trainers are here to guide your fitness journey.
          {/* /CMS */}
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-12">
        <Card className="flex flex-col lg:col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            {founderImage && (
              <div className="relative h-full min-h-[300px]">
                <Image
                  src={founderImage.imageUrl}
                  alt={founderImage.description}
                  fill
                  className="rounded-l-lg object-cover"
                  data-ai-hint={founderImage.imageHint}
                />
              </div>
            )}
            <div className="flex flex-col justify-center p-6">
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-3xl">
                  {/* CMS: founder_name */}
                  Mr. Kumareswarren
                  {/* /CMS */}
                </CardTitle>
                <CardDescription className="text-primary pt-1 text-md font-semibold">
                  {/* CMS: founder_title */}
                  Mr. Malaysia 2023 Champion
                  {/* /CMS */}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pt-4">
                <p className="text-muted-foreground">
                  {/* CMS: founder_bio */}
                  From a determined 110kg enthusiast to a national champion, Mr. Kumareswarren built Body Factory on the principles of hard work, dedication, and community. He's passionate about helping everyone unlock their true potential.
                  {/* /CMS */}
                </p>
              </CardContent>
            </div>
          </div>
        </Card>

        <div className="space-y-8">
          {trainersData.map((trainer, index) => (
            <Card key={index} className="flex items-center">
              <div className="relative h-24 w-24 flex-shrink-0">
                <Image src={trainer.imageUrl} alt={trainer.name} fill className="rounded-l-lg object-cover" data-ai-hint={trainer.imageHint} />
              </div>
              <CardHeader className="flex-grow p-4">
                <CardTitle className="text-lg">
                  {/* CMS: trainer_name_`index` */}
                  {trainer.name}
                  {/* /CMS */}
                </CardTitle>
                <CardDescription>
                  {/* CMS: trainer_expertise_`index` */}
                  {trainer.expertise}
                  {/* /CMS */}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pl-0">
                {/* Future Integration: Booking API */}
                <LockedFeatureModal>
                  <Button variant="outline" size="sm">Book</Button>
                </LockedFeatureModal>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
