
import { placeholderImages } from "@/lib/placeholder-images";
import { AnimatedTestimonials } from "../ui/animated-testimonials";

const testimonials = [
  {
    name: "Zul",
    designation: "Student",
    quote: "The 24/7 access is a lifesaver for my weird study schedule. Plus, it's super clean and the price is unbeatable for a student budget. Highly recommend!",
    beforeSrc: placeholderImages.find(p => p.id === 'trainer-1')?.imageUrl ?? '',
    afterSrc: placeholderImages.find(p => p.id === 'founder')?.imageUrl ?? '',
  },
  {
    name: "Aisha",
    designation: "Bodybuilder",
    quote: "Body Factory has the best community. Everyone is so supportive. The equipment is solid and you can tell the owner knows his stuff. It feels like a real training ground.",
    beforeSrc: placeholderImages.find(p => p.id === 'trainer-2')?.imageUrl ?? '',
    afterSrc: placeholderImages.find(p => p.id === 'about-1')?.imageUrl ?? '',
  },
  {
    name: "Michael",
    designation: "Shift Worker",
    quote: "Finally, a gym that fits my lifestyle. It's affordable, has everything I need for a great workout, and the atmosphere is always positive and motivating.",
    beforeSrc: placeholderImages.find(p => p.id === 'trainer-3')?.imageUrl ?? '',
    afterSrc: placeholderImages.find(p => p.id === 'about-3')?.imageUrl ?? '',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          Real Stories, Real Results
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          See what our members have accomplished and what they love about Body Factory.
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
}
