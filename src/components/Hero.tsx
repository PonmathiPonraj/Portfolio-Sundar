import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Empowering People. Building Culture. Driving Growth.';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-white">SS</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 opacity-20 animate-ping"></div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Sundar <span className="text-blue-900">S</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
              HR Generalist
            </h2>

            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-blue-800 font-medium min-h-[2rem]">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600 mt-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span>Madurai, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-900" />
                <span>sundarofficial.0414@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-blue-900" />
                <span>+91 6369115038</span>
              </div>
            </div>
          </div>

          <div className="mt-16 animate-bounce">
            <button
              onClick={scrollToNext}
              className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors duration-200"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;