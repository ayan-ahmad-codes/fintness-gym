import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, Minimize2, Timer as TimerIcon, Plus } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WorkoutTimer({ restSeconds, onRestFinish }) {
  // Session Stopwatch
  const [sessionTime, setSessionTime] = useState(0);
  const [isSessionRunning, setIsSessionRunning] = useState(false);

  // Rest Timer
  const [restTimeLeft, setRestTimeLeft] = useState(0);
  const [initialRestDuration, setInitialRestDuration] = useState(90);
  const [isRestRunning, setIsRestRunning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // UI state
  const [isExpanded, setIsExpanded] = useState(false);

  const sessionIntervalRef = useRef(null);
  const restIntervalRef = useRef(null);

  // Synchronize when restSeconds prop changes (e.g., triggered from exercise set click)
  useEffect(() => {
    if (restSeconds && restSeconds > 0) {
      setInitialRestDuration(restSeconds);
      setRestTimeLeft(restSeconds);
      setIsRestRunning(true);
      setIsExpanded(true); // Pop up timer when rest starts
    }
  }, [restSeconds]);

  // Session Stopwatch Ticker
  useEffect(() => {
    if (isSessionRunning) {
      sessionIntervalRef.current = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(sessionIntervalRef.current);
    }
    return () => clearInterval(sessionIntervalRef.current);
  }, [isSessionRunning]);

  // Rest Timer Countdown Ticker
  useEffect(() => {
    if (isRestRunning && restTimeLeft > 0) {
      restIntervalRef.current = setInterval(() => {
        setRestTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(restIntervalRef.current);
            setIsRestRunning(false);
            playRestBeep();
            if (onRestFinish) onRestFinish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(restIntervalRef.current);
    }
    return () => clearInterval(restIntervalRef.current);
  }, [isRestRunning, restTimeLeft]);

  const playRestBeep = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch (e) {
      console.log('Audio playback error:', e);
    }

    // Trigger visual celebration ripple
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.9 },
      colors: ['#00f2fe', '#00e676']
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startRestTimer = (seconds) => {
    setInitialRestDuration(seconds);
    setRestTimeLeft(seconds);
    setIsRestRunning(true);
  };

  const addRestTime = (extraSecs) => {
    setRestTimeLeft(prev => prev + extraSecs);
    setInitialRestDuration(prev => prev + extraSecs);
    setIsRestRunning(true);
  };

  const resetRestTimer = () => {
    setIsRestRunning(false);
    setRestTimeLeft(0);
  };

  const restProgress = initialRestDuration > 0 ? (restTimeLeft / initialRestDuration) * 100 : 0;
  const strokeDashoffset = 283 - (283 * restProgress) / 100;

  return (
    <div className="workout-timer-sticky-wrapper">
      {/* Floating Compact Bar when Minimized */}
      {!isExpanded && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`compact-timer-bar ${isRestRunning ? 'rest-active' : ''}`}
          onClick={() => setIsExpanded(true)}
        >
          <div className="timer-icon-pulse">
            <TimerIcon size={18} className={isRestRunning ? 'spin-slow' : ''} />
          </div>

          <div className="compact-info">
            {isRestRunning ? (
              <>
                <span className="compact-label">REST TIMER</span>
                <span className="compact-val neon-cyan">{formatTime(restTimeLeft)}</span>
              </>
            ) : (
              <>
                <span className="compact-label">WORKOUT TIME</span>
                <span className="compact-val">{formatTime(sessionTime)}</span>
              </>
            )}
          </div>

          <button 
            className="compact-toggle-btn"
            onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}
          >
            <Maximize2 size={16} />
          </button>
        </motion.div>
      )}

      {/* Expanded Timer Modal Overlay / Control Card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="expanded-timer-card"
          >
            <div className="card-top-bar">
              <div className="title-area">
                <TimerIcon size={18} className="icon-cyan" />
                <span>Workout & Rest Command Center</span>
              </div>
              <div className="top-actions">
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  title={soundEnabled ? 'Mute Rest Sound' : 'Enable Rest Sound'}
                >
                  {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => setIsExpanded(false)}
                  title="Minimize"
                >
                  <Minimize2 size={16} />
                </button>
              </div>
            </div>

            <div className="timer-dual-grid">
              {/* Active Session Stopwatch */}
              <div className="session-timer-box">
                <span className="sub-label">SESSION DURATION</span>
                <div className="time-display-huge">{formatTime(sessionTime)}</div>
                <div className="control-btn-group">
                  <button
                    type="button"
                    className={`btn-timer-action ${isSessionRunning ? 'pause' : 'start'}`}
                    onClick={() => setIsSessionRunning(!isSessionRunning)}
                  >
                    {isSessionRunning ? <Pause size={14} /> : <Play size={14} />}
                    {isSessionRunning ? 'Pause Session' : 'Start Session'}
                  </button>
                  <button
                    type="button"
                    className="btn-timer-icon"
                    onClick={() => { setIsSessionRunning(false); setSessionTime(0); }}
                    title="Reset Session Time"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>

              {/* Set Rest Countdown Ring */}
              <div className="rest-timer-box">
                <span className="sub-label">SET REST COUNTDOWN</span>
                
                <div className="ring-container">
                  <svg className="progress-ring-svg" viewBox="0 0 100 100">
                    <circle className="ring-bg" cx="50" cy="50" r="45" />
                    <circle
                      className="ring-fill"
                      cx="50"
                      cy="50"
                      r="45"
                      strokeDasharray="283"
                      strokeDashoffset={strokeDashoffset}
                    />
                  </svg>
                  <div className="ring-content">
                    <span className="rest-time-big">{formatTime(restTimeLeft)}</span>
                    <span className="rest-status-text">
                      {isRestRunning ? 'RESTING...' : restTimeLeft === 0 ? 'READY TO SET!' : 'PAUSED'}
                    </span>
                  </div>
                </div>

                {/* Quick Add Presets */}
                <div className="preset-buttons">
                  <button onClick={() => startRestTimer(60)} className="preset-btn">60s</button>
                  <button onClick={() => startRestTimer(90)} className="preset-btn active">90s</button>
                  <button onClick={() => startRestTimer(120)} className="preset-btn">120s</button>
                  <button onClick={() => addRestTime(30)} className="preset-btn add">+30s</button>
                </div>

                <div className="control-btn-group">
                  <button
                    type="button"
                    className={`btn-timer-action ${isRestRunning ? 'pause' : 'start'}`}
                    onClick={() => setIsRestRunning(!isRestRunning)}
                  >
                    {isRestRunning ? <Pause size={14} /> : <Play size={14} />}
                    {isRestRunning ? 'Pause Rest' : 'Resume Rest'}
                  </button>
                  <button
                    type="button"
                    className="btn-timer-icon"
                    onClick={resetRestTimer}
                    title="Reset Rest"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
