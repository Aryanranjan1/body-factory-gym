"use client";

import Link from "next/link";
import { Dumbbell, Heart, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LockedFeatureModal } from "@/components/common/locked-feature-modal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

export const shopItems = {
  "Home Gym": ["Treadmill", "Kettlebell", "Elliptical Trainer", "Dumbbell", "Resistance band"],
  "Cardio Machines": ["Jump Rope", "Arc Trainer", "Hydrow Rower", "Versaclimber", "Rowing Machine"],
  "Free Weights": ["Weight Plate", "Curl Bars", "Hexagon Dumbbell", "Barbell", "Olympic Barbells"],
  "Power Equipment": ["Calibrated Plates", "Squat Bar", "Squat Rack", "Deadlift", "Curl Bench"],
}

export const pageLinks = [
  {
    title: "Blog",
    description: "Read our latest articles.",
  },
  {
    title: "FAQs",
    description: "Frequently asked questions.",
  }
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block text-lg tracking-wider">
              BFG
            </span>
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-4 gap-x-4 gap-y-2 p-4 md:w-[700px] lg:w-[800px]">
                      {Object.entries(shopItems).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="mb-2 font-bold text-foreground">{category}</h3>
                          <ul className="space-y-1">
                            {items.map(item => (
                               <li key={item}>
                                 <LockedFeatureModal>
                                  <a className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm text-muted-foreground">
                                    {item}
                                  </a>
                                 </LockedFeatureModal>
                               </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                   <Link href="/#about-us" passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                   <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                    <NavigationMenuContent>
                       <ul className="grid w-[200px] gap-3 p-4 md:w-[250px]">
                         {pageLinks.map(page => (
                           <li key={page.title}>
                             <LockedFeatureModal>
                               <NavigationMenuLink asChild>
                                  <a className="block w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                    <div className="text-sm font-medium leading-none">{page.title}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {page.description}
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </LockedFeatureModal>
                           </li>
                         ))}
                       </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/#contact-us" passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex">
             <div className="flex items-center space-x-2">
                <LockedFeatureModal>
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                </LockedFeatureModal>
                <LockedFeatureModal>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </LockedFeatureModal>
                <LockedFeatureModal>
                  <Button variant="ghost" size="icon">
                    <ShoppingBag className="h-5 w-5" />
                  </Button>
                </LockedFeatureModal>
                 <div className="w-px h-6 bg-border mx-2"></div>
                <LockedFeatureModal>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </LockedFeatureModal>
             </div>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
