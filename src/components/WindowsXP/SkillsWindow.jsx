import { useState } from 'react';
import ImageGallery from './ImageGallery';

const SkillsWindow = () => {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <div className="h-full overflow-auto bg-white">
      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white border-b-2 border-gray-300 shadow-sm z-10">
        <div className="flex">
          <TabButton
            label="Technical Skills"
            icon="💻"
            active={activeTab === 'technical'}
            onClick={() => setActiveTab('technical')}
          />
          <TabButton
            label="Achievements"
            icon="🏆"
            active={activeTab === 'achievements'}
            onClick={() => setActiveTab('achievements')}
          />
          <TabButton
            label="Certifications"
            icon="📜"
            active={activeTab === 'certifications'}
            onClick={() => setActiveTab('certifications')}
          />
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'technical' && <TechnicalSkills />}
        {activeTab === 'achievements' && <Achievements />}
        {activeTab === 'certifications' && <Certifications />}
      </div>
    </div>
  );
};

const TabButton = ({ label, icon, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-4 py-3 font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
        active
          ? 'bg-gradient-to-b from-white to-blue-50 text-blue-600 border-b-2 border-blue-600'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
};

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '⚡',
      color: 'blue',
      skills: ['C++', 'Java', 'Python', 'Ballerina', 'JavaScript', 'TypeScript', 'Rust']
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'purple',
      skills: ['React', 'Angular', 'Redux', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      color: 'green',
      skills: ['Spring Boot', 'Node.js', 'Express', 'FastAPI', 'REST API', 'GraphQL', 'Microservices']
    },
    {
      title: 'Databases',
      icon: '🗄️',
      color: 'orange',
      skills: ['MySQL', 'PostgreSQL', 'Oracle DB', 'MongoDB', 'Qdrant', 'Chroma DB']
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: 'red',
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'Transformers', 'Deep Learning', 'Computer Vision', 'OpenCV', 'Continual Learning', 'Model Optimization (ONNX)', 'Quantization', 'Explainable AI (XAI)', 'LangGraph', 'RAG']
    },
    {
      title: 'DevOps & Tools',
      icon: '🔧',
      color: 'cyan',
      skills: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'Bitbucket', 'Postman', 'GitHub Copilot']
    },
    {
      title: 'Cloud & Integration',
      icon: '☁️',
      color: 'indigo',
      skills: ['Choreo', 'Asgardeo', 'Salesforce', 'Keycloak', 'MCP']
    },
    {
      title: 'IoT & Protocols',
      icon: '📡',
      color: 'teal',
      skills: ['MQTT', 'IoT Systems', 'Real-time Data Processing']
    },
    {
      title: 'Security & Authentication',
      icon: '🔒',
      color: 'yellow',
      skills: ['Authentication & Authorization', 'Keycloak', 'Asgardeo', 'Security Best Practices']
    }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 -m-6 mb-6">
        <h2 className="text-2xl font-bold text-white">Technical Expertise</h2>
        <p className="text-white/90 text-sm">Comprehensive skill set across 9 technical domains</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillCategories.map((category, idx) => (
          <SkillCategory key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

const SkillCategory = ({ category }) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    cyan: 'from-cyan-500 to-cyan-600',
    indigo: 'from-indigo-500 to-indigo-600',
    teal: 'from-teal-500 to-teal-600',
    yellow: 'from-yellow-500 to-yellow-600'
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all">
      <div className={`bg-gradient-to-r ${colorMap[category.color]} p-3 flex items-center gap-2`}>
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-white font-bold text-sm">{category.title}</h3>
      </div>
      <div className="p-3 flex flex-wrap gap-1.5">
        {category.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: '1st Runner UP - Cypher 2.0 Hackathon',
      date: 'April 2024',
      organization: 'IEEE WIE Student Branch - KDU & AION Campus',
      description: 'Placed 1st runner-up among 20 teams in a supervised hackathon where AI tools were prohibited. Selected for finals after completing data science tasks.',
      icon: '🥈',
      color: 'blue',
      image: '/journey/achievements/1.jpg'
    },
    {
      title: 'Top 5 Winners - Mini Hackathon',
      date: 'May 2024',
      organization: 'Mathematics Society - University of Moratuwa',
      description: 'Recognized as one of the top 5 winners out of 1000+ participants in a mathematics-focused hackathon.',
      icon: '🏅',
      color: 'green',
      image: '/journey/achievements/2.jpg'
    },
    {
      title: 'IEEE Extreme - Global Hackathon',
      date: 'October 2023',
      organization: 'IEEE',
      description: 'Achieved Top 100 ranking in Sri Lanka and Top 2500 globally in this prestigious 24-hour programming competition.',
      icon: '🌍',
      color: 'purple',
      image: '/journey/achievements/3.jpg'
    },
    {
      title: 'Semi-Finalists - SLIOT Challenge',
      date: 'January 2024',
      organization: 'University of Moratuwa & SLT Mobitel',
      description: 'Developed MechaPulse Solution, a machine fault detector using sound analysis, as an innovative IoT solution.',
      icon: '🔧',
      color: 'orange'
    },
    {
      title: 'GCE A/L - Island Rank 183',
      date: '2020',
      organization: 'Physical Science Stream',
      description: 'Z-score: 2.4768 | District Rank: 5 | Combined Maths: A | Physics: A | Chemistry: A',
      icon: '🎓',
      color: 'red'
    },
    {
      title: 'University CGPA: 3.56',
      date: '2022 - Present',
      organization: 'University of Moratuwa',
      description: 'Maintaining strong academic performance in Computer Science and Engineering (Up to 6 Semesters).',
      icon: '📚',
      color: 'indigo'
    }
  ];

  // Extract images from achievements
  const achievementImages = achievements
    .filter(a => a.image)
    .map(a => a.image);

  return (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 -m-6 mb-6">
        <h2 className="text-2xl font-bold text-white">Awards & Achievements</h2>
        <p className="text-white/90 text-sm">Recognition for technical excellence and academic performance</p>
      </div>

      {/* Image Gallery at top */}
      {achievementImages.length > 0 && (
        <div className="mb-6">
          <ImageGallery images={achievementImages} title="Achievement Photos" />
        </div>
      )}

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, idx) => (
          <AchievementCard key={idx} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

const AchievementCard = ({ achievement }) => {
  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all">
      {/* Header with Icon */}
      <div className={`bg-gradient-to-r ${colorMap[achievement.color]} p-4 flex items-center gap-3`}>
        <div className="text-4xl">{achievement.icon}</div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-base">{achievement.title}</h3>
          <p className="text-white/90 text-xs">{achievement.date}</p>
        </div>
      </div>

      {/* Content - No images here anymore */}
      <div className="p-4">
        <p className="text-sm font-semibold text-blue-600 mb-2">{achievement.organization}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{achievement.description}</p>
      </div>
    </div>
  );
};

const Certifications = () => {
  const certifications = [
    {
      title: 'OpenCV Bootcamp',
      organization: 'OpenCV',
      icon: '📷',
      year: '2024'
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      organization: 'Postman',
      icon: '📮',
      year: '2024'
    },
    {
      title: 'Intermediate Machine Learning',
      organization: 'Kaggle',
      icon: '🤖',
      year: '2024'
    }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 -m-6 mb-6">
        <h2 className="text-2xl font-bold text-white">Certifications</h2>
        <p className="text-white/90 text-sm">Professional certifications and completed courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certifications.map((cert, idx) => (
          <CertificationCard key={idx} cert={cert} />
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
        <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          Continuous Learning
        </h3>
        <p className="text-sm text-white/90 leading-relaxed">
          Actively pursuing additional certifications and staying updated with the latest technologies in software engineering, AI/ML, and cloud computing.
        </p>
      </div>
    </div>
  );
};

const CertificationCard = ({ cert }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-400 hover:shadow-lg transition-all">
      <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 text-center">
        <div className="text-4xl mb-1">{cert.icon}</div>
      </div>
      <div className="p-3">
        <h4 className="font-bold text-gray-800 text-xs mb-1 text-center">{cert.title}</h4>
        <p className="text-xs text-blue-600 font-semibold text-center mb-2">{cert.organization}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">✓ {cert.year}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsWindow;
