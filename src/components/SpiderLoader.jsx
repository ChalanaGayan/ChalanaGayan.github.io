import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import LiquidText from './LiquidText';

const SpiderLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLiquid, setShowLiquid] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowLiquid(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleLiquidComplete = () => {
    setCompleted(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <AnimatePresence mode="wait">
      {!showLiquid && !completed ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          {/* Spider-Man Logo */}
          <div className="relative">
            {/* Animated Spider Web */}
            <motion.svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              className="absolute inset-0"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Web pattern */}
              <g stroke="url(#webGradient)" strokeWidth="1" fill="none">
                <circle cx="150" cy="150" r="30" />
                <circle cx="150" cy="150" r="60" />
                <circle cx="150" cy="150" r="90" />
                <circle cx="150" cy="150" r="120" />
                <line x1="150" y1="30" x2="150" y2="270" />
                <line x1="30" y1="150" x2="270" y2="150" />
                <line x1="60" y1="60" x2="240" y2="240" />
                <line x1="240" y1="60" x2="60" y2="240" />
              </g>
            </motion.svg>

            {/* Spider-Man Spider Logo */}
            <motion.svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <defs>
                <linearGradient id="spiderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              {/* Spider body */}
              <ellipse cx="150" cy="150" rx="40" ry="50" fill="url(#spiderGradient)" />
              <circle cx="150" cy="100" r="30" fill="url(#spiderGradient)" />
              {/* Spider legs */}
              <path d="M150,120 Q100,80 70,100" stroke="url(#spiderGradient)" strokeWidth="4" fill="none" />
              <path d="M150,120 Q200,80 230,100" stroke="url(#spiderGradient)" strokeWidth="4" fill="none" />
              <path d="M150,140 Q90,130 60,150" stroke="url(#spiderGradient)" strokeWidth="4" fill="none" />
              <path d="M150,140 Q210,130 240,150" stroke="url(#spiderGradient)" strokeWidth="4" fill="none" />
              <path d="M150,160 Q100,180 70,200" stroke="url(#spiderGradient)" strokeWidth="4" fill="none" />
              <path d="M150,160 Q200,180 230,200" stroke="url(#spiderGradient)" strokeWidth="4" fill="none" />
              <path d="M150,180 Q110,210 80,230" stroke="url(#spiderGradient)" strokeWidth="4" fill="none" />
              <path d="M150,180 Q190,210 220,230" stroke="url(#spiderGradient)" strokeWidth="4" fill="none" />
            </motion.svg>

            {/* Progress Circle */}
            <svg width="300" height="300" className="absolute inset-0">
              <circle
                cx="150"
                cy="150"
                r="135"
                fill="none"
                stroke="#333"
                strokeWidth="3"
              />
              <motion.circle
                cx="150"
                cy="150"
                r="135"
                fill="none"
                stroke="url(#spiderGradient)"
                strokeWidth="3"
                strokeDasharray={`${2 * Math.PI * 135}`}
                strokeDashoffset={`${2 * Math.PI * 135 * (1 - progress / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 150 150)"
              />
            </svg>

            {/* Percentage Text */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600"
                  key={progress}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {progress}%
                </motion.div>
                <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Loading</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : showLiquid && !completed ? (
        <LiquidText key="liquid" onComplete={handleLiquidComplete} />
      ) : null}
    </AnimatePresence>
  );
};

export default SpiderLoader;
