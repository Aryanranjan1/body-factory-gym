import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/definitions";
import { AnimatedSection } from "../common/animated-section";

const testimonials: Testimonial[] = [
  {
    name: "Zul",
    role: "Student",
    quote: "The 24/7 access is a lifesaver for my weird study schedule. Plus, it's super clean and the price is unbeatable for a student budget. Highly recommend!",
  },
  {
    name: "Aisha",
    role: "Bodybuilder",
    quote: "Body Factory has the best community. Everyone is so supportive. The equipment is solid and you can tell the owner knows his stuff. It feels like a real training ground.",
  },
  {
    name: "Michael",
    role: "Shift Worker",
    quote: "Finally, a gym that fits my lifestyle. It's affordable, has everything I need for a great workout, and the atmosphere is always positive and motivating.",
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedSection className="bg-background">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          {/* CMS: testimonials_headline */}
          From Our Community
          {/* /CMS */}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {/* CMS: testimonials_subheadline */}
          See why our members love training at Body Factory Gym.
          {/* /CMS */}
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardContent className="pt-6">
              <div className="flex space-x-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-muted-foreground">
                {/* CMS: testimonial_quote_`index` */}
                "{testimonial.quote}"
                {/* /CMS */}
              </blockquote>
            </CardContent>
            <div className="flex items-center gap-4 p-6 pt-0">
              <Avatar>
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">
                  {/* CMS: testimonial_name_`index` */}
                  {testimonial.name}
                  {/* /CMS */}
                </p>
                <p className="text-sm text-muted-foreground">
                  {/* CMS: testimonial_role_`index` */}
                  {testimonial.role}
                  {/* /CMS */}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
