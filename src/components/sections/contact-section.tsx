import { ContactForm } from "./contact-form";
import { MapPin, ParkingCircle, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <section className="relative bg-black text-white">
      <div className="relative z-10">
        <section id="contact-us" className="py-20 md:py-28">
            <div className="container mx-auto px-4">
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
      </div>
      <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
