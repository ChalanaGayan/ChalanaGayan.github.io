import { useState, useEffect } from 'react';

const MobileBootScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Progress animation - slower speed
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + 1; // Changed from 2 to 1 for slower progress
      });
    }, 60); // Changed from 30ms to 60ms for slower animation

    // Show message after 1.5 seconds
    setTimeout(() => setShowMessage(true), 1500);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center text-white">
      {/* Android KitKat Logo Animation */}
      <div className="mb-8 animate-pulse">
        <img
          src="/desktop_pc/android-kitkat-logo.png"
          alt="Android KitKat"
          className="w-32 h-32 object-contain mb-4"
        />
        <div className="text-2xl font-light text-center text-gray-300">
          Android 4.4
        </div>
      </div>

      {/* Loading Spinner */}
      <div className="relative w-16 h-16 mb-8">
        <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-8">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Best Viewed on PC Message */}
      {showMessage && (
        <div className="absolute bottom-16 left-0 right-0 px-8 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 border-2 border-blue-500/40 rounded-xl p-4 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-2xl">💻</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-blue-300 font-bold text-sm mb-1">
                  ✨ Best on Desktop
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Full Windows XP experience with draggable windows & more features
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading Text */}
      <div className="text-gray-400 text-sm animate-pulse">
        Loading your portfolio...
      </div>
    </div>
  );
};

export default MobileBootScreen;
