import React from 'react';
import { Flame, Clock, Menu, Dumbbell, Award } from 'lucide-react';

export default function Navbar({ 
  onToggleSidebar, 
  activePage, 
  streak = 0,
  completedToday = false 
}) {
  const getPageTitle = (page) => {
    switch (page) {
      case 'dashboard': return 'Fitness Overview & Dashboard';
      case 'plan': return '6-Day Workout Split Schedule';
      case 'today': return "Today's Target Routine (~80 Min)";
      case 'progress': return 'Analytics & Streak Tracker';
      case 'muscle-map': return 'Interactive Muscle Target Map';
      case 'settings': return 'App Settings & Preferences';
      default: return 'Gym Workout Planner';
    }
  };

  return (
    <header className="app-navbar">
      <div className="navbar-left">
        <button 
          type="button" 
          className="mobile-menu-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu size={22} />
        </button>

        <div className="navbar-brand">
          <div className="brand-logo-glow">
            <Dumbbell size={22} className="brand-icon" />
          </div>
          <div className="brand-text">
            <h1 className="brand-title">PULSE<span className="cyan-text">FIT</span></h1>
            <span className="brand-subtitle">PRO 6-DAY SPLIT</span>
          </div>
        </div>
      </div>

      <div className="navbar-center-title">
        <h2>{getPageTitle(activePage)}</h2>
      </div>

      <div className="navbar-right">
        {/* Streak Badge */}
        <div className="nav-badge streak-nav-badge">
          <Flame size={16} className="flame-pulse" />
          <span>{streak} DAY STREAK</span>
        </div>

        {/* Workout Badge */}
        <div className={`nav-badge today-status-badge ${completedToday ? 'completed' : ''}`}>
          {completedToday ? (
            <>
              <Award size={15} />
              <span>TODAY DONE</span>
            </>
          ) : (
            <>
              <Clock size={15} />
              <span>~80 MIN GOAL</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
