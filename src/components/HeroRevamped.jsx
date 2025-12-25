import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { subtleGlitch } from '../utils/glitchEffects';

const HeroRevamped = () => {
  const [displayText, setDisplayText] = useState('');
  const [universeIndex, setUniverseIndex] = useState(0);
  const roles = ['Software Engineer', 'Undergraduate', 'AI & ML Enthusiast'];
  const fullText = roles.join(' | ');

  // Spider-Verse Universes
  const universes = [
    {
      name: 'Earth-616',
      color: 'from-red-600 via-orange-500 to-yellow-500',
      accentColor: '#dc2626',
      bgGradient: 'radial-gradient(circle at 30% 50%, rgba(220, 38, 38, 0.15), transparent 60%)',
    },
    {
      name: 'Earth-1610',
      color: 'from-blue-600 via-purple-500 to-pink-500',
      accentColor: '#2563eb',
      bgGradient: 'radial-gradient(circle at 70% 50%, rgba(37, 99, 235, 0.15), transparent 60%)',
    },
    {
      name: 'Earth-65',
      color: 'from-pink-500 via-purple-600 to-blue-600',
      accentColor: '#ec4899',
      bgGradient: 'radial-gradient(circle at 50% 30%, rgba(236, 72, 153, 0.15), transparent 60%)',
    },
    {
      name: 'Earth-928',
      color: 'from-cyan-400 via-blue-600 to-indigo-700',
      accentColor: '#06b6d4',
      bgGradient: 'radial-gradient(circle at 50% 70%, rgba(6, 182, 212, 0.15), transparent 60%)',
    },
  ];

  const companies = [
    { name: 'Surecore', logo: '/surecore.png' },
    { name: 'WSO2', logo: '/wso2.png' },
    { name: 'University', logo: '/uni.png' },
  ];

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Universe transition
  useEffect(() => {
    const interval = setInterval(() => {
      setUniverseIndex((prev) => (prev + 1) % universes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-black">
      {/* Dynamic Background with Universe Gradient */}
      <motion.div
        key={`bg-${universeIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{ background: universes[universeIndex].bgGradient }}
      />

      {/* Animated Geometric Grid */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(${universes[universeIndex].accentColor} 1px, transparent 1px),
              linear-gradient(90deg, ${universes[universeIndex].accentColor} 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Large 3D Spider Logo - Center */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg
          width="1000"
          height="1000"
          viewBox="0 0 200 200"
          className="opacity-8"
        >
          <defs>
            <linearGradient id={`spiderGrad-${universeIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={universes[universeIndex].accentColor} />
              <stop offset="100%" stopColor={universes[universeIndex].accentColor} stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Spider Body */}
          <ellipse cx="100" cy="100" rx="25" ry="35" fill={`url(#spiderGrad-${universeIndex})`} filter="url(#glow)" />
          <circle cx="100" cy="70" r="20" fill={`url(#spiderGrad-${universeIndex})`} filter="url(#glow)" />

          {/* Spider Eyes */}
          <ellipse cx="92" cy="65" rx="8" ry="12" fill="white" opacity="0.9" />
          <ellipse cx="108" cy="65" rx="8" ry="12" fill="white" opacity="0.9" />

          {/* Spider Legs */}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <motion.path
                d={`M100,90 Q${70 - i * 10},${60 + i * 15} ${40 - i * 5},${50 + i * 20}`}
                stroke={universes[universeIndex].accentColor}
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                animate={{
                  d: [
                    `M100,90 Q${70 - i * 10},${60 + i * 15} ${40 - i * 5},${50 + i * 20}`,
                    `M100,90 Q${75 - i * 10},${55 + i * 15} ${45 - i * 5},${45 + i * 20}`,
                    `M100,90 Q${70 - i * 10},${60 + i * 15} ${40 - i * 5},${50 + i * 20}`,
                  ],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.path
                d={`M100,90 Q${130 + i * 10},${60 + i * 15} ${160 + i * 5},${50 + i * 20}`}
                stroke={universes[universeIndex].accentColor}
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                animate={{
                  d: [
                    `M100,90 Q${130 + i * 10},${60 + i * 15} ${160 + i * 5},${50 + i * 20}`,
                    `M100,90 Q${125 + i * 10},${55 + i * 15} ${155 + i * 5},${45 + i * 20}`,
                    `M100,90 Q${130 + i * 10},${60 + i * 15} ${160 + i * 5},${50 + i * 20}`,
                  ],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Dynamic Spider Web Pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.2 }}>
        <defs>
          <radialGradient id="webGradient">
            <stop offset="0%" stopColor={universes[universeIndex].accentColor} />
            <stop offset="100%" stopColor={universes[universeIndex].accentColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Radial web threads */}
        {[...Array(16)].map((_, i) => (
          <motion.line
            key={`web-radial-${i}`}
            x1="50%"
            y1="50%"
            x2={`${50 + 50 * Math.cos((i * Math.PI) / 8)}%`}
            y2={`${50 + 50 * Math.sin((i * Math.PI) / 8)}%`}
            stroke="url(#webGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}

        {/* Concentric web circles */}
        {[10, 20, 30, 40, 50].map((radius, i) => (
          <motion.circle
            key={`web-circle-${i}`}
            cx="50%"
            cy="50%"
            r={`${radius}%`}
            fill="none"
            stroke="url(#webGradient)"
            strokeWidth="1.5"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{
              pathLength: {
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              },
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'linear',
              }
            }}
          />
        ))}
      </svg>

      {/* Floating Energy Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: universes[universeIndex].accentColor,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${universes[universeIndex].accentColor}`,
            }}
            animate={{
              y: [0, -Math.random() * 200 - 100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
              scale: [0, Math.random() + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Comic Book Halftone */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${universes[universeIndex].accentColor} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Glitch Scan Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 5 }}
      >
        {[20, 40, 60, 80].map((top) => (
          <div
            key={top}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${top}%`,
              background: `linear-gradient(90deg, transparent, ${universes[universeIndex].accentColor}, transparent)`,
            }}
          />
        ))}
      </motion.div>

      {/* Content Container - Bottom Right */}
      <div className="absolute bottom-0 right-0 p-6 sm:p-12 lg:p-16 max-w-3xl z-10">
        {/* Universe Portal Indicator - Top Left Corner */}
        <div className="absolute top-8 left-8 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={universeIndex}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-3 rounded-full border border-white/10"
            >
              {/* Animated Portal Ring */}
              <div className="relative w-12 h-12">
                <motion.div
                  className="absolute inset-0 rounded-full border-4"
                  style={{ borderColor: universes[universeIndex].accentColor }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border-2 border-dashed"
                  style={{ borderColor: universes[universeIndex].accentColor }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
                <div
                  className="absolute inset-4 rounded-full"
                  style={{ background: `radial-gradient(circle, ${universes[universeIndex].accentColor}80, transparent)` }}
                />
              </div>

              <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest">Entering</div>
                <div
                  className={`text-xl font-bold bg-gradient-to-r ${universes[universeIndex].color} bg-clip-text text-transparent`}
                >
                  {universes[universeIndex].name}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-gray-500 text-xs uppercase tracking-wider">Collaborated with</span>
          <div className="flex gap-3">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.2, type: 'spring' }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-md p-2 border-2 border-white/20 cursor-pointer group"
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle, ${universes[universeIndex].accentColor}40, transparent)`,
                  }}
                />
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-contain relative z-10"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Name with Multiverse Effect */}
        <div className="relative mb-4">
          <motion.h1
            variants={subtleGlitch}
            animate="animate"
            className="text-white font-black text-[45px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-none relative z-10"
          >
            CHALANA{' '}
            <motion.span
              className={`bg-gradient-to-r ${universes[universeIndex].color} bg-clip-text text-transparent`}
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(255,255,255,0.5))',
                  `drop-shadow(0 0 40px ${universes[universeIndex].accentColor})`,
                  'drop-shadow(0 0 20px rgba(255,255,255,0.5))',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              GAYAN
            </motion.span>
          </motion.h1>

          {/* Multiverse Ghost Layers */}
          {[1, 2, 3].map((layer) => (
            <motion.h1
              key={layer}
              className="absolute top-0 left-0 text-white font-black text-[45px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-none pointer-events-none"
              style={{
                opacity: 0.08 / layer,
                color: universes[universeIndex].accentColor
              }}
              animate={{
                x: [0, layer * 3, -layer * 3, 0],
                y: [0, -layer * 2, layer * 2, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 4 - layer,
              }}
            >
              CHALANA <span>GAYAN</span>
            </motion.h1>
          ))}
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: universes[universeIndex].accentColor }}
          />
          <p className="text-gray-300 font-medium text-[16px] sm:text-[20px] md:text-[24px]">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className={`bg-gradient-to-r ${universes[universeIndex].color} bg-clip-text text-transparent`}
            >
              |
            </motion.span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className={`relative px-8 py-3 bg-gradient-to-r ${universes[universeIndex].color} text-white font-bold rounded-xl shadow-2xl overflow-hidden group`}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                  'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                ],
                x: ['-100%', '200%'],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative z-10">Contact Me</span>
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1H5ZhnRt0K1pvOdNb7o5GqoouHbxdWoiy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-white/5 backdrop-blur-md border-2 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            style={{ borderColor: universes[universeIndex].accentColor }}
          >
            Download CV
          </motion.a>

          <motion.a
            href="https://github.com/ChalanaGayan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Bottom Center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a href="#about">
          <motion.div
            className="w-10 h-16 rounded-full border-4 backdrop-blur-sm flex justify-center items-start p-2"
            style={{ borderColor: universes[universeIndex].accentColor }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, 28, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full"
              style={{ background: universes[universeIndex].accentColor }}
            />
          </motion.div>
        </a>
      </div>

      {/* Better Universe Transition - Hexagon Wipe */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`transition-${universeIndex}`}
          className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center"
        >
          {/* Expanding Hexagons */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 5, 5, 0],
                opacity: [0, 0.3, 0.3, 0],
                rotate: [0, 180, 180, 360],
              }}
              transition={{
                duration: 1.5,
                delay: 9.3 + i * 0.1,
                times: [0, 0.3, 0.7, 1],
              }}
              className="absolute"
              style={{
                width: '200px',
                height: '200px',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                background: `linear-gradient(135deg, ${universes[universeIndex].accentColor}, transparent)`,
              }}
            />
          ))}

          {/* Particle Burst */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: [0, Math.cos(i * 18 * Math.PI / 180) * 300],
                y: [0, Math.sin(i * 18 * Math.PI / 180) * 300],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                delay: 9.5,
              }}
              className="absolute w-2 h-2 rounded-full"
              style={{ background: universes[universeIndex].accentColor }}
            />
          ))}

          {/* Center Flash */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 20, 20],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1,
              delay: 9.5,
            }}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, ${universes[universeIndex].accentColor}, transparent)`,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroRevamped;
