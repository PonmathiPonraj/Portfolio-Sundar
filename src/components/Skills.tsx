import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  TrendingUp, 
  Shield, 
  Database, 
  MessageSquare, 
  FileText, 
  BarChart3 
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationProgress, setAnimationProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start animations after a delay
          setTimeout(() => {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimationProgress(prev => ({
                  ...prev,
                  [skill.name]: skill.level
                }));
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: 'End-to-End Recruitment',
      level: 95,
      icon: <Search className="w-6 h-6" />,
      description: 'Complete recruitment lifecycle from sourcing to onboarding'
    },
    {
      name: 'Employee Engagement',
      level: 90,
      icon: <Users className="w-6 h-6" />,
      description: 'Building positive workplace culture and retention programs'
    },
    {
      name: 'Performance Evaluation',
      level: 88,
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Appraisal processes and career development planning'
    },
    {
      name: 'Statutory Compliance',
      level: 92,
      icon: <Shield className="w-6 h-6" />,
      description: 'Employment law adherence and policy implementation'
    },
    {
      name: 'Payroll Processing',
      level: 85,
      icon: <Database className="w-6 h-6" />,
      description: 'Compensation management and payroll administration'
    },
    {
      name: 'Grievance Handling',
      level: 90,
      icon: <MessageSquare className="w-6 h-6" />,
      description: 'Conflict resolution and employee relations management'
    },
    {
      name: 'Onboarding & Offboarding',
      level: 87,
      icon: <FileText className="w-6 h-6" />,
      description: 'Seamless employee lifecycle management processes'
    },
    {
      name: 'Client Coordination',
      level: 83,
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Stakeholder management and strategic communication'
    }
  ];

  const competencies = [
    { name: 'Leadership', level: 88 },
    { name: 'Communication', level: 92 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Strategic Thinking', level: 85 },
    { name: 'Adaptability', level: 91 },
    { name: 'Team Collaboration', level: 89 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set built through years of hands-on experience in HR management, 
            strategic planning, and people development across diverse industries.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core HR Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-900 text-white rounded-lg mr-4">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-900 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${animationProgress[skill.name] || 0}%`,
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership Competencies</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {competencies.map((competency, index) => (
              <div
                key={competency.name}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150 + 800}ms` }}
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#1e3a8a"
                      strokeWidth="3"
                      strokeDasharray={`${animationProgress[competency.name] || 0} 100`}
                      className="transition-all duration-1000 ease-out"
                      style={{ transitionDelay: `${index * 150 + 1000}ms` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-900">{competency.level}%</span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{competency.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;