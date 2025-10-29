import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function VisualDiaryGallery() {
  const [currentIndex, setCurrentIndex] = useState(3);

  const images = [
    { url: '/wedd-img/wedd12.jpg', alt: 'Wedding photoshoot outdoors' },
    { url: '/pre-wedd/pre-wedd9.jpeg', alt: 'Pre-Wedding shoot' },
    { url: '/pot-img/pot5.jpg', alt: 'Portrait photography lighting' },
    { url: '/event-img/event3.jpg', alt: 'Wedding couple moment' },
    { url: '/wedd-img/wedd3.jpg', alt: 'Product photography setup' },
    { url: '/out-img/out1.jpeg', alt: 'Outdoor photoshoot' },
    { url: '/birthday-img/birthday10.jpg', alt: 'Studio portrait with soft light' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getVisibleImages = () => {
    const positions = [
      { offset: -3, scale: 0.5, opacity: 1, y: 60, blur: 1 },
      { offset: -2, scale: 0.65, opacity: 1, y: 45, blur: 0 },
      { offset: -1, scale: 0.8, opacity: 1, y: 25, blur: 0 },
      { offset: 0, scale: 1, opacity: 1, y: 0, blur: 0 },
      { offset: 1, scale: 0.8, opacity: 1, y: 25, blur: 0 },
      { offset: 2, scale: 0.65, opacity: 1, y: 45, blur: 0 },
      { offset: 3, scale: 0.5, opacity: 1, y: 60, blur: 1 },
    ];

    return positions.map((pos) => {
      const index = (currentIndex + pos.offset + images.length) % images.length;
      return { ...pos, index };
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-3 sm:p-6 md:p-8">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-2">
            GALLERY
          </p>
          <h1
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Photoshoot
            <span
              className="text-red-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {' '}Moments
            </span>
          </h1>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-2 sm:mb-5 rounded-full"></div>

          {/* Fully responsive tagline */}
          <p className="text-gray-600 text-[11px] sm:text-sm md:text-base max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-4 sm:px-0 mb-3 sm:mb-4 leading-relaxed break-words text-center">
    Every frame tells a <span className="text-red-900 font-medium">beautiful story</span>. —
  </p>
        </div>

        {/* Gallery */}
        <div className="relative h-[260px] sm:h-[380px] md:h-[500px] mb-10 sm:mb-12 mt-7 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-7xl h-full flex items-end justify-center">
              {getVisibleImages().map(({ index, offset, scale, opacity, y, blur }) => {
                const zIndex = 20 - Math.abs(offset);
                const translateX =
                  window.innerWidth < 640
                    ? offset * 55
                    : window.innerWidth < 1024
                    ? offset * 100
                    : offset * 140;

                return (
                  <div
                    key={`${index}-${offset}`}
                    className="absolute transition-all duration-500 ease-out"
                    style={{
                      transform: `translateX(${translateX}px) translateY(${y}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      filter: blur > 0 ? `blur(${blur}px)` : 'none',
                    }}
                  >
                    <div className="w-40 h-48 sm:w-56 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                      <img
                        src={images[index].url}
                        alt={images[index].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {offset === 0 && (
                      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full border-2 border-gray-400"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-8">
          <button
            onClick={handlePrev}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-red-900 hover:border-red-900 hover:text-white transition-all"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-red-900 hover:border-red-900 hover:text-white transition-all"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
