import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    // { id: 'tools', label: 'Tools' },
    // { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Sundar_S_HR_Resume.pdf';
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-400">SS</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-900/30'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-gray-700">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-900/30'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 border border-blue-400 text-base font-medium rounded-md text-blue-400 bg-transparent hover:bg-blue-400 hover:text-slate-900 transition-colors duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;