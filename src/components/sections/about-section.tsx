import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Users } from "lucide-react";
import { AnimatedSection } from "../common/animated-section";

const pillars = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Unbeatable Value",
    description: "We believe world-class fitness shouldn't break the bank. Get access to premium equipment and champion-level insights at a price you'll love.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "24/7 Access",
    description: "Your fitness goals don't work 9-to-5, and neither do we. Train whenever inspiration strikes with around-the-clock access for members.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Thriving Community",
    description: "More than just a gym, we're a family. Join a supportive, motivating community of fitness lovers who celebrate every win, big or small.",
  },
];

export function AboutSection() {
  return (
    <AnimatedSection id="about-us" className="bg-background">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          {/* CMS: about_headline */}
          The Body Factory Difference
          {/* /CMS */}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {/* CMS: about_subheadline */}
          For over 10 years, we've provided a clean, powerful, and affordable fitness hub for the PJ community. Here's what makes us unique.
          {/* /CMS */}
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Card key={index} className="flex flex-col text-center">
            <CardHeader className="items-center">
              {pillar.icon}
              <CardTitle className="pt-4 font-headline text-2xl">
                {/* CMS: about_pillar_title_`index` */}
                {pillar.title}
                {/* /CMS */}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">
                {/* CMS: about_pillar_description_`index` */}
                {pillar.description}
                {/* /CMS */}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
