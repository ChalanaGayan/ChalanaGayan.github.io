
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] shadow-card bg-gradient-to-r from-red-900/20 to-blue-900/20 border border-white/5'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-zinc-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-zinc-800 transition-colors'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        {/* Left side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Photo container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/profile-pic.png"
                alt="Chalana Gayan"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Decorative elements - minimal */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-red-900/30 rounded-tl-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-blue-900/30 rounded-br-2xl" />
          </div>
        </motion.div>

        {/* Right side - Text */}
        <div>
          <motion.div variants={textVariant()}>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Introduction</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me<span className="text-red-600">.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]'
          >
            A passionate and adaptable individual with strong leadership skills and a keen interest in new technologies like machine learning, AI, and data science. I thrive in team settings, actively engage in volunteering and sustainable projects, and am dedicated to making a positive impact while continuously expanding my knowledge.
          </motion.p>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");