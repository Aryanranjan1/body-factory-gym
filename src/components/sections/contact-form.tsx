"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
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
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required className="mt-2" />
        {state.errors?.name && <p className="mt-1 text-sm text-destructive">{state.errors.name.join(", ")}</p>}
      </div>
      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" required className="mt-2" />
        {state.errors?.phone && <p className="mt-1 text-sm text-destructive">{state.errors.phone.join(", ")}</p>}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Ask us anything!" required className="mt-2" />
        {state.errors?.message && <p className="mt-1 text-sm text-destructive">{state.errors.message.join(", ")}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
