import { ContactForm } from "./contact-form";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

const benefits = [
    "One-Day Free Trial Pass",
    "Personalized Starter Plan",
    "Exclusive Community Access",
]

export function ContactSection() {
    const contactBg = placeholderImages.find(p => p.id === 'contact-background');
  return (
    <section id="contact-us" className="relative text-white py-20 md:py-28">
        {contactBg && (
            <Image
                src={contactBg.imageUrl}
                alt={contactBg.description}
                fill
                className="object-cover"
                data-ai-hint={contactBg.imageHint}
            />
        )}
       <div className="absolute inset-0 bg-gradient-to-b from-background via-black/80 to-transparent z-10" />
      <div className="relative z-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
                <p className="font-semibold text-primary tracking-widest uppercase">Get Started</p>
                <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
                   START YOUR <span className="text-primary">JOURNEY</span>
                </h2>
                <p className="text-lg text-muted-foreground">Here’s what you’ll receive access to:</p>
                <ul className="space-y-4 text-xl">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <ChevronRight className="h-6 w-6 text-primary" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="rounded-lg bg-card border border-border p-8 shadow-2xl">
                <ContactForm />
            </div>
        </div>
      </div>
    </section>
  );
}
