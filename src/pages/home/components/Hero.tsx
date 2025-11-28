import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6D5F5] via-[#F4C2C2] to-[#F5E6D3] animate-gradient-shift">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-300 to-rose-400 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow */}
            <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="text-xs tracking-[0.2em] uppercase text-[#2C2C2C] font-montserrat font-light">
                Fashion Designer & Product Developer
              </span>
            </div>

            {/* Name Display */}
            <div className="mb-8 overflow-hidden">
              <h1 className="font-playfair">
                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="block text-7xl lg:text-8xl font-light tracking-wide text-[#4A1942]">
                    SAVINDI
                  </span>
                </div>
                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <span className="block text-8xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-[#4A1942] to-[#D4745C] bg-clip-text text-transparent">
                    DAYARATHNA
                  </span>
                </div>
              </h1>
            </div>

            {/* Tagline */}
            <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="text-lg lg:text-xl font-cormorant italic text-[#6B6B6B] max-w-xl mx-auto lg:mx-0">
                Crafting elegance through technical precision
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                onClick={() => scrollToSection('work')}
                className="group relative px-10 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#C44569] text-white font-montserrat font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  VIEW RESUME
               
                </span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-10 py-4 bg-transparent  border-transparent bg-gradient-to-r from-[#FF6B6B] to-[#C44569] bg-clip-border font-montserrat font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 relative whitespace-nowrap"
                style={{
                  borderImage: 'linear-gradient(to right, #FF6B6B, #C44569) 1'
                }}
              >
                <span className="relative z-10 flex items-center text-white justify-center gap-2">
                 GET IN TOUCH
               
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Floating Element */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm shadow-2xl animate-spin-slow flex items-center justify-center">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-white/60 backdrop-blur-md shadow-inner flex items-center justify-center">
                  <div className="text-center p-8">
                    <i className="ri-scissors-cut-line text-7xl bg-gradient-to-br from-[#4A1942] to-[#D4745C] bg-clip-text text-transparent mb-4"></i>
                    <p className="font-playfair text-2xl font-semibold bg-gradient-to-r from-[#4A1942] to-[#D4745C] bg-clip-text text-transparent">
                      Fashion<br/>Innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-[#4A1942] opacity-60"></i>
      </div>
    </section>
  );
}
