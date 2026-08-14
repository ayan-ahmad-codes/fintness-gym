import React, { useState } from 'react';
import { useLocalStorage, calculateStreak } from '../hooks/useLocalStorage';
import { getTodayDayId } from '../data/workoutData';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import WorkoutTimer from '../components/WorkoutTimer';
import Dashboard from './Dashboard';
import WorkoutPlan from './WorkoutPlan';
import TodayWorkout from './TodayWorkout';
import Progress from './Progress';
import MuscleMapPage from './MuscleMapPage';
import Settings from './Settings';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WorkoutPlannerApp() {
  const navigate = useNavigate();

  // Active View State inside Workout Planner ('dashboard', 'plan', 'today', 'progress', 'muscle-map', 'settings')
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Active Split Day State (Auto-detects today's day of week)
  const [activeDayId, setActiveDayId] = useLocalStorage('pulsefit_active_day', getTodayDayId());

  // Completed Workouts Array
  const [completedWorkouts, setCompletedWorkouts] = useLocalStorage('pulsefit_completed_workouts', []);

  // Completed Exercises Map
  const [completedExercises, setCompletedExercises] = useLocalStorage('pulsefit_completed_exercises', {});

  // Completed Sets Map
  const [completedSetsMap, setCompletedSetsMap] = useLocalStorage('pulsefit_completed_sets', {});

  // Workout History Logs Array
  const [workoutLogs, setWorkoutLogs] = useLocalStorage('pulsefit_workout_logs', []);

  // Settings State
  const [settings, setSettings] = useLocalStorage('pulsefit_settings', {
    targetDuration: 80,
    defaultRest: 90,
    soundEnabled: true
  });

  // Active Rest Timer Trigger
  const [activeRestSeconds, setActiveRestSeconds] = useState(0);

  // Calculate Streak
  const streak = calculateStreak(workoutLogs);

  // Handlers
  const handleToggleExerciseComplete = (exerciseId) => {
    setCompletedExercises(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const handleToggleSet = (exerciseId, setIndex) => {
    setCompletedSetsMap(prev => {
      const currentSets = prev[exerciseId] || [];
      const updatedSets = currentSets.includes(setIndex)
        ? currentSets.filter(i => i !== setIndex)
        : [...currentSets, setIndex];
      return {
        ...prev,
        [exerciseId]: updatedSets
      };
    });
  };

  const handleCompleteDayWorkout = (dayId, durationMinutes = 80) => {
    if (!completedWorkouts.includes(dayId)) {
      setCompletedWorkouts(prev => [...prev, dayId]);
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const existingLogIndex = workoutLogs.findIndex(log => log.date === todayStr && log.dayId === dayId);

    if (existingLogIndex === -1) {
      setWorkoutLogs(prev => [
        {
          date: todayStr,
          dayId,
          durationMinutes,
          completedSetsCount: Object.values(completedSetsMap).reduce((acc, arr) => acc + arr.length, 0) || 25,
          timestamp: Date.now()
        },
        ...prev
      ]);
    }
  };

  const handleStartRestTimer = (seconds) => {
    setActiveRestSeconds(seconds || settings.defaultRest || 90);
  };

  const handleResetProgress = () => {
    setCompletedWorkouts([]);
    setCompletedExercises({});
    setCompletedSetsMap({});
  };

  const handleResetAllData = () => {
    setCompletedWorkouts([]);
    setCompletedExercises({});
    setCompletedSetsMap({});
    setWorkoutLogs([]);
    setActiveDayId(getTodayDayId());
  };

  const handleStartWorkoutDay = (dayId) => {
    setActiveDayId(dayId);
    setActivePage('today');
  };

  // Render Sub-Page
  const renderSubPage = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <Dashboard
            currentDayId={activeDayId}
            completedWorkouts={completedWorkouts}
            streak={streak}
            workoutLogs={workoutLogs}
            onStartWorkout={handleStartWorkoutDay}
            onNavigateToPlan={() => setActivePage('plan')}
            onNavigateToMuscleMap={() => setActivePage('muscle-map')}
          />
        );
      case 'plan':
        return (
          <WorkoutPlan
            completedWorkouts={completedWorkouts}
            onSelectDayToWorkout={handleStartWorkoutDay}
          />
        );
      case 'today':
        return (
          <TodayWorkout
            activeDayId={activeDayId}
            onChangeDay={(dayId) => setActiveDayId(dayId)}
            completedExercises={completedExercises}
            completedSetsMap={completedSetsMap}
            completedWorkouts={completedWorkouts}
            workoutLogs={workoutLogs}
            onToggleExerciseComplete={handleToggleExerciseComplete}
            onToggleSet={handleToggleSet}
            onCompleteDayWorkout={handleCompleteDayWorkout}
            onStartRestTimer={handleStartRestTimer}
          />
        );
      case 'progress':
        return (
          <Progress
            completedWorkouts={completedWorkouts}
            streak={streak}
            workoutLogs={workoutLogs}
            onResetProgress={handleResetProgress}
            onSelectDay={handleStartWorkoutDay}
          />
        );
      case 'muscle-map':
        return (
          <MuscleMapPage
            onSelectDayToWorkout={handleStartWorkoutDay}
          />
        );
      case 'settings':
        return (
          <Settings
            settings={settings}
            onUpdateSettings={(newSettings) => setSettings(prev => ({ ...prev, ...newSettings }))}
            onResetAllData={handleResetAllData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Top Banner Navigation Bar */}
      <div className="planner-back-bar">
        <button 
          type="button" 
          className="back-to-home-btn"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={16} />
          <span>Back to Fitness Gym Landing Page</span>
        </button>
      </div>

      <Navbar
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        activePage={activePage}
        streak={streak}
        completedToday={completedWorkouts.includes(activeDayId)}
      />

      <div className="app-main-layout">
        <Sidebar
          activePage={activePage}
          onNavigate={(pageId) => setActivePage(pageId)}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          activeDayId={activeDayId}
        />

        <main className="app-content-area">
          {renderSubPage()}
        </main>
      </div>

      {/* Persistent Workout Stopwatch & Rest Timer Bar */}
      <WorkoutTimer
        restSeconds={activeRestSeconds}
        onRestFinish={() => setActiveRestSeconds(0)}
      />
    </div>
  );
}
