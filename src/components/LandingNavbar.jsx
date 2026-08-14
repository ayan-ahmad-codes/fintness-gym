import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { GYM_CONFIG } from '../data/gymData';

export default function LandingNavbar({ onOpenPlanner }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (sectionId === 'workout-planner') {
      if (onOpenPlanner) onOpenPlanner();
      else navigate('/workout');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`landing-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="landing-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="brand-icon-box">
              <Dumbbell size={24} className="brand-dumbell" />
            </div>
            <span className="brand-text-large">{GYM_CONFIG.name}</span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="landing-nav-links">
            <button type="button" className="nav-item-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button type="button" className="nav-item-btn" onClick={() => handleNavClick('about')}>About</button>
            <button type="button" className="nav-item-btn" onClick={() => handleNavClick('programs')}>Programs</button>
            <button type="button" className="nav-item-btn" onClick={() => handleNavClick('pricing')}>Pricing</button>
            <button type="button" className="nav-item-btn highlight-link" onClick={() => handleNavClick('workout-planner')}>Workout Plan</button>
            <button type="button" className="nav-item-btn" onClick={() => handleNavClick('contact')}>Contact</button>
          </nav>

          {/* CTA Actions */}
          <div className="landing-nav-actions">
            <button 
              type="button" 
              className="planner-nav-cta-btn"
              onClick={() => handleNavClick('workout-planner')}
            >
              <span>Workout Planner</span>
              <ArrowRight size={16} />
            </button>

            <button 
              type="button" 
              className="landing-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav-drawer"
          >
            <button type="button" className="mobile-nav-item" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</button>
            <button type="button" className="mobile-nav-item" onClick={() => handleNavClick('about')}>About Us</button>
            <button type="button" className="mobile-nav-item" onClick={() => handleNavClick('programs')}>Training Programs</button>
            <button type="button" className="mobile-nav-item" onClick={() => handleNavClick('pricing')}>Membership Pricing</button>
            <button type="button" className="mobile-nav-item highlight" onClick={() => handleNavClick('workout-planner')}>6-Day Workout Planner</button>
            <button type="button" className="mobile-nav-item" onClick={() => handleNavClick('contact')}>Location & Contact</button>

            <button 
              type="button" 
              className="mobile-join-btn"
              onClick={() => handleNavClick('pricing')}
            >
              JOIN FITNESS GYM NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
