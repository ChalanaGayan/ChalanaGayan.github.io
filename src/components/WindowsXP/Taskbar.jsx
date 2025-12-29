import { useState, useEffect, useRef } from 'react';

const Taskbar = ({ windows, onWindowClick }) => {
  const [time, setTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const startMenuRef = useRef(null);
  const startButtonRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (startMenuOpen &&
          startMenuRef.current &&
          !startMenuRef.current.contains(event.target) &&
          startButtonRef.current &&
          !startButtonRef.current.contains(event.target)) {
        setStartMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [startMenuOpen]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-10 flex items-center px-1 z-[200]"
      style={{
        background: 'linear-gradient(to bottom, #245EDC 0%, #1941A5 50%, #1941A5 100%)',
        borderTop: '1px solid #3D6CC2',
      }}
    >
      {/* Start Button */}
      <button
        ref={startButtonRef}
        onClick={() => setStartMenuOpen(!startMenuOpen)}
        className="h-8 px-3 flex items-center gap-2 rounded-sm mr-1 hover:brightness-110 active:brightness-90 transition-all"
        style={{
          background: startMenuOpen
            ? 'linear-gradient(to bottom, #1F4AA3 0%, #2B5FC7 100%)'
            : 'linear-gradient(to bottom, #3FA650 0%, #2E8B3D 50%, #1F6B2C 100%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: startMenuOpen
            ? 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
            : '0 1px 2px rgba(0, 0, 0, 0.2)',
        }}
      >
        <img
          src="/desktop_pc/startmenu_windowsXP.png" 
          alt="Start"
          className="w-5 h-5 object-contain"
        />
        <span className="text-white font-bold text-sm drop-shadow-sm">start</span>
      </button>

      {/* Start Menu */}
      {startMenuOpen && (
        <div
          ref={startMenuRef}
          className="absolute left-0 w-80 h-[400px] bg-white rounded-tr-lg overflow-hidden z-[210]"
          style={{
            bottom: '40px', // Matches taskbar h-10 (40px)
            boxShadow: '2px -2px 8px rgba(0, 0, 0, 0.3)',
            border: '1px solid #0054E3',
          }}
        >
          <div className="flex h-full">
            {/* Left Panel */}
            <div
              className="w-16 text-white font-bold text-xl flex items-end"
              style={{
                background: 'linear-gradient(to bottom, #3D6CC2 0%, #245EDC 100%)',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
            >
              <span className="px-2 py-4">Windows XP</span>
            </div>

            {/* Right Panel */}
            <div className="flex-1 py-2 overflow-y-auto">
              <StartMenuItem icon="🏠" text="Welcome" onClick={() => {
                onWindowClick('hero');
                setStartMenuOpen(false);
              }} />
              <div className="h-px bg-gray-300 my-1 mx-2"></div>
              <StartMenuItem icon="📁" text="About Me" onClick={() => {
                onWindowClick('about');
                setStartMenuOpen(false);
              }} />
              <StartMenuItem icon="📂" text="My Projects" onClick={() => {
                onWindowClick('projects');
                setStartMenuOpen(false);
              }} />
              <StartMenuItem icon="🖼️" text="My Journey" onClick={() => {
                onWindowClick('journey');
                setStartMenuOpen(false);
              }} />
              <StartMenuItem icon="⭐" text="Skills" onClick={() => {
                onWindowClick('skills');
                setStartMenuOpen(false);
              }} />
              <div className="h-px bg-gray-300 my-1 mx-2"></div>
              <StartMenuItem icon="🌐" text="Internet Explorer" onClick={() => {
                onWindowClick('browser');
                setStartMenuOpen(false);
              }} />
              <StartMenuItem icon="🎮" text="Minesweeper" onClick={() => {
                onWindowClick('game');
                setStartMenuOpen(false);
              }} />
            </div>
          </div>
        </div>
      )}

      {/* Separator */}
      <div className="w-px h-8 bg-blue-800 mx-1"></div>

      {/* Window Buttons */}
      <div className="flex-1 flex items-center gap-1 overflow-x-auto">
        {windows.filter(w => w.isOpen).map((window) => (
          <TaskbarButton
            key={window.id}
            title={window.title}
            isMinimized={window.isMinimized}
            onClick={() => onWindowClick(window.id)}
          />
        ))}
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-2 px-2 h-8 ml-auto">
        <div className="flex items-center gap-1">
          <span className="text-xs">🔊</span>
          <span className="text-xs">🌐</span>
        </div>
        <div
          className="px-2 h-full flex items-center border border-blue-800 rounded-sm"
          style={{
            background: 'linear-gradient(to bottom, #1A4AAB 0%, #0F3A8F 100%)',
          }}
        >
          <span className="text-white text-xs font-normal">{formatTime(time)}</span>
        </div>
      </div>
    </div>
  );
};

const TaskbarButton = ({ title, isMinimized, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-8 px-3 rounded-sm hover:brightness-110 active:brightness-90 transition-all max-w-[180px] truncate"
      style={{
        background: isMinimized
          ? 'linear-gradient(to bottom, #1F4AA3 0%, #2B5FC7 100%)'
          : 'linear-gradient(to bottom, #3D6CC2 0%, #245EDC 100%)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: isMinimized
          ? 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
          : '0 1px 2px rgba(0, 0, 0, 0.2)',
      }}
    >
      <span className="text-white text-xs font-normal">{title}</span>
    </button>
  );
};

const StartMenuItem = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-3 py-2 flex items-center gap-3 hover:bg-blue-100 transition-colors"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm text-gray-800">{text}</span>
    </button>
  );
};

export default Taskbar;
