import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    emailjs.init('3MCfakLmT_gU0GUOa');
  }, []);

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

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.length > 500) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

  
    try {
      await emailjs.send(
        'service_thaveesha',    
        'template_vckxt24',     
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || '(No Subject)',
          message: formData.message,
          reply_to: formData.email
        }
   
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      label: 'Phone',
      value: '0769189437',
      gradient: 'from-[#2D9596] to-[#00D4FF]',
      href: 'tel:0769189437'
    },
    {
      icon: 'ri-mail-line',
      label: 'Personal Email',
      value: 'thaveeshadayarathna96@gmail.com',
      gradient: 'from-[#FF6B6B] to-[#FF8E53]',
      href: 'mailto:thaveeshadayarathna96@gmail.com'
    },
    {
      icon: 'ri-briefcase-line',
      label: 'Work Email',
      value: 'savindid@masholdings.com',
      gradient: 'from-[#8E44AD] to-[#E91E63]',
      href: 'mailto:savindid@masholdings.com'
    },

  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#1A1A2E] overflow-hidden"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Headline */}
            <div className="mb-12">
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                LET'S CREATE
                <br />
                <span className="bg-gradient-to-r from-[#FF6B6B] to-[#C44569] bg-clip-text text-transparent">
                  TOGETHER
                </span>
              </h2>
              <p className="font-cormorant text-xl text-gray-400 italic">
                Available for collaborations, consultations, and creative projects
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`group block transition-all duration-500 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                >
                  <div className={`relative bg-gradient-to-r ${info.gradient} rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <i className={`${info.icon} text-2xl text-white`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-montserrat text-xs text-white/80 uppercase tracking-wide mb-1">
                          {info.label}
                        </p>
                        <p className="font-montserrat text-sm font-medium text-white truncate">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

        
          </div>



          {/* Right Side - Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 '}`}>
            <form
              id="contact-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="bg-white/15 backdrop-blur-xl rounded-[32px] p-10 border border-white/20"
            >
              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-white pb-3 text-white placeholder-gray-400 font-montserrat text-base outline-none transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-white pb-3 text-white placeholder-gray-400 font-montserrat text-base outline-none transition-all duration-300"
                  />
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-white pb-3 text-white placeholder-gray-400 font-montserrat text-base outline-none transition-all duration-300"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-transparent border-b-2 border-white/30 focus:border-white pb-3 text-white placeholder-gray-400 font-montserrat text-base outline-none transition-all duration-300 resize-none"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-2 text-right">
                    {formData.message.length}/500 characters
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#FF6B6B] to-[#C44569] text-white font-montserrat font-bold text-base rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                    <p className="text-green-300 font-montserrat text-sm text-center">
                      <i className="ri-check-line mr-2"></i>
                      Message sent successfully!
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p className="text-red-300 font-montserrat text-sm text-center">
                      <i className="ri-error-warning-line mr-2"></i>
                      Failed to send message. Please try again.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

  <div className="mt-20">
  {/* References Title */}
  <h3 className="font-playfair text-3xl font-bold text-white mb-10 text-center">
    References
  </h3>

  {/* 2 Cards Side by Side – 6 + 6 columns */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">

    {/* Reference 1 */}
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 
                    hover:bg-white/10 hover:border-[#FF6B6B]/30 hover:shadow-2xl hover:shadow-[#FF6B6B]/20 
                    transition-all duration-500 group">
      <div className="border-l-4 border-[#FF6B6B] pl-6">
        <h4 className="font-montserrat text-xl font-bold text-white mb-2">Vivek Ramchandani</h4>
        <p className="font-cormorant text-sm text-gray-300 mb-1">Director – Marketing & Business Development</p>
        <p className="font-montserrat text-sm text-gray-500 mb-6">Aqua Springs, Linea Aqua (Pvt) Ltd</p>
        
        <div className="space-y-3">
          <a href="mailto:VivekR@lineaaqua.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B6B] transition text-sm">
            <i className="ri-mail-line text-lg"></i> VivekR@lineaaqua.com
          </a>
          <a href="tel:+94773522988" className="flex items-center gap-3 text-gray-300 hover:text-[#FF6B6B] transition text-sm">
            <i className="ri-phone-line text-lg"></i> 077 077 352 2988
          </a>
        </div>
      </div>
    </div>

    {/* Reference 2 */}
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 
                    hover:bg-white/10 hover:border-[#8E44AD]/30 hover:shadow-2xl hover:shadow-[#8E44AD]/20 
                    transition-all duration-500 group">
      <div className="border-l-4 border-[#8E44AD] pl-6">
        <h4 className="font-montserrat text-xl font-bold text-white mb-2">Prageeth Jayathilaka</h4>
        <p className="font-cormorant text-sm text-gray-300 mb-1">Manager – Technical & Product Development</p>
        <p className="font-montserrat text-sm text-gray-500 mb-6">Group Business Development & Growth, MAS Capital (Pvt) Ltd</p>
        
        <div className="space-y-3">
          <a href="mailto:PrageethJ@masholdings.com" className="flex items-center gap-3 text-gray-300 hover:text-[#8E44AD] transition text-sm">
            <i className="ri-mail-line text-lg"></i> PrageethJ@masholdings.com
          </a>
          <a href="tel:+94777369357" className="flex items-center gap-3 text-gray-300 hover:text-[#8E44AD] transition text-sm">
            <i className="ri-phone-line text-lg"></i> 077 736 9357
          </a>
        </div>
      </div>
    </div>

  </div>

</div>
</div>

     
      
    </section>
    
  );
  
}
