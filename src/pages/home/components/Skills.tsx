import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: 'Adobe Illustrator',
      icon: 'ri-pen-nib-line',
      proficiency: 95,
      gradient: 'from-[#FF6B6B] to-[#FF8E53]'
    },
    {
      name: 'Adobe Photoshop',
      icon: 'ri-image-edit-line',
      proficiency: 90,
      gradient: 'from-[#667EEA] to-[#764BA2]'
    },
    {
      name: 'Particl',
      icon: 'ri-shopping-bag-line',
      proficiency: 85,
      gradient: 'from-[#F093FB] to-[#F5576C]'
    },
    {
      name: 'MotivBase',
      icon: 'ri-bar-chart-box-line',
      proficiency: 88,
      gradient: 'from-[#4FACFE] to-[#00F2FE]'
    },
    {
      name: 'TUKAcad',
      icon: 'ri-scissors-cut-line',
      proficiency: 92,
      gradient: 'from-[#43E97B] to-[#38F9D7]'
    },
    {
      name: 'Product Development',
      icon: 'ri-lightbulb-line',
      proficiency: 95,
      gradient: 'from-[#FA709A] to-[#FEE140]'
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-radial-gradient from-[#FFFEF7] to-white"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#FFD3B6] to-[#E8DAEF] text-xs font-montserrat font-semibold uppercase tracking-wider text-[#4A1942] mb-4">
            Technical Expertise
          </span>
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#8E44AD] to-[#E91E63] bg-clip-text text-transparent">
            Skills & Tools
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`group relative bg-white/40 backdrop-blur-xl rounded-[32px] p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer h-full flex flex-col items-center text-center ${
                hoveredSkill === index ? 'bg-white/60 border-transparent' : 'border-white/50'
              }`}
              style={{
                borderImage: hoveredSkill === index ? `linear-gradient(135deg, ${skill.gradient.replace('from-', '').replace('to-', ',')}) 1` : undefined
              }}>
                {/* Icon */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${skill.gradient} flex items-center justify-center mb-6 transition-all duration-500 ${
                  hoveredSkill === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                }`}>
                  <i className={`${skill.icon} text-4xl text-white`}></i>
                </div>

                {/* Skill Name */}
                <h3 className="font-playfair text-2xl font-bold text-[#1A1A2E] mb-6">
                  {skill.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-montserrat text-xs text-gray-600 uppercase tracking-wide">Proficiency</span>
                    <span className="font-montserrat text-sm font-bold text-[#4A1942]">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{
                        width: isVisible ? `${skill.proficiency}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.gradient} opacity-10 rounded-tr-[32px] rounded-bl-full transition-opacity duration-500 ${
                  hoveredSkill === index ? 'opacity-20' : 'opacity-10'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
