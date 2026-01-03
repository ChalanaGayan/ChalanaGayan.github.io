import { useState } from 'react';
import MobileHomeScreen from './MobileHomeScreen';
import MobileNavigationBar from './MobileNavigationBar';
import MobileAppView from './MobileAppView';
import MobileRecentApps from './MobileRecentApps';
import MobileBootScreen from './MobileBootScreen';
import ProjectsWindow from '../WindowsXP/ProjectsWindow';
import JourneyWindow from '../WindowsXP/JourneyWindow';
import GameWindow from '../WindowsXP/GameWindow';
import AboutWindow from '../WindowsXP/AboutWindow';
import SkillsWindow from '../WindowsXP/SkillsWindow';
import ContactWindow from '../WindowsXP/ContactWindow';
import HeroWindow from '../WindowsXP/HeroWindow';
import { useWindowNavigation } from '../../context/WindowNavigationContext';

const MobileAndroidLayout = () => {
  const windowNav = useWindowNavigation();
  const [booting, setBooting] = useState(true);
  const [apps] = useState([
    { id: 'hero', title: 'Welcome', component: 'HeroWindow', icon: '🤖', imageIcon: '/desktop_pc/android-kitkat-logo.png' },
    { id: 'about', title: 'About Me', component: 'AboutWindow', icon: '📁', imageIcon: '/profile-pic.png' },
    { id: 'projects', title: 'Projects', component: 'ProjectsWindow', icon: '📂', imageIcon: '/desktop_pc/folder_windowsXP.png' },
    { id: 'journey', title: 'Journey', component: 'JourneyWindow', icon: '🖼️', imageIcon: '/desktop_pc/folder_windowsXP.png' },
    { id: 'skills', title: 'Skills', component: 'SkillsWindow', icon: '⭐', imageIcon: '/desktop_pc/folder_windowsXP.png' },
    { id: 'contact', title: 'Contact', component: 'ContactWindow', icon: '📧', imageIcon: '/desktop_pc/folder_windowsXP.png' },
    { id: 'game', title: 'Minesweeper', component: 'GameWindow', icon: '🎮' },
  ]);

  const [currentView, setCurrentView] = useState('home'); // 'home', 'app', 'recent'
  const [activeApp, setActiveApp] = useState(null);
  const [openApps, setOpenApps] = useState([]); // Stack of opened apps
  const [navigationHistory, setNavigationHistory] = useState([]); // History for back button

  const componentMap = {
    HeroWindow,
    AboutWindow,
    ProjectsWindow,
    JourneyWindow,
    GameWindow,
    SkillsWindow,
    ContactWindow,
  };

  const openApp = (appId) => {
    const app = apps.find(a => a.id === appId);
    if (!app) return;

    // Add to navigation history
    setNavigationHistory([...navigationHistory, currentView]);

    // Add to open apps if not already there
    if (!openApps.find(a => a.id === appId)) {
      setOpenApps([...openApps, app]);
    }

    setActiveApp(app);
    setCurrentView('app');
  };

  const closeApp = (appId) => {
    setOpenApps(openApps.filter(a => a.id !== appId));

    // If closing the active app, go back to home
    if (activeApp?.id === appId) {
      setActiveApp(null);
      setCurrentView('home');
      setNavigationHistory([]);
    }
  };

  const closeAllApps = () => {
    setOpenApps([]);
    setActiveApp(null);
    setCurrentView('home');
    setNavigationHistory([]);
  };

  const handleBack = () => {
    // First check if there's in-window navigation
    if (windowNav.canGoBackInWindow) {
      windowNav.handleWindowBack();
      return;
    }

    // Otherwise handle app-level navigation
    if (navigationHistory.length === 0) return;

    const previousView = navigationHistory[navigationHistory.length - 1];
    setNavigationHistory(navigationHistory.slice(0, -1));

    if (previousView === 'home') {
      setCurrentView('home');
      setActiveApp(null);
    } else if (previousView === 'recent') {
      setCurrentView('recent');
      setActiveApp(null);
    } else {
      setCurrentView(previousView);
    }
  };

  const handleHome = () => {
    setCurrentView('home');
    setActiveApp(null);
    setNavigationHistory([]);
  };

  const handleRecent = () => {
    if (currentView !== 'recent') {
      setNavigationHistory([...navigationHistory, currentView]);
      setCurrentView('recent');
      setActiveApp(null);
    }
  };

  const canGoBack = navigationHistory.length > 0 || windowNav.canGoBackInWindow;

  if (booting) {
    return <MobileBootScreen onComplete={() => setBooting(false)} />;
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-gray-900">
      {/* Main Content Area */}
      {currentView === 'home' && (
        <MobileHomeScreen apps={apps} onAppClick={openApp} />
      )}

      {currentView === 'app' && activeApp && (
        <MobileAppView
          title={activeApp.title}
          icon={activeApp.icon}
          imageIcon={activeApp.imageIcon}
          onClose={() => closeApp(activeApp.id)}
        >
          {(() => {
            const WindowComponent = componentMap[activeApp.component];
            return WindowComponent ? <WindowComponent /> : <div>Component not found</div>;
          })()}
        </MobileAppView>
      )}

      {currentView === 'recent' && (
        <MobileRecentApps
          recentApps={openApps}
          onAppClick={openApp}
          onCloseApp={closeApp}
          onCloseAll={closeAllApps}
        />
      )}

      {/* Navigation Bar */}
      <MobileNavigationBar
        onBackClick={handleBack}
        onHomeClick={handleHome}
        onRecentClick={handleRecent}
        canGoBack={canGoBack}
        showRecent={currentView === 'recent'}
      />
    </div>
  );
};

export default MobileAndroidLayout;
