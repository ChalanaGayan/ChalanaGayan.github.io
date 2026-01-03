import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { skillCategories } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const SkillCard = ({ category, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full"
    >
      <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300 h-full">
        {/* Category Title */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
            {category.title}
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-blue-600 mt-2" />
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
          {category.technologies.map((tech, techIndex) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: techIndex * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <BallCanvas icon={tech.icon} />
              </div>
              <p className="text-gray-400 text-xs mt-2 text-center">{tech.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative corners */}
        <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-red-600/30" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-blue-600/30" />
      </div>
    </motion.div>
  );
};

const SkillsCategories = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-gray-400 text-[14px] uppercase tracking-wider'>
          What I can do
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          Skills & Technologies<span className="text-red-600">.</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]'
      >
        I specialize in full-stack development and AI/ML, combining modern web technologies
        with cutting-edge artificial intelligence to build intelligent, scalable applications.
        Here are the technologies and tools I work with.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {Object.values(skillCategories).map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SkillsCategories, "skills");
