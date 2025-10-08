import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

const plans = [
  {
    title: "Walk-In",
    price: "12",
    period: "Per Day",
    features: ["Full Gym Access", "One-Time Entry", "No Commitment"],
    isFeatured: false,
  },
  {
    title: "Monthly",
    price: "110–120",
    period: "Per Month",
    features: ["24/7 Gym Access", "Unlimited Entries", "Community Access", "Infrared Sauna (Premium)"],
    isFeatured: true,
  },
  {
    title: "Personal Training",
    price: "Custom",
    period: "Quote",
    features: ["1-on-1 Coaching", "Personalized Programming", "Nutritional Guidance", "Direct Champion Mentorship"],
    isFeatured: false,
  },
];

export function MembershipSection() {
  return (
    <section id="membership" className="bg-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <p className="font-semibold text-primary tracking-widest uppercase">
                Transparent Pricing
            </p>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
                PLANS FOR <span className="text-primary">EVERY GOAL</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Simple, transparent pricing to fuel your fitness journey. No contracts. No hidden fees.
            </p>
        </div>
        <div className="grid max-w-5xl mx-auto gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index}>
              <Card className={cn("flex flex-col h-full", plan.isFeatured && "border-primary ring-2 ring-primary")}>
                <CardHeader className="text-center">
                  <CardTitle className="font-headline text-2xl">
                    {plan.title}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">{plan.price.startsWith('Custom') ? '' : 'RM'}{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-green-500 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={cn("w-full", plan.isFeatured ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-secondary/80")}>
                    Get Started Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
