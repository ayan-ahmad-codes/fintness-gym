# PulseFit Pro — 6-Day Gym Workout Planner & Dashboard 🏋️⚡

A modern, high-performance, dark gym-themed **6-Day Workout Planner Web Application** built with **React.js**, **Vite**, **Lucide React**, **Framer Motion**, and **LocalStorage**.

Designed specifically for a structured **80 minutes per day** hypertrophy split with clear muscle targeting, interactive anatomical SVG body visualizers, set loggers, built-in rest countdown timers with audio alerts, and streak analytics.

---

## 🌟 Key Features

1. **Modern Dashboard**
   - Welcome banner with active 6-day split status & streak counter
   - Today's routine preview (~80 min target duration)
   - Daily motivational fitness quotes with instant shuffle
   - Quick stats cards & interactive muscle map target preview

2. **Scientifically Structured 6-Day Workout Split (~80 Min/Day)**
   - **Day 1 — Push**: Chest, Shoulders & Triceps (Bench Press, Incline DB Press, Flyes, OHP, Lateral Raises, Pushdowns, Overhead Extensions)
   - **Day 2 — Pull**: Back, Biceps & Rear Delts (Lat Pulldowns, Cable Rows, Bent-over Rows, Face Pulls, DB Curls, Hammer Curls, Rear Delt Flyes)
   - **Day 3 — Legs**: Quads, Hamstrings, Glutes & Calves (Barbell Squats, Leg Press, RDLs, Leg Extensions, Lying Hamstring Curls, Standing Calf Raises, Lunges)
   - **Day 4 — Chest & Triceps**: Upper Chest, Dips & Tricep Hypertrophy (Incline Bench, Flat DB Press, Chest Dips, Low-to-High Flyes, Skullcrushers, Rope Pressdowns, Close Pushups)
   - **Day 5 — Back & Biceps**: Lat Width, Back Thickness & Bicep Peak (Pull-Ups/Pulldowns, T-Bar Rows, 1-Arm Rows, Straight-Arm Pullovers, Incline Curls, Preacher Curls, Shrugs)
   - **Day 6 — Shoulders, Legs & Core**: 360° Delts, Legs & Core Stability (Arnold Press, Cable Lateral Raises, Goblet Squats, Single-Leg RDLs, Seated Calf Raises, Hanging Leg Raises, Planks)
   - **Day 7 — Rest & Recovery**: Active recovery guide, light walking, mobility stretching, interactive hydration tracker (3.2L goal), sleep & protein advice

3. **Expandable Exercise Cards**
   - Target muscle breakdown (Primary & Secondary badges)
   - Recommended sets, reps, rest time, estimated duration, and difficulty level
   - Execution step-by-step instructions & pro form tips
   - Interactive set-by-set check logger (Set 1, Set 2, Set 3, Set 4) that auto-triggers the rest timer!

4. **Interactive SVG Muscle Target Visualizer**
   - Vector anatomical human body outline (Front & Back view)
   - Primary target muscle highlight (Glowing vibrant neon pulse)
   - Secondary target muscle highlight (Subtle amber accent)
   - Clickable muscle selector on the Muscle Visualizer page to isolate exercises

5. **Built-in Workout & Rest Timer**
   - Active Session Stopwatch tracking overall workout duration
   - Set Rest Countdown Timer (60s, 90s, 120s preset buttons + +30s extension)
   - Audio beep alert & celebratory confetti pulse upon rest completion
   - Sticky floating bottom bar + expanded modal control widget

6. **Progress Tracking & Persistence**
   - Active streak counter
   - Circular completion progress ring (0% to 100% of 6-day split)
   - LocalStorage persistence for completed exercises, set check-offs, and workout log history
   - Data export (.json backup) and reset options

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Modern CSS3 (Dark Gym Aesthetics, Glassmorphism, CSS Custom Properties)
- **Icons**: Lucide React
- **Animations**: Framer Motion & Canvas Confetti
- **State & Persistence**: React Hooks + LocalStorage API

---

## 🚀 Local Development Setup

Ensure you have **Node.js** (v18+) installed.

```bash
# 1. Install dependencies
npm install

# 2. Start Vite local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 📦 Production Build & Vercel Deployment

### Local Production Build Test
To test the production build locally:

```bash
npm run build
```

This compiles the static assets into the `dist/` directory.

### Deploying to Vercel

This app is pre-configured for seamless **Vercel** deployment with `vercel.json` SPA rewrite rules.

1. Push this code repository to GitHub/GitLab/Bitbucket.
2. Sign in to your [Vercel Dashboard](https://vercel.com).
3. Click **"Add New Project"** and import the repository.
4. Keep default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Vercel will automatically build and deploy your application!
