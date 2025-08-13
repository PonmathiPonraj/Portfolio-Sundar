import { useState, useEffect } from 'react';
import { CheckCircle, Clock, Star, Building2, Linkedin, Briefcase, Code, GraduationCap, BookOpen } from 'lucide-react';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('certifications');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Naukri Maestro Recruiter',
      issuer: 'Naukri.com',
      status: 'Completed',
      level: 'Expert'
    },
    {
      title: 'LinkedIn Recruiter',
      issuer: 'LinkedIn Learning',
      status: 'Completed',
      level: 'Expert'
    },
    {
      title: 'Hirist Tech Recruiter',
      issuer: 'Hirist.com',
      status: 'Completed',
      level: 'Advanced'
    },
    {
      title: 'Human Resource Manager Proficiency Test (Foundational)',
      issuer: 'TCS - iON',
      status: 'Completed',
      category: 'Advanced',
      level: 'Intermediate'
    },
    {
      title: 'Certified Compensation & Payroll Management Professional - 25',
      issuer: 'Udemy',
      status: 'Completed',
      level: 'Advanced'
    },
    {
      title: 'Generative AI, Recruiting, Talent Acquisition',
      issuer: 'LinkedIn Learning',
      status: 'Completed',
      level: 'Advanced'
    },
    {
      title: 'ChatGPT for HR',
      issuer: 'Great Learning',
      status: 'Completed',
      level: 'Advanced'
    },
    {
      title: 'National Qualifier Test (NQT)',
      issuer: 'TCS - iON',
      status: 'Completed',
      level: 'Expert'
    },
    {
      title: 'Human Resources (Payroll)',
      issuer: 'LinkedIn Learning',
      status: 'Completed',
      level: 'Advanced'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getIssuerIcon = (issuer: string) => {
    switch (issuer) {
      case 'TCS - iON':
        return <Building2 className="w-4 h-4 text-blue-600" />;
      case 'LinkedIn Learning':
        return <Linkedin className="w-4 h-4 text-blue-700" />;
      case 'Naukri.com':
        return <Briefcase className="w-4 h-4 text-orange-600" />;
      case 'Hirist.com':
        return <Code className="w-4 h-4 text-purple-600" />;
      case 'Udemy':
        return <BookOpen className="w-4 h-4 text-red-600" />;
      case 'Great Learning':
        return <GraduationCap className="w-4 h-4 text-green-600" />;
      default:
        return <GraduationCap className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Certifications</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header with badge */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">{cert.title}</h3>
                    <div className="flex items-center space-x-2">
                      {getIssuerIcon(cert.issuer)}
                      <p className="text-blue-900 font-semibold text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {cert.status === 'Completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                </div>

                {/* Status and Level */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">{cert.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-gray-50 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">15+</div>
              <div className="text-sm text-gray-700">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">12+</div>
              <div className="text-sm text-gray-700">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">2+</div>
              <div className="text-sm text-gray-700">In Progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 