import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WorkoutPlannerApp from './pages/WorkoutPlannerApp';

function AppContent() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route 
        path="/" 
        element={<LandingPage onOpenPlanner={() => navigate('/workout')} />} 
      />
      <Route 
        path="/workout" 
        element={<WorkoutPlannerApp />} 
      />
      <Route 
        path="/dashboard" 
        element={<WorkoutPlannerApp />} 
      />
      <Route 
        path="/plan" 
        element={<WorkoutPlannerApp />} 
      />
      <Route 
        path="/progress" 
        element={<WorkoutPlannerApp />} 
      />
      <Route 
        path="*" 
        element={<LandingPage onOpenPlanner={() => navigate('/workout')} />} 
      />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
