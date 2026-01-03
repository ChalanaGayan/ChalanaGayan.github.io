import React from 'react';

const MobileRecentApps = ({ recentApps, onAppClick, onCloseApp, onCloseAll }) => {
  if (recentApps.length === 0) {
    return (
      <div className="h-full w-full bg-gray-900 flex flex-col items-center justify-center text-white pb-16">
        <div className="text-6xl mb-4 opacity-30">📱</div>
        <p className="text-gray-400 text-center">No recent apps</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-gray-900 overflow-y-auto pb-16">
      {/* Header */}
      <div className="bg-gray-800 px-4 py-4 flex items-center justify-between border-b border-gray-700">
        <h2 className="text-white text-lg font-semibold">Recent Apps</h2>
        {recentApps.length > 0 && (
          <button
            onClick={onCloseAll}
            className="text-sm text-blue-400 hover:text-blue-300 active:text-blue-500 px-3 py-1 rounded"
          >
            Close All
          </button>
        )}
      </div>

      {/* Recent Apps List */}
      <div className="p-4 space-y-3">
        {recentApps.map((app) => (
          <div
            key={app.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 relative group"
          >
            {/* App Preview Card */}
            <div
              onClick={() => onAppClick(app.id)}
              className="cursor-pointer active:scale-98 transition-transform"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3 flex items-center gap-3">
                {app.imageIcon ? (
                  <img
                    src={app.imageIcon}
                    alt={app.title}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <span className="text-2xl">{app.icon}</span>
                )}
                <h3 className="text-white font-medium flex-1">{app.title}</h3>
              </div>
              <div className="bg-gray-700 px-4 py-8 text-center text-gray-400 text-sm">
                App Preview
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseApp(app.id);
              }}
              className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors z-10"
            >
              <svg
                className="w-5 h-5 text-white"
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
        ))}
      </div>
    </div>
  );
};

export default MobileRecentApps;
