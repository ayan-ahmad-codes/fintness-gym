import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Flame, Trophy, Clock, CheckCircle2, RotateCcw, Calendar, Trash2 } from 'lucide-react';
import ProgressTracker from '../components/ProgressTracker';
import { WORKOUT_DAYS } from '../data/workoutData';

export default function Progress({
  completedWorkouts = [],
  streak = 0,
  workoutLogs = [],
  onResetProgress,
  onSelectDay
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="progress-analytics-page"
    >
      <div className="page-header-box">
        <div>
          <h1 className="page-title">Analytics & Progress Dashboard</h1>
          <p className="page-subtitle">
            Track your 6-day split completion rate, active workout streak, logged volume, and session history.
          </p>
        </div>

        <button 
          type="button" 
          className="reset-data-btn"
          onClick={() => {
            if (window.confirm("Are you sure you want to reset all completed workouts and start a fresh 6-day split cycle?")) {
              onResetProgress();
            }
          }}
        >
          <RotateCcw size={16} /> Reset Current Split Cycle
        </button>
      </div>

      {/* Main Progress Ring & Metrics */}
      <ProgressTracker
        completedWorkouts={completedWorkouts}
        streak={streak}
        workoutLogs={workoutLogs}
        onSelectDay={onSelectDay}
      />

      {/* Workout Logs History List */}
      <div className="history-section-card">
        <div className="section-header-row">
          <Calendar size={18} className="icon-cyan" />
          <h3>Workout Activity History</h3>
        </div>

        {workoutLogs.length === 0 ? (
          <div className="empty-history-notice">
            <Trophy size={36} className="empty-icon" />
            <h4>No Completed Workouts Logged Yet</h4>
            <p>Complete your first ~80 minute routine in Today's Workout tab to populate your analytics history!</p>
          </div>
        ) : (
          <div className="history-table-wrapper">
            <div className="history-table">
              <div className="table-head">
                <span>Date</span>
                <span>Workout Split</span>
                <span>Duration</span>
                <span>Status</span>
              </div>
              {workoutLogs.map((log, index) => {
                const dayObj = WORKOUT_DAYS.find(d => d.id === log.dayId) || {};
                return (
                  <div key={index} className="table-row">
                    <span className="log-date">{log.date || 'Today'}</span>
                    <span className="log-name">
                      <strong style={{ color: dayObj.color || '#00f2fe' }}>
                        Day {log.dayId} — {dayObj.dayName?.split(' — ')[1] || 'Workout'}
                      </strong>
                    </span>
                    <span className="log-duration">
                      <Clock size={12} /> {log.durationMinutes || 80} mins
                    </span>
                    <span className="log-status">
                      <CheckCircle2 size={14} className="check-cyan" /> Completed
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
