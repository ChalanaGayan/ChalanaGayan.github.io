import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const BootScreen = ({ onComplete }) => {
  const [stage, setStage] = useState('windows');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Play startup sound
    const audio = new Audio('/sounds/windows-xp-startup.mp3');
    audio.play().catch(() => {});

    // Stage progression - starts with windows, no journey
    const windowsTimer = setTimeout(() => setStage('welcome'), 6500); // 6.5s for all OS versions + story

    return () => {
      clearTimeout(windowsTimer);
    };
  }, []);

  useEffect(() => {
    if (stage === 'welcome') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete(), 1500);
            return 100;
          }
          return prev + 1.5;
        });
      }, 80);

      return () => clearInterval(interval);
    }
  }, [stage, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <AnimatePresence mode="wait">
        {stage === 'windows' && <WindowsVersionsStage key="windows" />}
        {stage === 'welcome' && <WelcomeStage key="welcome" progress={progress} />}
      </AnimatePresence>

      {/* Skip Button - only show during windows stage, skips to welcome (XP loader) */}
      {stage === 'windows' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          transition={{ delay: 0.5 }}
          onClick={() => setStage('welcome')}
          className="absolute bottom-8 right-8 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/70 text-white text-sm rounded border border-gray-600 backdrop-blur-sm transition-all z-50"
        >
          Skip →
        </motion.button>
      )}
    </div>
  );
};

// Stage 1: "Windows" with changing version numbers, then story on XP
const WindowsVersionsStage = () => {
  const [currentVersion, setCurrentVersion] = useState(0);
  const [showStory, setShowStory] = useState(false);

  const versions = [
    { name: '11', color: '#06b6d4' },
    { name: '10', color: '#3b82f6' },
    { name: '8.1', color: '#8b5cf6' },
    { name: '8', color: '#ec4899' },
    { name: '7', color: '#10b981' },
    { name: 'XP', color: '#eab308' }
  ];

  useEffect(() => {
    const intervals = [
      setTimeout(() => setCurrentVersion(1), 800),
      setTimeout(() => setCurrentVersion(2), 1600),
      setTimeout(() => setCurrentVersion(3), 2400),
      setTimeout(() => setCurrentVersion(4), 3200),
      setTimeout(() => setCurrentVersion(5), 4500), // Slower to XP
      setTimeout(() => setShowStory(true), 5200), // Show story after XP appears
    ];

    return () => intervals.forEach(clearTimeout);
  }, []);

  const version = versions[currentVersion];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 flex items-center justify-center bg-black"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="vgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={version.color} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vgrid)" />
        </svg>
      </div>

      {/* Just "Windows" text with changing number */}
      <div className="text-center">
        <motion.div
          className="flex items-baseline justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* "Windows" stays static with fixed position */}
          <h2 className="text-8xl font-bold text-white" style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}>
            Windows
          </h2>

          {/* Version number changes - with fixed width container */}
          <div className="inline-block w-48 text-left ml-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentVersion}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="text-8xl font-bold inline-block"
                style={{
                  color: version.color,
                  textShadow: `0 0 40px ${version.color}`,
                }}
              >
                {version.name}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Subtle pulsing line underneath */}
        <motion.div
          className="mt-8 h-1 rounded-full mx-auto"
          style={{
            width: '500px',
            background: `linear-gradient(90deg, transparent, ${version.color}, transparent)`,
            boxShadow: `0 0 20px ${version.color}`
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Story appears below when XP is shown */}
        <AnimatePresence>
          {showStory && currentVersion === 5 && (
            <StoryText />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Story text with color fill animation
const StoryText = () => {
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFillProgress(prev => Math.min(prev + 3, 100));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-12"
    >
      <h3 className="text-3xl font-bold text-center max-w-3xl mx-auto">
        <span style={{
          background: `linear-gradient(to right, #eab308 ${fillProgress}%, #374151 ${fillProgress}%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          I first fell in love with computers with Windows XP
        </span>
      </h3>
      <motion.p
        className="text-gray-500 text-sm mt-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1 }}
      >
        2005 - Where it all began
      </motion.p>
    </motion.div>
  );
};

// Stage 2: Final XP boot loader
const WelcomeStage = ({ progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center mb-16">
        <div className="mb-8 flex gap-2">
          <div className="flex flex-col gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded shadow-lg" />
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded shadow-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded shadow-lg" />
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded shadow-lg" />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2">
            Microsoft<sup className="text-sm">®</sup> Windows<sup className="text-sm">®</sup>
          </h1>
          <p className="text-2xl text-blue-400 font-semibold">XP</p>
          <p className="text-sm text-gray-500 mt-3">Professional</p>
        </div>
      </div>

      <div className="w-80">
        <div className="relative h-7 bg-gray-800/50 border-2 border-gray-700 rounded-sm overflow-hidden shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 transition-all duration-100"
            style={{ width: `${progress}%` }}
          >
            <motion.div
              className="h-full"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                backgroundSize: '200% 100%'
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%']
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <motion.div
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              left: ['-100px', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="mt-3 text-center">
          <p className="text-gray-400 text-sm">Welcome to Windows XP</p>
          <p className="text-gray-600 text-xs mt-1">{Math.floor(progress)}%</p>
        </div>
      </div>

      <p className="absolute bottom-8 text-gray-600 text-xs">
        Copyright © Chalana Gayan
      </p>
    </motion.div>
  );
};

export default BootScreen;
