import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-3">
            {/* Section Label */}
            <div className={`inline-block mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FFD3B6] to-[#E8DAEF] text-xs font-montserrat font-semibold uppercase tracking-wider text-[#4A1942]">
                Profile
              </span>
            </div>

            {/* Headline */}
            <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight">
                A passionate fashion designer
                <br />
                <span className="bg-gradient-to-r from-[#4A1942] to-[#D4745C] bg-clip-text text-transparent">
                  with technical mastery
                </span>
              </h2>
            </div>

            {/* Body Copy */}
            <div className="space-y-6">
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="font-cormorant text-xl lg:text-2xl text-[#3D3D3D] leading-relaxed">
                  A passionate fashion designer with strong technical and product development knowledge. Energetic, eager-to-learn, and quick to adapt.
                </p>
              </div>
              <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="font-cormorant text-xl lg:text-2xl text-[#3D3D3D] leading-relaxed">
                  Known for taking responsibility and consistently striving to achieve the highest standards in every task.
                </p>
              </div>
            </div>

            {/* Decorative Quote Mark */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 opacity-10 hidden lg:block">
              <i className="ri-double-quotes-l text-[200px] bg-gradient-to-br from-[#D4AF37] to-[#E8B4B8] bg-clip-text text-transparent"></i>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-2">
            <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative group">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] via-[#E8B4B8] to-[#D4AF37] rounded-[32px] opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-[500px] rounded-[30px] overflow-hidden shadow-2xl">
                  <img
                   src="/savindi.png"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Signature */}
                <div className="mt-6 text-center">
                  <p className="font-cormorant text-5xl italic text-[#4A1942]">
                    Savindi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
