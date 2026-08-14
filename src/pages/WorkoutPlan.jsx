import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Target, Play, CheckCircle2, ChevronDown, ChevronUp, Filter, Sparkles } from 'lucide-react';
import { WORKOUT_DAYS } from '../data/workoutData';

export default function WorkoutPlan({ 
  completedWorkouts = [], 
  onSelectDayToWorkout 
}) {
  const [selectedMuscleFilter, setSelectedMuscleFilter] = useState('ALL');
  const [expandedDayId, setExpandedDayId] = useState(1);

  const muscleFilters = ['ALL', 'CHEST', 'BACK', 'LEGS', 'SHOULDERS', 'TRICEPS', 'BICEPS', 'CORE'];

  const filteredDays = WORKOUT_DAYS.filter(day => {
    if (selectedMuscleFilter === 'ALL') return true;
    if (day.isRestDay) return true;
    return day.targetMuscles.some(m => m.toUpperCase().includes(selectedMuscleFilter));
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="workout-plan-page"
    >
      <div className="page-header-box">
        <div>
          <h1 className="page-title">6-Day Workout Split Schedule</h1>
          <p className="page-subtitle">
            Scientifically balanced 6-day hypertrophic routine designed for approximately 80 minutes per session.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-bar">
        <span className="filter-label"><Filter size={14} /> Filter Target:</span>
        <div className="filter-buttons">
          {muscleFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${selectedMuscleFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedMuscleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 6-Day List Cards */}
      <div className="plan-days-list">
        {filteredDays.map((day) => {
          const isCompleted = completedWorkouts.includes(day.id);
          const isExpanded = expandedDayId === day.id;

          return (
            <motion.div
              key={day.id}
              layout
              className={`plan-day-card ${isCompleted ? 'completed-day' : ''} ${day.isRestDay ? 'rest-day-card-item' : ''}`}
            >
              <div 
                className="plan-day-header"
                onClick={() => setExpandedDayId(isExpanded ? null : day.id)}
              >
                <div className="header-left-info">
                  <div className="day-badge-chip" style={{ backgroundColor: day.color }}>
                    Day {day.id}
                  </div>

                  <div className="day-name-titles">
                    <div className="title-inline">
                      <h3>{day.dayName}</h3>
                      {isCompleted && (
                        <span className="done-badge">
                          <CheckCircle2 size={13} /> Completed
                        </span>
                      )}
                    </div>
                    <span className="subtitle-text">{day.subtitle}</span>
                  </div>
                </div>

                <div className="header-right-info">
                  <div className="specs-group">
                    <span className="spec-chip">
                      <Clock size={13} /> ~{day.totalDuration}m
                    </span>
                    <span className="spec-chip">
                      <Target size={13} /> {day.isRestDay ? 'Recovery' : `${day.exercises?.length || 0} Exercises`}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="launch-day-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDayToWorkout(day.id);
                    }}
                  >
                    <Play size={14} fill="currentColor" /> Launch
                  </button>

                  <button className="expand-chevron-btn">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>

              {/* Accordion Expanded Exercise List */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="plan-day-body"
                  >
                    <p className="day-desc">{day.description}</p>

                    {!day.isRestDay && (
                      <div className="exercises-table-grid">
                        <div className="table-header">
                          <span>Exercise</span>
                          <span>Target</span>
                          <span>Sets × Reps</span>
                          <span>Rest</span>
                          <span>Time</span>
                        </div>
                        {day.exercises.map((ex, idx) => (
                          <div key={ex.id} className="table-row">
                            <span className="ex-name">{idx + 1}. {ex.name}</span>
                            <span className="ex-target">{ex.target}</span>
                            <span className="ex-sets">{ex.sets} sets × {ex.reps}</span>
                            <span className="ex-rest">{ex.rest}s</span>
                            <span className="ex-time">{ex.estimatedTime}m</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
