import React from 'react';
import { Dumbbell, MapPin, Mail, Phone, MessageSquare, ExternalLink, ArrowUp } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function Footer({ onOpenPlanner }) {
  const scrollToSection = (id) => {
    if (id === 'workout-planner') {
      if (onOpenPlanner) onOpenPlanner();
      return;
    }
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="landing-footer-block">
      <div className="landing-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="brand-icon-box">
                <Dumbbell size={22} className="brand-dumbell" />
              </div>
              <span className="brand-text-large">{GYM_CONFIG.name}</span>
            </div>
            <p className="footer-brand-desc">
              A hardcore bodybuilding & strength sanctuary dedicated to progressive overload, muscle hypertrophy, and unbreakable mental discipline.
            </p>
            <div className="footer-socials">
              <span className="social-tag">#BuildStrength</span>
              <span className="social-tag">#FitnessGym</span>
              <span className="social-tag">#NoExcuses</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
              <li><button onClick={() => scrollToSection('programs')}>Training Programs</button></li>
              <li><button onClick={() => scrollToSection('pricing')}>Membership Pricing</button></li>
              <li><button onClick={() => scrollToSection('workout-planner')} className="highlight-foot">6-Day Workout Plan</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contact & Location</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Information</h4>
            <div className="contact-items">
              {/* Email */}
              <div className="contact-item">
                <Mail size={18} className="cyan-icon" />
                <div>
                  <span className="contact-lbl">Email Address</span>
                  <a href={`mailto:${GYM_CONFIG.contact.email}`} className="contact-val">
                    {GYM_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              {/* Location (Google Maps Link) */}
              <div className="contact-item">
                <MapPin size={18} className="pink-icon" />
                <div>
                  <span className="contact-lbl">Gym Location</span>
                  <a 
                    href={GYM_CONFIG.contact.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-maps-link"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* WhatsApp Link displaying exact 03xxxxxxxxx text */}
              <div className="contact-item">
                <MessageSquare size={18} className="amber-icon" />
                <div>
                  <span className="contact-lbl">WhatsApp Inquiries</span>
                  <a 
                    href={GYM_CONFIG.contact.whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-val whatsapp-link"
                  >
                    {GYM_CONFIG.contact.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © 2026 Fitness Gym. All Rights Reserved.
          </p>

          <button 
            type="button"
            className="back-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
