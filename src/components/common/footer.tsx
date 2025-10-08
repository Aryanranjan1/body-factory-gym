import { Dumbbell, Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock, FileText, Lock, Store as StoreIcon, Youtube } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/#about-us" },
  { title: "Memberships", href: "/#membership" },
  { title: "Facilities", href: "/#facilities" },
  { title: "Contact", href: "/#contact-us" },
];

const memberServices = [
  "24/7 Gym Access",
  "Personal Training",
  "Infrared Sauna",
  "Community Events",
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 text-muted-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

          {/* Column 1: About & Social */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Body Factory
              </span>
            </Link>
            <p className="text-sm">
              Your premier fitness destination in Petaling Jaya. Train with champions, access top-tier equipment 24/7, and join a thriving community.
            </p>
            <h3 className="font-semibold text-foreground mt-4">Connect With Us</h3>
            <div className="flex items-center space-x-3">
              <Link href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & More */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-4">Member Services</h3>
            <ul className="space-y-2">
              {memberServices.map((service) => (
                <li key={service} className="text-sm">
                  {service}
                </li>
              ))}
            </ul>
             <h3 className="font-semibold text-foreground mb-4 mt-8">More Info</h3>
             <ul className="space-y-2">
                <li>
                    <Link href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                        <StoreIcon className="h-4 w-4" /> Store
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                        <FileText className="h-4 w-4" /> Terms of Use
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                        <Lock className="h-4 w-4" /> Privacy Policy
                    </Link>
                </li>
             </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-4">
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 text-primary mt-1" />
                <div>
                  <span>
                    Body Factory Gym & Fitness Centre, PJ21 Commercial Centre, Petaling Jaya, Selangor
                  </span>
                  <Link href="#" className="text-primary text-xs block mt-1 hover:underline">Get Directions &rarr;</Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  +60 12-345 6789
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  info@bodyfactory.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 flex-shrink-0 text-primary mt-1" />
                <div>
                  <p><strong>Hours:</strong></p>
                  <p>Tuesday - Sunday: 24/7</p>
                  <p>Monday: 6 AM - 12 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Body Factory Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
