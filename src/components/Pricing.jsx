import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, UserCheck, ArrowRight, Sparkles } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function Pricing({ onJoinNow }) {
  const [includeTrainer, setIncludeTrainer] = useState(false);

  const { currency, baseMembership, trainerAddon, totalWithTrainer, baseFeatures, trainerFeatures } = GYM_CONFIG.pricing;

  const handleJoin = (planType) => {
    if (onJoinNow) {
      onJoinNow(planType);
      return;
    }
    window.open(GYM_CONFIG.contact.whatsappLink, '_blank');
  };

  return (
    <section id="pricing" className="landing-section-block pricing-section">
      <div className="landing-container">
        <div className="section-header-center">
          <span className="section-eyebrow">TRANSPARENT MEMBERSHIP</span>
          <h2 className="section-main-heading">
            MEMBERSHIP <span className="highlight-text">PLANS</span>
          </h2>
          <p className="section-description-text">
            Affordable, premium training access with zero hidden fees. Choose standard gym membership or add a dedicated personal trainer for maximum acceleration.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {/* Base Membership Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pricing-card standard-card"
          >
            <div className="pricing-card-header">
              <span className="plan-badge">STANDARD ACCESS</span>
              <h3 className="plan-title">Full Gym Membership</h3>
              <p className="plan-desc">Unlimited access to facility & free weights</p>
              <div className="price-tag-display">
                <span className="currency-sign">{currency}</span>
                <span className="price-amount">{baseMembership.toLocaleString()}</span>
                <span className="price-period">/ Month</span>
              </div>
            </div>

            <div className="pricing-features-list">
              {baseFeatures.map((feat, i) => (
                <div key={i} className="pricing-feature-item">
                  <Check size={16} className="check-icon-cyan" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="pricing-join-btn standard-btn"
              onClick={() => handleJoin('Standard Membership (Rs. 1,500)')}
            >
              <span>JOIN FOR {currency} {baseMembership.toLocaleString()}/MO</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Premium Special Trainer Add-on Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pricing-card premium-card highlighted-addon-card"
          >
            <div className="premium-top-ribbon">
              <Sparkles size={13} /> RECOMMENDED FOR RAPID RESULTS
            </div>

            <div className="pricing-card-header">
              <span className="plan-badge gold-badge">VIP TRAINER ADD-ON</span>
              <h3 className="plan-title">Gym + Special Trainer</h3>
              <p className="plan-desc">Base Gym Membership + Dedicated Personal Coach</p>
              
              <div className="price-tag-display">
                <span className="currency-sign">{currency}</span>
                <span className="price-amount">{totalWithTrainer.toLocaleString()}</span>
                <span className="price-period">/ Month</span>
              </div>
            </div>

            {/* Clear Transparent Cost Breakdown Box */}
            <div className="pricing-cost-breakdown-box">
              <div className="breakdown-line">
                <span>Gym Membership:</span>
                <strong>{currency} {baseMembership.toLocaleString()}/mo</strong>
              </div>
              <div className="breakdown-line highlight-addon">
                <span>Special Trainer Add-on:</span>
                <strong>+{currency} {trainerAddon.toLocaleString()}/mo</strong>
              </div>
              <div className="breakdown-divider" />
              <div className="breakdown-line total-line">
                <span>Total Combined Fee:</span>
                <strong className="total-highlight">{currency} {totalWithTrainer.toLocaleString()}/mo</strong>
              </div>
            </div>

            <div className="pricing-features-list">
              {trainerFeatures.map((feat, i) => (
                <div key={i} className="pricing-feature-item">
                  <UserCheck size={16} className="check-icon-amber" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="pricing-join-btn premium-btn"
              onClick={() => handleJoin('Membership + Special Trainer (Rs. 5,500)')}
            >
              <span>JOIN WITH TRAINER ({currency} {totalWithTrainer.toLocaleString()}/MO)</span>
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
