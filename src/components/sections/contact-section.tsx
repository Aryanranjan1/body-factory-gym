import { AnimatedSection } from "../common/animated-section";
import { ContactForm } from "./contact-form";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

const benefits = [
  "One-Day Free Trial Pass",
  "Personalized Starter Plan",
  "Exclusive Community Access",
];

export function ContactSection() {
  const contactImage = placeholderImages.find((p) => p.id === "contact-background");

  return (
    <AnimatedSection
      id="contact-us"
      className="relative text-white py-24 md:py-32"
    >
      {contactImage && (
        <Image
          src={contactImage.imageUrl}
          alt={contactImage.description}
          fill
          className="object-cover"
          data-ai-hint={contactImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="font-semibold text-primary tracking-widest">
            {/* CMS: contact_get_started */}
            GET STARTED
            {/* /CMS */}
          </p>
          <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            {/* CMS: contact_headline */}
            START YOUR FITNESS JOURNEY AT BODY FACTORY TODAY
            {/* /CMS */}
          </h2>
          <p className="text-lg text-neutral-300">
            {/* CMS: contact_subheadline */}
            Sign up now to instantly receive:
            {/* /CMS */}
          </p>
          <ul className="space-y-4 text-xl font-semibold">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <ChevronRight className="h-6 w-6 text-primary" />
                <span>
                  {/* CMS: contact_benefit_`index` */}
                  {benefit}
                  {/* /CMS */}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-background/80 backdrop-blur-sm border border-border p-8 shadow-2xl">
          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
