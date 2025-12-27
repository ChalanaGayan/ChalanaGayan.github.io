import { useState } from 'react';
import Screensaver from './Screensaver';

const HeroWindow = () => {
  const [showSlideshow, setShowSlideshow] = useState(false);

  if (showSlideshow) {
    return <Screensaver onDismiss={() => setShowSlideshow(false)} userName="Chalana Gayan" />;
  }

  return (
    <div className="h-full flex items-center justify-center bg-white overflow-auto p-8">
      {/* Main Content Card */}
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-300 max-w-5xl w-full">
        {/* Header Banner */}
        <div className="bg-gray-100 p-6 text-center border-b-2 border-gray-300">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to My Portfolio</h1>
          <p className="text-gray-700 text-lg">Explore my journey in Computer Science & Software Engineering</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Introduction */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-black mb-3">About This Portfolio</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              This is a Windows XP themed interactive portfolio showcasing my professional background, technical skills, projects, and achievements. Navigate through different folders on the desktop or use the Start menu to explore various sections of my work.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center mb-8">
            <ActionButton
              onClick={() => setShowSlideshow(true)}
              label="View Name Slideshow"
              color="blue"
            />
          </div>

          {/* Portfolio Features */}
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-300">
            <h3 className="text-xl font-bold text-black mb-5 text-center">
              Explore My Portfolio Sections
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureItem
                title="About Me"
                icon="/profile-pic.png"
                description="Discover my professional background, work experience, education, and leadership roles in software engineering and volunteering."
              />
              <FeatureItem
                title="Projects"
                icon="/desktop_pc/folder_windowsXP.png"
                description="Browse through my software development and AI/ML projects, including web applications, machine learning models, and IoT solutions."
              />
              <FeatureItem
                title="My Journey"
                icon="/desktop_pc/folder_windowsXP.png"
                description="Visual timeline of my career milestones, from university experiences to professional work, volunteering, and memorable moments."
              />
              <FeatureItem
                title="Skills & Achievements"
                icon="/desktop_pc/folder_windowsXP.png"
                description="Comprehensive overview of my technical skills, hackathon wins, academic achievements, and professional certifications."
              />
              <FeatureItem
                title="Contact"
                icon="/desktop_pc/folder_windowsXP.png"
                description="Get in touch with me through various channels and download my CV. Includes email, social media links, and contact information."
              />
              <FeatureItem
                title="Browser"
                icon="/desktop_pc/folder_windowsXP.png"
                description="A functional Windows XP-style Internet Explorer browser to explore the web with a nostalgic experience."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ onClick, label, color = 'gray', secondary = false }) => {
  const colorMap = {
    blue: secondary ? 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700',
    gray: 'bg-gray-800 text-white hover:bg-gray-700 border-gray-400'
  };

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded font-semibold shadow transition-all ${colorMap[color]} ${secondary ? 'border-2' : ''}`}
    >
      {label}
    </button>
  );
};

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="p-4 bg-white rounded border-2 border-gray-300 hover:border-gray-500 hover:shadow-md transition-all">
      <div className="flex items-start gap-3">
        {icon && (
          <img src={icon} alt={title} className="w-8 h-8 object-contain flex-shrink-0" />
        )}
        <div className="flex-1">
          <h4 className="font-bold text-black text-sm mb-1">{title}</h4>
          <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroWindow;
