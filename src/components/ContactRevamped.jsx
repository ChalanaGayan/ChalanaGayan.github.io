import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactRevamped = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/chalana-gayan-b6b60212a/',
      color: '#0077B5',
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/ChalanaGayan',
      color: '#ffffff',
    },
    {
      name: 'WhatsApp',
      icon: faWhatsapp,
      url: 'https://wa.me/message/DR6JXIW5EVGLJ1',
      color: '#25D366',
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: 'https://www.instagram.com/chanzz_11/',
      color: '#e1a48e',
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Spider Web Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="web" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,50 L50,0 M50,50 L100,0 M50,50 L100,50 M50,50 L100,100 M50,50 L50,100 M50,50 L0,100 M50,50 L0,50 M50,50 L0,0"
                    stroke="url(#gradient)" strokeWidth="0.5" fill="none" />
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#web)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <motion.div variants={textVariant()} className="text-center mb-12">
          <p className='text-gray-400 text-[14px] uppercase tracking-wider'>
            Let's Connect
          </p>
          <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            Get In Touch<span className="text-red-600">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side - Social Links */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect with me on social media
              </h3>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300 group"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-4xl transition-transform group-hover:scale-110"
                      style={{ color: social.color }}
                    />
                    <div>
                      <p className="text-white font-semibold text-lg">{social.name}</p>
                      <p className="text-gray-400 text-sm">@{social.name === 'LinkedIn' ? 'chalana-gayan' : 'ChalanaGayan'}</p>
                    </div>
                    <div className="ml-auto">
                      <svg
                        className="w-6 h-6 text-gray-500 group-hover:text-red-500 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-red-600/30" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-blue-600/30" />
            </div>
          </motion.div>

          {/* Right Side - CV Download & Info */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Download My Resume
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Interested in working together? Download my CV to learn more about my experience,
                skills, and projects. Let's build something amazing!
              </p>

              <motion.a
                href="https://drive.google.com/file/d/1H5ZhnRt0K1pvOdNb7o5GqoouHbxdWoiy/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-blue-600 text-white py-4 px-8 rounded-lg font-bold shadow-lg transition-all duration-300 hover:shadow-red-500/50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>chalanagayandhanawardhana@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Sri Lanka</span>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-red-600/30" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-blue-600/30" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(ContactRevamped, "contact");
