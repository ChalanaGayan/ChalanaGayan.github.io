import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LiquidText = ({ onComplete }) => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const text = "With great power comes great responsibility";

  useEffect(() => {
    const interval = setInterval(() => {
      setFillPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative max-w-5xl px-8">
        <svg
          width="100%"
          height="300"
          viewBox="0 0 1200 300"
          className="w-full"
        >
          <defs>
            {/* Gradient for liquid fill */}
            <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            {/* Mask for text */}
            <mask id="textMask">
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-bold"
                style={{ fontSize: '48px', fill: 'white' }}
              >
                {text}
              </text>
            </mask>

            {/* Liquid wave animation */}
            <clipPath id="liquidClip">
              <rect x="0" y={`${300 - (fillPercentage * 3)}`} width="1200" height="300" />
            </clipPath>
          </defs>

          {/* Background text (outline) */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-bold"
            style={{ fontSize: '48px', fill: 'none', stroke: '#333', strokeWidth: '2px' }}
          >
            {text}
          </text>

          {/* Liquid fill with wave effect */}
          <g mask="url(#textMask)" clipPath="url(#liquidClip)">
            <rect width="1200" height="300" fill="url(#liquidGradient)" />

            {/* Animated wave */}
            <motion.path
              d={`M 0,${300 - (fillPercentage * 3) - 10}
                  Q 150,${300 - (fillPercentage * 3) - 30}
                    300,${300 - (fillPercentage * 3) - 10}
                  T 600,${300 - (fillPercentage * 3) - 10}
                  T 900,${300 - (fillPercentage * 3) - 10}
                  T 1200,${300 - (fillPercentage * 3) - 10}
                  V 300 H 0 Z`}
              fill="url(#liquidGradient)"
              animate={{
                d: [
                  `M 0,${300 - (fillPercentage * 3) - 10}
                   Q 150,${300 - (fillPercentage * 3) - 30}
                     300,${300 - (fillPercentage * 3) - 10}
                   T 600,${300 - (fillPercentage * 3) - 10}
                   T 900,${300 - (fillPercentage * 3) - 10}
                   T 1200,${300 - (fillPercentage * 3) - 10}
                   V 300 H 0 Z`,
                  `M 0,${300 - (fillPercentage * 3) - 10}
                   Q 150,${300 - (fillPercentage * 3) + 10}
                     300,${300 - (fillPercentage * 3) - 10}
                   T 600,${300 - (fillPercentage * 3) - 10}
                   T 900,${300 - (fillPercentage * 3) - 10}
                   T 1200,${300 - (fillPercentage * 3) - 10}
                   V 300 H 0 Z`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>

        {/* Progress indicator */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 text-xl font-semibold">
            {Math.round(fillPercentage)}%
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LiquidText;
