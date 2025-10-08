import { ContactForm } from "./contact-form";
import { MapPin, ParkingCircle, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";


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
       <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Find Us & Drop In Today
                </h2>
                <div className="space-y-6 text-lg">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Body Factory Gym & Fitness Centre</h3>
                            <p className="text-muted-foreground">PJ21 Commercial Centre, Jalan SS 3/39, 47300 Petaling Jaya, Selangor</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Clock className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Operating Hours</h3>
                            <p className="text-muted-foreground">Open 24/7 for members. Staffed hours vary.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <ParkingCircle className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Parking</h3>
                            <p className="text-muted-foreground">Ample free parking available onsite.</p>
                        </div>
                    </div>
                </div>
                  <Button size="lg" asChild>
                    <Link href="https://maps.google.com" target="_blank">Get Directions</Link>
                </Button>
            </div>
            <div className="rounded-lg bg-card/5 backdrop-blur-sm border border-border p-8 shadow-2xl">
                <ContactForm />
            </div>
        </div>
      </div>
    </section>
  );
}