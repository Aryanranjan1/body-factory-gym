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
      targetAudience: 'Beginners or those looking to isolate specific muscles.',
      features: [
        'Leg Press, Chest Press, Lat Pulldown, and more.',
        'Adjustable for all body types and strength levels.',
        'Ideal for isolating specific muscles for focused growth.',
        'Clear instructions on every machine.',
      ],
      sampleWorkout: {
        day: "Full Body Strength",
        exercises: ["Leg Press: 3 sets of 12 reps", "Chest Press: 3 sets of 12 reps", "Seated Row: 3 sets of 12 reps", "Shoulder Press: 3 sets of 15 reps"]
      },
      coachTip: "Focus on slow, controlled movements. It's not about how much you lift, but how well you lift it."
    },
  },
  {
    id: 'free-weights',
    title: 'Free Weights Zone',
    tagline: 'Unleash your potential with classic iron.',
    image: placeholderImages.find(p => p.id === 'program-free-weights')!,
    details: {
      description: 'The Free Weights Zone is the heart of Body Factory. Equipped with a vast selection of dumbbells, barbells, benches, and racks, this area is designed for those looking to build serious muscle, power, and stability.',
      targetAudience: 'Intermediate to advanced lifters focused on compound movements.',
      features: [
        'Dumbbells up to 150 lbs.',
        'Olympic barbells and bumper plates.',
        'Multiple squat racks and deadlift platforms.',
        'Incline, decline, and flat benches.',
      ],
      sampleWorkout: {
        day: "Push Day",
        exercises: ["Barbell Bench Press: 4 sets of 8-10 reps", "Dumbbell Shoulder Press: 3 sets of 12 reps", "Incline Dumbbell Press: 3 sets of 12 reps", "Tricep Pushdowns: 3 sets of 15 reps"]
      },
      coachTip: "Don't be afraid to ask for a spotter! Proper form and safety are more important than lifting heavy."
    },
  },
  {
    id: 'cardio-machines',
    title: 'Cardio Machines',
    tagline: 'Boost your endurance and burn calories.',
    image: placeholderImages.find(p => p.id === 'program-cardio')!,
    details: {
      description: 'Our Cardio Zone is packed with top-of-the-line machines to get your heart pumping. Whether you\'re warming up, cooling down, or doing a full cardio session, you\'ll find everything you need to improve your cardiovascular health.',
      targetAudience: 'All fitness levels looking to improve heart health and endurance.',
      features: [
        'Treadmills with interactive workout programs.',
        'Ellipticals and stationary bikes for low-impact workouts.',
        'Rowing machines for a full-body cardio blast.',
        'Stair climbers to test your limits.',
      ],
       sampleWorkout: {
        day: "Interval Training",
        exercises: ["Treadmill: 5 min warm-up", "Treadmill: 8 rounds of 30s sprint, 60s jog", "Rower: 1000m at a steady pace", "Bike: 10 min cool-down"]
      },
      coachTip: "Mix up your cardio routine to keep things interesting and challenge your body in new ways."
    },
  },
  {
    id: 'hiit-challenge',
    title: 'HIIT Challenge',
    tagline: 'High-intensity workouts for maximum results.',
    image: placeholderImages.find(p => p.id === 'program-hiit')!,
    details: {
      description: 'Push your limits with our High-Intensity Interval Training (HIIT) Challenges. These programs are designed to maximize calorie burn, boost your metabolism, and improve your overall fitness in short, explosive bursts.',
      targetAudience: 'Individuals looking for fast, effective workouts.',
      features: [
        'Structured 4-week programs.',
        'Combines bodyweight exercises with functional equipment.',
        'Led by certified and motivating coaches.',
        'Perfect for busy schedules.',
      ],
      sampleWorkout: {
        day: "Circuit Day 1",
        exercises: ["Burpees: 45s on, 15s rest", "Kettlebell Swings: 45s on, 15s rest", "Box Jumps: 45s on, 15s rest", "Battle Ropes: 45s on, 15s rest. Repeat circuit 3 times."]
      },
      coachTip: "Intensity is key in HIIT. Give it your all during the 'on' periods, and use the rest periods to recover."
    },
  },
  {
    id: 'strength-challenge',
    title: '30-Day Strength Challenge',
    tagline: 'Transform your strength in just one month.',
    image: placeholderImages.find(p => p.id === 'program-strength-challenge')!,
    details: {
      description: 'Join our 30-Day Strength Challenge to systematically increase your power and muscle mass. This program focuses on compound lifts and progressive overload to deliver measurable results in a structured and supportive environment.',
      targetAudience: 'Lifters who want a structured plan to break plateaus.',
      features: [
        'Focus on Bench Press, Squat, and Deadlift.',
        'Weekly check-ins with coaches.',
        'Includes a nutrition guide to support muscle growth.',
        'Compete with other members and track your progress.',
      ],
       sampleWorkout: {
        day: "Week 1 - Leg Day",
        exercises: ["Back Squats: 5 sets of 5 reps", "Romanian Deadlifts: 3 sets of 8 reps", "Leg Press: 3 sets of 10-12 reps", "Calf Raises: 4 sets of 15 reps"]
      },
      coachTip: "Recovery is just as important as lifting. Ensure you're getting enough sleep and proper nutrition to see the best results."
    },
  },
  {
    id: 'mobility-workshop',
    title: 'Flexibility & Mobility Workshop',
    tagline: 'Improve your range of motion and prevent injuries.',
    image: placeholderImages.find(p => p.id === 'program-mobility-workshop')!,
    details: {
      description: 'Our Flexibility and Mobility Workshops are designed to help you move better and feel better. Learn essential stretching and mobility techniques to improve your performance in the gym, reduce soreness, and prevent injuries.',
      targetAudience: 'Anyone! Especially those feeling tight or wanting to improve their lifts.',
      features: [
        'Learn foam rolling and trigger point release techniques.',
        'Guided stretching for major muscle groups.',
        'Improve joint health and range of motion.',
        'Suitable for all fitness levels.',
      ],
      sampleWorkout: {
        day: "Full Body Mobility",
        exercises: ["Cat-Cow Stretch: 10 reps", "World's Greatest Stretch: 5 reps per side", "Deep Squat Hold: 60 seconds", "Pigeon Pose: 60 seconds per side"]
      },
      coachTip: "Consistency is key for mobility. Just 10 minutes a day can make a huge difference in how you feel and perform."
    },
  },
];
