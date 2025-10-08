import { AnimatedSection } from "../common/animated-section";
import { ContactForm } from "./contact-form";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

export function ContactSection() {
  const mapImage = placeholderImages.find((p) => p.id === "map-location");

  return (
    <AnimatedSection id="contact-us" className="bg-card">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            {/* CMS: contact_headline */}
            Ready to Start?
            {/* /CMS */}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {/* CMS: contact_subheadline */}
            Your championship journey begins here. Drop us a message for your RM12 trial or any inquiries!
            {/* /CMS */}
          </p>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                {/* CMS: contact_address */}
                Body Factory Gym & Fitness Centre, PJ21 Commercial Centre, Petaling Jaya, Selangor
                {/* /CMS */}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                {/* CMS: contact_phone */}
                +60 12-345 6789 (Call for inquiries)
                {/* /CMS */}
              </span>
            </div>
             <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <p><strong>Operating Hours:</strong></p>
                {/* CMS: contact_hours */}
                <p>Tuesday - Sunday: 24/7</p>
                <p>Monday: 6:00 AM - 12:00 AM</p>
                {/* /CMS */}
              </div>
            </div>
          </div>
          <div className="mt-8">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                width={600}
                height={400}
                className="w-full rounded-lg object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
          </div>
        </div>
        <div className="rounded-lg bg-background p-8 shadow-lg">
          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
