import React, { useEffect, useState } from 'react';
import { Camera, Calendar, Star } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from "react-router-dom";

const CTA = () => {
  const [inView, setInView] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '-50px 0px' }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const imageSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(1.05)',
    config: { tension: 280, friction: 20 },
  });

  const contentSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-30px)',
    delay: 200,
    config: { tension: 280, friction: 20 },
  });

  const buttonSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 400,
    config: { tension: 280, friction: 20 },
  });

  return (
    <section
      id="cta-section"
      className="relative w-full py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 2xl:py-20 bg-white overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23ffffff%22 width=%22100%22 height=%22100%22/><circle cx=%2250%22 cy=%2250%22 r=%225%22 fill=%22%23f3f4f6%22/></svg>')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-amber-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-amber-200 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl lg:shadow-2xl">
          <animated.div style={imageSpring} className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/20 to-black/20 z-10 opacity-10"></div>
            
            {/* ✅ Increased height for mobile */}
            <img
              src="/cta-img.png"
              alt="Professional photoshoot"
              className="w-full h-[460px] sm:h-72 md:h-80 lg:h-96 xl:h-[480px] 2xl:h-[600px] object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center sm:justify-start items-center sm:items-start px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 text-center sm:text-left">
              <animated.div
                style={contentSpring}
                className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-3/5 flex flex-col items-center sm:items-start"
              >
                <div className="mt-1 inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full mb-1 sm:mb-3 md:mb-4 lg:mb-5 w-fit">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-900 animate-pulse"></div>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg text-amber-900 font-medium whitespace-nowrap">
                    Limited Time Offer
                  </span>
                </div>

                <p
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed max-w-sm sm:max-w-none"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Our professional photographers are ready to create stunning memories that will last a lifetime. Book your session today and receive a complimentary 10" x 8" print!
                </p>

                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                  {[
                    'Professional equipment and expertise',
                    'Customized photoshoot packages',
                    'Fast delivery with digital edits',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                      <div className="p-1 sm:p-1.5 md:p-2 bg-amber-700/20 rounded-lg backdrop-blur-sm flex-shrink-0 mt-0.5">
                        <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-amber-700" />
                      </div>
                      <span
                        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-snug"
                        style={{ fontFamily: "'Lora', serif" }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </animated.div>

              {/* Buttons Section */}
              <animated.div
                style={buttonSpring}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-4 sm:mt-3 md:mt-4 justify-center sm:justify-start"
              >
                <Link to="/contact">
                  <button className="group relative px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-red-900 text-white font-bold text-sm md:text-base rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-700/30 active:scale-95">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                      Book Session
                    </span>
                  </button>
                </Link>

                <Link to="/portfolio">
                  <button className="group relative px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-transparent border-2 border-gray-300 text-white/90 font-bold text-sm md:text-base rounded-full transition-all duration-500 transform hover:scale-105 hover:bg-gray-100/10 hover:border-gray-400 active:scale-95">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Star className="w-4 h-4 md:w-5 md:h-5" />
                      Portfolio
                    </span>
                  </button>
                </Link>
              </animated.div>
            </div>

            {/* Floating Camera Icon */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-20">
              <div className="p-2 sm:p-3 md:p-4 bg-red-900 rounded-full shadow-lg shadow-amber-700/30 backdrop-blur-sm">
                <Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
