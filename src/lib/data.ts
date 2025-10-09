
export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = [
    {
      "id": "hero-video",
      "description": "A man lifting weights in a gym using a lat pulldown machine.",
      "imageUrl": "/video/3209802-uhd_3840_2160_25fps.mp4",
      "imageHint": "gym workout video"
    },
    {
      "id": "founder",
      "description": "Founder Kumareswarren posing with his Mr. Malaysia 2023 champion medal in the gym",
      "imageUrl": "https://picsum.photos/seed/founder-champ/600/600",
      "imageHint": "bodybuilder champion"
    },
    {
      "id": "trainer-1",
      "description": "A fitness trainer actively coaching a client on their form during a lift",
      "imageUrl": "https://picsum.photos/seed/trainer-coaching/400/400",
      "imageHint": "personal trainer coaching"
    },
    {
      "id": "trainer-2",
      "description": "A yoga instructor guiding a member through a stretch in a calm gym corner",
      "imageUrl": "https://picsum.photos/seed/yoga-instructor-gym/400/400",
      "imageHint": "yoga instructor"
    },
    {
      "id": "trainer-3",
      "description": "A crossfit coach demonstrating a kettlebell swing to a small group",
      "imageUrl": "https://picsum.photos/seed/crossfit-coach-group/400/400",
      "imageHint": "crossfit coach"
    },
    {
      "id": "facility-cardio",
      "description": "A clean row of modern treadmills and elliptical machines, well-lit",
      "imageUrl": "https://picsum.photos/seed/gym-cardio-zone/800/600",
      "imageHint": "cardio machines"
    },
    {
      "id": "facility-weights",
      "description": "An organized rack of dumbbells and free weights with a person lifting in the background",
      "imageUrl": "https://picsum.photos/seed/gym-free-weights/800/600",
      "imageHint": "free weights"
    },
    {
      "id": "facility-machines",
      "description": "A view of the selectorized weight machine area, showing various stations",
      "imageUrl": "https://picsum.photos/seed/gym-strength-machines/800/600",
      "imageHint": "gym equipment"
    },
    {
      "id": "contact-background",
      "description": "Person focused and determined while doing a deadlift",
      "imageUrl": "https://picsum.photos/seed/gym-deadlift/1200/800",
      "imageHint": "deadlift workout"
    },
    {
      "id": "recipe-smoothie",
      "description": "High-protein smoothie in a shaker bottle next to a piece of fruit",
      "imageUrl": "https://picsum.photos/seed/gym-recipe-smoothie/400/400",
      "imageHint": "protein shake"
    },
    {
      "id": "core-workout",
      "description": "Person holding a plank with good form on a gym mat",
      "imageUrl": "https://picsum.photos/seed/gym-core-plank/400/400",
      "imageHint": "plank exercise"
    },
    {
      "id": "about-1",
      "description": "Woman lifting weights in a gym",
      "imageUrl": "https://picsum.photos/seed/woman-lifting/600/800",
      "imageHint": "woman lifting"
    },
    {
      "id": "about-2",
      "description": "Man doing pull-ups in a gym",
      "imageUrl": "https://picsum.photos/seed/man-pullups/600/800",
      "imageHint": "man training"
    },
    {
      "id": "about-3",
      "description": "Woman doing squats with a barbell",
      "imageUrl": "https://picsum.photos/seed/woman-squat/600/800",
      "imageHint": "woman workout"
    },
    {
      "id": "about-4",
      "description": "Man working out with battle ropes",
      "imageUrl": "https://picsum.photos/seed/man-battleropes/600/800",
      "imageHint": "man fitness"
    }
  ];

export const bentoItems = [
    {
      id: "strength-training",
      title: "Strength Training",
      desc: "Extensive free weights and machines.",
      url: "https://picsum.photos/seed/bento-strength/800/600",
      span: "md:col-span-2 md:row-span-2",
      imageHint: "strength training",
      targetAudience: "Anyone looking to build muscle mass, increase raw strength, or improve body composition.",
      equipment: [
        "Olympic Barbells & Bumper Plates",
        "Full Range of Dumbbells (5kg - 50kg)",
        "Squat Racks & Power Cages",
        "Bench Presses (Incline, Decline, Flat)",
        "Selectorized Strength Machines for all muscle groups",
      ],
      coachTip: "Focus on progressive overload. Aim to increase weight, reps, or sets each week to keep challenging your muscles.",
      cta: "Explore Strength Zone",
    },
    {
      id: "cardio-zone",
      title: "Cardio Zone",
      desc: "Boost your endurance.",
      url: "https://picsum.photos/seed/bento-cardio/800/600",
      span: "md:row-span-1",
      imageHint: "cardio machines",
      targetAudience: "Individuals aiming to improve cardiovascular health, increase stamina, or manage weight.",
       equipment: [
        "Treadmills with Incline & Programs",
        "Elliptical Trainers",
        "Stationary & Recumbent Bikes",
        "Concept2 Rowing Machines",
        "Stair Climbers",
      ],
      coachTip: "Mix steady-state sessions with HIIT intervals to maximize both endurance and calorie burn.",
      cta: "Start Your Cardio",
    },
    {
      id: "functional-training",
      title: "Functional Training",
      desc: "Move with purpose.",
      url: "https://picsum.photos/seed/bento-functional/800/600",
      span: "md:row-span-1",
      imageHint: "functional training",
      targetAudience: "Athletes and individuals who want to improve real-world strength, coordination, and mobility.",
       equipment: [
        "Kettlebells (various weights)",
        "Battle Ropes",
        "TRX Suspension Trainers",
        "Plyometric Boxes & Medicine Balls",
        "Open Turf Area for agility drills",
      ],
      coachTip: "Master the fundamental movements like squats, lunges, and hinges before adding complex variations.",
      cta: "Get Functional",
    },
    {
      id: "personal-training",
      title: "Personal Training",
      desc: "Expert guidance tailored to you.",
      url: "https://picsum.photos/seed/bento-personal/800/600",
      span: "md:row-span-2",
      imageHint: "personal trainer",
      targetAudience: "Beginners needing direction, experienced members breaking plateaus, or anyone with specific goals.",
      features: [
        "1-on-1 Coaching with Champion Trainers",
        "Customized Workout & Nutrition Plans",
        "Body Composition Analysis & Tracking",
        "Goal-Specific Training (Weight Loss, Muscle Gain, etc.)",
        "Flexible Scheduling",
      ],
      coachTip: "Communication is key. Be open with your trainer about your challenges and successes to get the best results.",
      cta: "Book a Trainer",
    },
    {
      id: "sauna",
      title: "Infrared Sauna",
      desc: "Relax and accelerate recovery.",
      url: "https://picsum.photos/seed/bento-sauna/800/600",
      span: "md:row-span-1",
      imageHint: "infrared sauna",
      targetAudience: "Everyone looking to reduce muscle soreness, improve circulation, and de-stress after a hard workout.",
      features: [
        "Deep Tissue Relaxation",
        "Improved Circulation & Detoxification",
        "Reduced Muscle Soreness & Joint Pain",
        "Private & Hygienic Environment",
      ],
      coachTip: "Hydrate well before and after your session. Start with shorter durations (15-20 minutes) and see how your body feels.",
      cta: "Recover Now",
    },
    {
      id: "challenges",
      title: "Community Challenges",
      desc: "Compete and grow together.",
      url: "https://picsum.photos/seed/bento-challenge/800/600",
      span: "md:col-span-2 md:row-span-1",
      imageHint: "gym community",
      targetAudience: "Members who thrive on competition, accountability, and community support to stay motivated.",
      features: [
        "Monthly Fitness & Strength Challenges",
        "Leaderboards with Prizes",
        "Team-based Competitions",
        "Nutrition & Habit Tracking Goals",
        "Exclusive Member Events & Workshops",
      ],
      coachTip: "Don't just compete, connect! Use challenges as a way to meet new training partners and learn from others.",
      cta: "Join a Challenge",
    },
];

export const shopItems = {
    "Home Gym": ["Treadmill", "Kettlebell", "Elliptical Trainer", "Dumbbell", "Resistance band"],
    "Cardio Machines": ["Jump Rope", "Arc Trainer", "Hydrow Rower", "Versaclimber", "Rowing Machine"],
    "Free Weights": ["Weight Plate", "Curl Bars", "Hexagon Dumbbell", "Barbell", "Olympic Barbells"],
    "Power Equipment": ["Calibrated Plates", "Squat Bar", "Squat Rack", "Deadlift", "Curl Bench"],
};
  
export const pageLinks = [
    {
      title: "Blog",
      description: "Read our latest articles.",
    },
    {
      title: "FAQs",
      description: "Frequently asked questions.",
    }
];

export const quickLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/#about-us" },
    { title: "Memberships", href: "/#membership" },
    { title: "Facilities", href: "/#facilities" },
    { title: "Contact", href: "/#contact-us" },
];
  
export const memberServices = [
    "24/7 Gym Access",
    "Personal Training",
    "Infrared Sauna",
    "Community Events",
];

export const contactInfo = {
    address: "Body Factory Gym & Fitness Centre, PJ21 Commercial Centre, Petaling Jaya, Selangor",
    phone: "+60 12-345 6789",
    email: "info@bodyfactory.com",
    hours: {
        tue_sun: "24/7",
        mon: "6 AM - 12 AM"
    }
};

export const aboutSectionContent = {
    subheading: "What We Believe",
    heading: {
        line1: "WORK HARD.",
        line2: "LIVE FIT."
    },
    paragraph: "Body Factory is more than a gym, it's a lifestyle. We believe in the transformative power of hard work. Through dedication and effort, you'll build mental and physical strength to conquer life's challenges, inside and outside of the gym.",
    buttonText: "Discover Why Members Love Us"
};

export const membershipPlans = [
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

export const testimonials = [
    {
      name: "Zul",
      designation: "Student",
      quote: "The 24/7 access is a lifesaver for my weird study schedule. Plus, it's super clean and the price is unbeatable for a student budget. Highly recommend!",
      beforeSrc: placeholderImages.find(p => p.id === 'trainer-1')?.imageUrl ?? '',
      afterSrc: placeholderImages.find(p => p.id === 'founder')?.imageUrl ?? '',
    },
    {
      name: "Aisha",
      designation: "Bodybuilder",
      quote: "Body Factory has the best community. Everyone is so supportive. The equipment is solid and you can tell the owner knows his stuff. It feels like a real training ground.",
      beforeSrc: placeholderImages.find(p => p.id === 'trainer-2')?.imageUrl ?? '',
      afterSrc: placeholderImages.find(p => p.id === 'about-1')?.imageUrl ?? '',
    },
    {
      name: "Michael",
      designation: "Shift Worker",
      quote: "Finally, a gym that fits my lifestyle. It's affordable, has everything I need for a great workout, and the atmosphere is always positive and motivating.",
      beforeSrc: placeholderImages.find(p => p.id === 'trainer-3')?.imageUrl ?? '',
      afterSrc: placeholderImages.find(p => p.id === 'about-3')?.imageUrl ?? '',
    },
];

export const contactBenefits = [
    "One-Day Free Trial Pass",
    "Personalized Starter Plan",
    "Exclusive Community Access",
];
  
export const founderSectionContent = {
    subheading: "MEET THE FOUNDER",
    heading: {
      line1: "LED BY A CHAMPION.",
      line2: "BUILT FOR CHAMPIONS.",
    },
    paragraph: "Our founder, Mr. Kumareswarren, transformed himself from a 110kg enthusiast into the Mr. Malaysia 2023 Champion. He built Body Factory on the principles of hard work, dedication, and community, and he is passionate about helping everyone unlock their true potential.",
    featuredIn: "As Featured In",
    buttonText: "Train with Kumareswarren",
};

export const pressLogos = [
    { name: "FMT", url: "https://www.freemalaysiatoday.com/", hint: "FMT logo" },
    { name: "NST", url: "https://www.nst.com.my/", hint: "NST logo" },
    { name: "Bernama", url: "https://www.bernama.com/", hint: "Bernama logo" }
];
  
export const communitySectionContent = {
    carouselSlides: [
        {
          id: "event-1",
          title: "Annual Powerlifting Meet",
          image: placeholderImages.find(p => p.id === 'trainer-1'),
          imageHint: "gym competition"
        },
        {
          id: "event-2",
          title: "Outdoor Yoga Session",
          image: placeholderImages.find(p => p.id === 'trainer-2'),
          imageHint: "group fitness event"
        },
        {
          id: "event-3",
          title: "Member Appreciation Night",
          image: placeholderImages.find(p => p.id === 'founder'),
          imageHint: "gym owner award"
        }
    ],
    blogPosts: [
        {
            id: "recipe-smoothie",
            title: "High-Protein Smoothie for Muscle Recovery",
            description: "A simple post-workout recipe using oats, banana, and whey.",
            image: placeholderImages.find(p => p.id === 'recipe-smoothie')
        },
        {
            id: "core-workout",
            title: "5-Minute Core Blaster You Can Do Anywhere",
            description: "Quick routine to strengthen your abs without equipment.",
            image: placeholderImages.find(p => p.id === 'core-workout')
        },
         {
          id: "trainer-3",
          title: "How to Improve Your Bench Press",
          description: "Expert tips from our champion trainers.",
          image: placeholderImages.find(p => p.id === 'trainer-3')
        },
    ]
};
