
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dumbbell, Menu, Search, Heart, ShoppingBag, User, X, Facebook, Instagram, Twitter } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LockedFeatureModal } from "./locked-feature-modal";
import { pageLinks, shopItems } from "./header";
import { cn } from "@/lib/utils";

const AnimatedBurgerIcon = ({ open }: { open: boolean }) => {
  return (
    <div className="relative h-6 w-6">
      <span
        className={cn(
          "absolute block h-0.5 w-full bg-current transition-all duration-300 ease-in-out",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[5px]"
        )}
      />
      <span
        className={cn(
          "absolute top-1/2 block h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-300 ease-in-out",
          open ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "absolute block h-0.5 w-full bg-current transition-all duration-300 ease-in-out",
          open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-[5px]"
        )}
      />
    </div>
  );
};

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center md:hidden">
        <div className="flex items-center space-x-1">
           <LockedFeatureModal>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-5 w-5" />
            </Button>
          </LockedFeatureModal>
          <LockedFeatureModal>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Heart className="h-5 w-5" />
            </Button>
          </LockedFeatureModal>
          <LockedFeatureModal>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </LockedFeatureModal>
        </div>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <AnimatedBurgerIcon open={isOpen} />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="left" className="flex flex-col pr-0">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2 border-b pb-4"
          onClick={() => setIsOpen(false)}
        >
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-lg tracking-wider">
            BFG
          </span>
        </Link>
        <div className="flex-grow overflow-y-auto">
          <div className="flex flex-col space-y-3 pl-6 pr-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-foreground"
            >
              Home
            </Link>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="shop">
                <AccordionTrigger>Shop</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {Object.entries(shopItems).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="font-bold mb-1">{category}</h4>
                        <div className="flex flex-col space-y-1">
                          {items.map((item) => (
                            <LockedFeatureModal key={item}>
                              <a className="text-sm text-muted-foreground pl-2">{item}</a>
                            </LockedFeatureModal>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pages">
                <AccordionTrigger>Pages</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {pageLinks.map((page) => (
                       <LockedFeatureModal key={page.title}>
                         <div className="pl-2">
                            <div className="text-sm font-medium leading-none">{page.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {page.description}
                            </p>
                          </div>
                       </LockedFeatureModal>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/#about-us"
              onClick={() => setIsOpen(false)}
              className="text-foreground"
            >
              About
            </Link>
            <Link
              href="/#contact-us"
              onClick={() => setIsOpen(false)}
              className="text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
         <div className="mt-auto border-t pt-4">
            <div className="flex flex-col space-y-4 px-6">
              <LockedFeatureModal>
                <div className="flex items-center space-x-2 text-foreground cursor-pointer">
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </div>
              </LockedFeatureModal>
              <div className="flex items-center justify-center space-x-4 pt-2">
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
      </SheetContent>
    </Sheet>
  );
}
