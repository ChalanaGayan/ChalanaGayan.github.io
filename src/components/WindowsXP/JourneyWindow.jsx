import { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import { useIsMobileContext } from '../../context/MobileContext';
import { useWindowNavigation } from '../../context/WindowNavigationContext';

const JourneyWindow = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const isMobile = useIsMobileContext();
  const windowNav = useWindowNavigation();

  const getImages = (folder, count) => {
    return Array.from({ length: count }, (_, i) => `/journey/${folder}/${i + 1}.webp`);
  };

  // Register back handler for mobile when milestone is selected
  useEffect(() => {
    if (!isMobile) return;

    if (selectedMilestone) {
      windowNav.registerWindowBackHandler(() => {
        setSelectedMilestone(null);
      });
    } else {
      windowNav.unregisterWindowBackHandler();
    }

    return () => {
      windowNav.unregisterWindowBackHandler();
    };
  }, [isMobile, selectedMilestone]);

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
      images: getImages('University', 13),
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
      images: getImages('school', 6),
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
      images: getImages('Sasnaka', 11),
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
        {/* Left Sidebar - Hidden on Mobile */}
        {!isMobile && (
          <div className="w-64 border-r-2 border-gray-300 bg-white overflow-auto">
            <div className="p-3 border-b-2 border-gray-300 bg-white sticky top-0 z-10">
              <h3 className="text-sm font-bold text-black">
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
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar - Hidden on Mobile */}
          {!isMobile && (
            <div className="border-b-2 border-gray-300 bg-white p-2">
              <div className="flex items-center gap-2">
                <ToolbarButton onClick={() => setSelectedMilestone(null)}>Home</ToolbarButton>
                <div className="flex-1 flex items-center gap-2 bg-white border-2 border-gray-400 px-3 py-1 rounded">
                  <span className="text-xs text-black">
                    My Journey {selectedMilestone && `> ${selectedMilestone.title}`}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className={`flex-1 overflow-auto bg-white ${isMobile ? 'p-3' : 'p-6'}`}>
            {selectedMilestone ? (
              <MilestoneDetail milestone={selectedMilestone} />
            ) : (
              <OverviewPage milestones={milestones} onSelect={setSelectedMilestone} />
            )}
          </div>

          {/* Status Bar */}
          <div className="border-t-2 border-gray-300 bg-white px-3 py-1.5">
            <span className="text-xs text-gray-700">
              {selectedMilestone
                ? `${selectedMilestone.images.length} photos | ${selectedMilestone.highlights.length} highlights`
                : `${milestones.length} milestones in my journey`}
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
        active ? 'bg-gray-100 border-2 border-gray-400 shadow-sm' : 'border-2 border-transparent hover:bg-gray-50 hover:border-gray-300'
      }`}
    >
      <img
        src="/desktop_pc/folder_windowsXP.png"
        alt="folder"
        className="w-6 h-6 flex-shrink-0 mt-0.5"
      />
      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold text-black leading-tight">{milestone.title}</div>
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
      className="px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 rounded border border-gray-300 hover:border-gray-400 transition-colors font-medium"
    >
      {children}
    </button>
  );
};

const OverviewPage = ({ milestones, onSelect }) => {
  const isMobile = useIsMobileContext();

  return (
    <div>
      <div className={isMobile ? 'mb-4' : 'mb-6'}>
        <h2 className={`font-bold text-black mb-2 ${isMobile ? 'text-lg' : 'text-2xl'}`}>
          My Professional & Academic Journey
        </h2>
        <p className={`text-gray-600 ${isMobile ? 'text-xs' : 'text-base'}`}>
          Explore the milestones, experiences, and achievements that shaped my career in software engineering and AI/ML.
        </p>
        <div className={`h-1 bg-gray-800 mt-3 ${isMobile ? 'w-20' : 'w-32'}`}></div>
      </div>

      <div className={isMobile ? 'space-y-3' : 'space-y-4'}>
        {milestones.map((milestone, index) => (
          <div
            key={index}
            onClick={() => onSelect(milestone)}
            className={`border-2 border-gray-300 rounded hover:border-gray-500 hover:shadow-lg transition-all cursor-pointer bg-white ${isMobile ? 'p-3' : 'p-4'}`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className={`flex ${isMobile ? 'flex-col gap-1' : 'items-start justify-between'} mb-2`}>
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-bold text-black break-words ${isMobile ? 'text-sm' : 'text-lg'}`}>{milestone.title}</h3>
                    <p className={`text-gray-700 font-semibold break-words ${isMobile ? 'text-xs' : 'text-sm'}`}>{milestone.role}</p>
                  </div>
                  <span className={`text-gray-500 ${isMobile ? 'text-[10px]' : 'text-xs whitespace-nowrap ml-4'}`}>{milestone.year}</span>
                </div>
                <p className={`text-gray-600 mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>{milestone.description}</p>
                <div className="flex flex-wrap gap-2">
                  {milestone.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`bg-gray-100 text-gray-700 rounded border border-gray-300 font-medium ${isMobile ? 'px-2 py-0.5 text-[10px]' : 'px-2 py-1 text-xs'}`}
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
  const isMobile = useIsMobileContext();

  return (
    <div>
      {/* Header */}
      <div className={`pb-4 border-b-2 border-gray-300 ${isMobile ? 'mb-4' : 'mb-6'}`}>
        <div className={`flex items-start gap-3 ${isMobile ? 'mb-2' : 'mb-3'}`}>
          <div className="flex-1 min-w-0">
            <h2 className={`font-bold text-black mb-1 ${isMobile ? 'text-lg break-words' : 'text-2xl'}`}>{milestone.title}</h2>
            <p className={`font-semibold text-gray-700 mb-1 ${isMobile ? 'text-sm break-words' : 'text-base'}`}>{milestone.role}</p>
            <p className={`text-gray-600 ${isMobile ? 'text-xs' : 'text-sm'}`}>{milestone.year}</p>
          </div>
        </div>
        <p className={`text-gray-700 leading-relaxed mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>{milestone.description}</p>
        <div className="flex flex-wrap gap-2">
          {milestone.tags.map((tag, i) => (
            <span
              key={i}
              className={`bg-gray-100 text-gray-700 rounded border border-gray-300 font-semibold ${isMobile ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className={isMobile ? 'mb-4' : 'mb-6'}>
        <h3 className={`font-bold text-black ${isMobile ? 'text-base mb-2' : 'text-lg mb-3'}`}>
          Key Highlights
        </h3>
        <div className="grid gap-2">
          {milestone.highlights.map((highlight, idx) => (
            <div key={idx} className={`flex items-start gap-2 bg-gray-50 rounded-lg border border-gray-200 ${isMobile ? 'p-2' : 'p-3'}`}>
              <span className={`text-gray-700 font-bold mt-0.5 ${isMobile ? 'text-sm' : 'text-lg'}`}>•</span>
              <p className={`text-gray-700 flex-1 leading-relaxed break-words ${isMobile ? 'text-xs' : 'text-sm'}`}>{highlight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      {milestone.projects && milestone.projects.length > 0 && (
        <div className={isMobile ? 'mb-4' : 'mb-6'}>
          <h3 className={`font-bold text-black ${isMobile ? 'text-base mb-2' : 'text-lg mb-3'}`}>
            Projects & Contributions
          </h3>
          <div className={isMobile ? 'space-y-2' : 'space-y-3'}>
            {milestone.projects.map((project, idx) => (
              <div key={idx} className={`bg-white border-2 border-gray-300 rounded ${isMobile ? 'p-3' : 'p-4'}`}>
                <div className={`flex ${isMobile ? 'flex-col gap-1' : 'justify-between items-start'} mb-2`}>
                  <h4 className={`font-bold text-black break-words ${isMobile ? 'text-xs' : 'text-sm'}`}>{project.name}</h4>
                  <span className={`text-gray-500 ${isMobile ? 'text-[10px]' : 'text-xs whitespace-nowrap ml-4'}`}>{project.period}</span>
                </div>
                <p className={`text-gray-700 font-semibold mb-2 break-words ${isMobile ? 'text-[10px] leading-relaxed' : 'text-xs'}`}>{project.tech}</p>
                <p className={`text-gray-700 leading-relaxed ${isMobile ? 'text-xs' : 'text-sm'}`}>{project.description}</p>
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
