import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const JourneyHorizontal = () => {
  const containerRef = useRef(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  // Helper function to generate image paths
  const getImages = (folder, count) => {
    return Array.from({ length: count }, (_, i) => `/journey/${folder}/${i + 1}.jpg`);
  };

  const milestones = [
    {
      year: '2025 - Present',
      title: 'Surecore.co',
      role: 'Full Stack Engineer & AI Researcher',
      description: 'Leading AI Multi-Agent Platform R&D with LangGraph, building cutting-edge AI solutions including Surely Personal AI Chatbot using RAG architecture and Serendib Micro Insurance Platform for Cambodia.',
      images: getImages('surecore', 2),
      tags: ['AI/ML', 'LangChain', 'Angular', 'Spring Boot', 'Kubernetes'],
      color: 'from-red-900/20 to-blue-900/20',
    },
    {
      year: '2025',
      title: 'WSO2 LLC',
      role: 'Full Stack Intern',
      description: 'Developed WSO2 Certification Portal end-to-end using React, Redux, Ballerina, MySQL, and GraphQL. Integrated Salesforce for certification data management.',
      images: getImages('wso2', 16),
      tags: ['React', 'Redux', 'Ballerina', 'GraphQL', 'Salesforce'],
      color: 'from-blue-900/20 to-red-900/20',
    },
    {
      year: '2021 - Present',
      title: 'University of Moratuwa',
      role: 'BSc (Hons) Computer Science & Engineering',
      description: 'Student Representative (2023-2024). Specializing in AI/ML and Software Engineering. Final Year Project: Adaptive AI System for Real-Time Web Attack Detection.',
      images: getImages('University', 13),
      tags: ['AI/ML', 'Software Engineering', 'Research', 'Leadership'],
      color: 'from-red-900/20 to-blue-900/20',
    },
    {
      year: '2007 - 2019',
      title: 'R/Sivali Central College',
      role: 'Senior Prefect',
      description: 'Senior Prefect (2018-2019), leading student council and organizing school events. Active in extracurricular activities and sports with strong academic performance.',
      images: [...getImages('school', 6), ...getImages('achievements', 3)],
      tags: ['Leadership', 'Academic Excellence', 'Community'],
      color: 'from-blue-900/20 to-red-900/20',
    },
    {
      year: '2021 - Present',
      title: 'Sasnaka Volunteer Service',
      role: 'Community Volunteer',
      description: 'Active volunteer engaging in community service and social responsibility initiatives. Committed to making a positive impact through various volunteering activities and social programs.',
      images: getImages('Sasnaka', 11),
      tags: ['Leadership', 'Community', 'Service', 'Social Impact'],
      color: 'from-red-900/20 to-blue-900/20',
    },
  ];

  return (
    <>
      <div id="journey" ref={containerRef} className="relative bg-black" style={{ height: '400vh' }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Section title - fixed */}
          <div className="absolute top-20 left-10 z-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">
                My Journey<span className="text-red-600">.</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600" />
            </motion.div>
          </div>

          {/* Horizontal scrolling container */}
          <motion.div
            style={{ x }}
            className="flex gap-0"
          >
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-screen h-screen flex items-center justify-center px-10 md:px-20"
              >
                {/* Full page section */}
                <div className="relative w-full h-full max-w-7xl flex items-center">
                  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                    {/* Left side - Image Gallery */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8 }}
                      className="relative h-[500px] md:h-[600px]"
                    >
                      {milestone.images.length > 0 ? (
                        <div className="relative w-full h-full">
                          {/* Gallery Grid */}
                          <div className={`w-full h-full grid gap-2 ${
                            milestone.images.length === 1 ? 'grid-cols-1' :
                            milestone.images.length === 2 ? 'grid-cols-2' :
                            milestone.images.length === 3 ? 'grid-cols-2 grid-rows-2' :
                            milestone.images.length === 4 ? 'grid-cols-2 grid-rows-2' :
                            'grid-cols-3 grid-rows-3'
                          } overflow-hidden rounded-2xl`}>
                            {milestone.images.slice(0, 9).map((img, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                                onClick={() => setLightboxImage(img)}
                                className={`relative overflow-hidden border border-white/10 cursor-pointer ${
                                  milestone.images.length === 3 && i === 0 ? 'row-span-2' :
                                  milestone.images.length > 4 && i === 0 ? 'col-span-2 row-span-2' : ''
                                }`}
                              >
                                <img
                                  src={img}
                                  alt={`${milestone.title} ${i + 1}`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} hover:opacity-0 transition-opacity`} />

                                {/* Image number overlay */}
                                <div className="absolute top-2 right-2 w-6 h-6 bg-black/80 rounded-full flex items-center justify-center text-xs text-white">
                                  {i + 1}
                                </div>
                              </motion.div>
                            ))}

                            {/* More images indicator */}
                            {milestone.images.length > 9 && (
                              <div className="relative overflow-hidden border border-white/10 bg-black/80 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-4xl text-white font-bold">+{milestone.images.length - 9}</div>
                                  <div className="text-xs text-gray-400">more</div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Year badge */}
                          <div className="absolute -top-4 -left-4 px-4 py-2 bg-black/90 backdrop-blur-sm border-2 border-red-600 rounded-full z-10">
                            <span className="text-sm text-red-400 font-medium tracking-wide">
                              {milestone.year}
                            </span>
                          </div>

                          {/* Decorative corners */}
                          <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-red-900/30 pointer-events-none" />
                          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-blue-900/30 pointer-events-none" />
                        </div>
                      ) : (
                        // Placeholder if no images
                        <div className="w-full h-full rounded-2xl border border-white/10 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
                          <p className="text-gray-500">No images available</p>
                        </div>
                      )}
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="space-y-6"
                    >
                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        {milestone.title}
                      </h3>

                      {/* Role */}
                      <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 font-medium">
                        {milestone.role}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-xl">
                        {milestone.description}
                      </p>

                      {/* Image count */}
                      {milestone.images.length > 0 && (
                        <div className="text-sm text-gray-500">
                          📸 {milestone.images.length} {milestone.images.length === 1 ? 'photo' : 'photos'}
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-3">
                        {milestone.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-red-500/50 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Section indicator */}
                      <div className="flex items-center gap-2 pt-4">
                        {milestones.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 rounded-full transition-all ${
                              i === index
                                ? 'w-12 bg-gradient-to-r from-red-600 to-blue-600'
                                : 'w-8 bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-80 md:w-96 z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white/10 h-2 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 to-blue-600 rounded-full"
                style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              {milestones.map((milestone, idx) => (
                <span key={idx} className="text-center">
                  {idx + 1}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 right-10 text-gray-600 text-sm flex items-center gap-2"
          >
            <span className="uppercase tracking-wider hidden md:inline">Scroll to explore</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
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
            alt="Enlarged view"
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

export default JourneyHorizontal;
