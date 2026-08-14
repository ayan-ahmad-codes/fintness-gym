import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  Dumbbell, 
  TrendingUp, 
  Activity, 
  Settings as SettingsIcon,
  X,
  Flame,
  ChevronRight
} from 'lucide-react';
import { WORKOUT_DAYS } from '../data/workoutData';

export default function Sidebar({ 
  activePage, 
  onNavigate, 
  isOpen, 
  onClose,
  activeDayId = 1
}) {
  const currentDayObj = WORKOUT_DAYS.find(d => d.id === activeDayId) || WORKOUT_DAYS[0];

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'plan', label: 'Weekly Workout Plan', icon: Calendar },
    { id: 'today', label: "Today's Routine", icon: Dumbbell, badge: currentDayObj.dayOfWeek },
    { id: 'progress', label: 'Progress & Analytics', icon: TrendingUp },
    { id: 'muscle-map', label: 'Muscle Visualizer', icon: Activity },
    { id: 'settings', label: 'Settings', icon: SettingsIcon }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    if (window.innerWidth <= 1024 && onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="sidebar-mobile-backdrop"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <aside className={`app-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="brand-logo-glow">
              <Dumbbell size={20} className="brand-icon" />
            </div>
            <span className="brand-title">PULSE<span className="cyan-text">FIT</span></span>
          </div>
          <button type="button" className="close-mobile-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group-label">MAIN NAVIGATION</div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`nav-link-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <div className="nav-link-left">
                  <Icon size={19} className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </div>
                {item.badge ? (
                  <span className="nav-badge-pill">{item.badge}</span>
                ) : (
                  <ChevronRight size={14} className="chevron-icon" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Motivational Footer Widget */}
        <div className="sidebar-footer-card">
          <div className="footer-card-header">
            <Flame size={16} className="flame-icon" />
            <span>WEEKLY HYPERTROPHY ROUTINE</span>
          </div>
          <p className="footer-card-text">
            Stay consistent. 80 minutes of total focus every single session.
          </p>
        </div>
      </aside>
    </>
  );
}
