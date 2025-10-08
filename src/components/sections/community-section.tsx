import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "../ui/avatar";

const pastEvents = [
    { id: "trainer-1", hint: "gym competition", title: "Annual Powerlifting Meet" },
    { id: "trainer-2", hint: "group fitness event", title: "Outdoor Yoga Session" },
    { id: "founder", hint: "gym owner award", title: "Member Appreciation Night" },
];

export function CommunitySection() {
    const onlineActivityImage = placeholderImages.find(p => p.id === 'trainer-3');
    const communityMemberImage = placeholderImages.find(p => p.id === 'trainer-1');

    return (
        <section id="community" className="bg-background text-foreground py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            JOIN THE <span className="text-primary">COMMUNITY</span>
                        </h2>
                    </div>
                    <div className="flex items-center">
                        <p className="text-lg text-muted-foreground">
                           Connect and grow with thousands of enthusiasts and fitness professionals at Body Factory.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-8">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {pastEvents.map((event) => {
                                    const image = placeholderImages.find(p => p.id === event.id);
                                    return (
                                        <CarouselItem key={event.id}>
                                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                                {image && (
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={event.title}
                                                        fill
                                                        className="object-cover"
                                                        data-ai-hint={event.hint}
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <div className="absolute bottom-4 left-4 text-white">
                                                    <div className="text-sm font-semibold bg-black/50 px-2 py-1 rounded">Past Events</div>
                                                    <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                        </Carousel>
                        <p className="text-2xl font-semibold">
                            We organize regular member-only competitions and special events to engage with our fitness community in person.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <Card className="bg-card">
                            <CardHeader>
                                <CardTitle>Join our WhatsApp Group</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">"Keep up with the latest class schedules and discuss your fitness challenges in our active community."</p>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                       {communityMemberImage && <Image src={communityMemberImage.imageUrl} alt="Zul" width={40} height={40} />}
                                       <AvatarFallback>Z</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">Zul</p>
                                        <p className="text-sm text-muted-foreground">BFG Member</p>
                                    </div>
                                </div>
                                 <Button variant="outline" className="w-full" asChild>
                                    <Link href="#">Join Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardContent>
                        </Card>
                        
                        <Card className="bg-card">
                             <CardHeader>
                                <CardTitle>Connect with us on social media</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">Network online and stay on top of updates, community events, and fitness trends.</p>
                                 <div className="flex items-center justify-center space-x-3">
                                  <Link href="#" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                                    <Instagram className="h-5 w-5" />
                                  </Link>
                                  <Link href="#" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                                    <Facebook className="h-5 w-5" />
                                  </Link>
                                  <Link href="#" className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground">
                                    <Youtube className="h-5 w-5" />
                                  </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                 <div className="mt-8">
                     <Card className="bg-card overflow-hidden">
                        <div className="grid md:grid-cols-2 items-center">
                            <div className="p-8">
                                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Workouts & Live Streams</p>
                                <h3 className="text-2xl font-bold mt-2">JOIN OUR ONLINE WORKOUTS WITH BFG COACHES</h3>
                                <Button variant="outline" className="mt-4" asChild>
                                    <Link href="#">Watch Live Streams <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </div>
                             <div className="relative h-64 md:h-full min-h-[200px]">
                                {onlineActivityImage && (
                                     <Image
                                        src={onlineActivityImage.imageUrl}
                                        alt="Online Activities"
                                        fill
                                        className="object-cover"
                                        data-ai-hint="online fitness class"
                                     />
                                )}
                            </div>
                        </div>
                     </Card>
                 </div>
            </div>
        </section>
    );
}
