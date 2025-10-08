
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    title: "Walk-In",
    description: "The perfect balance of structure and flexibility to kickstart your fitness journey.",
    features: ["Full Gym Access", "One-Time Entry", "No Commitment"],
    cta: "Get Started Now",
  },
  {
    title: "Monthly",
    description: "Designed for those ready to build consistency and make steady, sustainable progress.",
    features: ["24/7 Gym Access", "Unlimited Entries", "Community Access", "Infrared Sauna (Premium)"],
    cta: "Get Started Now",
  },
  {
    title: "Personal Training",
    description: "Ideal for maintaining and building on your fitness foundation with a consistent, balanced routine.",
    features: ["1-on-1 Coaching", "Personalized Programming", "Nutritional Guidance", "Direct Champion Mentorship"],
    cta: "Get Started Now",
  },
];

export function MembershipSection() {
  return (
    <section id="membership" className="bg-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
            <p className="font-semibold text-primary tracking-widest uppercase">
                Our Memberships
            </p>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
                MORE <span className="text-primary">OPTIONS</span>, <br /> MORE VALUE.
            </h2>
        </div>
        <div className="grid max-w-5xl mx-auto gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index}>
              <Card className="flex flex-col h-full bg-transparent border-white/20 rounded-lg p-6">
                <CardHeader className="p-0 text-left">
                  <p className="text-lg font-bold tracking-widest uppercase text-primary">{plan.title}</p>
                  <CardTitle className="font-semibold tracking-wider uppercase text-foreground/50 text-sm">
                    Membership
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 mt-4">
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="text-foreground font-medium">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button variant="outline" size="lg">View All Plans</Button>
        </div>
      </div>
    </section>
  );
}
