import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

const galleryImages = [
    { id: "facility-cardio", hint: "cardio machines" },
    { id: "facility-weights", hint: "free weights area" },
    { id: "facility-machines", hint: "strength machines" },
    { id: "founder", hint: "gym owner posing" },
    { id: "trainer-1", hint: "personal training session" },
    { id: "trainer-2", hint: "group fitness class" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              Explore Our Space
              </h2>
          </div>
          <div>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  A virtual tour of our three floors dedicated to your fitness.
              </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((imgData) => {
              const image = placeholderImages.find(p => p.id === imgData.id);
              if (!image) return null;
              return (
                  <div key={image.id}>
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg group">
                          <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              data-ai-hint={imgData.hint}
                          />
                           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      </div>
                  </div>
              )
          })}
        </div>
      </div>
    </section>
  );
}
