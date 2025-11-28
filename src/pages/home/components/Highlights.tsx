import { useState, useEffect, useRef } from 'react';

export default function Highlights() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
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

  const highlights = [
    {
      title: 'Competitor Product Analysis',
      description: 'Comprehensive competitor product analysis delivered to Product COE & divisions, providing strategic insights for product development and market positioning.',
      icon: 'ri-line-chart-line',
      gradient: 'from-[#FF6B6B] to-[#FF8E53]',
      tags: ['Market Research', 'Strategic Analysis', 'Product Intelligence']
    },
    {
      title: 'Amante Bra Chassy Analysis',
      description: 'Detailed technical analysis of Amante bra chassis delivered to MAS Intimates, enabling enhanced product development and competitive advantage.',
      icon: 'ri-focus-3-line',
      gradient: 'from-[#667EEA] to-[#764BA2]',
      tags: ['Technical Analysis', 'Intimates', 'Product Development']
    },
    {
      title: 'Indian Competitor Analysis',
      description: 'In-depth Indian competitor product analysis delivered to IMCOE, supporting market expansion strategies and product innovation.',
      icon: 'ri-global-line',
      gradient: 'from-[#F093FB] to-[#F5576C]',
      tags: ['Market Expansion', 'Competitive Intelligence', 'Regional Analysis']
    },
    {
      title: 'Consumer Reviews Research',
      description: 'Consumer reviews research tool analysis delivered to divisions, enabling data-driven decision making and customer-centric product development.',
      icon: 'ri-user-voice-line',
      gradient: 'from-[#4FACFE] to-[#00F2FE]',
      tags: ['Consumer Insights', 'Data Analysis', 'Customer Experience']
    },
    {
      title: 'Product Display Arrangements',
      description: 'Strategic product display arrangements for MAS Capital & Chairman\'s Office, showcasing brand excellence and innovation.',
      icon: 'ri-layout-masonry-line',
      gradient: 'from-[#43E97B] to-[#38F9D7]',
      tags: ['Visual Merchandising', 'Brand Presentation', 'Executive Communication']
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-[#FFB6B9] to-[#E5D4FF] overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-playfair text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white" style={{
              WebkitTextStroke: '2px white',
              color: 'transparent'
            }}>
              SIGNATURE PROJECTS
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            {/* Previous Card (Left) */}
            <div className="hidden lg:block w-1/4 opacity-60 scale-85 transition-all duration-500">
              <div className={`bg-white rounded-[40px] p-8 shadow-lg h-96 flex flex-col`}>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${highlights[(activeSlide - 1 + highlights.length) % highlights.length].gradient} flex items-center justify-center mb-4`}>
                  <i className={`${highlights[(activeSlide - 1 + highlights.length) % highlights.length].icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#1A1A2E] mb-3">
                  {highlights[(activeSlide - 1 + highlights.length) % highlights.length].title}
                </h3>
              </div>
            </div>

            {/* Active Card (Center) */}
            <div className={`w-full lg:w-2/4 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="bg-white rounded-[40px] p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${highlights[activeSlide].gradient}`}></div>

                {/* Icon Badge */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${highlights[activeSlide].gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <i className={`${highlights[activeSlide].icon} text-3xl text-white`}></i>
                </div>

                {/* Title */}
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-[#1A1A2E] mb-4 leading-tight">
                  {highlights[activeSlide].title}
                </h3>

                {/* Description */}
                <p className="font-cormorant text-lg text-gray-700 leading-relaxed mb-6">
                  {highlights[activeSlide].description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {highlights[activeSlide].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${highlights[activeSlide].gradient} text-white text-xs font-montserrat font-medium shadow-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <button className="group font-montserrat text-sm font-semibold bg-gradient-to-r from-[#4A1942] to-[#D4745C] bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer whitespace-nowrap">
                  LEARN MORE
                  <i className="ri-arrow-right-line ml-2 transition-transform group-hover:translate-x-1"></i>
                </button>
              </div>
            </div>

            {/* Next Card (Right) */}
            <div className="hidden lg:block w-1/4 opacity-60 scale-85 transition-all duration-500">
              <div className={`bg-white rounded-[40px] p-8 shadow-lg h-96 flex flex-col`}>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${highlights[(activeSlide + 1) % highlights.length].gradient} flex items-center justify-center mb-4`}>
                  <i className={`${highlights[(activeSlide + 1) % highlights.length].icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#1A1A2E] mb-3">
                  {highlights[(activeSlide + 1) % highlights.length].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-2xl text-[#4A1942]"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <i className="ri-arrow-right-line text-2xl text-[#4A1942]"></i>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === index
                  ? 'w-8 bg-gradient-to-r from-[#FF6B6B] to-[#C44569]'
                  : 'bg-white/60 hover:bg-white'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
