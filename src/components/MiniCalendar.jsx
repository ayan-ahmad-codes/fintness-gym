import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function MiniCalendar({ workoutLogs = [], activeWorkoutDate = null }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Calculate days in current month
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const totalDaysInMonth = lastDayOfMonth.getDate();

  // Shift day of week so Monday is 0 (0=Mon, 1=Tue, ... 6=Sun)
  let startingDayOfWeek = firstDayOfMonth.getDay() - 1;
  if (startingDayOfWeek < 0) startingDayOfWeek = 6;

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const todayStr = new Date().toISOString().split('T')[0];

  // Map logged dates YYYY-MM-DD
  const loggedDateSet = new Set(
    (workoutLogs || []).map(log => log.date).filter(Boolean)
  );

  return (
    <div className="mini-calendar-card">
      <div className="mini-calendar-header">
        <div className="title-with-icon">
          <CalendarIcon size={18} className="icon-cyan" />
          <span className="month-year-title">
            {monthNames[month]} {year}
          </span>
        </div>

        <div className="month-nav-btns">
          <button type="button" className="cal-nav-btn" onClick={prevMonth} title="Previous Month">
            <ChevronLeft size={16} />
          </button>
          <button type="button" className="cal-nav-btn" onClick={nextMonth} title="Next Month">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="calendar-weekdays-grid">
        {daysOfWeek.map((day) => (
          <span key={day} className="weekday-header-cell">{day}</span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="calendar-days-grid">
        {/* Empty Padding Slots before 1st of month */}
        {Array.from({ length: startingDayOfWeek }).map((_, idx) => (
          <div key={`empty-${idx}`} className="calendar-cell empty-cell" />
        ))}

        {/* Days of Month */}
        {Array.from({ length: totalDaysInMonth }).map((_, idx) => {
          const dayNum = idx + 1;
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;

          const isToday = dateStr === todayStr;
          const isLogged = loggedDateSet.has(dateStr);
          const isLaunchedActive = activeWorkoutDate === dateStr || (isToday && activeWorkoutDate === null);

          return (
            <div
              key={dayNum}
              className={`calendar-cell day-cell ${isToday ? 'is-today' : ''} ${isLogged ? 'is-logged' : ''} ${isLaunchedActive ? 'is-active-launch' : ''}`}
            >
              <span className="day-number">{dayNum}</span>

              {isLogged ? (
                <CheckCircle2 size={12} className="logged-check-icon" />
              ) : isToday ? (
                <span className="today-dot" />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mini-calendar-footer">
        <div className="cal-legend-item">
          <span className="legend-badge today-badge"></span>
          <span>Today</span>
        </div>
        <div className="cal-legend-item">
          <span className="legend-badge logged-badge"><CheckCircle2 size={10} /></span>
          <span>Workout Logged</span>
        </div>
        <div className="cal-legend-item">
          <span className="legend-badge active-badge"><Sparkles size={10} /></span>
          <span>Launched</span>
        </div>
      </div>
    </div>
  );
}
