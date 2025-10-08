"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider" disabled={pending}>
      {/* CMS: contact_form_button */}
      {pending ? "SENDING..." : "LET'S GO!"}
      {/* /CMS */}
    </Button>
  );
}

export function ContactForm() {
  const initialState: FormState = { message: "", success: false, errors: {} };
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <div className="space-y-6">
        <div className="text-center">
            <h3 className="font-headline text-3xl font-bold text-foreground">
                {/* CMS: contact_form_title */}
                LET'S GET TO WORK
                {/* /CMS */}
            </h3>
            <p className="mt-2 text-muted-foreground">
                {/* CMS: contact_form_subtitle */}
                Fill out the form below to get instant access to your first class free and more!
                {/* /CMS */}
            </p>
        </div>
        <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="First Name" required className="mt-2 bg-background/50" />
                    {state.errors?.firstName && <p className="mt-1 text-sm text-destructive">{state.errors.firstName.join(", ")}</p>}
                </div>
                 <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Last Name" required className="mt-2 bg-background/50" />
                    {state.errors?.lastName && <p className="mt-1 text-sm text-destructive">{state.errors.lastName.join(", ")}</p>}
                </div>
            </div>
            <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Phone" required className="mt-2 bg-background/50" />
                {state.errors?.phone && <p className="mt-1 text-sm text-destructive">{state.errors.phone.join(", ")}</p>}
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Email" required className="mt-2 bg-background/50" />
                {state.errors?.email && <p className="mt-1 text-sm text-destructive">{state.errors.email.join(", ")}</p>}
            </div>
            <SubmitButton />
        </form>
    </div>
  );
}
