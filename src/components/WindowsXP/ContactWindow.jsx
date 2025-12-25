import { useState } from 'react';

const ContactWindow = () => {
  const [activeTab, setActiveTab] = useState('contact');

  // CV Google Drive direct download link (convert view link to download link)
  const cvUrl = 'https://drive.google.com/file/d/1H5ZhnRt0K1pvOdNb7o5GqoouHbxdWoiy/preview';
  const cvDownloadUrl = 'https://drive.google.com/uc?export=download&id=1H5ZhnRt0K1pvOdNb7o5GqoouHbxdWoiy';

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Tab Navigation */}
      <div className="bg-gradient-to-b from-blue-100 to-white border-b-2 border-gray-300">
        <div className="flex">
          <TabButton
            label="Contact Info"
            icon="📧"
            active={activeTab === 'contact'}
            onClick={() => setActiveTab('contact')}
          />
          <TabButton
            label="Resume / CV"
            icon="📄"
            active={activeTab === 'cv'}
            onClick={() => setActiveTab('cv')}
          />
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'cv' && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* CV Viewer Header */}
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 flex items-center justify-between">
            <div className="text-white">
              <h3 className="text-lg font-bold">My Resume / CV</h3>
              <p className="text-sm text-white/90">View or download my complete curriculum vitae</p>
            </div>
            <a
              href={cvDownloadUrl}
              download="Chalana_Gayan_CV.pdf"
              className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2"
            >
              <span className="text-xl">📥</span>
              Download CV
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 bg-gray-100 relative">
            <iframe
              src={cvUrl}
              className="w-full h-full border-0"
              title="Resume / CV"
              allow="autoplay"
            />
          </div>
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 to-purple-50">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Let's Connect!</h2>
            <p className="text-white/90">Get in touch through any of these channels</p>
          </div>

          <div className="p-6">
            {/* Primary Contact - Email */}
            <div className="mb-6 p-6 bg-white rounded-xl border-2 border-blue-300 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-3xl">📧</span>
                Primary Email
              </h3>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <p className="text-gray-700 font-mono text-lg font-semibold">chalana.dev@gmail.com</p>
                  <p className="text-gray-500 text-sm mt-1">Response time: Within 24 hours</p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('chalana.dev@gmail.com');
                    alert('Email copied to clipboard!');
                  }}
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <span>📋</span>
                  Copy Email
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SocialLink
                  title="LinkedIn"
                  icon="💼"
                  url="https://www.linkedin.com/in/chalana-gayan-b6b60212a/"
                  color="from-blue-600 to-blue-700"
                  description="Professional network"
                />
                <SocialLink
                  title="GitHub"
                  icon="💻"
                  url="https://github.com/ChalanaGayan"
                  color="from-gray-700 to-gray-900"
                  description="Code repositories"
                />
                <SocialLink
                  title="WhatsApp"
                  icon="💬"
                  url="https://wa.me/message/DR6JXIW5EVGLJ1"
                  color="from-green-500 to-green-600"
                  description="Quick messaging"
                />
                <SocialLink
                  title="Instagram"
                  icon="📸"
                  url="https://www.instagram.com/chanzz_11/"
                  color="from-pink-500 to-purple-600"
                  description="Personal updates"
                />
              </div>
            </div>
          </div>
        </div>
      )}
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

const SocialLink = ({ title, icon, url, color, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 bg-white border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:shadow-xl transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className={`bg-gradient-to-br ${color} text-white text-3xl w-14 h-14 flex items-center justify-center rounded-lg shadow-lg`}>
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 group-hover:text-blue-600 text-base">{title}</h4>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
        <span className="text-gray-400 group-hover:text-blue-600 transition-colors">→</span>
      </div>
    </a>
  );
};

export default ContactWindow;
