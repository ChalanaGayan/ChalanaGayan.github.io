import { useState } from 'react';
import Screensaver from './Screensaver';

const HeroWindow = () => {
  const [showSlideshow, setShowSlideshow] = useState(false);

  if (showSlideshow) {
    return <Screensaver onDismiss={() => setShowSlideshow(false)} userName="Chalana Gayan" />;
  }

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-auto p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-200 max-w-5xl w-full">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to My Portfolio</h1>
          <p className="text-white/90 text-lg">Explore my journey in Computer Science & Software Engineering</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Introduction */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">About This Portfolio</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              This is a Windows XP themed interactive portfolio showcasing my professional background, technical skills, projects, and achievements. Navigate through different folders on the desktop or use the Start menu to explore various sections of my work.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center mb-8">
            <ActionButton
              onClick={() => setShowSlideshow(true)}
              icon="🎬"
              label="View Name Slideshow"
              color="blue"
            />
          </div>

          {/* Portfolio Features */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 border-2 border-blue-300">
            <h3 className="text-xl font-bold text-gray-800 mb-5 text-center flex items-center justify-center gap-2">
              <span className="text-2xl">📂</span>
              Explore My Portfolio Sections
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureItem
                icon="📁"
                title="About Me"
                description="Discover my professional background, work experience, education, and leadership roles in software engineering and volunteering."
              />
              <FeatureItem
                icon="📂"
                title="Projects"
                description="Browse through my software development and AI/ML projects, including web applications, machine learning models, and IoT solutions."
              />
              <FeatureItem
                icon="🖼️"
                title="My Journey"
                description="Visual timeline of my career milestones, from university experiences to professional work, volunteering, and memorable moments."
              />
              <FeatureItem
                icon="⭐"
                title="Skills & Achievements"
                description="Comprehensive overview of my technical skills, hackathon wins, academic achievements, and professional certifications."
              />
              <FeatureItem
                icon="📧"
                title="Contact"
                description="Get in touch with me through various channels and download my CV. Includes email, social media links, and contact information."
              />
              <FeatureItem
                icon="🌐"
                title="Browser"
                description="A functional Windows XP-style Internet Explorer browser to explore the web with a nostalgic experience."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ onClick, icon, label, color = 'blue', secondary = false }) => {
  const colorMap = {
    blue: secondary ? 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50' : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700',
    green: secondary ? 'bg-white text-green-600 border-green-600 hover:bg-green-50' : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
  };

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-lg font-semibold shadow-lg transition-all flex items-center gap-2 ${colorMap[color]} ${secondary ? 'border-2' : ''}`}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
};

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
      <span className="text-3xl">{icon}</span>
      <div>
        <h4 className="font-bold text-gray-800 text-sm mb-1">{title}</h4>
        <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default HeroWindow;
