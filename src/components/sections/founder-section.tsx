import Image from "next/image";
import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/lib/placeholder-images";
import { AnimatedItem, AnimatedSection } from "../common/animated-section";

const founderImage = placeholderImages.find((p) => p.id === "founder");

const pressLogos = [
    { name: "FMT", url: "https://www.freemalaysiatoday.com/", hint: "FMT logo" },
    { name: "NST", url: "https://www.nst.com.my/", hint: "NST logo" },
    { name: "Bernama", url: "https://www.bernama.com/", hint: "Bernama logo" }
]

export function FounderSection() {
  return (
    <AnimatedSection className="bg-card">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedItem>
                {founderImage && (
                    <div className="relative aspect-square max-w-md mx-auto">
                        <Image
                        src={founderImage.imageUrl}
                        alt={founderImage.description}
                        fill
                        className="rounded-lg object-cover"
                        data-ai-hint={founderImage.imageHint}
                        />
                    </div>
                )}
            </AnimatedItem>
            <AnimatedItem className="space-y-6">
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                   Led by a Champion. Built for Champions.
                </h2>
                <p className="text-lg text-muted-foreground">
                    Our founder, Mr. Kumareswarren, transformed himself from a 110kg enthusiast into the Mr. Malaysia 2023 Champion. He built Body Factory on the principles of hard work, dedication, and community, and he is passionate about helping everyone unlock their true potential.
                </p>
                <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">As Featured In</h3>
                    <div className="flex items-center gap-8">
                        {pressLogos.map(logo => (
                            <a key={logo.name} href={logo.url} target="_blank" rel="noopener noreferrer" className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                                <Image src={`https://logo.clearbit.com/${logo.url.split('//')[1]}`} alt={logo.name} width={100} height={40} className="object-contain" data-ai-hint={logo.hint} />
                            </a>
                        ))}
                    </div>
                </div>
                 <Button size="lg">Train with Kumareswarren</Button>
            </AnimatedItem>
        </div>
    </AnimatedSection>
  );
}
