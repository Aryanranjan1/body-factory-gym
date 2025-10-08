import { Dumbbell, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-bold">
              {/* CMS: site_name */}
              Body Factory Gym
              {/* /CMS */}
            </span>
          </div>
          <div className="text-center text-sm text-muted-foreground md:text-left">
            <p>&copy; {new Date().getFullYear()} Body Factory Gym. All rights reserved.</p>
            <p>PJ21 Commercial Centre, Petaling Jaya, Selangor</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
