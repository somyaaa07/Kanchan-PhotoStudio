import React, { useState } from 'react';

const GalleryCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSizeClass = () => {
    switch(item.size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <div 
      className={`gallery-card relative rounded-2xl overflow-hidden cursor-pointer group ${getSizeClass()} shadow-lg hover:shadow-2xl transition-shadow duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Elegant Border Lines on Hover - Changed from red to neutral */}
      <span className="absolute left-0 top-0 w-0 h-[3px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 group-hover:w-full transition-all duration-700 z-30 shadow-[0_0_20px_rgba(156,163,175,0.5)]"></span>
      <span className="absolute right-0 bottom-0 w-0 h-[3px] bg-gradient-to-l from-gray-300 via-gray-400 to-gray-300 group-hover:w-full transition-all duration-700 z-30 shadow-[0_0_20px_rgba(156,163,175,0.5)]"></span>
      <span className="absolute right-0 top-0 h-0 w-[3px] bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 group-hover:h-full transition-all duration-700 z-30 shadow-[0_0_20px_rgba(156,163,175,0.5)]"></span>
      <span className="absolute left-0 bottom-0 h-0 w-[3px] bg-gradient-to-t from-gray-300 via-gray-400 to-gray-300 group-hover:h-full transition-all duration-700 z-30 shadow-[0_0_20px_rgba(156,163,175,0.5)]"></span>

      {/* Corner accents - Changed from white to neutral */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gray-500/0 group-hover:border-gray-300/80 transition-all duration-500 z-20"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-500/0 group-hover:border-gray-300/80 transition-all duration-500 z-20"></div>

      {/* Soft Shimmer Effect on Hover */}
      {isHovered && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl">
          <div className="soft-shimmer-once"></div>
        </div>
      )}
      
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Content */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transition-all duration-500 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 tracking-wide  font-light ">{item.title}</h3>
        <span className="inline-block bg-white/50 backdrop-blur-lg text-black px-3 sm:px-4 py-0.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-widest shadow-lg">
          {item.category}
        </span>
      </div>

      <style jsx>{`
        .gallery-card {
          animation: slideUp 0.6s ease-out both;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .soft-shimmer-once {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.2) 48%,
            transparent 60%,
            transparent 100%
          );
          animation: softShimmerOnce 1.2s ease-out forwards;
        }

        @keyframes softShimmerOnce {
          0% {
            transform: translate(-50%, -50%) rotate(30deg);
          }
          100% {
            transform: translate(50%, 50%) rotate(30deg);
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryCard;