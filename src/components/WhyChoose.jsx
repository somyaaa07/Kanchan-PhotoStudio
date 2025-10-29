import React from 'react';
import { Camera, Award, Heart, Zap, Users, Clock, Sparkles, Shield, Star, TrendingUp, CheckCircle, Aperture } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    config: { tension: 280, friction: 20 }
  });

  const cards = [
    // Large featured card
    {
      size: 'large',
      icon: Camera,
      title: 'Professional Equipment',
      description: 'State-of-the-art cameras, lenses, and lighting equipment ensuring every shot is picture-perfect',
      stats: '50K+ Photos',
      image: '/wedd-ci/wedd-ci3.jpg',
      gradient: 'from-black to-gray-700'
    },
    // Medium cards
    {
      size: 'medium',
      icon: Award,
      title: 'Award-Winning',
      description: 'Recognized by industry leaders with multiple photography awards',
      stats: '15+ Awards',
      gradient: 'from-black to-gray-800'
    },
    {
      size: 'medium',
      icon: Users,
      title: '5000+ Happy Clients',
      description: 'Join thousands of satisfied customers who trust us',
      stats: '98% Satisfaction',
      gradient: 'from-gray-900 to-gray-700'
    },
    // Small cards
  
  ];

  return (
    <section ref={ref} className="py-12 bg-white relative overflow-hidden" id="why-choose-us">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-200 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
      </div>
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
       <animated.div style={titleSpring} className="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6 lg:px-8">
  {/* Decorative line + icon */}
  <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
    <div className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-gray-900"></div>
    <Aperture className="w-5 sm:w-7 h-5 sm:h-7 text-gray-900" />
    <div className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-gray-900"></div>
  </div>

  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6 leading-tight tracking-tight" 
      style={{ fontFamily: "'Cormorant Garamond', serif" }}>
    Why  <span className="text-gray-900 text-red-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}> Choose Us</span>
  </h2>

  {/* Paragraph */}
  <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed" 
     style={{ fontFamily: "'Montserrat', sans-serif" }}>
    Excellence in every frame, passion in every click
  </p>
</animated.div>


        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-auto">
          {cards.map((card, index) => {
            const sizeClasses = {
              large: 'md:col-span-3 md:row-span-2',
              medium: 'md:col-span-3 md:row-span-1',
              small: 'md:col-span-2 md:row-span-1'
            };

            return (
              <div
                key={index}
                className={`${sizeClasses[card.size]} group relative overflow-hidden rounded-2xl`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card Background */}
                {card.image ? (
                  // Large cards with image
                  <div className="relative h-full min-h-[400px]">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    
                    {/* Text overlay */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
                    
                    {/* Content overlay */}
                    <div className="relative h-full flex flex-col justify-end p-8 text-white">
                      <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                        <card.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {card.title}
                      </h3>
                      
                      <p className="text-white/90 text-base mb-4 leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {card.description}
                      </p>
                      
                      {card.stats && (
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                          <Star className="w-4 h-4" />
                          <span className="text-sm font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            {card.stats}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ) : (
                  // Medium and small cards without image
                  <div className={`relative h-full min-h-[200px] p-8 flex flex-col justify-between ${card.size === 'medium' ? 'bg-gradient-to-br from-red-900 to-black' : `bg-gradient-to-br ${card.gradient}`}`}>
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        <card.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className={`font-bold mb-3 ${card.size === 'medium' ? 'text-white' : 'text-white'} ${card.size === 'medium' ? 'text-2xl' : 'text-xl'}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {card.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed ${card.size === 'medium' ? 'text-white' : 'text-white/90'}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {card.description}
                      </p>
                    </div>
                    
                    {card.stats && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
                        <Star className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {card.stats}
                        </span>
                      </div>
                    )}

                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Bottom shine effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<Link to='/contact'>
  <button
    className="relative px-6 py-4 bg-red-900 text-white rounded-full hover:bg-red-800 transition-all duration-500 font-semibold text-lg tracking-wide"
    style={{
      fontFamily: "'Montserrat', sans-serif"
    }}
  >
    Book Your Session Today
  </button>
</Link>



          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;