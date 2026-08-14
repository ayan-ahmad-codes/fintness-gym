import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Clock, Target, Activity, Flame, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WorkoutCTA({ onOpenPlanner }) {
  const highlights = [
    { label: "6-Day Workout Split", desc: "Push, Pull, Legs & Target Hypertrophy routines" },
    { label: "Exercise & Set Tracking", desc: "Log sets, reps, and check off completed exercises" },
    { label: "Built-in Workout Timer", desc: "Session stopwatch & set rest countdown ring" },
    { label: "Anatomical Muscle Map", desc: "Interactive SVG targeting primary & secondary muscles" },
    { label: "Progress Analytics", desc: "Weekly streak tracking & monthly activity calendar" },
    { label: "~80 Minutes Daily", desc: "Balanced sessions designed for high intensity" }
  ];

  return (
    <section id="workout-planner" className="landing-section-block workout-cta-section">
      <div className="landing-container">
        <div className="workout-cta-wrapper-card">
          <div className="cta-left-content">
            <span className="section-eyebrow">DIGITAL FITNESS APP INTEGRATION</span>
            <h2 className="cta-heading">
              YOUR WORKOUT. <br />
              YOUR DISCIPLINE. <br />
              <span className="highlight-text">YOUR PROGRESS.</span>
            </h2>
            <p className="cta-description">
              Fitness Gym members get full access to our built-in 6-day hypertrophy workout planner. Designed for structured 80-minute daily routines with exercise set logging, SVG muscle targeting, stopwatch, and streak analytics.
            </p>

            <div className="highlights-grid">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <CheckCircle2 size={16} className="cyan-icon" />
                  <div>
                    <strong>{item.label}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="open-planner-btn"
              onClick={onOpenPlanner}
            >
              <Dumbbell size={20} />
              <span>OPEN WORKOUT PLANNER</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Visual Card Showcase */}
          <div className="cta-right-preview-card">
            <div className="preview-card-top">
              <Activity size={20} className="cyan-icon" />
              <span>PULSEFIT PLANNER ENGINE</span>
            </div>

            <div className="preview-day-pill">
              <Flame size={16} className="flame-icon" />
              <span>CURRENT SPLIT: 6-DAY HYPERTROPHY</span>
            </div>

            <div className="preview-mini-stats">
              <div className="mini-box">
                <Clock size={16} className="cyan-icon" />
                <span>~80 Mins</span>
              </div>
              <div className="mini-box">
                <Target size={16} className="pink-icon" />
                <span>6 Days / Wk</span>
              </div>
              <div className="mini-box">
                <Flame size={16} className="amber-icon" />
                <span>Set Logger</span>
              </div>
            </div>

            <div className="preview-cta-foot">
              <span>Ready to start today's routine?</span>
              <button onClick={onOpenPlanner} className="mini-launch-btn">Launch App</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
