import React from 'react';

const MobileNavigationBar = ({ onBackClick, onHomeClick, onRecentClick, canGoBack, showRecent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 h-16 flex items-center justify-around px-4 z-50">
      {/* Back Button */}
      <button
        onClick={onBackClick}
        disabled={!canGoBack}
        className={`flex flex-col items-center justify-center w-16 h-16 transition-all ${
          canGoBack ? 'text-white active:scale-90' : 'text-gray-600 cursor-not-allowed'
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="text-xs mt-1">Back</span>
      </button>

      {/* Home Button */}
      <button
        onClick={onHomeClick}
        className="flex flex-col items-center justify-center w-16 h-16 text-white active:scale-90 transition-all"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="text-xs mt-1">Home</span>
      </button>

      {/* Recent Apps Button */}
      <button
        onClick={onRecentClick}
        className={`flex flex-col items-center justify-center w-16 h-16 transition-all ${
          showRecent ? 'text-blue-400' : 'text-white'
        } active:scale-90`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className="text-xs mt-1">Recent</span>
      </button>
    </div>
  );
};

export default MobileNavigationBar;
