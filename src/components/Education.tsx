import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, GraduationCap, BookOpen, Award, CheckCircle, Clock } from 'lucide-react';

const Education = () => {
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

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'Master of Social Work (MSW) - HR',
      school: 'Alagappa University',
      location: 'Tamil Nadu, India',
      period: '2024 - 2026',
      status: 'In Progress',
      level: 'Graduate',
      gpa: '3.8',
      details: ['Specialization: Human Resources', 'Currently Pursuing', 'Advanced social work principles'],
      achievements: ['Research in HR practices', 'Field work in corporate settings'],
      credits: '60/90'
    },
    {
      degree: 'Master of Business Administration (MBA)',
      school: 'Bharathidasan University',
      location: 'Tamil Nadu, India',
      period: '2018 - 2020',
      status: 'Completed',
      level: 'Graduate',
      gpa: '3.9',
      details: ['Dual Specialization: HR & Finance', 'Comprehensive business management education'],
      achievements: ['Dean\'s List', 'Best HR Project Award'],
      credits: '90/90'
    },
    {
      degree: 'Bachelor of Commerce (B.Com)',
      school: 'The American College',
      location: 'Tamil Nadu, India',
      period: '2015 - 2018',
      status: 'Completed',
      level: 'Undergraduate',
      gpa: '3.7',
      details: ['Major: General Commerce', 'Strong foundation in business principles'],
      achievements: ['Academic Excellence Award', 'Student Council Member'],
      credits: '120/120'
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Graduate':
        return 'bg-purple-100 text-purple-800';
      case 'Undergraduate':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Journey</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A strong academic foundation built through progressive learning and specialized education.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(edu.level)}`}>
                        {edu.level}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(edu.status)}`}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-blue-900 font-semibold text-sm mb-1">{edu.school}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {edu.status === 'Completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                </div>

                

                {/* GPA and Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-900">{edu.gpa}</div>
                    <div className="text-xs text-gray-600">GPA</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-900">{edu.credits.split('/')[0]}</div>
                    <div className="text-xs text-gray-600">Credits</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  {edu.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-xl">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    Achievements
                  </h4>
                  <div className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="text-xs text-gray-600 flex items-start space-x-2">
                        <div className="w-1 h-1 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Education; 