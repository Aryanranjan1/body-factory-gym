import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import type { MembershipPlan } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import { LockedFeatureModal } from "../common/locked-feature-modal";
import { AnimatedSection } from "../common/animated-section";

const plans: MembershipPlan[] = [
  {
    title: "Walk-In",
    price: "12",
    period: "Per Day",
    features: ["Full Gym Access", "One-Time Entry", "No Commitment"],
    isFeatured: false,
  },
  {
    title: "Monthly",
    price: "110",
    period: "Per Month",
    features: ["24/7 Gym Access", "Unlimited Entries", "Community Access", "Basic Support"],
    isFeatured: true,
  },
  {
    title: "Premium",
    price: "120",
    period: "Per Month",
    features: ["All Monthly Benefits", "Infrared Sauna Access", "Priority Support"],
    isFeatured: false,
  },
];

export function MembershipSection() {
  return (
    <AnimatedSection className="bg-card">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
          {/* CMS: membership_headline */}
          Find Your Perfect Fit
          {/* /CMS */}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {/* CMS: membership_subheadline */}
          Simple, transparent pricing. No hidden fees. Just pure results.
          {/* /CMS */}
        </p>
      </div>
      <div className="mt-12 grid max-w-5xl mx-auto gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card key={index} className={cn("flex flex-col", plan.isFeatured && "border-primary ring-2 ring-primary")}>
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">
                {/* CMS: membership_plan_title_`index` */}
                {plan.title}
                {/* /CMS */}
              </CardTitle>
              <CardDescription>
                <span className="text-4xl font-bold text-foreground">RM{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {/* Future Integration: Member Portal + Payment */}
              <LockedFeatureModal>
                <Button className={cn("w-full", plan.isFeatured ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/80")}>
                  Join Now
                </Button>
              </LockedFeatureModal>
            </CardFooter>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
