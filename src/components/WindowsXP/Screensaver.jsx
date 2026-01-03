import { motion } from 'framer-motion';

const Screensaver = ({ onDismiss, userName = "Chalana Gayan" }) => {
  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center cursor-pointer"
      style={{ zIndex: 9999 }}
      onClick={onDismiss}
      onKeyDown={(e) => e.key === 'Escape' && onDismiss()}
      tabIndex={0}
    >
      {/* 3D Rotating Text */}
      <div className="perspective-1000">
        <motion.div
          className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          style={{
            transformStyle: 'preserve-3d',
            textShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 15, 0, -15, 0],
          }}
          transition={{
            rotateY: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            },
            rotateX: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {userName}
        </motion.div>
      </div>

      {/* Hint text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 text-white/50 text-sm"
      >
        Click or press any key to continue
      </motion.p>
    </div>
  );
};

export default Screensaver;
