import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedItem, AnimatedSection } from "../common/animated-section";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

const testimonials = [
  {
    name: "Zul",
    role: "Student",
    quote: "The 24/7 access is a lifesaver for my weird study schedule. Plus, it's super clean and the price is unbeatable for a student budget. Highly recommend!",
    beforeId: "trainer-1",
    afterId: "trainer-1",
  },
  {
    name: "Aisha",
    role: "Bodybuilder",
    quote: "Body Factory has the best community. Everyone is so supportive. The equipment is solid and you can tell the owner knows his stuff. It feels like a real training ground.",
     beforeId: "trainer-2",
    afterId: "trainer-2",
  },
  {
    name: "Michael",
    role: "Shift Worker",
    quote: "Finally, a gym that fits my lifestyle. It's affordable, has everything I need for a great workout, and the atmosphere is always positive and motivating.",
    beforeId: "trainer-3",
    afterId: "trainer-3",
  },
];

export function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="bg-background">
      <div className="text-center">
        <AnimatedItem>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Real Stories, Real Results
            </h2>
        </AnimatedItem>
        <AnimatedItem>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                See what our members have accomplished and what they love about Body Factory.
            </p>
        </AnimatedItem>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => {
            const beforeImg = placeholderImages.find(p => p.id === testimonial.beforeId);
            const afterImg = placeholderImages.find(p => p.id === testimonial.afterId);

            return (
                <AnimatedItem key={index}>
                    <Card className="flex flex-col h-full overflow-hidden">
                         <div className="grid grid-cols-2">
                             <div className="relative aspect-square">
                                {beforeImg && <Image src={beforeImg.imageUrl} alt="Before" fill className="object-cover"/>}
                                <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded">BEFORE</div>
                             </div>
                              <div className="relative aspect-square">
                                {afterImg && <Image src={afterImg.imageUrl} alt="After" fill className="object-cover"/>}
                                <div className="absolute bottom-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">AFTER</div>
                             </div>
                         </div>
                        <CardContent className="pt-6 flex-grow flex flex-col">
                            <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground flex-grow">
                                "{testimonial.quote}"
                            </blockquote>
                        </CardContent>
                        <div className="flex items-center gap-4 p-6 pt-4">
                        <Avatar>
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                        </div>
                    </Card>
                </AnimatedItem>
            )
        })}
      </div>
        <AnimatedItem className="text-center mt-12">
            <Button size="lg" variant="outline">See More Stories</Button>
        </AnimatedItem>
    </AnimatedSection>
  );
}
