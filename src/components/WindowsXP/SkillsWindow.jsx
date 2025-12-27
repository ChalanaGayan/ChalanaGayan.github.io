import { useState } from 'react';
import ImageGallery from './ImageGallery';

const SkillsWindow = () => {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <div className="h-full overflow-auto bg-gray-50">
      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white border-b-2 border-gray-300 shadow-sm z-10">
        <div className="flex">
          <TabButton
            label="Technical Skills"
            active={activeTab === 'technical'}
            onClick={() => setActiveTab('technical')}
          />
          <TabButton
            label="Achievements"
            active={activeTab === 'achievements'}
            onClick={() => setActiveTab('achievements')}
          />
          <TabButton
            label="Certifications"
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

const TabButton = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-4 py-3 font-semibold text-sm transition-all ${
        active
          ? 'bg-white text-gray-800 border-b-2 border-gray-800'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python', 'Ballerina', 'JavaScript', 'TypeScript', 'Rust']
    },
    {
      title: 'Frontend Development',
      skills: ['React', 'Angular', 'Redux', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend Development',
      skills: ['Spring Boot', 'Node.js', 'Express', 'FastAPI', 'REST API', 'GraphQL', 'Microservices']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Oracle DB', 'MongoDB', 'Qdrant', 'Chroma DB']
    },
    {
      title: 'AI & Machine Learning',
      skills: ['PyTorch', 'TensorFlow', 'Keras', 'Transformers', 'Deep Learning', 'Computer Vision', 'OpenCV', 'Continual Learning', 'Model Optimization (ONNX)', 'Quantization', 'Explainable AI (XAI)', 'LangGraph', 'RAG']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'Bitbucket', 'Postman', 'GitHub Copilot']
    },
    {
      title: 'Cloud & Integration',
      skills: ['Choreo', 'Asgardeo', 'Salesforce', 'Keycloak', 'MCP']
    },
    {
      title: 'IoT & Protocols',
      skills: ['MQTT', 'IoT Systems', 'Real-time Data Processing']
    },
    {
      title: 'Security & Authentication',
      skills: ['Authentication & Authorization', 'Keycloak', 'Asgardeo', 'Security Best Practices']
    }
  ];

  return (
    <div>
      <div className="bg-white p-4 -m-6 mb-6 border-b-2 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900">Technical Expertise</h2>
        <p className="text-gray-600 text-sm">Comprehensive skill set across 9 technical domains</p>
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
  return (
    <div className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:border-gray-500 hover:shadow-lg transition-all">
      <div className="bg-gray-100 p-3 border-b border-gray-300">
        <h3 className="text-gray-900 font-bold text-sm">{category.title}</h3>
      </div>
      <div className="p-3 flex flex-wrap gap-1.5">
        {category.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs font-medium border border-gray-200 hover:bg-gray-100 hover:border-gray-400 transition-all"
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
      image: '/journey/achievements/1.jpg'
    },
    {
      title: 'Top 5 Winners - Mini Hackathon',
      date: 'May 2024',
      organization: 'Mathematics Society - University of Moratuwa',
      description: 'Recognized as one of the top 5 winners out of 1000+ participants in a mathematics-focused hackathon.',
      image: '/journey/achievements/2.jpg'
    },
    {
      title: 'IEEE Extreme - Global Hackathon',
      date: 'October 2023',
      organization: 'IEEE',
      description: 'Achieved Top 100 ranking in Sri Lanka and Top 2500 globally in this prestigious 24-hour programming competition.',
      image: '/journey/achievements/3.jpg'
    },
    {
      title: 'Semi-Finalists - SLIOT Challenge',
      date: 'January 2024',
      organization: 'University of Moratuwa & SLT Mobitel',
      description: 'Developed MechaPulse Solution, a machine fault detector using sound analysis, as an innovative IoT solution.'
    },
    {
      title: 'GCE A/L - Island Rank 183',
      date: '2020',
      organization: 'Physical Science Stream',
      description: 'Z-score: 2.4768 | District Rank: 5 | Combined Maths: A | Physics: A | Chemistry: A'
    },
    {
      title: 'University CGPA: 3.56',
      date: '2022 - Present',
      organization: 'University of Moratuwa',
      description: 'Maintaining strong academic performance in Computer Science and Engineering (Up to 6 Semesters).'
    }
  ];

  // Extract images from achievements
  const achievementImages = achievements
    .filter(a => a.image)
    .map(a => a.image);

  return (
    <div>
      <div className="bg-white p-4 -m-6 mb-6 border-b-2 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900">Awards & Achievements</h2>
        <p className="text-gray-600 text-sm">Recognition for technical excellence and academic performance</p>
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
  return (
    <div className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:border-gray-500 hover:shadow-lg transition-all">
      {/* Header */}
      <div className="bg-gray-100 p-4 border-b border-gray-300">
        <h3 className="text-gray-900 font-bold text-base">{achievement.title}</h3>
        <p className="text-gray-600 text-xs">{achievement.date}</p>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm font-semibold text-gray-900 mb-2">{achievement.organization}</p>
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
      year: '2024'
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      organization: 'Postman',
      year: '2024'
    },
    {
      title: 'Intermediate Machine Learning',
      organization: 'Kaggle',
      year: '2024'
    }
  ];

  return (
    <div>
      <div className="bg-white p-4 -m-6 mb-6 border-b-2 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
        <p className="text-gray-600 text-sm">Professional certifications and completed courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certifications.map((cert, idx) => (
          <CertificationCard key={idx} cert={cert} />
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded border-2 border-gray-300">
        <h3 className="text-base font-bold text-black mb-2">
          Continuous Learning
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Actively pursuing additional certifications and staying updated with the latest technologies in software engineering, AI/ML, and cloud computing.
        </p>
      </div>
    </div>
  );
};

const CertificationCard = ({ cert }) => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded overflow-hidden hover:border-gray-500 hover:shadow-lg transition-all">
      <div className="bg-gray-100 p-3 text-center border-b border-gray-300">
        <h4 className="font-bold text-gray-900 text-xs">{cert.title}</h4>
      </div>
      <div className="p-3">
        <p className="text-xs text-gray-700 font-semibold text-center mb-2">{cert.organization}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded font-semibold border border-gray-200">{cert.year}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsWindow;
