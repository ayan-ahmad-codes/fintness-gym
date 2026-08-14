import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Dumbbell, Play, Target, RotateCcw, Info } from 'lucide-react';
import MuscleMap from '../components/MuscleMap';
import { WORKOUT_DAYS } from '../data/workoutData';

export default function MuscleMapPage({ onSelectDayToWorkout }) {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [selectedMuscleName, setSelectedMuscleName] = useState('All Muscle Groups');

  // Collect all exercises matching selected muscle
  const allExercises = WORKOUT_DAYS.flatMap(day => 
    (day.exercises || []).map(ex => ({ ...ex, dayId: day.id, dayName: day.dayName }))
  );

  const matchedExercises = selectedMuscle
    ? allExercises.filter(ex => 
        ex.primaryMuscles.includes(selectedMuscle) || ex.secondaryMuscles.includes(selectedMuscle)
      )
    : [];

  const handleMuscleClick = (muscleId, muscleName) => {
    setSelectedMuscle(muscleId);
    setSelectedMuscleName(muscleName);
  };

  const resetSelection = () => {
    setSelectedMuscle(null);
    setSelectedMuscleName('All Muscle Groups');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="muscle-map-page"
    >
      <div className="page-header-box">
        <div>
          <h1 className="page-title">Interactive Muscle Map Visualizer</h1>
          <p className="page-subtitle">
            Click on any muscle group on the front or back anatomical body map below to isolate exercises targeting that region.
          </p>
        </div>

        {selectedMuscle && (
          <button type="button" className="reset-filter-btn" onClick={resetSelection}>
            <RotateCcw size={14} /> Clear Selection
          </button>
        )}
      </div>

      <div className="muscle-page-grid">
        {/* SVG Muscle Map Visualizer */}
        <div className="map-card-wrapper">
          <div className="map-instruction-bar">
            <Info size={16} className="icon-cyan" />
            <span>
              {selectedMuscle 
                ? `Currently Selected: ${selectedMuscleName.toUpperCase()} (Primary & Secondary)` 
                : "Click any body part below to view exercises"}
            </span>
          </div>

          <MuscleMap
            primaryMuscles={selectedMuscle ? [selectedMuscle] : []}
            secondaryMuscles={[]}
            onMuscleClick={handleMuscleClick}
            selectedMuscleFilter={selectedMuscle}
            interactive={true}
          />
        </div>

        {/* Exercises List for Selected Muscle */}
        <div className="matched-exercises-column">
          <div className="matched-header">
            <h3>Targeted Exercises ({matchedExercises.length})</h3>
            <span className="matched-sub">{selectedMuscleName} Focus</span>
          </div>

          {!selectedMuscle ? (
            <div className="select-prompt-card">
              <Activity size={32} className="prompt-icon" />
              <h4>Select a Muscle Group</h4>
              <p>Click on Chest, Shoulders, Lats, Biceps, Quads, or Hamstrings on the body map to explore exercises.</p>
            </div>
          ) : matchedExercises.length === 0 ? (
            <div className="no-matches-card">
              <p>No specific exercises found targeting this muscle group in the current 6-day split.</p>
            </div>
          ) : (
            <div className="matched-exercises-scroll">
              {matchedExercises.map((ex) => {
                const isPrimary = ex.primaryMuscles.includes(selectedMuscle);
                return (
                  <div key={ex.id} className="matched-exercise-card">
                    <div className="ex-top-row">
                      <h4 className="ex-name">{ex.name}</h4>
                      <span className={`target-role-badge ${isPrimary ? 'primary' : 'secondary'}`}>
                        {isPrimary ? 'Primary Target' : 'Secondary Assist'}
                      </span>
                    </div>

                    <p className="ex-location">Included in: <strong>{ex.dayName}</strong></p>

                    <div className="ex-specs-row">
                      <span>{ex.sets} Sets</span>
                      <span>{ex.reps} Reps</span>
                      <span>{ex.rest}s Rest</span>
                    </div>

                    <button
                      type="button"
                      className="launch-ex-btn"
                      onClick={() => onSelectDayToWorkout(ex.dayId)}
                    >
                      <Play size={12} fill="currentColor" /> Open Day {ex.dayId} Routine
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
