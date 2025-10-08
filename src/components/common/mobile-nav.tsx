
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dumbbell, Menu, Search, Heart, ShoppingBag, User } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LockedFeatureModal } from "./locked-feature-modal";
import { pageLinks, shopItems } from "./header";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center">
        <div className="md:hidden flex items-center space-x-2">
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
        </div>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="left" className="pr-0">
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-lg tracking-wider">
            BFG
          </span>
        </Link>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
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
            <div className="w-full h-px bg-border my-4"></div>
            <LockedFeatureModal>
              <div className="flex items-center space-x-2 text-foreground">
                <User className="h-5 w-5" />
                <span>Account</span>
              </div>
            </LockedFeatureModal>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
