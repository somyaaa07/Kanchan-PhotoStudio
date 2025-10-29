import React from "react";
import { Camera, Users, Award, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, useSprings } from "@react-spring/web";

const Stats = () => {
  const stats = [
    { icon: Camera, value: 5000, label: "Photos Captured" },
    { icon: Users, value: 1200, label: "Happy Clients" },
    { icon: Award, value: 50, label: "Awards Won" },
    { icon: Star, value: 4.9, label: "Average Rating" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-100px 0px",
  });

  // Card entrance animations with stagger effect
  const cardSprings = useSprings(
    stats.length,
    stats.map((_, i) => ({
      from: { opacity: 0, transform: "translateY(50px) scale(0.9)" },
      to: {
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0px) scale(1)"
          : "translateY(50px) scale(0.9)",
      },
      delay: i * 150,
      config: { tension: 280, friction: 20 },
    }))
  );

  // Number counting animations with bounce effect
  const numberSprings = stats.map((stat) =>
    useSpring({
      from: { number: 0 },
      to: { number: inView ? stat.value : 0 },
      delay: 500 + stats.indexOf(stat) * 200,
      config: { mass: 1, tension: 180, friction: 12 },
    })
  );

  // Icon animations
  const iconSprings = useSprings(
    stats.length,
    stats.map(() => ({
      from: { rotate: -15, scale: 0.8 },
      to: {
        rotate: inView ? 0 : -15,
        scale: inView ? 1 : 0.8,
      },
      delay: 300 + Math.random() * 300,
      config: { tension: 300, friction: 10 },
    }))
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-amber-200 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{" "}
            <span
              className="text-transparent bg-red-900 bg-clip-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <animated.div
                key={index}
                style={cardSprings[index]}
                className="text-center group relative"
              >
                <div className="bg-gray-100 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 group-hover:border-amber-700/50 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-amber-600/10">
                  <animated.div
                    style={iconSprings[index]}
                    className="inline-block mb-4"
                  >
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-amber-200/40 to-red-300/40 rounded-full mb-4 group-hover:from-red-300/60 group-hover:to-red-400/60 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-amber-600/30">
                      <StatIcon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-900 group-hover:text-amber-800 transition-colors duration-300" />
                    </div>
                  </animated.div>

                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 group-hover:text-red-900 transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <animated.span>
                      {numberSprings[index].number.to((n) =>
                        stat.value % 1 !== 0 ? n.toFixed(1) : Math.floor(n)
                      )}
                    </animated.span>
                    {stat.value % 1 === 0 ? "+" : ""}
                  </h3>

                  <p
                    className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
