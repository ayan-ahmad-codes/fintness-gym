import React from 'react';
import { motion } from 'framer-motion';
import { Play, Dumbbell, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function Hero({ onOpenPlanner, onJoinClick }) {
  const scrollToPricing = () => {
    if (onJoinClick) {
      onJoinClick();
      return;
    }
    const elem = document.getElementById('pricing');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const elem = document.getElementById('about');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-hero-section">
      {/* Background Image Container with Gradient Overlays */}
      <div 
        className="hero-bg-image"
        style={{ backgroundImage: `url(${GYM_CONFIG.arnoldHeroBg})` }}
      />
      <div className="hero-overlay-dark" />
      <div className="hero-vignette-overlay" />

      {/* Hero Content Foreground */}
      <div className="hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-badge-pill"
        >
          <Sparkles size={14} className="cyan-text" />
          <span>PREMIUM BODYBUILDING & STRENGTH SANCTUARY</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-gym-title"
        >
          FITNESS <span className="highlight-glow">GYM</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-tagline"
        >
          "{GYM_CONFIG.tagline}"
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-cta-buttons"
        >
          <button
            type="button"
            className="hero-btn-primary"
            onClick={scrollToPricing}
          >
            <span>JOIN FITNESS GYM</span>
            <ArrowRight size={18} />
          </button>

          <button
            type="button"
            className="hero-btn-secondary"
            onClick={onOpenPlanner}
          >
            <Dumbbell size={18} />
            <span>VIEW WORKOUT PLAN</span>
          </button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="hero-scroll-indicator" onClick={scrollToAbout}>
        <span className="scroll-label">EXPLORE GYM</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} className="scroll-chevron" />
        </motion.div>
      </div>
    </section>
  );
}
