import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, Sparkles } from 'lucide-react';

export default function CTASection({ onOpenPlanner, onJoinClick }) {
  const handleJoin = () => {
    if (onJoinClick) {
      onJoinClick();
      return;
    }
    const elem = document.getElementById('pricing');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="landing-cta-full-section">
      <div className="cta-bg-pattern" />
      <div className="cta-overlay-dark" />

      <div className="landing-container relative-z">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-content-center"
        >
          <div className="cta-badge-pill">
            <Sparkles size={14} className="cyan-text" />
            <span>START YOUR TRANSFORMATION TODAY</span>
          </div>

          <h2 className="cta-banner-title">
            READY TO BUILD YOUR <span className="highlight-text">STRONGER SELF?</span>
          </h2>

          <p className="cta-banner-sub">
            Your transformation starts with the first workout. Step into Fitness Gym today and experience hardcore strength culture.
          </p>

          <div className="cta-buttons-row">
            <button
              type="button"
              className="cta-main-btn primary"
              onClick={handleJoin}
            >
              <span>JOIN FITNESS GYM</span>
              <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="cta-main-btn secondary"
              onClick={onOpenPlanner}
            >
              <Dumbbell size={18} />
              <span>VIEW WORKOUT PLAN</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
