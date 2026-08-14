import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle2, Clock, Dumbbell, Award, RotateCcw, Activity, Calendar as CalendarIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WORKOUT_DAYS } from '../data/workoutData';
import ExerciseCard from '../components/ExerciseCard';
import MuscleMap from '../components/MuscleMap';
import RestDayCard from '../components/RestDayCard';
import MiniCalendar from '../components/MiniCalendar';

export default function TodayWorkout({
  activeDayId = 1,
  onChangeDay,
  completedExercises = {},
  completedSetsMap = {},
  completedWorkouts = [],
  workoutLogs = [],
  onToggleExerciseComplete,
  onToggleSet,
  onCompleteDayWorkout,
  onStartRestTimer
}) {
  const [selectedExerciseForMap, setSelectedExerciseForMap] = useState(null);

  const currentDay = WORKOUT_DAYS.find(d => d.id === activeDayId) || WORKOUT_DAYS[0];
  const isDayFullyCompleted = completedWorkouts.includes(currentDay.id);

  const currentDayExercises = currentDay.exercises || [];
  const completedExercisesForDay = currentDayExercises.filter(ex => completedExercises[ex.id]);
  const dayCompletionPercent = currentDayExercises.length > 0 
    ? Math.round((completedExercisesForDay.length / currentDayExercises.length) * 100) 
    : 0;

  const todayStr = new Date().toISOString().split('T')[0];

  const handleFinishWorkoutDay = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f2fe', '#ff0055', '#7000ff', '#00e676', '#ffb703']
    });
    onCompleteDayWorkout(currentDay.id, currentDay.totalDuration);
  };

  // Determine muscle highlight target for muscle map preview
  const primaryMuscles = selectedExerciseForMap
    ? selectedExerciseForMap.primaryMuscles
    : currentDayExercises.flatMap(e => e.primaryMuscles);

  const secondaryMuscles = selectedExerciseForMap
    ? selectedExerciseForMap.secondaryMuscles
    : currentDayExercises.flatMap(e => e.secondaryMuscles);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="today-workout-page"
    >
      {/* Day Selector Tabs (Monday through Sunday) */}
      <div className="day-picker-tabs">
        {WORKOUT_DAYS.map((day) => {
          const isDone = completedWorkouts.includes(day.id);
          const isActive = day.id === activeDayId;
          return (
            <button
              key={day.id}
              type="button"
              className={`day-tab-btn ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
              onClick={() => onChangeDay(day.id)}
            >
              <span className="tab-day-name">{day.dayOfWeek}</span>
              <span className="tab-sub">{day.dayName.split(' — ')[1] || 'Rest'}</span>
              {isDone && <CheckCircle2 size={12} className="tab-check" />}
            </button>
          );
        })}
      </div>

      {/* Routine Banner Header */}
      <div className="today-header-banner" style={{ borderLeftColor: currentDay.color }}>
        <div className="banner-title-group">
          <span className="banner-tag">ACTIVE ROUTINE SESSION (~80 MINS)</span>
          <h2 className="banner-main-title">{currentDay.dayName} — {currentDay.subtitle}</h2>
          <p className="banner-desc">{currentDay.description}</p>
        </div>

        {!currentDay.isRestDay && (
          <div className="today-progress-widget">
            <div className="bar-wrapper">
              <div className="bar-label-row">
                <span>Session Progress</span>
                <strong>{dayCompletionPercent}%</strong>
              </div>
              <div className="progress-bar-track">
                <motion.div
                  className="progress-bar-fill"
                  style={{ width: `${dayCompletionPercent}%`, backgroundColor: currentDay.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${dayCompletionPercent}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              className={`finish-workout-btn ${isDayFullyCompleted ? 'completed-btn' : ''}`}
              onClick={handleFinishWorkoutDay}
            >
              {isDayFullyCompleted ? (
                <>
                  <Award size={18} /> WORKOUT FINISHED!
                </>
              ) : (
                <>
                  <CheckCircle2 size={18} /> MARK {currentDay.dayOfWeek.toUpperCase()} AS COMPLETED
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Main Content Layout */}
      {currentDay.isRestDay ? (
        <RestDayCard />
      ) : (
        <div className="workout-active-layout">
          {/* Exercises Column */}
          <div className="workout-exercises-col">
            <div className="col-header-bar">
              <h3>{currentDay.dayOfWeek} Routine Exercises ({currentDayExercises.length})</h3>
              <span className="subtitle">Click an exercise to inspect targeted muscles</span>
            </div>

            <div className="exercises-vertical-list">
              {currentDayExercises.map((exercise) => (
                <div 
                  key={exercise.id}
                  onClick={() => setSelectedExerciseForMap(exercise)}
                  className={`exercise-wrapper-item ${selectedExerciseForMap?.id === exercise.id ? 'active-inspected' : ''}`}
                >
                  <ExerciseCard
                    exercise={exercise}
                    isCompleted={!!completedExercises[exercise.id]}
                    completedSets={completedSetsMap[exercise.id] || []}
                    onToggleComplete={onToggleExerciseComplete}
                    onToggleSet={onToggleSet}
                    onStartRestTimer={onStartRestTimer}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Side Muscle Target Visualizer */}
          <div className="workout-map-col">
            <div className="sticky-map-card">
              <div className="map-card-header">
                <Activity size={18} className="icon-cyan" />
                <div>
                  <h4>Anatomical Target Visualizer</h4>
                  <span className="sub">
                    {selectedExerciseForMap ? `Focusing: ${selectedExerciseForMap.name}` : `${currentDay.dayOfWeek} Targets`}
                  </span>
                </div>
              </div>

              {selectedExerciseForMap && (
                <button 
                  type="button"
                  className="reset-inspection-btn"
                  onClick={() => setSelectedExerciseForMap(null)}
                >
                  <RotateCcw size={12} /> Clear Focus Filter
                </button>
              )}

              <MuscleMap
                primaryMuscles={primaryMuscles}
                secondaryMuscles={secondaryMuscles}
                interactive={false}
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Workout Launch Calendar Tracker */}
      <div className="launched-calendar-section">
        <div className="section-title-bar">
          <CalendarIcon size={20} className="icon-cyan" />
          <div>
            <h3>Workout Launch & Activity Calendar</h3>
            <p className="subtitle">Every launched routine & completed workout is automatically highlighted on your monthly calendar below.</p>
          </div>
        </div>

        <MiniCalendar
          workoutLogs={workoutLogs}
          activeWorkoutDate={todayStr}
        />
      </div>
    </motion.div>
  );
}
