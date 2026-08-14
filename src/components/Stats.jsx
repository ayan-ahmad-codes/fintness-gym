import React from 'react';
import { motion } from 'framer-motion';
import { GYM_CONFIG } from '../data/gymData';

export default function Stats() {
  return (
    <section className="landing-section-block stats-section">
      <div className="landing-container">
        <div className="section-header-center">
          <span className="section-eyebrow">THE FITNESS GYM STANDARD</span>
          <h2 className="section-main-heading">
            WHY <span className="highlight-text">FITNESS GYM?</span>
          </h2>
          <p className="section-description-text">
            Numbers that reflect our dedication to physical excellence, intense training standards, and real member results.
          </p>
        </div>

        <div className="stats-grid">
          {GYM_CONFIG.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="stat-box-item"
            >
              <div className="stat-number-display">
                <span className="stat-number-val">{stat.value}</span>
                <span className="stat-number-suffix">{stat.suffix}</span>
              </div>
              <h3 className="stat-label-title">{stat.label}</h3>
              <span className="stat-sub-text">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
