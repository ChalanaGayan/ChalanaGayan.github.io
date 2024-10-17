/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Full height and centered */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='bg-black-100 p-8 rounded-2xl shadow-lg max-w-min w-full'
      >
        <p className="text-gray-300 font-mono font-medium mb-4 text-center">Connect with Me</p>
        <h3 className="text-6xl text-white font-bold mb-6 text-center pb-10">Social Links</h3>

        <ul className="flex flex-col md:flex-row justify-center gap-10 pb-3">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faLinkedin} className="text-[#0077B5] mr-2 text-4xl " />
            <a
              href="https://www.linkedin.com/in/chalana-gayan-b6b60212a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium font-mono text-xl hover:underline hover:text-[#915EFF] transition duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faGithub} className="text-white mr-2 text-4xl" />
            <a
              href="https://github.com/ChalanaGayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium font-mono text-xl hover:underline hover:text-[#915EFF] transition duration-300"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-[#25D366] mr-2 text-4xl" />
            <a
              href="https://wa.me/message/DR6JXIW5EVGLJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium font-mono text-xl hover:underline hover:text-[#915EFF] transition duration-300"
            >
              WhatsApp
            </a>
          </li>

          <li className="flex items-center">
            <FontAwesomeIcon icon={faInstagram} className="text-[#e1a48e] mr-2 text-4xl" />
            <a
              href="https://www.instagram.com/chanzz_11/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium font-mono text-xl hover:underline hover:text-[#915EFF] transition duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>

        <div className="mt-8 text-center">
          <a
            href="https://drive.google.com/file/d/1NGKJYq-gsU-H971agR41xM4YIFG81OSV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 py-3 px-2 rounded-xl text-white font-bold shadow-md transition duration-300 hover:bg-green-600 transform hover:scale-105"
          >
            Download My CV
          </a>

        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
