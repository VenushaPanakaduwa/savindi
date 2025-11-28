import { useState, useEffect, useRef } from 'react';

export default function WorkExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      role: 'Executive – Technical & Product Development',
      company: 'MAS Capital (Pvt) Ltd',
      department: 'Group Business Development & Growth',
      duration: '2023 – Present',
      gradient: 'from-[#FFE5E5] to-[#FFD4B2]',
      responsibilities: [
        'Opportunity brand identification and capability allocation across product categories',
        'Competitor product analysis delivered to Product COE & divisions',
        'Amante Bra Chassy Analysis delivered to MAS Intimates',
        'Indian competitor product analysis delivered to IMCOE',
        'Consumer reviews research tool analysis delivered to divisions',
        'Product display arrangements for MAS Capital & Chairman\'s Office'
      ],
      categories: [
        { name: 'Intimates Wear', brands: ['Leonisa', 'Shinesty', 'Adore Me', 'Bummer'] },
        { name: 'Active Wear', brands: ['On Running', 'Puma', 'Tracksmith', 'FILA'] },
        { name: 'Swim Wear', brands: ['Monday Swim', 'Andie Swim', 'Vilebrequin'] },
        { name: 'Flat Knit', brands: ['Chico\'s', 'Reigning Champ', 'Hugo Boss', 'Barefoot Dreams'] },
        { name: 'Circular Knit', brands: ['NVGTN', 'ABYL', 'Sweaty Betty'] }
      ],
      onboarding: ['Amante', 'Target Australia', 'Crew Clothing', 'Vuori']
    },
    {
      role: 'Merchandiser',
      company: 'Buddhi Batiks',
      department: '',
      duration: '2022',
      gradient: 'from-[#D4F1F4] to-[#B4E4FF]',
      responsibilities: [
        'Costing calculations',
        'Raw material sourcing',
        'Vendor coordination and management',
        'Quality control and product specifications'
      ]
    },
    {
      role: 'Design Intern',
      company: 'Kalathri Guruge Design Studio',
      department: '',
      duration: '2020',
      gradient: 'from-[#E5D9F2] to-[#CDC1FF]',
      responsibilities: [
        'Design research',
        'Concept development',
        'Creative pattern making',
        'Garment technology (Women\'s & Menswear)'
      ]
    }
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#2C2C2C] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-playfair text-6xl lg:text-8xl font-bold mb-4">
            <span className="text-transparent" style={{
              WebkitTextStroke: '2px transparent',
              backgroundImage: 'linear-gradient(to right, #D4AF37, #E8B4B8, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: 'transparent',
              paintOrder: 'stroke fill'
            }}>
              EXPERIENCE
            </span>
          </h2>
          <p className="font-cormorant text-xl text-[#E8E8E8] italic">
            Shaping luxury through innovation
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className={`group relative bg-gradient-to-br ${exp.gradient} rounded-[24px] p-8 border border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer h-full flex flex-col ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                {/* Company Logo Placeholder */}
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                  <i className="ri-building-line text-2xl text-[#4A1942]"></i>
                </div>

                {/* Role */}
                <h3 className="font-playfair text-2xl font-bold text-[#1A1A2E] mb-2 leading-tight">
                  {exp.role}
                </h3>

                {/* Company */}
                <p className="font-montserrat text-base font-semibold bg-gradient-to-r from-[#2D9596] to-[#9B59B6] bg-clip-text text-transparent mb-1">
                  {exp.company}
                </p>

                {/* Department */}
                {exp.department && (
                  <p className="font-montserrat text-sm text-gray-700 mb-2">
                    {exp.department}
                  </p>
                )}

                {/* Duration */}
                <p className="font-cormorant text-sm italic text-gray-600 mb-6">
                  {exp.duration}
                </p>

                {/* Responsibilities */}
                <div className="flex-1">
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.slice(0, expandedCard === index ? undefined : 3).map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#C44569] mt-2 flex-shrink-0"></span>
                        <span className="font-montserrat leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Categories (for MAS Capital) */}
                  {exp.categories && expandedCard === index && (
                    <div className="mt-6 space-y-4">
                      <h4 className="font-montserrat text-sm font-bold text-[#1A1A2E] uppercase tracking-wide">Product Categories:</h4>
                      {exp.categories.map((cat, idx) => (
                        <div key={idx} className="bg-white/50 rounded-lg p-3">
                          <p className="font-montserrat text-sm font-semibold text-[#4A1942] mb-2">{cat.name}</p>
                          <div className="flex flex-wrap gap-2">
                            {cat.brands.map((brand, bidx) => (
                              <span key={bidx} className="px-3 py-1 bg-white rounded-full text-xs font-montserrat text-gray-700 shadow-sm">
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                      {exp.onboarding && (
                        <div className="bg-white/50 rounded-lg p-3">
                          <p className="font-montserrat text-sm font-semibold text-[#4A1942] mb-2">Worked to Onboard:</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.onboarding.map((brand, bidx) => (
                              <span key={bidx} className="px-3 py-1 bg-gradient-to-r from-[#FF6B6B] to-[#C44569] text-white rounded-full text-xs font-montserrat shadow-sm">
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Expand Button */}
                {(exp.responsibilities.length > 3 || exp.categories) && (
                  <button
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="mt-4 px-6 py-2 bg-white/80 hover:bg-white rounded-full font-montserrat text-sm font-medium text-[#4A1942] transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                  >
                    {expandedCard === index ? 'Show Less' : 'View Details'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
