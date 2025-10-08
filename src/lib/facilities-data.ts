import type { Facility } from './definitions';
import { placeholderImages } from './placeholder-images';

const findImage = (id: string) => {
    const img = placeholderImages.find(p => p.id === id);
    if (!img) {
        throw new Error(`Image with id "${id}" not found.`);
    }
    return img;
};

export const facilitiesData: Facility[] = [
  {
    id: "strength",
    title: "Strength Training",
    tagline: "Build pure strength.",
    description: "Our strength section is equipped with a comprehensive range of free weights, squat racks, and specialized machines. Whether you're a powerlifter or just starting, you'll find everything you need to build muscle and increase your power.",
    features: ["Olympic Barbells & Bumper Plates", "Dumbbells up to 100kg", "Multiple Squat Racks & Bench Presses", "Cable Crossover Machines", "Leg Press & Hack Squat"],
    image: findImage('facility-weights'),
    layout: '2x2',
  },
  {
    id: "functional",
    title: "Functional Training",
    tagline: "Move with purpose.",
    description: "Our functional training zone is a versatile space designed for dynamic, full-body workouts. Improve your agility, balance, and coordination with our wide array of equipment.",
    features: ["Kettlebells & Battle Ropes", "Plyometric Boxes", "TRX Suspension Trainers", "Spacious Turf Area", "Sled Push & Pull Track"],
    image: findImage('facility-functional'),
    layout: '1x1',
  },
  {
    id: "cardio",
    title: "Cardio Zone",
    tagline: "Boost your endurance.",
    description: "Elevate your heart rate and burn calories in our dedicated cardio zone. We offer a variety of high-end machines to keep your workouts engaging and effective.",
    features: ["Treadmills with Interactive Screens", "StairMasters & Ellipticals", "Concept2 Rowers & SkiErgs", "Assault AirBikes", "Spin Bikes"],
    image: findImage('facility-cardio'),
    layout: '1x1',
  },
  {
    id: "personal-training",
    title: "Personal Training",
    tagline: "Expert guidance.",
    description: "Achieve your fitness goals faster with personalized guidance from our team of certified trainers, including our champion founder. We create custom programs tailored to your specific needs.",
    features: ["1-on-1 Coaching Sessions", "Customized Workout Programming", "Nutritional Guidance & Meal Planning", "Body Composition Analysis", "Direct Mentorship from Champions"],
    image: findImage('facility-personal-training'),
    layout: '1x2',
  },
  {
    id: "sauna",
    title: "Infrared Sauna",
    tagline: "Relax and recover.",
    description: "Accelerate your recovery and detoxify your body in our state-of-the-art infrared sauna. A perfect way to end a strenuous workout session.",
    features: ["Medical-Grade Chromotherapy", "Reduces Inflammation & Joint Pain", "Improves Circulation", "Promotes Deep Relaxation", "Available for Premium Members"],
    image: findImage('facility-sauna'),
    layout: '1x1',
  },
  {
    id: "lockers",
    title: "Locker & Recovery",
    tagline: "Refresh and recharge.",
    description: "Our clean and secure facilities ensure you can prepare for and wind down from your workout in comfort. Store your belongings with peace of mind and take advantage of our recovery amenities.",
    features: ["Secure Digital Lockers", "Spacious & Clean Showers", "Vanity Stations with Hair Dryers", "Post-workout Stretching Area", "Towel Service Available"],
    image: findImage('facility-lockers'),
    layout: '2x1',
  },
];
