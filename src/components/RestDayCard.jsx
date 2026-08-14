import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Droplet, Moon, Footprints, Activity, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RestDayCard() {
  const [glassesDrunk, setGlassesDrunk] = useState(4);
  const totalGlasses = 8; // 8 x 400ml = ~3.2L

  const handleDrinkWater = (idx) => {
    if (idx + 1 === totalGlasses) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#00d2ff', '#0072ff']
      });
    }
    setGlassesDrunk(idx + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rest-day-container"
    >
      <div className="rest-hero-banner">
        <div className="hero-icon-glow">
          <Heart size={44} className="heart-icon-pulse" />
        </div>
        <h2 className="rest-hero-title">Day 7 — Active Recovery & Rest</h2>
        <p className="rest-hero-subtitle">
          "Muscles grow during rest, not in the gym." Take today to recharge your body, refuel your glycogen, and improve joint mobility.
        </p>
      </div>

      {/* Hydration Interactive Tracker */}
      <div className="rest-section-card hydration-card">
        <div className="section-title-row">
          <Droplet size={20} className="icon-cyan" />
          <div>
            <h3>Daily Hydration Tracker</h3>
            <span className="sub-text">Goal: 3.2 Liters (8 Glasses)</span>
          </div>
        </div>

        <div className="glasses-grid">
          {Array.from({ length: totalGlasses }).map((_, idx) => {
            const isFilled = idx < glassesDrunk;
            return (
              <button
                key={idx}
                type="button"
                className={`glass-btn ${isFilled ? 'filled' : ''}`}
                onClick={() => handleDrinkWater(idx)}
              >
                <Droplet size={18} fill={isFilled ? '#00d2ff' : 'transparent'} />
                <span>{isFilled ? <Check size={10} /> : `${(idx + 1) * 400}ml`}</span>
              </button>
            );
          })}
        </div>
        <div className="hydration-progress-bar">
          <div 
            className="hydration-fill" 
            style={{ width: `${(glassesDrunk / totalGlasses) * 100}%` }} 
          />
        </div>
      </div>

      {/* 4 Rest Pillars Grid */}
      <div className="rest-pillars-grid">
        <div className="pillar-card">
          <div className="pillar-header green">
            <Footprints size={22} />
            <h4>Light Walking</h4>
          </div>
          <p>
            Aim for 20 - 30 minutes of low-intensity outdoor walking. Increases blood flow, flushes metabolic waste, and elevates mood without provoking central nervous system fatigue.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-header purple">
            <Activity size={22} />
            <h4>Mobility & Stretching</h4>
          </div>
          <p>
            Perform 15 minutes of dynamic hamstrings, hips, chest, and shoulder mobility drills. Use a foam roller to release tight fascial tissue.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-header orange">
            <Moon size={22} />
            <h4>Quality Sleep (8 Hours)</h4>
          </div>
          <p>
            Human Growth Hormone (HGH) release reaches peak output during deep REM sleep stages. Turn off screens 30 minutes before bed.
          </p>
        </div>

        <div className="pillar-card">
          <div className="pillar-header blue">
            <ShieldCheck size={22} />
            <h4>Protein & Nutrition</h4>
          </div>
          <p>
            Maintain steady high protein intake (1.6 - 2.2g per kg bodyweight) even on rest days to supply essential amino acids for muscle tissue repair.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
