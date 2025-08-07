import React, { useState, useEffect } from 'react';
import { Monitor, FileText, Users, BarChart3, Database, Mail, Calendar, Zap } from 'lucide-react';

const Tools = () => {
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

    const element = document.getElementById('tools');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const toolCategories = [
    {
      title: 'HRIS & Reporting',
      icon: <Database className="w-8 h-8" />,
      tools: [
        { name: 'Workday', level: 85, description: 'HCM and payroll processing' },
        { name: 'BambooHR', level: 80, description: 'HR operations and analytics' },
        { name: 'Microsoft Office 365', level: 95, description: 'Word, Excel, PowerPoint, and Teams in the cloud' },
        { name: 'Google Workspace', level: 90, description: 'Business email, docs, and secure file sharing' }
      ]
    },
    {
      title: 'ATS & Communication',
      icon: <Users className="w-8 h-8" />,
      tools: [
        { name: 'Candidate Sourcing', level: 95, description: 'Naukri, Dice, Monster(Foundit), Hirist' },
        { name: 'Job Posting', level: 85, description: 'Naukri, Indeed, LinkedIn' },
        { name: 'Video Conferencing', level: 95, description: 'MS Teams, Zoom, Google Meet' },
        { name: 'Calls & Text', level: 90, description: 'Emails, Phone calls, WhatsApp' }
      ]
    }
  ];



  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern HR technologies and systems that streamline processes and enhance productivity.
          </p>
        </div>

        {/* Main Tool Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gray-50 rounded-xl p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-900 text-white rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                      <span className="text-sm font-medium text-blue-900">{tool.level}%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-900 to-blue-700 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${tool.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (toolIndex * 100) + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>



        {/* Certification Highlights */}
        {/* REMOVED: Technology Certifications section */}
      </div>
    </section>
  );
};

export default Tools;