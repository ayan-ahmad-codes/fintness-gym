import React from 'react';
import { motion } from 'framer-motion';
import { Flame, CheckCircle2, Trophy, Clock, Calendar, Award } from 'lucide-react';
import { WORKOUT_DAYS } from '../data/workoutData';

export default function ProgressTracker({ 
  completedWorkouts = [], 
  streak = 0, 
  workoutLogs = [],
  onSelectDay 
}) {
  const totalDays = 6; // Excluding Sunday Rest
  const completedCount = completedWorkouts.length;
  const progressPercentage = Math.round((completedCount / totalDays) * 100);

  const totalMinutesLogged = workoutLogs.reduce((acc, log) => acc + (log.durationMinutes || 80), 0);
  const totalSetsCompleted = workoutLogs.reduce((acc, log) => acc + (log.completedSetsCount || 25), 0);

  return (
    <div className="progress-tracker-card">
      <div className="tracker-top-header">
        <div className="header-badge-group">
          <div className="streak-badge">
            <Flame size={20} className="flame-icon" />
            <div className="streak-info">
              <span className="streak-count">{streak} DAY</span>
              <span className="streak-sub">STREAK</span>
            </div>
          </div>

          <div className="level-badge">
            <Trophy size={18} className="trophy-icon" />
            <div className="level-info">
              <span className="level-name">PRO ATHLETE</span>
              <span className="level-sub">Weekly Split Cycle</span>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-metrics-grid">
        {/* Animated Circular Completion Progress */}
        <div className="circular-progress-box">
          <div className="circle-svg-wrapper">
            <svg viewBox="0 0 120 120" className="progress-circle-svg">
              <circle cx="60" cy="60" r="50" className="bg-ring" />
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                className="fill-ring"
                strokeDasharray="314"
                strokeDashoffset={314 - (314 * progressPercentage) / 100}
                initial={{ strokeDashoffset: 314 }}
                animate={{ strokeDashoffset: 314 - (314 * progressPercentage) / 100 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </svg>
            <div className="circle-inner-content">
              <span className="percent-text">{progressPercentage}%</span>
              <span className="percent-sub">{completedCount}/{totalDays} DAYS</span>
            </div>
          </div>
          <span className="box-title">Weekly Split Completion</span>
        </div>

        {/* Quick Stat Blocks */}
        <div className="stat-cards-column">
          <div className="mini-stat-card">
            <div className="stat-icon-wrapper cyan">
              <CheckCircle2 size={18} />
            </div>
            <div className="stat-data">
              <span className="stat-val">{completedCount} Workouts</span>
              <span className="stat-lbl">Completed This Week</span>
            </div>
          </div>

          <div className="mini-stat-card">
            <div className="stat-icon-wrapper orange">
              <Clock size={18} />
            </div>
            <div className="stat-data">
              <span className="stat-val">{totalMinutesLogged} Mins</span>
              <span className="stat-lbl">Total Training Time</span>
            </div>
          </div>

          <div className="mini-stat-card">
            <div className="stat-icon-wrapper purple">
              <Award size={18} />
            </div>
            <div className="stat-data">
              <span className="stat-val">{totalSetsCompleted} Sets</span>
              <span className="stat-lbl">Heavy Sets Logged</span>
            </div>
          </div>
        </div>
      </div>

      {/* Monday - Sunday Split Weekly Calendar */}
      <div className="weekly-calendar-tracker">
        <h4 className="calendar-title">
          <Calendar size={15} /> Weekly Workout Overview (Mon — Sun)
        </h4>
        <div className="days-row">
          {WORKOUT_DAYS.map((day) => {
            const isDone = completedWorkouts.includes(day.id);
            const isRest = day.isRestDay;

            return (
              <motion.button
                key={day.id}
                type="button"
                whileHover={{ scale: 1.05 }}
                className={`day-node ${isDone ? 'done' : ''} ${isRest ? 'rest' : ''}`}
                onClick={() => onSelectDay && onSelectDay(day.id)}
              >
                <span className="day-num">{day.dayShort}</span>
                <span className="day-name">{day.dayName.split(' — ')[1] || 'Rest'}</span>
                <div className="node-status-icon">
                  {isDone ? (
                    <CheckCircle2 size={14} className="check-cyan" />
                  ) : isRest ? (
                    <span className="rest-dot"></span>
                  ) : (
                    <span className="empty-dot"></span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
