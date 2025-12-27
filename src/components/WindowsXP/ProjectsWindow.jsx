import { useState } from 'react';
import { experiences } from '../../constants';

const ProjectsWindow = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [history, setHistory] = useState([null]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const navigateToProject = (project) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(project);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setSelectedProject(project);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setSelectedProject(history[newIndex]);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setSelectedProject(history[newIndex]);
    }
  };

  return (
    <div className="h-full flex">
      {/* Left Sidebar - Folder Navigation */}
      <div className="w-48 border-r border-gray-300 bg-white">
        <div className="p-3">
          <div className="mb-4">
            <h3 className="text-xs font-bold text-black mb-2">Folders</h3>
            <FolderItem label="My Projects" active />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="border-b border-gray-300 bg-white p-2">
          <div className="flex items-center gap-2">
            <ToolbarButton onClick={goBack} disabled={historyIndex <= 0}>Back</ToolbarButton>
            <ToolbarButton onClick={goForward} disabled={historyIndex >= history.length - 1}>Forward</ToolbarButton>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <ToolbarButton onClick={() => navigateToProject(null)}>Folders</ToolbarButton>
            <div className="flex-1 flex items-center gap-2 bg-white border border-gray-400 px-2 py-1 rounded">
              <span className="text-xs text-black">My Computer &gt; Projects</span>
            </div>
          </div>
        </div>

        {/* File List View */}
        <div className="flex-1 overflow-auto bg-white p-4">
          {selectedProject ? (
            <ProjectDetails
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          ) : (
            <div className="grid grid-cols-1 gap-2">
              {experiences.map((project, index) => (
                <ProjectRow
                  key={index}
                  project={project}
                  onClick={() => navigateToProject(project)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Status Bar */}
        <div className="border-t border-gray-300 bg-white px-3 py-1">
          <span className="text-xs text-gray-700">
            {selectedProject ? '1 item' : `${experiences.length} items`}
          </span>
        </div>
      </div>
    </div>
  );
};

const FolderItem = ({ label, active }) => {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer ${
        active ? 'bg-blue-100 border border-blue-600' : 'hover:bg-blue-50'
      }`}
    >
      <span className="text-xs text-black">{label}</span>
    </div>
  );
};

const ToolbarButton = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-2 py-1 text-xs text-gray-700 hover:bg-blue-100 rounded border border-transparent hover:border-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

const ProjectRow = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 p-2 hover:bg-blue-50 cursor-pointer border border-transparent hover:border-blue-300 rounded"
    >
      <img
        src={project.icon}
        alt={project.company_name}
        className="w-8 h-8 object-contain"
      />
      <div className="flex-1 min-w-0">
        <div className="text-sm text-black truncate font-semibold">
          {project.title}
        </div>
        <div className="text-xs text-gray-600">
          {project.company_name} • {project.date}
        </div>
      </div>
      <div className="text-xs text-gray-500">Project</div>
    </div>
  );
};

const ProjectDetails = ({ project, onBack }) => {
  // Parse technologies from the first project point
  const extractTechnologies = () => {
    if (!project.points || project.points.length === 0) return [];
    const techMatch = project.points[0]?.match(/(?:Technologies:|Tech:|using|with|:)\s*([^.]+)/i);
    if (techMatch) {
      return techMatch[1]
        .split(/[,;]/)
        .map(t => t.trim())
        .filter(t => t.length > 0)
        .slice(0, 10);
    }
    return [];
  };

  const technologies = extractTechnologies();

  return (
    <div className="max-w-3xl">
      <button
        onClick={onBack}
        className="mb-4 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Back to Projects
      </button>

      <div className="bg-white border-2 border-gray-300 rounded p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b-2 border-gray-300">
          <img
            src={project.icon}
            alt={project.company_name}
            className="w-16 h-16 object-contain border-2 border-gray-300 rounded p-2 bg-white"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-black mb-2">{project.title}</h2>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="font-semibold">{project.company_name}</span>
              <span>•</span>
              <span>{project.date}</span>
            </div>
          </div>
        </div>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-black mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium border border-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Details */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black mb-3">Project Details</h3>
          <ul className="space-y-2">
            {project.points.map((point, index) => (
              <li key={index} className="flex gap-2 text-sm text-gray-700">
                <span className="text-blue-600 font-bold">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Link */}
        {project.link && (
          <div className="pt-4 border-t border-gray-300">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              View Project
            </a>
          </div>
        )}

        {/* Team Photos Placeholder */}
        {project.teamPhotos && project.teamPhotos.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-300">
            <h3 className="text-lg font-bold text-black mb-3">Team Photos</h3>
            <div className="grid grid-cols-3 gap-2">
              {project.teamPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Team photo ${index + 1}`}
                  className="w-full h-32 object-cover rounded border border-gray-300"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsWindow;
