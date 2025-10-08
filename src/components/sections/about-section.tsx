import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

const images = [
    { id: "founder", imageHint: "gym owner bodybuilder", className: "col-span-2 row-span-2" },
    { id: "trainer-1", imageHint: "fitness community", className: "" },
    { id: "facility-weights", imageHint: "gym interior", className: "" },
    { id: "trainer-2", imageHint: "members training", className: "col-span-2" },
]

export function AboutSection() {
  return (
    <section id="about-us" className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                Established in 2013. Three Floors of Fitness.
                </h2>
                <p className="text-lg text-muted-foreground">
                For over a decade, Body Factory has been the go-to 24/7 fitness hub in Petaling Jaya. We’ve built more than just a gym; we’ve created a strong, supportive community dedicated to achieving their goals. With three floors of top-tier equipment, affordability, and unbeatable access, your fitness journey starts here.
                </p>
                 <Button variant="outline" size="lg" asChild>
                    <a href="#testimonials">Discover Why Members Love Us</a>
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {images.map((imgData) => {
                    const image = placeholderImages.find(p => p.id === imgData.id);
                    if (!image) return null;
                    return (
                        <div key={image.id} className={imgData.className}>
                             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={image.description}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    data-ai-hint={imgData.imageHint}
                                />
                             </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </section>
  );
}
