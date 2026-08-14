import React from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Volume2, Clock, Trash2, Download, ShieldCheck, RefreshCcw } from 'lucide-react';

export default function Settings({
  settings = {},
  onUpdateSettings,
  onResetAllData
}) {
  const { targetDuration = 80, defaultRest = 90, soundEnabled = true } = settings;

  const handleExportData = () => {
    const data = {
      pulseFitStorage: localStorage.getItem('pulsefit_workout_state'),
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pulsefit-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="settings-page"
    >
      <div className="page-header-box">
        <div>
          <h1 className="page-title">App Settings & Preferences</h1>
          <p className="page-subtitle">
            Customize target workout duration, default rest timers, audio alerts, and manage local data.
          </p>
        </div>
      </div>

      <div className="settings-cards-grid">
        {/* Workout Preferences Card */}
        <div className="settings-card">
          <div className="card-header-row">
            <Clock size={20} className="icon-cyan" />
            <h3>Workout Target Parameters</h3>
          </div>

          <div className="setting-control-group">
            <label className="setting-label">
              Target Daily Workout Duration (Minutes):
              <span className="setting-val-chip">{targetDuration} Mins</span>
            </label>
            <input
              type="range"
              min="45"
              max="120"
              step="5"
              value={targetDuration}
              onChange={(e) => onUpdateSettings({ targetDuration: parseInt(e.target.value, 10) })}
              className="settings-range-slider"
            />
            <span className="setting-hint">Target is currently optimized for approximately 80 minutes per session.</span>
          </div>

          <div className="setting-control-group">
            <label className="setting-label">Default Inter-set Rest Duration:</label>
            <div className="rest-options-pills">
              {[60, 90, 120, 150].map((sec) => (
                <button
                  key={sec}
                  type="button"
                  className={`rest-pill-btn ${defaultRest === sec ? 'active' : ''}`}
                  onClick={() => onUpdateSettings({ defaultRest: sec })}
                >
                  {sec} Seconds
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Audio & Sound Preferences */}
        <div className="settings-card">
          <div className="card-header-row">
            <Volume2 size={20} className="icon-cyan" />
            <h3>Audio & Rest Timer Alerts</h3>
          </div>

          <div className="setting-toggle-row">
            <div>
              <span className="toggle-title">Rest Timer Beep Notification</span>
              <p className="toggle-desc">Play audio tone when rest countdown finishes.</p>
            </div>
            <button
              type="button"
              className={`toggle-switch ${soundEnabled ? 'on' : 'off'}`}
              onClick={() => onUpdateSettings({ soundEnabled: !soundEnabled })}
            >
              <div className="switch-thumb" />
            </button>
          </div>
        </div>

        {/* Local Storage & Data Management */}
        <div className="settings-card danger-zone">
          <div className="card-header-row">
            <ShieldCheck size={20} className="icon-cyan" />
            <h3>Data Backup & Management</h3>
          </div>

          <div className="data-buttons-row">
            <button type="button" className="action-btn export-btn" onClick={handleExportData}>
              <Download size={16} /> Export Local Workout Backup (.json)
            </button>

            <button
              type="button"
              className="action-btn danger-btn"
              onClick={() => {
                if (window.confirm("CRITICAL WARNING: This will erase all saved workout logs, completion history, and streak data. Continue?")) {
                  onResetAllData();
                }
              }}
            >
              <Trash2 size={16} /> Purge All Saved Local Storage Data
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
