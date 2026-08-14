export const WORKOUT_DAYS = [
  {
    id: 1,
    dayOfWeek: "Monday",
    dayShort: "MON",
    dayName: "Monday — Push",
    subtitle: "Chest, Shoulders & Triceps",
    targetMuscles: ["Chest", "Shoulders", "Triceps"],
    totalDuration: 80, // minutes
    color: "#ff0055",
    accentGlow: "rgba(255, 0, 85, 0.35)",
    gradient: "linear-gradient(135deg, #ff0055 0%, #ff5252 100%)",
    icon: "Dumbbell",
    description: "Build a strong press foundation targeting your Pectorals, Anterior Deltoids, and Triceps with heavy compound press variations followed by isolation sculpting.",
    exercises: [
      {
        id: "d1-ex1",
        name: "Barbell Bench Press",
        target: "Chest",
        primaryMuscles: ["chest"],
        secondaryMuscles: ["triceps", "shoulders"],
        sets: 4,
        reps: "8 - 12",
        rest: 90, // seconds
        estimatedTime: 12, // minutes
        difficulty: "Intermediate",
        instructions: [
          "Lie flat on the bench, feet firmly planted on the floor.",
          "Grip the bar slightly wider than shoulder-width apart.",
          "Unrack the bar and lower it smoothly to your mid-chest.",
          "Press explosively back up, locking out elbows without over-extending."
        ],
        tips: "Keep your shoulder blades retracted and depressed into the bench. Maintain a subtle arch in your lower back."
      },
      {
        id: "d1-ex2",
        name: "Incline Dumbbell Press",
        target: "Upper Chest",
        primaryMuscles: ["chest"],
        secondaryMuscles: ["shoulders", "triceps"],
        sets: 4,
        reps: "10 - 12",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Set bench angle to 30-45 degrees.",
          "Sit back with dumbbells on knees, kick them up to shoulder height.",
          "Press dumbbells upwards until arms are extended above upper chest.",
          "Lower dumbbells under control until chest stretch is felt."
        ],
        tips: "Avoid setting bench too high to prevent anterior deltoids from dominating."
      },
      {
        id: "d1-ex3",
        name: "Chest Fly (Cable or DB)",
        target: "Chest Isolation",
        primaryMuscles: ["chest"],
        secondaryMuscles: ["shoulders"],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Beginner",
        instructions: [
          "Stand between cable pulleys or lie flat on bench with DBs.",
          "Keep a soft bend in your elbows throughout the movement.",
          "Bring hands together in front of chest in a hugging motion.",
          "Squeeze pectorals at full peak contraction."
        ],
        tips: "Focus on tension and muscle contraction rather than heavy weight."
      },
      {
        id: "d1-ex4",
        name: "Overhead Shoulder Press",
        target: "Shoulders",
        primaryMuscles: ["shoulders"],
        secondaryMuscles: ["triceps", "upper_chest"],
        sets: 4,
        reps: "8 - 10",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Advanced",
        instructions: [
          "Clean barbell to shoulder level or unrack standing/seated DBs.",
          "Brace core tightly and press overhead until elbows are fully extended.",
          "Lower bar smoothly back to collarbone level."
        ],
        tips: "Do not arch your lower back excessively; keep glutes and core engaged."
      },
      {
        id: "d1-ex5",
        name: "Dumbbell Lateral Raises",
        target: "Side Delts",
        primaryMuscles: ["shoulders"],
        secondaryMuscles: ["traps"],
        sets: 4,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Beginner",
        instructions: [
          "Stand tall holding dumbbells at side with slight elbow bend.",
          "Raise arms out to sides until parallel with shoulder level.",
          "Pause for a split second at the top, lower slowly."
        ],
        tips: "Lead with your elbows and tilt pinkies slightly up like pouring water."
      },
      {
        id: "d1-ex6",
        name: "Tricep Cable Pushdowns",
        target: "Triceps",
        primaryMuscles: ["triceps"],
        secondaryMuscles: ["forearms"],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Attach rope or straight bar to high cable pulley.",
          "Pin upper arms to torso sides, bend elbows to 90 degrees.",
          "Push down until arms lock out, squeezing triceps hard."
        ],
        tips: "Keep upper arms stationary; only forearms should move."
      },
      {
        id: "d1-ex7",
        name: "Overhead Tricep Extension",
        target: "Long Head Triceps",
        primaryMuscles: ["triceps"],
        secondaryMuscles: ["shoulders"],
        sets: 3,
        reps: "10 - 12",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Intermediate",
        instructions: [
          "Hold DB overhead with both hands or use low cable rope.",
          "Lower weight behind head by bending elbows while keeping upper arms still.",
          "Extend arms straight back up overhead."
        ],
        tips: "Stretches the tricep long head intensely—keep core tight."
      }
    ]
  },
  {
    id: 2,
    dayOfWeek: "Tuesday",
    dayShort: "TUE",
    dayName: "Tuesday — Pull",
    subtitle: "Back, Biceps & Rear Delts",
    targetMuscles: ["Back", "Biceps", "Rear Delts"],
    totalDuration: 80,
    color: "#00f2fe",
    accentGlow: "rgba(0, 242, 254, 0.35)",
    gradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
    icon: "Activity",
    description: "Develop back width and thickness while pumping biceps and rear delts through heavy pulls, rows, and isolation curls.",
    exercises: [
      {
        id: "d2-ex1",
        name: "Lat Pulldown",
        target: "Lat Width",
        primaryMuscles: ["lats"],
        secondaryMuscles: ["biceps", "rear_delts"],
        sets: 4,
        reps: "8 - 12",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Beginner",
        instructions: [
          "Sit down with thigh pads snug. Grip bar wider than shoulder-width.",
          "Pull bar down towards upper chest while arching upper back slightly.",
          "Squeeze lats tight at chest touch, raise bar slowly under control."
        ],
        tips: "Drive downwards with your elbows rather than pulling with biceps."
      },
      {
        id: "d2-ex2",
        name: "Seated Cable Row",
        target: "Mid Back & Thickness",
        primaryMuscles: ["lats", "traps"],
        secondaryMuscles: ["biceps", "rear_delts"],
        sets: 4,
        reps: "10 - 12",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Place feet on platform with slight knee bend. Grip V-bar attachment.",
          "Pull handle into waist while pulling shoulder blades back.",
          "Squeeze rhomboids hard, extend arms back forward slowly."
        ],
        tips: "Avoid excessive rocking or leaning backward during the pull."
      },
      {
        id: "d2-ex3",
        name: "Barbell or DB Bent-Over Row",
        target: "Overall Back Mass",
        primaryMuscles: ["lats", "traps"],
        secondaryMuscles: ["biceps", "core"],
        sets: 4,
        reps: "8 - 10",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Advanced",
        instructions: [
          "Hinge forward at hips with knees slightly bent, back straight at ~45°.",
          "Pull barbell/dumbbells towards belly button.",
          "Lower bar with controlled eccentric motion."
        ],
        tips: "Maintain brace in abs to protect lower spine throughout set."
      },
      {
        id: "d2-ex4",
        name: "Rope Face Pulls",
        target: "Rear Delts & Upper Traps",
        primaryMuscles: ["rear_delts", "traps"],
        secondaryMuscles: ["shoulders"],
        sets: 3,
        reps: "15",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Beginner",
        instructions: [
          "Set cable pulley to upper chest level with rope attachment.",
          "Pull rope towards forehead/nose splitting rope ends apart.",
          "Rotate shoulders externally at peak contraction."
        ],
        tips: "Essential for shoulder health and posture—don't skip high reps."
      },
      {
        id: "d2-ex5",
        name: "Dumbbell Bicep Curls",
        target: "Bicep Brachii",
        primaryMuscles: ["biceps"],
        secondaryMuscles: ["forearms"],
        sets: 4,
        reps: "10 - 12",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Beginner",
        instructions: [
          "Stand holding dumbbells palms facing forward or supinated.",
          "Curl weights up towards shoulders while keeping elbows at sides.",
          "Squeeze biceps firmly at top, lower slowly."
        ],
        tips: "Avoid swinging momentum; keep torso upright and strict."
      },
      {
        id: "d2-ex6",
        name: "Hammer Curls",
        target: "Brachialis & Forearms",
        primaryMuscles: ["biceps"],
        secondaryMuscles: ["forearms"],
        sets: 3,
        reps: "10 - 12",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Hold dumbbells with neutral grip (palms facing each other).",
          "Curl weight up to chest height without rotating wrist.",
          "Lower under control for deep forearm stretch."
        ],
        tips: "Builds arm width and grip strength."
      },
      {
        id: "d2-ex7",
        name: "Reverse Pec Deck Fly",
        target: "Rear Deltoids",
        primaryMuscles: ["rear_delts"],
        secondaryMuscles: ["traps"],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Sit chest against pec deck machine pad.",
          "Grip handles with arms extended forward.",
          "Fly arms outward to sides in a semicircular arc."
        ],
        tips: "Focus on pulling with rear shoulders, keeping chest flush to pad."
      }
    ]
  },
  {
    id: 3,
    dayOfWeek: "Wednesday",
    dayShort: "WED",
    dayName: "Wednesday — Legs",
    subtitle: "Quadriceps, Hamstrings, Glutes & Calves",
    targetMuscles: ["Quads", "Hamstrings", "Glutes", "Calves"],
    totalDuration: 80,
    color: "#7000ff",
    accentGlow: "rgba(112, 0, 255, 0.35)",
    gradient: "linear-gradient(135deg, #7000ff 0%, #9e00ff 100%)",
    icon: "Flame",
    description: "Intense lower body session destroying Quads, Hamstrings, Glutes, and Calves for maximum strength and quad sweep.",
    exercises: [
      {
        id: "d3-ex1",
        name: "Barbell Back Squat",
        target: "Quads & Glutes",
        primaryMuscles: ["quads", "glutes"],
        secondaryMuscles: ["hamstrings", "core"],
        sets: 4,
        reps: "6 - 10",
        rest: 120,
        estimatedTime: 15,
        difficulty: "Advanced",
        instructions: [
          "Rest barbell across upper traps, step back from rack with feet shoulder-width.",
          "Break at hips and knees simultaneously, squatting down until thighs parallel or below.",
          "Drive through heels and mid-foot to stand up strong."
        ],
        tips: "Keep knees tracking over toes and chest elevated high."
      },
      {
        id: "d3-ex2",
        name: "Leg Press",
        target: "Overall Quad Mass",
        primaryMuscles: ["quads"],
        secondaryMuscles: ["glutes", "hamstrings"],
        sets: 4,
        reps: "10 - 12",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Place feet mid-height on platform hip-width apart.",
          "Lower platform under control until knees hit 90 degree angle.",
          "Press platform back up without locking out knees abruptly at top."
        ],
        tips: "Do not let lower back lift off the seat pad at bottom of depth."
      },
      {
        id: "d3-ex3",
        name: "Romanian Deadlift (RDL)",
        target: "Hamstrings & Glutes",
        primaryMuscles: ["hamstrings", "glutes"],
        secondaryMuscles: ["lower_back"],
        sets: 4,
        reps: "8 - 10",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Hold bar or DBs at thigh level, stand tall with soft knees.",
          "Hinge hips back like closing a car door with glutes.",
          "Lower weight along shin lines until deep hamstring stretch.",
          "Drive hips forward to return to standing lockout."
        ],
        tips: "Movement is horizontal hip hinge, not a vertical squat."
      },
      {
        id: "d3-ex4",
        name: "Leg Extensions",
        target: "Quad Teardrop",
        primaryMuscles: ["quads"],
        secondaryMuscles: [],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Beginner",
        instructions: [
          "Adjust pad above ankles. Back snug against pad.",
          "Extend knees straight out until quads fully contract.",
          "Hold squeeze for 1 second, lower slowly."
        ],
        tips: "Great quad isolation finisher—focus on burning tension."
      },
      {
        id: "d3-ex5",
        name: "Lying Hamstring Curl",
        target: "Hamstrings",
        primaryMuscles: ["hamstrings"],
        secondaryMuscles: ["calves"],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 9,
        difficulty: "Beginner",
        instructions: [
          "Lie face down on leg curl bench, pad positioned above heel ankles.",
          "Curl pad up towards glutes with hamstring force.",
          "Lower weight steadily back down."
        ],
        tips: "Keep hips pressed flat into the bench to prevent lower back strain."
      },
      {
        id: "d3-ex6",
        name: "Standing Calf Raises",
        target: "Gastrocnemius",
        primaryMuscles: ["calves"],
        secondaryMuscles: [],
        sets: 4,
        reps: "15 - 20",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Place balls of feet on step block with heels hanging off.",
          "Lower heels into deep calves stretch.",
          "Press high onto toes and hold peak contraction for 2s."
        ],
        tips: "Emphasize slow full stretch at bottom and peak burn at top."
      },
      {
        id: "d3-ex7",
        name: "Walking DB Lunges",
        target: "Glutes & Quads",
        primaryMuscles: ["glutes", "quads"],
        secondaryMuscles: ["hamstrings", "calves"],
        sets: 3,
        reps: "12 steps per leg",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Intermediate",
        instructions: [
          "Hold dumbbells at sides. Step forward into lunge position.",
          "Drop rear knee close to ground while keeping front knee behind toe.",
          "Push off front foot to step directly into next forward lunge."
        ],
        tips: "Keep torso upright or slightly angled for glute engagement."
      }
    ]
  },
  {
    id: 4,
    dayOfWeek: "Thursday",
    dayShort: "THU",
    dayName: "Thursday — Chest & Triceps",
    subtitle: "Upper Chest, Dips & Tricep Hypertrophy",
    targetMuscles: ["Chest", "Triceps"],
    totalDuration: 80,
    color: "#ff6b00",
    accentGlow: "rgba(255, 107, 0, 0.35)",
    gradient: "linear-gradient(135deg, #ff6b00 0%, #ffa800 100%)",
    icon: "Zap",
    description: "Hypertrophy chest & triceps variation day prioritizing upper chest shelf, chest dips, and skullcrushers.",
    exercises: [
      {
        id: "d4-ex1",
        name: "Incline Barbell Bench Press",
        target: "Upper Chest",
        primaryMuscles: ["chest"],
        secondaryMuscles: ["shoulders", "triceps"],
        sets: 4,
        reps: "8 - 10",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Set bench at 30 degrees incline.",
          "Unrack barbell and lower down smoothly to collarbone level.",
          "Press bar vertically up overhead to full extension."
        ],
        tips: "Don't let elbows flare completely 90 degrees out; keep 45° angle."
      },
      {
        id: "d4-ex2",
        name: "Flat Dumbbell Press",
        target: "Mid Chest Mass",
        primaryMuscles: ["chest"],
        secondaryMuscles: ["triceps", "shoulders"],
        sets: 4,
        reps: "10 - 12",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Lie flat on bench holding dumbbells above chest.",
          "Lower weights until elbows drop just past bench level.",
          "Press weights back up together in an arc."
        ],
        tips: "Allows natural wrist rotation and deeper stretch than barbell."
      },
      {
        id: "d4-ex3",
        name: "Chest Dips (Weighted or Bodyweight)",
        target: "Lower Chest & Triceps",
        primaryMuscles: ["chest", "triceps"],
        secondaryMuscles: ["shoulders"],
        sets: 3,
        reps: "10 - 12",
        rest: 90,
        estimatedTime: 10,
        difficulty: "Advanced",
        instructions: [
          "Grab parallel dip bars, jump up to arms locked.",
          "Lean torso forward ~30° to place load onto chest.",
          "Lower body until upper arms are parallel with ground, press back up."
        ],
        tips: "Leaning forward hits chest; standing upright hits triceps."
      },
      {
        id: "d4-ex4",
        name: "Low-to-High Cable Fly",
        target: "Clavicular Upper Chest",
        primaryMuscles: ["chest"],
        secondaryMuscles: ["shoulders"],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Beginner",
        instructions: [
          "Set cables to lowest pulley height.",
          "Scoop handles upward and inward in front of face.",
          "Squeeze upper pectorals hard at peak."
        ],
        tips: "Keep elbows slightly bent and palms facing upwards."
      },
      {
        id: "d4-ex5",
        name: "EZ-Bar Skullcrushers",
        target: "Tricep Long & Lateral Head",
        primaryMuscles: ["triceps"],
        secondaryMuscles: ["forearms"],
        sets: 4,
        reps: "10 - 12",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Intermediate",
        instructions: [
          "Lie on bench holding EZ curl bar above chest.",
          "Hinge only at elbows to lower bar towards forehead/behind head.",
          "Extend elbows straight back up to full lockout."
        ],
        tips: "Keep elbows pointed up forward; do not let them flare sideways."
      },
      {
        id: "d4-ex6",
        name: "Rope Tricep Pressdown",
        target: "Tricep Lateral Head",
        primaryMuscles: ["triceps"],
        secondaryMuscles: [],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Attach rope to upper cable.",
          "Press down and split rope handles apart at bottom lockout.",
          "Return slowly up to 90 degrees."
        ],
        tips: "Splitting the rope at bottom fires lateral tricep head intensely."
      },
      {
        id: "d4-ex7",
        name: "Close-Grip Pushups",
        target: "Tricep Burnout",
        primaryMuscles: ["triceps", "chest"],
        secondaryMuscles: ["shoulders", "core"],
        sets: 3,
        reps: "Failure (~15)",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Get into plank pushup position with hands close together under chest.",
          "Lower body down keeping elbows tucked along ribs.",
          "Push floor away explosively to finish set."
        ],
        tips: "Burnout finisher set; go to full temporary muscular fatigue."
      }
    ]
  },
  {
    id: 5,
    dayOfWeek: "Friday",
    dayShort: "FRI",
    dayName: "Friday — Back & Biceps",
    subtitle: "Lat Width, Back Thickness & Bicep Peak",
    targetMuscles: ["Back", "Biceps"],
    totalDuration: 80,
    color: "#00e676",
    accentGlow: "rgba(0, 230, 118, 0.35)",
    gradient: "linear-gradient(135deg, #00e676 0%, #00b0ff 100%)",
    icon: "Shield",
    description: "Comprehensive back & bicep hypertrophy focusing on wide lat spread, T-bar rowing thickness, and peak bicep curls.",
    exercises: [
      {
        id: "d5-ex1",
        name: "Bodyweight Pull-ups or Wide Lat Pulldown",
        target: "Upper Lats",
        primaryMuscles: ["lats"],
        secondaryMuscles: ["biceps", "rear_delts"],
        sets: 4,
        reps: "8 - 10",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Grip pull-up bar with overhand wide grip.",
          "Pull chest towards bar driving elbows down into hips.",
          "Lower body under complete control."
        ],
        tips: "Avoid kicking legs or swinging lower body."
      },
      {
        id: "d5-ex2",
        name: "T-Bar Row / Landmine Row",
        target: "Mid Back & Rhomboids",
        primaryMuscles: ["lats", "traps"],
        secondaryMuscles: ["biceps", "lower_back"],
        sets: 4,
        reps: "8 - 12",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Straddle T-bar machine or barbell landmine with chest supported or bent over.",
          "Grip handles, pull weight towards chest/lower abdomen.",
          "Squeeze mid back tightly at top contraction."
        ],
        tips: "Keeps spine supported while pulling heavy volume."
      },
      {
        id: "d5-ex3",
        name: "Single-Arm Dumbbell Row",
        target: "Lat Stretch & Symmetry",
        primaryMuscles: ["lats"],
        secondaryMuscles: ["biceps", "rear_delts"],
        sets: 4,
        reps: "10 - 12",
        rest: 60,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Place knee and hand on flat bench for support.",
          "Row dumbbell up to hip line with opposite arm.",
          "Lower dumbbell down to full lat stretch."
        ],
        tips: "Pull weight towards your hip socket, not towards your shoulder."
      },
      {
        id: "d5-ex4",
        name: "Straight-Arm Cable Pullover",
        target: "Isolated Lats",
        primaryMuscles: ["lats"],
        secondaryMuscles: ["chest", "triceps"],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Beginner",
        instructions: [
          "Stand facing high pulley cable with straight bar.",
          "Keeping arms straight with slight elbow soft flex, pull bar down to thighs in arc.",
          "Return bar to eye level slowly."
        ],
        tips: "Pure lat isolation without bicep involvement."
      },
      {
        id: "d5-ex5",
        name: "Incline Dumbbell Bicep Curl",
        target: "Long Head Bicep Peak",
        primaryMuscles: ["biceps"],
        secondaryMuscles: [],
        sets: 4,
        reps: "10 - 12",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Intermediate",
        instructions: [
          "Sit back on 45-degree incline bench with arms hanging.",
          "Curl DBs upward without letting elbows drift forward.",
          "Lower DBs back to deep stretch position at bottom."
        ],
        tips: "Provides extreme stretch on bicep long head."
      },
      {
        id: "d5-ex6",
        name: "Preacher Curls (EZ Bar)",
        target: "Short Head Bicep Isolation",
        primaryMuscles: ["biceps"],
        secondaryMuscles: ["forearms"],
        sets: 3,
        reps: "10 - 12",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Place armpits over preacher bench pad.",
          "Lower EZ bar down near bottom arm lockout.",
          "Curl weight up squeezing biceps at top."
        ],
        tips: "Eliminates momentum completely for strict bicep work."
      },
      {
        id: "d5-ex7",
        name: "Dumbbell Shrugs",
        target: "Upper Trapezius",
        primaryMuscles: ["traps"],
        secondaryMuscles: ["forearms"],
        sets: 3,
        reps: "15",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Stand tall holding heavy DBs at sides.",
          "Shrug shoulders straight up toward ears.",
          "Hold peak contraction for 1-2 seconds, lower slowly."
        ],
        tips: "Do not roll shoulders; move straight up and down."
      }
    ]
  },
  {
    id: 6,
    dayOfWeek: "Saturday",
    dayShort: "SAT",
    dayName: "Saturday — Shoulders, Legs & Core",
    subtitle: "360° Delts, Quad/Hamstrings & Core Stability",
    targetMuscles: ["Shoulders", "Legs", "Core"],
    totalDuration: 80,
    color: "#ff00e5",
    accentGlow: "rgba(255, 0, 229, 0.35)",
    gradient: "linear-gradient(135deg, #ff00e5 0%, #aa00ff 100%)",
    icon: "Target",
    description: "High-energy workout rounding out shoulder width, leg endurance, and rotational core stability.",
    exercises: [
      {
        id: "d6-ex1",
        name: "Arnold Dumbbell Press",
        target: "All 3 Shoulder Heads",
        primaryMuscles: ["shoulders"],
        secondaryMuscles: ["triceps"],
        sets: 4,
        reps: "8 - 10",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Sit on bench holding DBs in front of chest with palms facing you.",
          "Press overhead while rotating wrists 180 degrees so palms face forward at top.",
          "Reverse movement back down to chin."
        ],
        tips: "Engages front, lateral, and stabilizing delt fibers."
      },
      {
        id: "d6-ex2",
        name: "Cable Lateral Raises",
        target: "Side Delts Constant Tension",
        primaryMuscles: ["shoulders"],
        secondaryMuscles: [],
        sets: 4,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Beginner",
        instructions: [
          "Attach single handle to low cable pulley.",
          "Reach across body to grab handle, raise arm out to side to shoulder level.",
          "Lower cable slowly resisting pull."
        ],
        tips: "Keeps continuous tension throughout the entire movement arc."
      },
      {
        id: "d6-ex3",
        name: "Goblet Squats or Hack Squats",
        target: "Quads",
        primaryMuscles: ["quads"],
        secondaryMuscles: ["glutes", "core"],
        sets: 4,
        reps: "10 - 12",
        rest: 90,
        estimatedTime: 12,
        difficulty: "Intermediate",
        instructions: [
          "Hold heavy dumbbell vertically against chest.",
          "Squat down deep keeping elbows inside knees.",
          "Drive back up to top."
        ],
        tips: "Great for deep quad stretch without heavy axial spine loading."
      },
      {
        id: "d6-ex4",
        name: "Dumbbell Single-Leg RDL",
        target: "Hamstrings & Glute Balance",
        primaryMuscles: ["hamstrings", "glutes"],
        secondaryMuscles: ["core"],
        sets: 3,
        reps: "10 per leg",
        rest: 60,
        estimatedTime: 10,
        difficulty: "Intermediate",
        instructions: [
          "Stand on one leg holding dumbbell in opposite hand.",
          "Hinge at hip extending non-working leg straight behind you.",
          "Lower DB toward floor, drive hip forward to return."
        ],
        tips: "Builds leg stability and addresses unilateral imbalances."
      },
      {
        id: "d6-ex5",
        name: "Seated Calf Raises",
        target: "Soleus Calf Muscle",
        primaryMuscles: ["calves"],
        secondaryMuscles: [],
        sets: 4,
        reps: "15 - 20",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Sit in machine with pad over lower thighs.",
          "Lower heels into deep bottom stretch.",
          "Raise heels up high squeezing soleus muscle."
        ],
        tips: "Bent knee position isolates soleus muscle."
      },
      {
        id: "d6-ex6",
        name: "Hanging Leg Raises",
        target: "Lower Abs & Hip Flexors",
        primaryMuscles: ["abs"],
        secondaryMuscles: ["obliques"],
        sets: 3,
        reps: "12 - 15",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Intermediate",
        instructions: [
          "Hang from pull-up bar with arms straight.",
          "Raise legs or knees up toward chest level by flexing abs.",
          "Lower legs slowly without swinging."
        ],
        tips: "Curling pelvis upward at top engages lower ab fibers."
      },
      {
        id: "d6-ex7",
        name: "Weighted Plank / Side Plank",
        target: "Core Stability & Obliques",
        primaryMuscles: ["abs", "obliques"],
        secondaryMuscles: ["lower_back"],
        sets: 3,
        reps: "45 - 60 sec hold",
        rest: 60,
        estimatedTime: 8,
        difficulty: "Beginner",
        instructions: [
          "Place forearms on floor with elbows under shoulders.",
          "Form straight line from head to heels.",
          "Contract glutes and brace abs tightly."
        ],
        tips: "Do not let hips sag or bow upward."
      }
    ]
  },
  {
    id: 7,
    dayOfWeek: "Sunday",
    dayShort: "SUN",
    dayName: "Sunday — Rest & Recovery",
    subtitle: "Active Recovery, Mobility & Mindset",
    targetMuscles: ["Recovery", "Flexibility", "Hydration"],
    totalDuration: 45,
    color: "#00d2ff",
    accentGlow: "rgba(0, 210, 255, 0.35)",
    gradient: "linear-gradient(135deg, #00d2ff 0%, #0072ff 100%)",
    icon: "Heart",
    isRestDay: true,
    description: "Rest day! Recharge muscles, rebuild glycogen stores, hydrate, and prepare your body for the next intense weekly split cycle.",
    recoveryTips: [
      {
        title: "Light Walking (30 min)",
        desc: "Take a relaxed outdoor walk to boost blood flow, flush lactic acid, and burn calories without central nervous system fatigue.",
        icon: "Footprints"
      },
      {
        title: "Dynamic & Static Stretching",
        desc: "Spend 15 minutes stretching hips, hamstrings, shoulders, and chest to maintain joint mobility.",
        icon: "Activity"
      },
      {
        title: "Hydration Goal: 3.5 Liters",
        desc: "Muscles are 75% water. Replenish electrolytes and drink water steadily throughout the rest day.",
        icon: "Droplet"
      },
      {
        title: "Protein & Sleep Focus",
        desc: "Aim for 7.5 - 9 hours of quality sleep. Muscle protein synthesis peaks during deep sleep cycles.",
        icon: "Moon"
      }
    ]
  }
];

export const MOTIVATIONAL_QUOTES = [
  { quote: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { quote: "The only bad workout is the one that didn't happen.", author: "Fitness Proverb" },
  { quote: "Success starts with self-discipline.", author: "Dwayne Johnson" },
  { quote: "Your body can stand almost anything. It's your mind that you have to convince.", author: "Anonymous" },
  { quote: "Consistency is what transforms average into extraordinary.", author: "Gym Quote" }
];

/**
 * Returns default day ID (1 for Monday through 7 for Sunday) matching current system day
 */
export function getTodayDayId() {
  const dayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday, ... 6 is Saturday
  if (dayIndex === 0) return 7; // Sunday -> Day 7
  return dayIndex; // Monday (1) -> Day 1, Tuesday (2) -> Day 2, etc.
}
