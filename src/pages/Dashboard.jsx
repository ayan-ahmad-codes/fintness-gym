import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Flame, 
  Clock, 
  Target, 
  CheckCircle2, 
  Quote, 
  RefreshCw, 
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { WORKOUT_DAYS, MOTIVATIONAL_QUOTES } from '../data/workoutData';
import ProgressTracker from '../components/ProgressTracker';
import MuscleMap from '../components/MuscleMap';

export default function Dashboard({
  currentDayId,
  completedWorkouts = [],
  streak = 0,
  workoutLogs = [],
  onStartWorkout,
  onNavigateToPlan,
  onNavigateToMuscleMap
}) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const todayData = WORKOUT_DAYS.find(d => d.id === currentDayId) || WORKOUT_DAYS[0];
  const isTodayCompleted = completedWorkouts.includes(currentDayId);

  const shuffleQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
  };

  const currentQuote = MOTIVATIONAL_QUOTES[quoteIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="dashboard-page"
    >
      {/* Welcome Banner Card */}
      <div className="welcome-banner" style={{ background: todayData.gradient }}>
        <div className="banner-content">
          <div className="badge-row">
            <span className="banner-split-badge">
              <Sparkles size={14} /> 6-DAY HYPERTROPHY ROUTINE
            </span>
            <span className="banner-day-badge">CURRENT SPLIT: DAY {todayData.id}</span>
          </div>

          <h1 className="banner-title">
            Ready for <span className="highlight-text">{todayData.dayName}</span>?
          </h1>

          <p className="banner-description">
            {todayData.description} Targeted session crafted for ~{todayData.totalDuration} minutes.
          </p>

          <div className="banner-stats-row">
            <div className="banner-stat">
              <Clock size={16} />
              <span>~{todayData.totalDuration} Mins Duration</span>
            </div>
            <div className="banner-stat">
              <Target size={16} />
              <span>Target: {todayData.targetMuscles.join(', ')}</span>
            </div>
            <div className="banner-stat">
              <Flame size={16} />
              <span>{todayData.exercises?.length || 0} Exercises</span>
            </div>
          </div>

          <div className="banner-cta-group">
            <button
              type="button"
              className="banner-primary-btn"
              onClick={() => onStartWorkout(todayData.id)}
            >
              <Play size={18} fill="currentColor" />
              {isTodayCompleted ? "Review Today's Session" : "Start Today's Workout"}
            </button>

            <button
              type="button"
              className="banner-secondary-btn"
              onClick={onNavigateToPlan}
            >
              <Calendar size={18} /> View 6-Day Schedule
            </button>
          </div>
        </div>

        {/* Hero Background Accents */}
        <div className="banner-overlay-pattern" />
      </div>

      {/* Grid Layout: Today's Preview + Progress Analytics */}
      <div className="dashboard-grid">
        {/* Left Column: Today's Exercise Breakdown */}
        <div className="dash-col main-col">
          <div className="card-box">
            <div className="card-box-header">
              <div>
                <h3 className="card-box-title">Today's Workout Blueprint</h3>
                <span className="card-box-sub">
                  Day {todayData.id} • {todayData.subtitle}
                </span>
              </div>
              <button 
                type="button" 
                className="text-btn"
                onClick={() => onStartWorkout(todayData.id)}
              >
                Launch Routine <ArrowRight size={14} />
              </button>
            </div>

            {todayData.isRestDay ? (
              <div className="rest-notice-box">
                <ShieldAlert size={28} className="icon-cyan" />
                <div>
                  <h4>Day 7 is Active Rest & Recovery</h4>
                  <p>Replenish glycogen stores, perform mobility stretches, and log hydration.</p>
                </div>
              </div>
            ) : (
              <div className="today-exercises-preview-list">
                {todayData.exercises.map((ex, index) => (
                  <div key={ex.id} className="preview-exercise-row">
                    <span className="row-index">{index + 1}</span>
                    <div className="row-info">
                      <span className="row-name">{ex.name}</span>
                      <span className="row-target">
                        Target: <strong>{ex.target}</strong> ({ex.sets} sets × {ex.reps} reps)
                      </span>
                    </div>
                    <div className="row-time-chip">
                      <Clock size={12} /> {ex.estimatedTime}m
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Motivational Quote Box */}
          <div className="motivational-quote-card">
            <div className="quote-header">
              <Quote size={20} className="quote-icon" />
              <button 
                type="button" 
                className="shuffle-quote-btn"
                onClick={shuffleQuote}
                title="New Motivational Quote"
              >
                <RefreshCw size={14} /> Next Quote
              </button>
            </div>
            <p className="quote-text">"{currentQuote.quote}"</p>
            <span className="quote-author">— {currentQuote.author}</span>
          </div>
        </div>

        {/* Right Column: Progress & Interactive Muscle Map */}
        <div className="dash-col side-col">
          <ProgressTracker
            completedWorkouts={completedWorkouts}
            streak={streak}
            workoutLogs={workoutLogs}
            onSelectDay={onStartWorkout}
          />

          {/* Muscle Map Target Preview Box */}
          <div className="card-box muscle-preview-card">
            <div className="card-box-header">
              <h3 className="card-box-title">Target Muscles Today</h3>
              <button 
                type="button" 
                className="text-btn"
                onClick={onNavigateToMuscleMap}
              >
                Full Map <ArrowRight size={14} />
              </button>
            </div>
            <MuscleMap
              primaryMuscles={todayData.exercises ? todayData.exercises.flatMap(e => e.primaryMuscles) : []}
              secondaryMuscles={todayData.exercises ? todayData.exercises.flatMap(e => e.secondaryMuscles) : []}
              interactive={false}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
