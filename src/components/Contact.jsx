/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='bg-zinc-900 border border-white/5 p-8 rounded-2xl shadow-lg max-w-min w-full'
      >
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2 text-center">Connect with Me</p>
        <h3 className="text-5xl text-white font-bold mb-6 text-center pb-10">
          Social Links<span className="text-red-600">.</span>
        </h3>

        <ul className="flex flex-col md:flex-row justify-center gap-10 pb-3">
          <li className="flex items-center group">
            <FontAwesomeIcon icon={faLinkedin} className="text-[#0077B5] mr-2 text-4xl group-hover:scale-110 transition-transform" />
            <a
              href="https://www.linkedin.com/in/chalana-gayan-b6b60212a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium text-xl hover:text-red-500 transition duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex items-center group">
            <FontAwesomeIcon icon={faGithub} className="text-white mr-2 text-4xl group-hover:scale-110 transition-transform" />
            <a
              href="https://github.com/ChalanaGayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium text-xl hover:text-red-500 transition duration-300"
            >
              GitHub
            </a>
          </li>
          <li className="flex items-center group">
            <FontAwesomeIcon icon={faWhatsapp} className="text-[#25D366] mr-2 text-4xl group-hover:scale-110 transition-transform" />
            <a
              href="https://wa.me/message/DR6JXIW5EVGLJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium text-xl hover:text-red-500 transition duration-300"
            >
              WhatsApp
            </a>
          </li>

          <li className="flex items-center group">
            <FontAwesomeIcon icon={faInstagram} className="text-[#e1a48e] mr-2 text-4xl group-hover:scale-110 transition-transform" />
            <a
              href="https://www.instagram.com/chanzz_11/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium text-xl hover:text-red-500 transition duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>

        <div className="mt-8 text-center">
          <a
            href="https://drive.google.com/file/d/1H5ZhnRt0K1pvOdNb7o5GqoouHbxdWoiy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black py-3 px-8 rounded-lg font-bold shadow-md transition duration-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-600 hover:text-white transform hover:scale-105 inline-block"
          >
            Download My CV
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
