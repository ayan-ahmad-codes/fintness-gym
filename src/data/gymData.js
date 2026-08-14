export const GYM_CONFIG = {
  name: "FITNESS GYM",
  tagline: "Build Strength. Build Discipline. Build Yourself.",
  heroSubtext: "The ultimate bodybuilding & strength sanctuary. Join a hardcore community dedicated to physical transformation and unwavering discipline.",
  
  // Centralized Arnold Schwarzenegger Hero Background Image URL
  arnoldHeroBg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1920&auto=format&fit=crop",

  contact: {
    email: "yourgym@email.com",
    whatsappDisplay: "03xxxxxxxxx",
    whatsappLink: "https://wa.me/923000000000?text=Hi%20Fitness%20Gym!%20I%20want%20to%20inquire%20about%20membership.",
    googleMapsUrl: "https://maps.app.goo.gl/LUQjXDSBKc2xDdkr6",
    addressDisplay: "Main Commercial Avenue, Fitness Gym Facility"
  },

  pricing: {
    currency: "Rs.",
    baseMembership: 1500,
    trainerAddon: 4000,
    totalWithTrainer: 5500,
    baseFeatures: [
      "Full Gym Access (Open 6 AM - 11 PM)",
      "Complete Free Weight & Machine Arena",
      "Dedicated Heavy Lifting & Power Racks",
      "Basic Workout Form Guidance",
      "Full Access to Digital 6-Day Workout Planner",
      "Locker & Shower Facilities"
    ],
    trainerFeatures: [
      "Everything in Basic Gym Membership",
      "Dedicated 1-on-1 Personal Trainer",
      "Custom Macro & Nutrition Meal Planning",
      "Weekly Physique & Progress Assessments",
      "Form Correction & Spotting Support"
    ]
  },

  features: [
    {
      id: "strength",
      title: "Strength Training",
      desc: "Professional heavy iron equipment, Olympic barbells, and calibrated powerlifting racks for serious lifters.",
      icon: "Dumbbell"
    },
    {
      id: "hypertrophy",
      title: "Muscle Building",
      desc: "Structured hypertrophic training environment engineered for maximum progressive muscle development.",
      icon: "Flame"
    },
    {
      id: "guidance",
      title: "Expert Guidance",
      desc: "Experienced coaching staff to assist with movement mechanics, intensity techniques, and safety.",
      icon: "Award"
    },
    {
      id: "environment",
      title: "Dedicated Environment",
      desc: "A focused, zero-distraction gym culture engineered to keep you consistent day after day.",
      icon: "Zap"
    }
  ],

  programs: [
    {
      id: "prog-1",
      title: "Muscle Building",
      subtitle: "Hypertrophy Protocol",
      desc: "Structured resistance routines designed for maximum muscle volume, symmetry, and aesthetic development.",
      badge: "POPULAR",
      icon: "Dumbbell"
    },
    {
      id: "prog-2",
      title: "Strength Training",
      subtitle: "Power & Force",
      desc: "Build foundational power with heavy compound lifts, progressive loading, and neuromuscular adaptations.",
      badge: "CORE",
      icon: "Shield"
    },
    {
      id: "prog-3",
      title: "Fat Loss & Conditioning",
      subtitle: "Shred & Stamina",
      desc: "High-yield metabolic conditioning paired with muscle-sparing resistance training for rapid body recomposition.",
      badge: "SHRED",
      icon: "Activity"
    },
    {
      id: "prog-4",
      title: "Personal Training",
      subtitle: "1-on-1 Mentorship",
      desc: "Customized 1-on-1 coaching, individualized program design, and direct accountability from top trainers.",
      badge: "PREMIUM",
      icon: "UserCheck"
    }
  ],

  stats: [
    { value: 6, suffix: "", label: "Training Days", sub: "Structured Split" },
    { value: 80, suffix: " MIN", label: "Average Workout", sub: "Focused Sessions" },
    { value: 100, suffix: "%", label: "Dedication", sub: "Pure Culture" },
    { value: 1, suffix: "", label: "Goal", sub: "Your Best Self" }
  ]
};
