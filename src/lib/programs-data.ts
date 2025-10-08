import { placeholderImages } from './placeholder-images';
import type { Program } from './definitions';

export const programs: Program[] = [
  {
    id: 'strength-machines',
    title: 'Strength Machines',
    tagline: 'Build foundational strength with guided movements.',
    image: placeholderImages.find(p => p.id === 'program-strength-machines')!,
    details: {
      description: 'Our Strength Machines zone offers a full range of equipment to target every major muscle group. Perfect for beginners and experts alike, these machines provide stability and control to help you build strength safely and effectively.',
      features: [
        'Leg Press, Chest Press, Lat Pulldown, and more.',
        'Adjustable for all body types and strength levels.',
        'Ideal for isolating specific muscles for focused growth.',
        'Clear instructions on every machine.',
      ],
    },
  },
  {
    id: 'free-weights',
    title: 'Free Weights Zone',
    tagline: 'Unleash your potential with classic iron.',
    image: placeholderImages.find(p => p.id === 'program-free-weights')!,
    details: {
      description: 'The Free Weights Zone is the heart of Body Factory. Equipped with a vast selection of dumbbells, barbells, benches, and racks, this area is designed for those looking to build serious muscle, power, and stability.',
      features: [
        'Dumbbells up to 150 lbs.',
        'Olympic barbells and bumper plates.',
        'Multiple squat racks and deadlift platforms.',
        'Incline, decline, and flat benches.',
      ],
    },
  },
  {
    id: 'cardio-machines',
    title: 'Cardio Machines',
    tagline: 'Boost your endurance and burn calories.',
    image: placeholderImages.find(p => p.id === 'program-cardio')!,
    details: {
      description: 'Our Cardio Zone is packed with top-of-the-line machines to get your heart pumping. Whether you\'re warming up, cooling down, or doing a full cardio session, you\'ll find everything you need to improve your cardiovascular health.',
      features: [
        'Treadmills with interactive workout programs.',
        'Ellipticals and stationary bikes for low-impact workouts.',
        'Rowing machines for a full-body cardio blast.',
        'Stair climbers to test your limits.',
      ],
    },
  },
  {
    id: 'hiit-challenge',
    title: 'HIIT Challenge',
    tagline: 'High-intensity workouts for maximum results.',
    image: placeholderImages.find(p => p.id === 'program-hiit')!,
    details: {
      description: 'Push your limits with our High-Intensity Interval Training (HIIT) Challenges. These programs are designed to maximize calorie burn, boost your metabolism, and improve your overall fitness in short, explosive bursts.',
      features: [
        'Structured 4-week programs.',
        'Combines bodyweight exercises with functional equipment.',
        'Led by certified and motivating coaches.',
        'Perfect for busy schedules.',
      ],
    },
  },
  {
    id: 'strength-challenge',
    title: '30-Day Strength Challenge',
    tagline: 'Transform your strength in just one month.',
    image: placeholderImages.find(p => p.id === 'program-strength-challenge')!,
    details: {
      description: 'Join our 30-Day Strength Challenge to systematically increase your power and muscle mass. This program focuses on compound lifts and progressive overload to deliver measurable results in a structured and supportive environment.',
      features: [
        'Focus on Bench Press, Squat, and Deadlift.',
        'Weekly check-ins with coaches.',
        'Includes a nutrition guide to support muscle growth.',
        'Compete with other members and track your progress.',
      ],
    },
  },
  {
    id: 'mobility-workshop',
    title: 'Flexibility & Mobility Workshop',
    tagline: 'Improve your range of motion and prevent injuries.',
    image: placeholderImages.find(p => p.id === 'program-mobility-workshop')!,
    details: {
      description: 'Our Flexibility and Mobility Workshops are designed to help you move better and feel better. Learn essential stretching and mobility techniques to improve your performance in the gym, reduce soreness, and prevent injuries.',
      features: [
        'Learn foam rolling and trigger point release techniques.',
        'Guided stretching for major muscle groups.',
        'Improve joint health and range of motion.',
        'Suitable for all fitness levels.',
      ],
    },
  },
];
