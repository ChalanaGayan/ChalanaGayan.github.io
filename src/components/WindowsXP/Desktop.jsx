import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Window from './Window';
import Taskbar from './Taskbar';
import ProjectsWindow from './ProjectsWindow';
import JourneyWindow from './JourneyWindow';
import GameWindow from './GameWindow';
import AboutWindow from './AboutWindow';
import SkillsWindow from './SkillsWindow';
import BrowserWindow from './BrowserWindow';
import ContactWindow from './ContactWindow';
import HeroWindow from './HeroWindow';
import BootScreen from './BootScreen';
import Screensaver from './Screensaver';

const Desktop = () => {
  const [booting, setBooting] = useState(true);
  const [showScreensaver, setShowScreensaver] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());

  const [windows, setWindows] = useState([
    { id: 'hero', title: 'Welcome', component: 'HeroWindow', icon: '🏠', imageIcon: '/desktop_pc/startmenu_windowsXP.png', isOpen: false, isMinimized: false, zIndex: 0, position: { x: 50, y: 30 } },
    { id: 'about', title: 'About Me', component: 'AboutWindow', icon: '📁', imageIcon: '/profile-pic.png', isOpen: false, isMinimized: false, zIndex: 0, position: { x: 100, y: 50 } },
    { id: 'projects', title: 'My Projects', component: 'ProjectsWindow', icon: '📂', imageIcon: '/desktop_pc/folder_windowsXP.png', isOpen: false, isMinimized: false, zIndex: 0, position: { x: 150, y: 100 } },
    { id: 'journey', title: 'My Journey', component: 'JourneyWindow', icon: '🖼️', imageIcon: '/desktop_pc/folder_windowsXP.png', isOpen: false, isMinimized: false, zIndex: 0, position: { x: 200, y: 150 } },
    { id: 'game', title: 'Minesweeper', component: 'GameWindow', icon: '🎮', isOpen: false, isMinimized: false, zIndex: 0, position: { x: 250, y: 200 } },
    { id: 'skills', title: 'Skills & Achievements', component: 'SkillsWindow', icon: '⭐', imageIcon: '/desktop_pc/folder_windowsXP.png', isOpen: false, isMinimized: false, zIndex: 0, position: { x: 80, y: 80 } },
    { id: 'browser', title: 'Internet Explorer', component: 'BrowserWindow', icon: '🌐', isOpen: false, isMinimized: false, zIndex: 0, position: { x: 120, y: 120 } },
    { id: 'contact', title: 'Contact Me', component: 'ContactWindow', icon: '📧', imageIcon: '/desktop_pc/folder_windowsXP.png', isOpen: false, isMinimized: false, zIndex: 0, position: { x: 150, y: 250 } },
  ]);

  const [maxZIndex, setMaxZIndex] = useState(0);

  // Screensaver timer
  useEffect(() => {
    const checkInactivity = setInterval(() => {
      if (Date.now() - lastActivity > 60000 && !booting) { // 1 minute
        setShowScreensaver(true);
      }
    }, 1000);

    return () => clearInterval(checkInactivity);
  }, [lastActivity, booting]);

  // Track user activity
  useEffect(() => {
    const handleActivity = () => {
      setLastActivity(Date.now());
      setShowScreensaver(false);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('click', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('click', handleActivity);
    };
  }, []);

  const bringToFront = (id) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows(windows.map(w =>
      w.id === id ? { ...w, zIndex: newZIndex, isMinimized: false } : w
    ));
  };

  const closeWindow = (id) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, isOpen: false } : w
    ));
  };

  const minimizeWindow = (id) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const openWindow = (id) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);

    // Calculate centered position for the window
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;

    let defaultWidth = 1100;
    let defaultHeight = 700;

    const windowData = windows.find(w => w.id === id);
    if (windowData?.id === 'browser') {
      defaultWidth = 1200;
      defaultHeight = 800;
    } else if (windowData?.id === 'game') {
      defaultWidth = 600;
      defaultHeight = 700;
    }

    const centeredX = Math.max(50, (screenWidth - defaultWidth) / 2);
    const centeredY = Math.max(30, (screenHeight - defaultHeight - 40) / 2);

    setWindows(windows.map(w =>
      w.id === id ? {
        ...w,
        isOpen: true,
        isMinimized: false,
        zIndex: newZIndex,
        position: { x: centeredX, y: centeredY }
      } : w
    ));
  };

  const updateWindowPosition = (id, position) => {
    setWindows(windows.map(w =>
      w.id === id ? { ...w, position } : w
    ));
  };

  const componentMap = {
    HeroWindow,
    AboutWindow,
    ProjectsWindow,
    JourneyWindow,
    GameWindow,
    SkillsWindow,
    BrowserWindow,
    ContactWindow,
  };

  if (booting) {
    return <BootScreen onComplete={() => setBooting(false)} />;
  }

  return (
    <>
      {showScreensaver && (
        <Screensaver onDismiss={() => setShowScreensaver(false)} />
      )}

      <div className="relative w-full h-screen overflow-hidden bg-[#5A8CDB]">
      {/* Windows XP Bliss Wallpaper */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/desktop_pc/windows_xp_wallpaper.jpg')`
        }}
      ></div>

      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-3 z-[5]">
        <DesktopIcon
          icon="🏠"
          imageIcon="/desktop_pc/startmenu_windowsXP.png"
          label="Welcome"
          onClick={() => openWindow('hero')}
        />
        <DesktopIcon
          icon="📁"
          imageIcon="/profile-pic.png"
          label="About Me"
          onClick={() => openWindow('about')}
        />
        <DesktopIcon
          icon="📂"
          imageIcon="/desktop_pc/folder_windowsXP.png"
          label="Projects"
          onClick={() => openWindow('projects')}
        />
        <DesktopIcon
          icon="🖼️"
          imageIcon="/desktop_pc/folder_windowsXP.png"
          label="My Journey"
          onClick={() => openWindow('journey')}
        />
        <DesktopIcon
          icon="⭐"
          imageIcon="/desktop_pc/folder_windowsXP.png"
          label="Skills & Achievements"
          onClick={() => openWindow('skills')}
        />
        <DesktopIcon
          icon="📧"
          imageIcon="/desktop_pc/folder_windowsXP.png"
          label="Contact Me"
          onClick={() => openWindow('contact')}
        />
        <DesktopIcon
          icon="🌐"
          label="Internet Explorer"
          onClick={() => openWindow('browser')}
        />
        <DesktopIcon
          icon="🎮"
          label="Minesweeper"
          onClick={() => openWindow('game')}
        />
      </div>

      {/* Windows */}
      {windows.filter(w => w.isOpen && !w.isMinimized).map((window) => {
        const WindowComponent = componentMap[window.component];

        // Default sizes for different window types - made bigger
        let defaultWidth = 1100;
        let defaultHeight = 700;

        if (window.id === 'browser') {
          defaultWidth = 1200;
          defaultHeight = 800;
        } else if (window.id === 'game') {
          defaultWidth = 600;
          defaultHeight = 700;
        }

        return (
          <Window
            key={window.id}
            id={window.id}
            title={window.title}
            icon={window.icon}
            onClose={() => closeWindow(window.id)}
            onMinimize={() => minimizeWindow(window.id)}
            onFocus={() => bringToFront(window.id)}
            zIndex={window.zIndex + 10}
            initialPosition={window.position}
            onPositionChange={(pos) => updateWindowPosition(window.id, pos)}
            width={defaultWidth}
            height={defaultHeight}
          >
            <WindowComponent />
          </Window>
        );
      })}

      {/* Taskbar */}
      <Taskbar windows={windows} onWindowClick={openWindow} />
    </div>
    </>
  );
};

const DesktopIcon = ({ icon, imageIcon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 p-2 rounded hover:bg-blue-400/30 transition-colors group w-20"
    >
      {imageIcon ? (
        <img src={imageIcon} alt={label} className="w-12 h-12 object-contain" />
      ) : (
        <div className="text-5xl">{icon}</div>
      )}
      <div className="text-white text-xs text-center font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] group-hover:bg-blue-600/50 px-1 rounded">
        {label}
      </div>
    </button>
  );
};

export default Desktop;
