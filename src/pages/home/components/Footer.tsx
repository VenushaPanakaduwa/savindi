export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#3D1F3D] overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="font-playfair text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] bg-clip-text text-transparent mb-3">
              Savindi Dayarathna
            </h3>
            <p className="font-cormorant text-sm text-white/70 mb-6">
              Fashion Designer & Product Developer
            </p>
            {/* Social Icons */}
     <div className="flex gap-5">
  {[
    { icon: 'ri-linkedin-box-line', href: 'https://linkedin.com/in/yourname' },
    { icon: 'ri-instagram-line',    href: 'https://instagram.com/yourname' },
    { icon: 'ri-mail-line',         href: 'mailto:you@example.com' },
  ].map(({ icon, href }, idx) => (
    <a
      key={idx}
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-125 hover:rotate-6"
    >
      {/* Gradient ring – only on hover */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-110"></span>

      {/* Icon – always white when not hovered, gradient when hovered */}
      <i
        className={`
          ri ${icon} text-2xl z-10 transition-all duration-500
          text-white 
          group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#E8B4B8] 
          group-hover:bg-clip-text group-hover:text-transparent
          drop-shadow-lg
        `}
      ></i>
    </a>
  ))}
</div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-montserrat text-base font-semibold text-[#D4AF37] uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: 'About', id: 'about' },
                { label: 'Education', id: 'education' },
                { label: 'Experience', id: 'work' },
                { label: 'Skills', id: 'skills' },
                { label: 'Contact', id: 'contact' }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(link.id)}
                  className="block font-montserrat text-base text-white hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#E8B4B8] hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-montserrat text-base font-semibold text-[#D4AF37] uppercase tracking-wide mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a href="tel:0769189437" className="block font-montserrat text-sm text-white/80 hover:text-white transition-colors">
                <i className="ri-phone-line mr-2"></i>0769189437
              </a>
              <a href="mailto:thaveeshadayarathna96@gmail.com" className="block font-montserrat text-sm text-white/80 hover:text-white transition-colors break-all">
                <i className="ri-mail-line mr-2"></i>thaveeshadayarathna96@gmail.com
              </a>
              <p className="font-montserrat text-sm text-white/80">
                <i className="ri-map-pin-line mr-2"></i>142/F/2/A, 2nd Lane, Mahabellana, Alubomulla
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-montserrat text-sm text-gray-400 text-center md:text-left">
              © 2025 Savindi Dayarathna. All rights reserved.
            </p>
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-cormorant text-sm italic bg-gradient-to-r from-[#D4AF37] to-[#E8B4B8] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
            
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
