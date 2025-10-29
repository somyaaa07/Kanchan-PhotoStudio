import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Banner = () => {
  const [videoReady, setVideoReady] = useState(false);

  const bannerContent = {
    title: "Timeless Portraits. Perfect Shots.",
    subtitle: "Timeless Photography for Life's Most Cherished Stories"
  };

  return (
    <div
      className="relative h-[90vh] sm:h-screen bg-black overflow-hidden"
      id="home"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        .animate-fadeIn { animation: fadeIn 1s ease-in 0.2s both; }
        .animate-slideDown { animation: slideDown 0.8s ease-out; }
        .animate-slideUp { animation: slideUp 0.8s ease-out 0.3s both; }
      `}</style>

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedMetadata={() => setVideoReady(true)}
      >
        <source src="/herosection/banner6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-40"></div>

      {/* Banner Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl w-full animate-fadeIn">
          <h1 className="font-playfair text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-3 sm:mb-5 animate-slideDown tracking-tight leading-tight px-2">
            {bannerContent.title}
          </h1>

          <div className="w-10 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-red-900 mx-auto mb-5 sm:mb-7 animate-slideUp"></div>

          <p className="font-inter text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-100 mb-6 sm:mb-10 md:mb-12 animate-slideUp font-normal tracking-wide px-3 sm:px-6 md:px-10 max-w-4xl mx-auto leading-relaxed">
            {bannerContent.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-center items-center animate-fadeIn px-2 sm:px-4">
            <Link to="/contact" className="w-[200px] sm:w-auto">
              <button className="w-full sm:w-auto bg-red-900 hover:bg-red-900 text-white px-4 sm:px-8 md:px-10 py-2.5 sm:py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-700/40 flex items-center justify-center gap-2 uppercase tracking-widest text-xs sm:text-sm font-inter">
                Schedule Session <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </Link>

            <Link to="/portfolio" className="w-[200px] sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-white text-white rounded-2xl hover:bg-white hover:text-black px-4 sm:px-8 md:px-10 py-2.5 sm:py-4 font-semibold transition-all duration-300 transform hover:scale-105 uppercase tracking-widest text-xs sm:text-sm font-inter">
                Explore Work
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="font-inter text-gray-300 text-[10px] sm:text-xs md:text-sm tracking-widest mb-1 sm:mb-2">
          SCROLL
        </p>
        <div className="w-px h-6 sm:h-8 md:h-12 bg-gradient-to-b from-red-700 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default Banner;
