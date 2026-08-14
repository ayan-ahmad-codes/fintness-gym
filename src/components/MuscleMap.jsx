import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Modern SVG Muscle Visualizer for Human Body Anatomy (Front & Back Views)
 */
export default function MuscleMap({ 
  primaryMuscles = [], 
  secondaryMuscles = [], 
  onMuscleClick, 
  selectedMuscleFilter = null,
  interactive = true 
}) {
  const [hoveredMuscle, setHoveredMuscle] = useState(null);

  const getMuscleStyle = (muscleId) => {
    const isPrimary = primaryMuscles.includes(muscleId) || selectedMuscleFilter === muscleId;
    const isSecondary = secondaryMuscles.includes(muscleId);
    const isHovered = hoveredMuscle === muscleId;

    if (isPrimary) {
      return {
        fill: 'url(#primaryGlowGradient)',
        stroke: '#00f2fe',
        strokeWidth: '2.5',
        filter: 'drop-shadow(0px 0px 8px rgba(0, 242, 254, 0.85))',
        cursor: interactive ? 'pointer' : 'default'
      };
    }
    if (isSecondary) {
      return {
        fill: 'url(#secondaryGlowGradient)',
        stroke: '#ffb703',
        strokeWidth: '2',
        filter: 'drop-shadow(0px 0px 6px rgba(255, 183, 3, 0.6))',
        cursor: interactive ? 'pointer' : 'default'
      };
    }
    if (isHovered && interactive) {
      return {
        fill: '#334155',
        stroke: '#94a3b8',
        strokeWidth: '1.5',
        cursor: 'pointer'
      };
    }

    return {
      fill: '#1e293b',
      stroke: '#334155',
      strokeWidth: '1',
      cursor: interactive ? 'pointer' : 'default'
    };
  };

  const handleMuscleClick = (id, name) => {
    if (interactive && onMuscleClick) {
      onMuscleClick(id, name);
    }
  };

  return (
    <div className="muscle-map-container">
      <svg viewBox="0 0 700 480" className="muscle-map-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="primaryGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0055" />
            <stop offset="100%" stopColor="#ff5252" />
          </linearGradient>
          <linearGradient id="secondaryGlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb703" />
            <stop offset="100%" stopColor="#fb8500" />
          </linearGradient>
          <radialGradient id="bodyBgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0, 242, 254, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Ambient Body Background Glows */}
        <circle cx="180" cy="240" r="160" fill="url(#bodyBgGlow)" />
        <circle cx="520" cy="240" r="160" fill="url(#bodyBgGlow)" />

        {/* Headers */}
        <text x="180" y="32" fill="#94a3b8" fontSize="15" fontWeight="600" textAnchor="middle" letterSpacing="1">
          ANTERIOR (FRONT)
        </text>
        <text x="520" y="32" fill="#94a3b8" fontSize="15" fontWeight="600" textAnchor="middle" letterSpacing="1">
          POSTERIOR (BACK)
        </text>

        {/* ================= FRONT BODY ANATOMY ================= */}
        <g id="front-body" transform="translate(40, 40)">
          {/* Head & Neck Base Outline */}
          <path d="M 140 15 C 120 15, 120 45, 140 45 C 160 45, 160 15, 140 15 Z" fill="#0f172a" stroke="#334155" strokeWidth="1" />

          {/* Shoulders (Anterior Deltoid Left & Right) */}
          <motion.path 
            d="M 95 65 C 80 75, 75 95, 88 115 C 98 120, 108 105, 105 80 Z"
            style={getMuscleStyle('shoulders')}
            onMouseEnter={() => setHoveredMuscle('shoulders')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('shoulders', 'Shoulders')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 185 65 C 200 75, 205 95, 192 115 C 182 120, 172 105, 175 80 Z"
            style={getMuscleStyle('shoulders')}
            onMouseEnter={() => setHoveredMuscle('shoulders')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('shoulders', 'Shoulders')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Pectorals (Chest Left & Right) */}
          <motion.path 
            d="M 108 72 C 135 72, 138 90, 138 115 C 115 125, 100 110, 105 82 Z"
            style={getMuscleStyle('chest')}
            onMouseEnter={() => setHoveredMuscle('chest')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('chest', 'Chest')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 172 72 C 145 72, 142 90, 142 115 C 165 125, 180 110, 175 82 Z"
            style={getMuscleStyle('chest')}
            onMouseEnter={() => setHoveredMuscle('chest')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('chest', 'Chest')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Biceps (Front Left & Right) */}
          <motion.path 
            d="M 85 118 C 72 125, 75 160, 90 162 C 98 150, 96 130, 85 118 Z"
            style={getMuscleStyle('biceps')}
            onMouseEnter={() => setHoveredMuscle('biceps')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('biceps', 'Biceps')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 195 118 C 208 125, 205 160, 190 162 C 182 150, 184 130, 195 118 Z"
            style={getMuscleStyle('biceps')}
            onMouseEnter={() => setHoveredMuscle('biceps')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('biceps', 'Biceps')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Forearms (Front Left & Right) */}
          <motion.path 
            d="M 72 165 C 60 175, 65 210, 78 220 C 85 215, 88 185, 84 165 Z"
            style={getMuscleStyle('forearms')}
            onMouseEnter={() => setHoveredMuscle('forearms')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('forearms', 'Forearms')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 208 165 C 220 175, 215 210, 202 220 C 195 215, 192 185, 196 165 Z"
            style={getMuscleStyle('forearms')}
            onMouseEnter={() => setHoveredMuscle('forearms')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('forearms', 'Forearms')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Abdominals (Six-Pack Core) */}
          <motion.path 
            d="M 122 122 L 158 122 L 156 195 L 124 195 Z"
            style={getMuscleStyle('abs')}
            onMouseEnter={() => setHoveredMuscle('abs')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('abs', 'Abs & Core')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Obliques (Waist Left & Right) */}
          <motion.path 
            d="M 108 122 C 122 122, 122 195, 110 195 C 102 170, 100 145, 108 122 Z"
            style={getMuscleStyle('obliques')}
            onMouseEnter={() => setHoveredMuscle('obliques')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('obliques', 'Obliques')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 172 122 C 158 122, 158 195, 170 195 C 178 170, 180 145, 172 122 Z"
            style={getMuscleStyle('obliques')}
            onMouseEnter={() => setHoveredMuscle('obliques')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('obliques', 'Obliques')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Quadriceps (Front Thighs Left & Right) */}
          <motion.path 
            d="M 108 200 C 105 230, 110 295, 134 295 C 138 270, 136 220, 135 200 Z"
            style={getMuscleStyle('quads')}
            onMouseEnter={() => setHoveredMuscle('quads')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('quads', 'Quadriceps')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 172 200 C 175 230, 170 295, 146 295 C 142 270, 144 220, 145 200 Z"
            style={getMuscleStyle('quads')}
            onMouseEnter={() => setHoveredMuscle('quads')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('quads', 'Quadriceps')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Calves Front (Tibialis & Shin Left & Right) */}
          <motion.path 
            d="M 112 308 C 106 330, 110 380, 126 380 C 132 370, 132 330, 128 308 Z"
            style={getMuscleStyle('calves')}
            onMouseEnter={() => setHoveredMuscle('calves')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('calves', 'Calves')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 168 308 C 174 330, 170 380, 154 380 C 148 370, 148 330, 152 308 Z"
            style={getMuscleStyle('calves')}
            onMouseEnter={() => setHoveredMuscle('calves')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('calves', 'Calves')}
            whileHover={{ scale: 1.03 }}
          />
        </g>

        {/* ================= BACK BODY ANATOMY ================= */}
        <g id="back-body" transform="translate(380, 40)">
          {/* Head Back */}
          <path d="M 140 15 C 120 15, 120 45, 140 45 C 160 45, 160 15, 140 15 Z" fill="#0f172a" stroke="#334155" strokeWidth="1" />

          {/* Trapezius (Upper Back / Neck) */}
          <motion.path 
            d="M 120 48 L 160 48 L 175 75 L 140 100 L 105 75 Z"
            style={getMuscleStyle('traps')}
            onMouseEnter={() => setHoveredMuscle('traps')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('traps', 'Trapezius')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Rear Delts (Left & Right) */}
          <motion.path 
            d="M 92 68 C 80 78, 78 98, 92 110 C 100 105, 105 85, 102 70 Z"
            style={getMuscleStyle('rear_delts')}
            onMouseEnter={() => setHoveredMuscle('rear_delts')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('rear_delts', 'Rear Delts')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 188 68 C 200 78, 202 98, 188 110 C 180 105, 175 85, 178 70 Z"
            style={getMuscleStyle('rear_delts')}
            onMouseEnter={() => setHoveredMuscle('rear_delts')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('rear_delts', 'Rear Delts')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Latissimus Dorsi (Lats Left & Right) */}
          <motion.path 
            d="M 104 102 C 90 120, 100 160, 126 175 C 132 150, 130 115, 124 102 Z"
            style={getMuscleStyle('lats')}
            onMouseEnter={() => setHoveredMuscle('lats')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('lats', 'Lats')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 176 102 C 190 120, 180 160, 154 175 C 148 150, 150 115, 156 102 Z"
            style={getMuscleStyle('lats')}
            onMouseEnter={() => setHoveredMuscle('lats')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('lats', 'Lats')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Triceps (Back Left & Right) */}
          <motion.path 
            d="M 82 114 C 70 125, 72 155, 86 160 C 94 150, 92 128, 82 114 Z"
            style={getMuscleStyle('triceps')}
            onMouseEnter={() => setHoveredMuscle('triceps')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('triceps', 'Triceps')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 198 114 C 210 125, 208 155, 194 160 C 186 150, 188 128, 198 114 Z"
            style={getMuscleStyle('triceps')}
            onMouseEnter={() => setHoveredMuscle('triceps')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('triceps', 'Triceps')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Glutes (Back Hips Left & Right) */}
          <motion.path 
            d="M 104 182 C 100 200, 110 230, 138 230 C 138 200, 132 182, 104 182 Z"
            style={getMuscleStyle('glutes')}
            onMouseEnter={() => setHoveredMuscle('glutes')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('glutes', 'Glutes')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 176 182 C 180 200, 170 230, 142 230 C 142 200, 148 182, 176 182 Z"
            style={getMuscleStyle('glutes')}
            onMouseEnter={() => setHoveredMuscle('glutes')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('glutes', 'Glutes')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Hamstrings (Back Thighs Left & Right) */}
          <motion.path 
            d="M 108 235 C 105 260, 110 295, 134 295 C 138 270, 136 240, 135 235 Z"
            style={getMuscleStyle('hamstrings')}
            onMouseEnter={() => setHoveredMuscle('hamstrings')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('hamstrings', 'Hamstrings')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 172 235 C 175 260, 170 295, 146 295 C 142 270, 144 240, 145 235 Z"
            style={getMuscleStyle('hamstrings')}
            onMouseEnter={() => setHoveredMuscle('hamstrings')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('hamstrings', 'Hamstrings')}
            whileHover={{ scale: 1.03 }}
          />

          {/* Calves Back (Gastrocnemius Left & Right) */}
          <motion.path 
            d="M 110 305 C 102 325, 108 375, 126 375 C 132 360, 132 325, 128 305 Z"
            style={getMuscleStyle('calves')}
            onMouseEnter={() => setHoveredMuscle('calves')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('calves', 'Calves')}
            whileHover={{ scale: 1.03 }}
          />
          <motion.path 
            d="M 170 305 C 178 325, 172 375, 154 375 C 148 360, 148 325, 152 305 Z"
            style={getMuscleStyle('calves')}
            onMouseEnter={() => setHoveredMuscle('calves')}
            onMouseLeave={() => setHoveredMuscle(null)}
            onClick={() => handleMuscleClick('calves', 'Calves')}
            whileHover={{ scale: 1.03 }}
          />
        </g>
      </svg>

      {/* Legend & Indicator */}
      <div className="muscle-map-legend">
        <div className="legend-item">
          <span className="legend-dot primary"></span>
          <span className="legend-text">Primary Target</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot secondary"></span>
          <span className="legend-text">Secondary Target</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot default"></span>
          <span className="legend-text">Inactive</span>
        </div>
      </div>
    </div>
  );
}
