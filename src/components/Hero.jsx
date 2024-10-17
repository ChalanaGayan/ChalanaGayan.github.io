import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex md:flex-row flex-col-reverse">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#7147E1]'>Chalana</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white font-bold`}>
              {window.innerWidth >= 640 ? (
                <TypeAnimation
                  sequence={[
                    'Computer Science and Engineering Undergraduate,',
                    2000,
                    'AI/ML enthusiast,',
                    2000,
                    'Full-stack developer',
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="inline-block"
                  speed={50}
                />
              ) : (
                <p className="text-xs">Computer Science and Engineering Undergraduate, AI/ML enthusiast, Full-stack developer</p>
              )}
            </p>
          </div>
          <div className="relative md:absolute md:right-14 md:top-0 mt-5 md:mt-0">
            <img
              src="/profile-pic.png"
              className="w-10 md:w-64"
              loading="eager"
              alt="Chalana's profile"
            />
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
