import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Flame, Award, Zap, CheckCircle2 } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell size={24} />;
      case 'Flame': return <Flame size={24} />;
      case 'Award': return <Award size={24} />;
      case 'Zap': return <Zap size={24} />;
      default: return <Dumbbell size={24} />;
    }
  };

  return (
    <section id="about" className="landing-section-block about-section">
      <div className="landing-container">
        <div className="section-header-center">
          <span className="section-eyebrow">ABOUT FITNESS GYM</span>
          <h2 className="section-main-heading">
            TRAIN HARD. <span className="highlight-text">LIVE STRONG.</span>
          </h2>
          <p className="section-description-text">
            Fitness Gym is built for serious individuals who refuse to settle for mediocre results. We provide a dedicated, high-intensity environment engineered to accelerate your strength gains, muscle growth, physical condition, and lifelong discipline.
          </p>
        </div>

        {/* 4 Core Feature Cards */}
        <div className="features-grid">
          {GYM_CONFIG.features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                {getIcon(feature.icon)}
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.desc}</p>
              <div className="feature-card-footer">
                <CheckCircle2 size={14} className="cyan-icon" />
                <span>Verified Facility Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
