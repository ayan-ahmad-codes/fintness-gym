import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Shield, Activity, UserCheck, ArrowRight } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function Programs({ onOpenPlanner, onSelectProgram }) {
  const getProgramIcon = (iconName) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell size={28} />;
      case 'Shield': return <Shield size={28} />;
      case 'Activity': return <Activity size={28} />;
      case 'UserCheck': return <UserCheck size={28} />;
      default: return <Dumbbell size={28} />;
    }
  };

  return (
    <section id="programs" className="landing-section-block programs-section">
      <div className="landing-container">
        <div className="section-header-center">
          <span className="section-eyebrow">OUR SPECIALIZED DISCIPLINES</span>
          <h2 className="section-main-heading">
            TRAIN <span className="highlight-text">YOUR WAY</span>
          </h2>
          <p className="section-description-text">
            Whether your objective is heavy compound strength, pure muscle hypertrophy, extreme conditioning, or dedicated 1-on-1 mentorship, we offer specialized programs engineered for real physical results.
          </p>
        </div>

        {/* 4 Program Cards */}
        <div className="programs-cards-grid">
          {GYM_CONFIG.programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="program-card"
            >
              <div className="program-card-header">
                <div className="program-icon-box">
                  {getProgramIcon(program.icon)}
                </div>
                <span className="program-badge-pill">{program.badge}</span>
              </div>

              <div className="program-card-body">
                <span className="program-subtitle">{program.subtitle}</span>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-desc">{program.desc}</p>
              </div>

              <div className="program-card-footer">
                <button
                  type="button"
                  className="program-learn-btn"
                  onClick={() => {
                    if (onSelectProgram) onSelectProgram(program.id);
                    else onOpenPlanner();
                  }}
                >
                  <span>Explore Routine</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
