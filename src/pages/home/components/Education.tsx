import { useState, useEffect, useRef } from 'react';

interface EducationItem {
  year: string;
  title: string;
  institution: string;
  duration: string;
  side: 'left' | 'right';
}

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const education: EducationItem[] = [
    {
      year: '2025-2027',
      title: 'Master of Business Administration (General)',
      institution: 'University of Colombo',
      duration: 'Ongoing',
      side: 'right'
    },
    {
      year: '2017-2022',
      title: 'Honours Degree of Bachelor of Design in Fashion Design & Product Development',
      institution: 'Department of Textile & Apparel Engineering, University of Moratuwa',
      duration: '5 Years',
      side: 'left'
    },
    {
      year: '2023',
      title: 'Professional Certificate in Marketing',
      institution: 'Sri Lanka Institute of Marketing',
      duration: 'Completed',
      side: 'right'
    },
    {
      year: '2024',
      title: 'Strategy Bootcamp 7.0',
      institution: 'Miami Ad School – Sri Lanka & Maldives',
      duration: 'Completed',
      side: 'left'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          education.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#FAF8F5] to-[#F3EFF5] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#FFD3B6] to-[#E8DAEF] text-xs font-montserrat font-semibold uppercase tracking-wider text-[#4A1942] mb-4">
            Education
          </span>
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-[#1A1A2E]">
            Academic <span className="bg-gradient-to-r from-[#4A1942] to-[#D4745C] bg-clip-text text-transparent">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C9A961] via-[#B87333] to-[#C9A961] hidden lg:block"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  visibleCards.includes(index) ? 'opacity-100 translate-x-0' : `opacity-0 ${item.side === 'left' ? '-translate-x-8' : 'translate-x-8'}`
                }`}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Card */}
                  <div className="w-full lg:w-5/12">
                    <div className="group relative bg-white rounded-[24px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                      {/* Year Badge */}
                      <div className="absolute -top-4 left-8">
                        <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#C44569] text-white font-montserrat font-bold text-sm shadow-lg">
                          {item.year}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="mt-4">
                        <h3 className="font-playfair text-2xl font-bold text-[#1A1A2E] mb-3 leading-tight">
                          {item.title}
                        </h3>
                        <p className="font-montserrat text-base font-medium bg-gradient-to-r from-[#2D9596] to-[#9B59B6] bg-clip-text text-transparent mb-2">
                          {item.institution}
                        </p>
                        <p className="font-cormorant text-sm italic text-gray-600">
                          {item.duration}
                        </p>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFD3B6]/20 to-transparent rounded-tr-[24px] rounded-bl-full"></div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                    <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B87333] shadow-lg animate-pulse-slow">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B87333] animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
