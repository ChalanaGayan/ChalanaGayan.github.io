import { useState } from 'react';
import ImageGallery from './ImageGallery';

const JourneyWindow = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const getImages = (folder, count) => {
    return Array.from({ length: count }, (_, i) => `/journey/${folder}/${i + 1}.jpg`);
  };

  const milestones = [
    {
      year: '2025 - Present',
      title: 'Surecore (Pvt) Ltd',
      role: 'Associate Software Engineer',
      description: 'Developing enterprise insurance solutions (payments, finance, underwriting) using Angular, Spring Boot, microservices, PostgreSQL/Oracle, and Kubernetes. Contributing to R&D initiatives including multi-tenant system design and AI/multi-agent automation experiments.',
      images: getImages('surecore', 2),
      tags: ['Angular', 'Spring Boot', 'Microservices', 'Kubernetes', 'AI/ML'],
      highlights: [
        'Full-stack development across payments, finance, and underwriting modules',
        'R&D: Multi-tenant system design with Keycloak',
        'AI Multi-Agent Automation using LangGraph, MCP, and RAG architecture',
        'Production deployments on Kubernetes with Oracle DB and PostgreSQL'
      ],
      projects: [
        {
          name: 'AI Multi-Agent Automation (Multi-Tenant)',
          period: 'Nov 2025 - Ongoing',
          tech: 'LangGraph, MCP, Keycloak, Python, FastAPI, Qdrant, Docker, Kubernetes',
          description: 'Built core multi-agent product acting as a personal AI assistant with automated tasks, reports, and workflow orchestration.'
        },
        {
          name: 'Serendib Micro Insurance Platform',
          period: 'Jul 2025 - Dec 2025',
          tech: 'Angular, Spring Boot, Java, Kubernetes, Microservices, Oracle DB',
          description: 'Developed and maintained full-stack features including invoices, financial reports, authentication, and production bug fixes.'
        }
      ]
    },
    {
      year: 'Jan 2025 - Jul 2025',
      title: 'WSO2 LLC',
      role: 'Software Engineering Intern',
      description: 'Worked on the WSO2 Certification Portal using React TS, Ballerina, REST, GraphQL, MySQL, and Salesforce across UI, backend, and integration layers. Supported product download tracking and gained hands-on experience with WSO2 products ecosystem.',
      images: getImages('wso2', 16),
      tags: ['React TypeScript', 'Ballerina', 'GraphQL', 'Salesforce', 'Asgardeo'],
      highlights: [
        'Full-stack development with React TypeScript and Ballerina',
        'Salesforce integration for certification management',
        'Enhanced authentication and authorization with Asgardeo',
        'Backend API development using Ballerina and Choreo',
        'Frontend state management with Redux'
      ],
      projects: [
        {
          name: 'WSO2 Certification Portal',
          period: 'Jan 2025 - Jul 2025',
          tech: 'React TypeScript, Redux, Ballerina, Choreo, MySQL, Asgardeo, Salesforce',
          description: 'Maintained and enhanced enterprise certification management system with reliability and smooth execution of end-to-end workflows.'
        }
      ]
    },
    {
      year: '2022 - Present',
      title: 'University of Moratuwa',
      role: 'BSc Eng (Hons) - Computer Science & Engineering',
      description: 'Pursuing Computer Science and Engineering degree with CGPA 3.56. Specializing in AI/ML and Software Engineering. Active in IEEE, hackathons, and technical communities. Department Representative (2023-2024).',
      images: getImages('University', 11),
      tags: ['AI/ML', 'Software Engineering', 'Research', 'Leadership'],
      highlights: [
        'CGPA: 3.56 (Up to 6 Semesters)',
        'Department Representative (2023-2024)',
        '1st Runner UP - Cypher 2.0 Hackathon (April 2024)',
        'Top 5 Winners - Mini Hackathon (May 2024)',
        'IEEE Extreme - Top 100 Sri Lanka, Top 2500 Global (Oct 2023)',
        'Semi-Finalists - SLIOT Challenge (Jan 2024)'
      ],
      projects: [
        {
          name: 'NeuraShield: Adaptive AI System for Real-Time Web Attack Detection',
          period: 'Jun 2025 - Ongoing',
          tech: 'Python, PyTorch, Keras, Transformers, Rust, Envoy, Kubernetes, ONNX',
          description: 'Final Year Research Project: Built real-time detector for SQLi, XSS, SSRF, and OS command attacks using lightweight transformers with continual learning, ONNX optimization, and XAI.'
        },
        {
          name: 'Train Booking System',
          period: 'Jul 2024 - Nov 2024',
          tech: 'Node.js, Express, React, MySQL',
          description: 'Full-stack train booking system with train search, seat selection, and reservation workflows with REST APIs and transactional database logic.'
        },
        {
          name: 'MechaPulse - Intelligent Machine Fault Detection',
          period: 'Jan 2024 - Jul 2024',
          tech: 'Python, OpenCV, Flask, Node.js, JavaScript, MQTT',
          description: 'IoT-based machine fault detection system using sound analysis and ML with real-time data ingestion and MQTT communication.'
        },
        {
          name: 'IEEE Challenge Sphere - Event Website',
          period: 'Nov 2024',
          tech: 'ReactJS, GitHub Pages',
          description: 'Responsive website for IEEE Challenge competition with reusable UI components and deployment on GitHub Pages.'
        }
      ]
    },
    {
      year: '2020',
      title: 'R/ Sivali Central College',
      role: 'GCE A/L - Physical Science | Senior Prefect',
      description: 'Excelled in GCE Advanced Level with Island Rank 183 and District Rank 5. Z-score: 2.4768. Served as Senior Prefect (2017-2020) leading student council and organizing school events.',
      images: getImages('school', 10),
      tags: ['Academic Excellence', 'Leadership', 'Community Service'],
      highlights: [
        'Z-score: 2.4768',
        'Island Rank: 183 | District Rank: 5',
        'Combined Maths: A | Physics: A | Chemistry: A',
        'Senior Prefect (2017-2020)',
        'GCE O/L: 9As (2017)',
        'Active in extracurricular activities and sports'
      ]
    },
    {
      year: '2025 - 2027',
      title: 'Sasnaka Sansada - Volunteering',
      role: 'Deputy Pillar Head - Membership Development',
      description: 'Leading membership development initiatives and contributing to community service and social responsibility programs. Committed to making a positive impact through volunteering activities.',
      images: getImages('Sasnaka', 12),
      tags: ['Leadership', 'Community Service', 'Social Impact', 'Volunteering'],
      highlights: [
        'Deputy Pillar Head - Membership Development Pillar',
        'Community service initiatives',
        'Youth leadership programs',
        'Volunteer engagement and coordination',
        'Social responsibility projects'
      ]
    }
  ];

  return (
    <>
      <div className="h-full flex">
        {/* Left Sidebar */}
        <div className="w-64 border-r-2 border-gray-300 bg-gradient-to-b from-blue-50 to-white overflow-auto">
          <div className="p-3 border-b-2 border-gray-300 bg-white sticky top-0 z-10">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
              <span className="text-lg">🗂️</span>
              Journey Folders
            </h3>
          </div>
          <div className="p-3 space-y-2">
            {milestones.map((milestone, index) => (
              <FolderItem
                key={index}
                milestone={milestone}
                onClick={() => setSelectedMilestone(milestone)}
                active={selectedMilestone?.title === milestone.title}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="border-b-2 border-gray-300 bg-gradient-to-b from-blue-50 to-white p-2">
            <div className="flex items-center gap-2">
              <ToolbarButton onClick={() => setSelectedMilestone(null)}>🏠 Home</ToolbarButton>
              <div className="flex-1 flex items-center gap-2 bg-white border-2 border-gray-400 px-3 py-1 rounded">
                <span className="text-sm">📂</span>
                <span className="text-xs text-gray-800">
                  My Journey {selectedMilestone && `> ${selectedMilestone.title}`}
                </span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-auto bg-white p-6">
            {selectedMilestone ? (
              <MilestoneDetail milestone={selectedMilestone} />
            ) : (
              <OverviewPage milestones={milestones} onSelect={setSelectedMilestone} />
            )}
          </div>

          {/* Status Bar */}
          <div className="border-t-2 border-gray-300 bg-gradient-to-b from-gray-100 to-white px-3 py-1.5">
            <span className="text-xs text-gray-700">
              {selectedMilestone
                ? `${selectedMilestone.images.length} photos | ${selectedMilestone.highlights.length} highlights`
                : `${milestones.length} milestones in your journey`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const FolderItem = ({ milestone, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-start gap-2 px-2 py-2 rounded cursor-pointer text-left transition-all ${
        active ? 'bg-blue-100 border-2 border-blue-400 shadow-sm' : 'border-2 border-transparent hover:bg-blue-50 hover:border-blue-200'
      }`}
    >
      <span className="text-2xl mt-0.5">📁</span>
      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold text-gray-800 leading-tight">{milestone.title}</div>
        <div className="text-xs text-gray-600 mt-0.5">{milestone.year}</div>
        <div className="text-xs text-gray-500 mt-0.5">{milestone.images.length} photos</div>
      </div>
    </button>
  );
};

const ToolbarButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 text-xs text-gray-700 hover:bg-blue-100 rounded border border-gray-300 hover:border-blue-400 transition-colors font-medium"
    >
      {children}
    </button>
  );
};

const OverviewPage = ({ milestones, onSelect }) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span className="text-3xl">🛤️</span>
          My Professional & Academic Journey
        </h2>
        <p className="text-gray-600">
          Explore the milestones, experiences, and achievements that shaped my career in software engineering and AI/ML.
        </p>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-blue-400 mt-3"></div>
      </div>

      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            onClick={() => onSelect(milestone)}
            className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer bg-gradient-to-r from-white to-blue-50"
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">📁</span>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{milestone.title}</h3>
                    <p className="text-sm text-blue-600 font-semibold">{milestone.role}</p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{milestone.year}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{milestone.description}</p>
                <div className="flex flex-wrap gap-2">
                  {milestone.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded border border-blue-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MilestoneDetail = ({ milestone }) => {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 pb-4 border-b-2 border-blue-200">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-5xl">📁</span>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">{milestone.title}</h2>
            <p className="text-base font-semibold text-blue-600 mb-1">{milestone.role}</p>
            <p className="text-sm text-gray-600">{milestone.year}</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-3">{milestone.description}</p>
        <div className="flex flex-wrap gap-2">
          {milestone.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full border border-blue-300 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-xl">✨</span>
          Key Highlights
        </h3>
        <div className="grid gap-2">
          {milestone.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-blue-600 font-bold text-lg mt-0.5">•</span>
              <p className="text-sm text-gray-700 flex-1 leading-relaxed">{highlight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      {milestone.projects && milestone.projects.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-xl">🚀</span>
            Projects & Contributions
          </h3>
          <div className="space-y-3">
            {milestone.projects.map((project, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800 text-sm">{project.name}</h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap ml-4">{project.period}</span>
                </div>
                <p className="text-xs text-blue-600 font-semibold mb-2">{project.tech}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photo Gallery with Arrow Navigation */}
      {milestone.images && milestone.images.length > 0 && (
        <div>
          <ImageGallery
            images={milestone.images}
            title={`${milestone.title} - Photo Gallery`}
          />
        </div>
      )}
    </div>
  );
};

export default JourneyWindow;
