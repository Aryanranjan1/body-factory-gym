import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { AnimatedItem, AnimatedSection } from "../common/animated-section";
import { Button } from "../ui/button";

export function CommunitySection() {
    const communityVideo = placeholderImages.find(p => p.id === 'hero-video');

    return (
        <section className="relative text-white py-20 md:py-40 flex items-center justify-center overflow-hidden">
             {communityVideo && (
                <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover"
                >
                <source src={communityVideo.imageUrl} type="video/mp4" />
                </video>
            )}
            <div className="absolute inset-0 bg-black/70 z-10"></div>
             <div className="relative z-20 container text-center">
                 <AnimatedSection>
                    <AnimatedItem>
                         <h2 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            More Than a Gym. We’re Family.
                        </h2>
                    </AnimatedItem>
                    <AnimatedItem>
                        <p className="mx-auto mt-6 max-w-3xl font-body text-lg text-neutral-200 md:text-xl">
                            Join a community that sweats together, supports each other, and celebrates every personal best.
                        </p>
                    </AnimatedItem>
                    <AnimatedItem className="mt-8">
                         <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                            Meet Our Members
                        </Button>
                    </AnimatedItem>
                 </AnimatedSection>
             </div>
        </section>
    )
}
