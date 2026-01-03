import { useState, useEffect } from 'react';
import { useIsMobileContext } from '../../context/MobileContext';

const ImageGallery = ({ images, title = "Gallery" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validImages, setValidImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobileContext();

  // Add CSS to hide scrollbar on mobile
  const thumbnailScrollStyle = isMobile ? {
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch'
  } : {};

  useEffect(() => {
    // Filter out images that don't exist
    const checkImages = async () => {
      const valid = [];
      for (const img of images) {
        try {
          const response = await fetch(img, { method: 'HEAD' });
          if (response.ok) {
            valid.push(img);
          }
        } catch (error) {
          // Image doesn't exist, skip it
        }
      }
      setValidImages(valid);
      setLoading(false);
    };

    if (images && images.length > 0) {
      checkImages();
    } else {
      setLoading(false);
    }
  }, [images]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [validImages.length]);

  // Don't render if no valid images
  if (loading) {
    return (
      <div className="w-full p-8 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Loading gallery...</p>
      </div>
    );
  }

  if (validImages.length === 0) {
    return null; // Don't render gallery if no images
  }

  return (
    <div className="w-full">
      {isMobile && (
        <style>
          {`.image-gallery-thumbnails::-webkit-scrollbar { display: none; }`}
        </style>
      )}
      <h3 className={`font-bold text-gray-800 mb-3 flex items-center gap-2 ${isMobile ? 'text-sm' : 'text-lg'}`}>
        <span className={isMobile ? 'text-base' : 'text-xl'}>📸</span>
        {title} ({currentIndex + 1} / {validImages.length})
      </h3>

      <div className="relative bg-gray-900 rounded-lg overflow-hidden border-2 border-gray-300 shadow-lg">
        {/* Main Image */}
        <div className="relative bg-black flex items-center justify-center" style={{ height: isMobile ? '250px' : '400px' }}>
          <img
            src={validImages[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Navigation Buttons */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all shadow-lg ${isMobile ? 'w-8 h-8 text-sm' : 'w-10 h-10'}`}
              title="Previous (Arrow Left)"
            >
              ←
            </button>
            <button
              onClick={goToNext}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all shadow-lg ${isMobile ? 'w-8 h-8 text-sm' : 'w-10 h-10'}`}
              title="Next (Arrow Right)"
            >
              →
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className={`absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded ${isMobile ? 'text-xs' : 'text-sm'}`}>
          {currentIndex + 1} / {validImages.length}
        </div>
      </div>

      {/* Thumbnails */}
      {validImages.length > 1 && (
        <div className={`image-gallery-thumbnails mt-3 ${
          isMobile
            ? 'grid grid-cols-6 gap-2'
            : 'flex gap-2 overflow-x-auto pb-2'
        }`}
          style={isMobile ? {} : thumbnailScrollStyle}
        >
          {validImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded border-2 overflow-hidden transition-all ${
                isMobile ? 'w-full aspect-square' : 'flex-shrink-0 w-16 h-16'
              } ${
                index === currentIndex
                  ? 'border-blue-500 shadow-lg' + (isMobile ? '' : ' scale-110')
                  : 'border-gray-300 hover:border-blue-300'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Keyboard Hint - Hidden on Mobile */}
      {validImages.length > 1 && !isMobile && (
        <p className="text-xs text-gray-500 mt-2 text-center">
          Use arrow keys ← → to navigate
        </p>
      )}
    </div>
  );
};

export default ImageGallery;
