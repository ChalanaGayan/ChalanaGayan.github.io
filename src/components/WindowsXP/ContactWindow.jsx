import { useState } from 'react';

const ContactWindow = () => {
  const [activeTab, setActiveTab] = useState('contact');

  // CV Google Drive direct download link (convert view link to download link)
  const cvUrl = 'https://drive.google.com/file/d/1H5ZhnRt0K1pvOdNb7o5GqoouHbxdWoiy/preview';
  const cvDownloadUrl = 'https://drive.google.com/uc?export=download&id=1H5ZhnRt0K1pvOdNb7o5GqoouHbxdWoiy';

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Tab Navigation */}
      <div className="bg-white border-b-2 border-gray-300">
        <div className="flex">
          <TabButton
            label="Contact Info"
            active={activeTab === 'contact'}
            onClick={() => setActiveTab('contact')}
          />
          <TabButton
            label="Resume / CV"
            active={activeTab === 'cv'}
            onClick={() => setActiveTab('cv')}
          />
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'cv' && (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* CV Viewer Header */}
          <div className="bg-gray-100 p-4 flex items-center justify-between border-b-2 border-gray-300">
            <div>
              <h3 className="text-lg font-bold text-gray-900">My Resume / CV</h3>
              <p className="text-sm text-gray-600">View or download my complete curriculum vitae</p>
            </div>
            <a
              href={cvDownloadUrl}
              download="Chalana_Gayan_CV.pdf"
              className="px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-colors shadow"
            >
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
        <div className="flex-1 overflow-auto bg-gray-50">
          {/* Header Banner */}
          <div className="bg-gray-100 p-6 border-b-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Let's Connect!</h2>
            <p className="text-gray-600">Get in touch through any of these channels</p>
          </div>

          <div className="p-6">
            {/* Primary Contact - Email */}
            <div className="mb-6 p-6 bg-white rounded border-2 border-gray-300 shadow">
              <h3 className="text-xl font-bold text-black mb-4">
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
                  className="px-6 py-3 rounded bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all shadow"
                >
                  Copy Email
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SocialLink
                  title="LinkedIn"
                  url="https://www.linkedin.com/in/chalana-gayan-b6b60212a/"
                  description="Professional network"
                />
                <SocialLink
                  title="GitHub"
                  url="https://github.com/ChalanaGayan"
                  description="Code repositories"
                />
                <SocialLink
                  title="WhatsApp"
                  url="https://wa.me/message/DR6JXIW5EVGLJ1"
                  description="Quick messaging"
                />
                <SocialLink
                  title="Instagram"
                  url="https://www.instagram.com/chanzz_11/"
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

const SocialLink = ({ title, url, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 bg-white border-2 border-gray-300 rounded hover:border-gray-500 hover:shadow-lg transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 group-hover:text-gray-700 text-base">{title}</h4>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
        <span className="text-gray-400 group-hover:text-gray-700 transition-colors">→</span>
      </div>
    </a>
  );
};

export default ContactWindow;
