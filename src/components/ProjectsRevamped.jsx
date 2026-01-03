import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { experiences } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, experience }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full"
    >
      <Tilt
        options={{
          max: 20,
          scale: 1.02,
          speed: 450,
        }}
        className='bg-gradient-to-br from-zinc-900 to-black p-5 rounded-2xl border border-white/10 w-full hover:border-red-500/30 transition-all duration-300'
      >
        {/* Company Logo Badge */}
        <div className="relative w-full">
          <div className="absolute -top-8 -right-2 w-16 h-16 rounded-full bg-white p-2 border-2 border-red-600/50">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-full h-full object-contain'
            />
          </div>
        </div>

        {/* Project Details */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px] line-clamp-2 min-h-[56px]'>
            {experience.title}
          </h3>

          <p className='mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 text-[16px] font-semibold'>
            {experience.company_name}
          </p>

          <span className='text-gray-500 text-[14px]'>{experience.date}</span>
        </div>

        {/* Description Points */}
        <ul className='mt-4 list-disc ml-5 space-y-2'>
          {experience.points.slice(0, 3).map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              className='text-gray-400 text-[13px] leading-relaxed line-clamp-2'
            >
              {point}
            </li>
          ))}
        </ul>

        {/* Team Photos Placeholder */}
        {experience.teamPhotos && experience.teamPhotos.length > 0 && (
          <div className='flex -space-x-2 mt-4'>
            {experience.teamPhotos.slice(0, 4).map((photo, idx) => (
              <div
                key={idx}
                className='w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-red-900 to-blue-900'
              >
                {photo && <img src={photo} alt={`Team ${idx}`} className='w-full h-full rounded-full object-cover' />}
              </div>
            ))}
            {experience.teamPhotos.length > 4 && (
              <div className='w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-xs text-white'>
                +{experience.teamPhotos.length - 4}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className='mt-6 flex gap-3'>
          <button
            disabled={!experience.link}
            className={`flex-1 py-2 rounded-lg font-medium transition-all duration-300 ${
              experience.link
                ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white hover:scale-105'
                : 'bg-zinc-800 text-gray-600 cursor-not-allowed'
            }`}
            onClick={() => experience.link && window.open(experience.link, '_blank')}
          >
            {experience.link ? 'View Project' : 'Coming Soon'}
          </button>

          <div
            className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center cursor-pointer hover:bg-zinc-700 transition-colors'
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <img
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-red-600/30" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-blue-600/30" />
      </Tilt>
    </motion.div>
  );
};

const ProjectsRevamped = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-gray-400 text-[14px] uppercase tracking-wider'>
          My work
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Projects<span className="text-red-600">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]'
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {experiences.map((experience, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ProjectsRevamped, "work");
