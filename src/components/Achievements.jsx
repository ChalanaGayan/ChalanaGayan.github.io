import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Achievements = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const achievements = [
    {
      image: '/journey/achievements/1.jpg',
      title: 'Achievement 1',
      year: '2024',
    },
    {
      image: '/journey/achievements/2.jpg',
      title: 'Achievement 2',
      year: '2023',
    },
    {
      image: '/journey/achievements/3.jpg',
      title: 'Achievement 3',
      year: '2022',
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-gray-400 text-[14px] uppercase tracking-wider'>
          Milestones
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Achievements<span className="text-red-600">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]'
      >
        A collection of notable achievements and recognitions throughout my journey
        in technology and education.
      </motion.p>

      {/* Horizontal Timeline */}
      <div className="mt-20 relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 transform -translate-y-1/2 hidden md:block" />

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.3, 0.75)}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-blue-600 border-4 border-black z-20 hidden md:block" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-zinc-900 to-black p-5 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => setLightboxImage(achievement.image)}
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden rounded-xl mb-4">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-blue-900/20 hover:opacity-0 transition-opacity" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{achievement.year}</p>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-red-600/30" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-blue-600/30" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={lightboxImage}
            alt="Enlarged achievement"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-red-500 transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
