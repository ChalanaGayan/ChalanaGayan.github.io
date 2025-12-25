import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const HeroMinimal = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle web pattern animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.fillStyle = 'rgba(220, 38, 38, 0.3)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x;
          const dy = nodes[j].y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Subtle web canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Subtle badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 border border-red-900/30 rounded-full bg-red-950/20">
                <span className="text-xs tracking-widest text-red-400/80 uppercase">
                  Full Stack Engineer & AI Researcher
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            >
              <span className="text-white">Chalana</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                Gayan
              </span>
            </motion.h1>

            {/* Quote - Subtle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl font-light leading-relaxed"
            >
              <span className="text-red-500/60">"With great power</span>{' '}
              <span className="text-gray-300">comes great responsibility"</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-500 mb-8 max-w-xl leading-relaxed"
            >
              Building intelligent systems and crafting seamless web experiences.
              Specializing in AI/ML, full-stack development, and solving complex problems
              with elegant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#journey"
                className="group relative px-8 py-4 bg-white text-black font-medium rounded-lg overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">View My Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white font-medium">
                  View My Journey
                </span>
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-red-500/50 hover:bg-red-950/20 transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Subtle circular rings */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0"
            >
              <div className="absolute inset-[20%] border border-red-900/20 rounded-full" />
              <div className="absolute inset-[30%] border border-blue-900/20 rounded-full" />
              <div className="absolute inset-[40%] border border-red-900/10 rounded-full" />
            </motion.div>

            {/* Center spider symbol - minimal */}
            <motion.div
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative w-64 h-64"
            >
              {/* Spider web pattern */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full opacity-40"
              >
                {/* Radial lines */}
                {[...Array(8)].map((_, i) => (
                  <motion.line
                    key={i}
                    x1="100"
                    y1="100"
                    x2={100 + 80 * Math.cos((i * Math.PI) / 4)}
                    y2={100 + 80 * Math.sin((i * Math.PI) / 4)}
                    stroke="#dc2626"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 + i * 0.1 }}
                  />
                ))}

                {/* Concentric circles */}
                {[30, 50, 70].map((r, i) => (
                  <motion.circle
                    key={i}
                    cx="100"
                    cy="100"
                    r={r}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1.5 + i * 0.2 }}
                  />
                ))}
              </svg>

              {/* Center spider icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: 'spring' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-8xl opacity-60">🕷️</div>
              </motion.div>
            </motion.div>

            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-red-600/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroMinimal;
