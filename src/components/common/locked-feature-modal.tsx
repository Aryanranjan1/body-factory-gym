"use client";

import { useState, type ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export function LockedFeatureModal({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <div onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(true); }} className="inline-block cursor-pointer">
        {children}
      </div>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-3 text-2xl font-headline">
            <Rocket className="h-8 w-8 text-primary" />
            <span>
              {/* CMS: locked_modal_title */}
              🚀 Feature Coming Soon!
              {/* /CMS */}
              </span>
          </AlertDialogTitle>
          <AlertDialogDescription className="pt-4 text-base text-muted-foreground">
            {/* CMS: locked_modal_description */}
            This feature unlocks with the <strong>Full Business Automation Suite</strong>, including our Member Portal, Online Booking, and CRM integration.
            {/* /CMS */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">
              {/* CMS: locked_modal_button_text */}
              Got It
              {/* /CMS */}
              </Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
