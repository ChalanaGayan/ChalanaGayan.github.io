import React from 'react';

const MobileAppView = ({ title, icon, imageIcon, onClose, children }) => {
  return (
    <div className="h-full w-full flex flex-col bg-white">
      {/* App Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          {imageIcon ? (
            <img src={imageIcon} alt={title} className="w-8 h-8 object-contain" />
          ) : (
            <span className="text-2xl">{icon}</span>
          )}
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 transition-colors flex items-center justify-center"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* App Content */}
      <div className="flex-1 overflow-y-auto pb-16">
        {children}
      </div>
    </div>
  );
};

export default MobileAppView;
