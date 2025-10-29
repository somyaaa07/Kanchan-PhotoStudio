import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: "Radhika Singh", role: "Bride", text: "The team captured our wedding perfectly! Every moment was beautifully documented.", rating: 5 },
    { name: "Sushma Shree", role: "Business Owner", text: "Professional product photography that increased our sales by 40%. Highly recommended!", rating: 5 },
    { name: "Adhya Singh", role: "Model", text: "Creative and talented photographers who know how to bring out the best in their subjects.", rating: 5 },
    { name: "Deepak Kumar", role: "Father", text: "Our family photos turned out amazing. They made everyone feel comfortable and natural.", rating: 5 },
    { name: "Jaya Shah", role: "Event Planner", text: "Working with this team was an absolute pleasure. They delivered beyond our expectations!", rating: 5 },
    { name: "Suraj Kumar", role: "Actor", text: "Their headshots are incredible. They have a unique ability to capture personality.", rating: 5 }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (paused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [paused, testimonials.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  
  // Get testimonials to display - 1 for mobile, 3 for desktop
  const getVisibleTestimonials = () => {
    const visible = [];
    // For desktop, show 3 testimonials
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section 
      className="py-12 md:py-16 bg-white relative overflow-hidden" 
      id="testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          className="text-center mb-12 md:mb-24 transition-all duration-1000"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-red-900"></div>
            <Quote className="w-7 h-7 text-red-900" />
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-red-900"></div>
          </div>
          
          <h2 className="text-4xl md:text-8xl font-bold text-black mb-4 md:mb-6 leading-tight tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Client <span className="text-red-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Testimonials</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Discover why clients trust us to capture their most precious moments with artistry and passion
          </p>
        </div>

        <div
          className="transition-all duration-1000 delay-200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)'
          }}
        >
          {/* Mobile View - Single Card with Smooth Animation */}
          <div className="md:hidden mb-12">
            <div key={currentTestimonial.name} className="relative">
              <div className="relative h-full group">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-red-900 via-red-700 to-red-900 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden" style={{
                  animation: `slideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`
                }}>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-red-500/20 group-hover:border-red-500 transition-all duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-2 border-red-700/20 group-hover:border-red-200 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>

                  {/* Quote icon */}
                  <div className="relative mb-6">
                    <Quote className="w-10 h-10 text-red-900 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Stars */}
                  <div className="relative flex gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-red-900 fill-red-900" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="relative text-gray-700 mb-8 flex-grow text-base leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {currentTestimonial.text}
                  </p>

                  {/* Author section */}
                  <div className="relative flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-black via-gray-800 to-red-900 flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative flex-1 min-w-0">
                      <h4 className="text-black font-bold text-base mb-1 truncate" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-red-900 text-sm font-medium tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        {currentTestimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - 3 Cards Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 mb-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`relative transition-all duration-700 transform ${
                  index === 1 ? 'scale-105 z-20' : index === 0 || index === 2 ? 'opacity-90 scale-95' : ''
                }`}
              >
                <div className="relative h-full group">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-red-900 via-red-700 to-red-900 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                  
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                      <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-red-900/20 group-hover:border-red-900 transition-all duration-500">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full border-2 border-red-900/20 group-hover:border-red-900 transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative mb-6">
                      <Quote className="w-10 h-10 text-red-900 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="relative flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-red-900 fill-red-900" />
                      ))}
                    </div>

                    <p className="relative text-gray-700 mb-8 flex-grow text-base leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {testimonial.text}
                    </p>

                    <div className="relative flex items-center gap-4 pt-6 border-t border-gray-200">
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-black via-gray-800 to-red-900 flex items-center justify-center text-white font-bold text-base shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div className="relative flex-1 min-w-0">
                        <h4 className="text-black font-bold text-base mb-1 truncate" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {testimonial.name}
                        </h4>
                        <p className="text-red-900 text-sm font-medium tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation and dots */}
          <div className="flex flex-col items-center gap-6 md:gap-10">
            {/* Navigation buttons */}
            <div className="flex gap-4 md:gap-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-900/30 transform hover:scale-110 hover:-translate-x-1 active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-900/30 transform hover:scale-110 hover:translate-x-1 active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full active:scale-95 ${
                    i === currentIndex 
                      ? 'bg-red-900 w-8 md:w-12 h-3 shadow-lg shadow-red-900/30' 
                      : 'bg-gray-300 w-3 h-3 hover:bg-red-700'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@400;500;600;700&display=swap');
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;