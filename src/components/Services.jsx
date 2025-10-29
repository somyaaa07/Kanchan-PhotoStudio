import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Wedding Photography",
      description: "Capture your special day with timeless elegance and emotion",
      image: "/wedd-img/wedd3.jpg",
      link: "/services/wedding-photography",
    },
    {
      id: 2,
      title: "Portrait Sessions",
      description: "Professional portraits that showcase your unique personality",
      image: "/pot-img/pot9.jpg",
      link: "/portrait-gallery",
    },
    {
      id: 3,
      title: "Event Photography",
      description: "Preserve precious moments with your loved ones forever",
      image: "/event-img/event10.jpeg",
      link: "/services/event-photography",
    },
    {
      id: 4,
      title: "Prewedding-shoot",
      description: "Professional coverage for your business occasions and team",
      image: "/pre-wedd/pre-wedd1.jpeg",
      link: "/services/prewedding-shoot",
    },
    {
      id: 5,
      title: "Photo-framing",
      description: "Gentle and artistic portraits of your newest family member",
      image: "/frames/frame1.jpeg",
      link: "/services/photo-framing",
    },
    {
      id: 6,
      title: "Product Photography",
      description: "Stunning visuals that make your products shine and sell",
      image: "/service-img/pro1.jpeg",
      link: "/services/product-photography",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4 relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-6xl font-bold text-black mb-4 relative"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our{" "}
          <span
            className="bg-clip-text text-red-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Services
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-6 rounded-full"></div>
        <p
          className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          We offer a wide range of photography services tailored to your needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            tabIndex={0} 
            className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-500 hover:scale-105 focus-within:scale-105 active:scale-105"
            style={{
              animation: `slideUp 0.6s ease-out ${index * 0.08}s both`,
            }}
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110 group-focus-within:scale-110 group-active:scale-110"
            />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

            {/* Gradient Behind Bottom Title */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 
              group-hover:opacity-0 group-focus-within:opacity-0 group-active:opacity-0"></div>

            {/* Bottom Title */}
            <div className="absolute bottom-4 left-0 right-0 text-center px-4 transition-opacity duration-500 
              group-hover:opacity-0 group-focus-within:opacity-0 group-active:opacity-0">
              <h3
                className="text-xl font-semibold text-white tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>
            </div>

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-white/90 text-center px-6 py-4 transform translate-y-full opacity-0 
              group-hover:translate-y-0 group-hover:opacity-100 
              group-focus-within:translate-y-0 group-focus-within:opacity-100 
              group-active:translate-y-0 group-active:opacity-100 
              transition-all duration-700 flex flex-col items-center justify-center">
              <h3
                className="text-lg font-semibold text-black mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-gray-700 text-sm leading-relaxed mb-3"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {service.description}
              </p>
              <Link
                to={service.link}
                className="mt-2 inline-block px-4 py-2 bg-red-900 text-white text-xs font-semibold rounded-full uppercase tracking-widest hover:bg-red-700 transition-all duration-300"
              >
                View More
              </Link>
            </div>

            {/* Glowing Border Effect */}
            <span className="absolute top-0 left-0 w-0 h-[2px] bg-amber-700 shadow-[0_0_10px_#b45309,0_0_20px_#b45309] group-hover:w-full group-focus-within:w-full group-active:w-full transition-all duration-500"></span>
            <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-amber-700 shadow-[0_0_10px_#b45309,0_0_20px_#b45309] group-hover:w-full group-focus-within:w-full group-active:w-full transition-all duration-500 delay-150"></span>
            <span className="absolute top-0 right-0 h-0 w-[2px] bg-amber-700 shadow-[0_0_10px_#b45309,0_0_20px_#b45309] group-hover:h-full group-focus-within:h-full group-active:h-full transition-all duration-500 delay-300"></span>
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-amber-700 shadow-[0_0_10px_#b45309,0_0_20px_#b45309] group-hover:h-full group-focus-within:h-full group-active:h-full transition-all duration-500 delay-450"></span>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lora:wght@400;600&display=swap');

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
      `}</style>
    </div>
  );
};

export default ServicesSection;
