// Glitch animation variants for Framer Motion

// Subtle glitch for text elements
export const glitchVariants = {
  initial: { x: 0, filter: "hue-rotate(0deg)" },
  animate: {
    x: [-2, 2, -2, 2, 0],
    filter: [
      "hue-rotate(0deg)",
      "hue-rotate(5deg)",
      "hue-rotate(-5deg)",
      "hue-rotate(0deg)"
    ],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 3,
    }
  }
};

// Subtle continuous glitch for specific elements
export const subtleGlitch = {
  animate: {
    textShadow: [
      "0 0 0 rgba(220, 38, 38, 0)",
      "2px 2px 2px rgba(220, 38, 38, 0.3)",
      "-2px -2px 2px rgba(37, 99, 235, 0.3)",
      "0 0 0 rgba(220, 38, 38, 0)",
    ],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatDelay: 4,
    }
  }
};

// Glitch on hover
export const glitchHover = {
  rest: {
    textShadow: "0 0 0 rgba(220, 38, 38, 0)"
  },
  hover: {
    textShadow: [
      "2px 2px 0 rgba(220, 38, 38, 0.5)",
      "-2px -2px 0 rgba(37, 99, 235, 0.5)",
      "2px -2px 0 rgba(220, 38, 38, 0.5)",
      "-2px 2px 0 rgba(37, 99, 235, 0.5)",
    ],
    transition: {
      duration: 0.2,
      repeat: 2,
    }
  }
};

// Web pattern animation
export const webPattern = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Spider-Man colors
export const spiderManColors = {
  red: "#dc2626",      // red-600
  blue: "#2563eb",     // blue-600
  black: "#000000",
  white: "#ffffff",
  darkRed: "#7f1d1d", // red-900
  darkBlue: "#1e3a8a", // blue-900
};
