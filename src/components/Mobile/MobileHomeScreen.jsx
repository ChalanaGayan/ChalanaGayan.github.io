import React from 'react';

const MobileHomeScreen = ({ apps, onAppClick }) => {
  return (
    <div className="h-full w-full relative overflow-y-auto pb-20">
      {/* Android KitKat Wallpaper Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/desktop_pc/android-wallpaper.png')`,
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Status bar */}
        <div className="bg-black/40 backdrop-blur-sm px-4 py-2 flex justify-between items-center text-white text-xs">
          <div className="flex items-center gap-2">
            <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        {/* App Grid */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-4 gap-6">
            {apps.map((app) => (
              <button
                key={app.id}
                onClick={() => onAppClick(app.id)}
                className="flex flex-col items-center gap-2 active:scale-95 transition-transform"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center border border-white/30">
                  {app.imageIcon ? (
                    <img
                      src={app.imageIcon}
                      alt={app.title}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <span className="text-3xl">{app.icon}</span>
                  )}
                </div>
                <span className="text-white text-xs text-center leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-[80px] font-semibold">
                  {app.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHomeScreen;
