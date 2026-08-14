import { useState, useEffect } from 'react';

/**
 * Custom hook for persisting React state to localStorage
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

/**
 * Helper to calculate active weekly streak based on completed workout logs
 */
export function calculateStreak(workoutLogs = []) {
  if (!workoutLogs || workoutLogs.length === 0) return 0;

  const dates = workoutLogs
    .map(log => log.date)
    .filter(Boolean)
    .sort((a, b) => new Date(b) - new Date(a));

  if (dates.length === 0) return 0;

  const todayStr = new Date().toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  const uniqueDates = [...new Set(dates)];
  
  // Check if today or yesterday has a completed workout
  const hasToday = uniqueDates.includes(todayStr);
  const hasYesterday = uniqueDates.includes(yesterdayStr);

  if (!hasToday && !hasYesterday) return 0;

  let streak = 0;
  let currCheck = hasToday ? new Date() : yesterday;

  while (true) {
    const currStr = currCheck.toISOString().split('T')[0];
    if (uniqueDates.includes(currStr)) {
      streak++;
      currCheck.setDate(currCheck.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
