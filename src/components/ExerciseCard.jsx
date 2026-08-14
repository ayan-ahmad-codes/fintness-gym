import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Check, Clock, ShieldAlert, Award, Play, Info, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExerciseCard({
  exercise,
  isCompleted = false,
  completedSets = [],
  onToggleComplete,
  onToggleSet,
  onStartRestTimer,
  onSelectMuscle
}) {
  const [expanded, setExpanded] = useState(false);

  const totalSets = exercise.sets || 4;

  const handleExerciseCompleteToggle = (e) => {
    e.stopPropagation();
    const newCompleted = !isCompleted;
    if (newCompleted) {
      // Trigger subtle celebratory confetti burst
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f2fe', '#ff0055', '#7000ff', '#00e676']
      });
    }
    onToggleComplete(exercise.id);
  };

  const handleSetCheck = (e, setIndex) => {
    e.stopPropagation();
    onToggleSet(exercise.id, setIndex);
    // Auto start rest timer when set is checked
    if (onStartRestTimer && exercise.rest) {
      onStartRestTimer(exercise.rest);
    }
  };

  const getDifficultyBadge = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return <span className="badge badge-beginner"><Award size={12} /> Beginner</span>;
      case 'intermediate':
        return <span className="badge badge-intermediate"><Flame size={12} /> Intermediate</span>;
      case 'advanced':
        return <span className="badge badge-advanced"><ShieldAlert size={12} /> Advanced</span>;
      default:
        return <span className="badge badge-intermediate">Intermediate</span>;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`exercise-card ${isCompleted ? 'completed-card' : ''}`}
    >
      {/* Header Bar */}
      <div className="exercise-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="header-left">
          <button
            type="button"
            className={`complete-checkbox-btn ${isCompleted ? 'checked' : ''}`}
            onClick={handleExerciseCompleteToggle}
            title={isCompleted ? 'Mark as incomplete' : 'Mark as completed'}
          >
            {isCompleted && <Check size={18} strokeWidth={3} />}
          </button>

          <div className="exercise-titles">
            <div className="title-row">
              <h3 className="exercise-name">{exercise.name}</h3>
              {getDifficultyBadge(exercise.difficulty)}
            </div>
            <div className="target-pills">
              <span className="target-pill primary-pill">
                Target: {exercise.target}
              </span>
              <span className="time-pill">
                <Clock size={12} /> {exercise.estimatedTime}m total
              </span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="quick-metrics">
            <span className="metric-chip">
              <strong>{exercise.sets}</strong> sets
            </span>
            <span className="metric-chip">
              <strong>{exercise.reps}</strong> reps
            </span>
            <span className="metric-chip rest-chip" onClick={(e) => { e.stopPropagation(); onStartRestTimer && onStartRestTimer(exercise.rest); }}>
              <Play size={10} fill="currentColor" /> {exercise.rest}s rest
            </span>
          </div>

          <button className="expand-btn">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* Interactive Set Tracker Row */}
      <div className="sets-tracker-bar">
        <span className="sets-tracker-label">Log Sets:</span>
        <div className="sets-buttons-grid">
          {Array.from({ length: totalSets }).map((_, idx) => {
            const isSetDone = completedSets.includes(idx);
            return (
              <button
                key={idx}
                type="button"
                className={`set-check-btn ${isSetDone ? 'set-done' : ''}`}
                onClick={(e) => handleSetCheck(e, idx)}
              >
                Set {idx + 1} {isSetDone ? <Check size={12} /> : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Expandable Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="exercise-card-details"
          >
            {/* Muscle Breakdown Badges */}
            <div className="details-section">
              <h4 className="section-title"><Info size={14} /> Muscle Groups Targeted</h4>
              <div className="muscle-tags-group">
                {exercise.primaryMuscles?.map((m) => (
                  <span 
                    key={m} 
                    className="muscle-tag primary"
                    onClick={() => onSelectMuscle && onSelectMuscle(m)}
                  >
                    Primary: {m.replace('_', ' ').toUpperCase()}
                  </span>
                ))}
                {exercise.secondaryMuscles?.map((m) => (
                  <span 
                    key={m} 
                    className="muscle-tag secondary"
                    onClick={() => onSelectMuscle && onSelectMuscle(m)}
                  >
                    Secondary: {m.replace('_', ' ').toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Step-by-Step Instructions */}
            {exercise.instructions && (
              <div className="details-section">
                <h4 className="section-title">Execution Instructions</h4>
                <ol className="instructions-list">
                  {exercise.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Pro Form Tips */}
            {exercise.tips && (
              <div className="details-section pro-tips-box">
                <strong>Pro Form Tip:</strong> {exercise.tips}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
