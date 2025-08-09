import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      type: 'work',
      title: 'HR Generalist',
      company: 'Kevell Corp',
      location: 'India',
      period: 'Feb 2024 - Present',
      achievements: [
        'Managed end-to-end recruitment for IT and Non-IT roles with seamless candidate experience',
        'Led onboarding and orientation sessions ensuring compliance with internal policies',
        'Oversaw employee engagement, career development, and internal mobility programs',
        'Served as primary contact for employee concerns and conflict resolution',
        'Managed exit processes and conducted interviews for organizational improvement'
      ]
    },
    {
      type: 'work',
      title: 'US IT Recruiter',
      company: 'Vagus Technologies',
      location: 'India',
      period: 'Jul 2022 - Sep 2023',
      achievements: [
        'Set up kickoff calls with hiring managers to understand role requirements',
        'Built strong LinkedIn pipeline and connected with candidates via multiple channels',
        'Managed sourcing, cold calling, screening profiles, and interview scheduling',
        'Acted as bridge between candidates and hiring managers throughout recruitment process'
      ]
    },
    {
      type: 'work',
      title: 'Transaction Processing Officer',
      company: 'Mphasis',
      location: 'India',
      period: 'Dec 2020 - Apr 2022',
      achievements: [
        'Worked with Lotus Notes, SAP, IPS, and IMACS systems for customer account reviews',
        'Audited onshore reports and provided feedback to teams',
        'Reconciled data, created live spreadsheets, and processed customer payments',
        'Handled rejected payments through resolution and reprocessing',
        'Trained new employees and supported various operational tasks'
      ]
    }
  ];

  const education = [
    {
      type: 'education',
      degree: 'Master of Social Work (MSW) - HR',
      school: 'Alagappa University',
      location: 'Tamil Nadu, India',
      period: '2024 - 2026',
      details: ['Specialization: Human Resources', 'Currently Pursuing']
    },
    {
      type: 'education',
      degree: 'Master of Business Administration (MBA)',
      school: 'Bharathidasan University',
      location: 'Tamil Nadu, India',
      period: '2018 - 2020',
      details: ['Dual Specialization: HR & Finance', 'Comprehensive business management education']
    },
    {
      type: 'education',
      degree: 'Bachelor of Commerce (B.Com)',
      school: 'The American College',
      location: 'Tamil Nadu, India',
      period: '2015 - 2018',
      details: ['Major: General Commerce', 'Strong foundation in business principles']
    }
  ];

  const certifications = [
    {
      type: 'certification',
      title: 'Certified Compensation & Payroll Management Professional',
      issuer: 'Professional Certification Body',
      period: '2025',
      details: ['Advanced certification in compensation strategies']
    },
    {
      type: 'certification',
      title: 'Generative AI in HR',
      issuer: 'Technology Institute',
      period: '2024',
      details: ['AI applications in human resources']
    },
    {
      type: 'certification',
      title: 'HR Manager Proficiency Test',
      issuer: 'TCS iON',
      period: '2023',
      details: ['Comprehensive HR management assessment']
    }
  ];

  const allItems = [...experiences, ...education, ...certifications];

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-6 h-6" />;
      case 'education':
        return <GraduationCap className="w-6 h-6" />;
      case 'certification':
        return <Award className="w-6 h-6" />;
      default:
        return <Calendar className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-900 border-blue-900';
      case 'education':
        return 'bg-green-600 border-green-600';
      case 'certification':
        return 'bg-purple-600 border-purple-600';
      default:
        return 'bg-gray-600 border-gray-600';
    }
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {allItems.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 ${getTypeColor(item.type)} rounded-full border-4 border-white shadow-lg`}></div>

                {/* Content card */}
                <div className="ml-20 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 ${getTypeColor(item.type)} text-white rounded-lg`}>
                        {getIcon(item.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.type === 'work' ? (item as any).title : 
                           item.type === 'education' ? (item as any).degree : 
                           (item as any).title}
                        </h3>
                        <p className="text-blue-900 font-semibold">
                          {item.type === 'work' ? (item as any).company : 
                           item.type === 'education' ? (item as any).school : 
                           (item as any).issuer}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{(item as any).location}</span>
                      </div>
                    </div>
                  </div>

                  {item.type === 'work' && (
                    <ul className="space-y-2">
                      {(item as any).achievements.map((achievement: string, achIndex: number) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {(item.type === 'education' || item.type === 'certification') && (
                    <ul className="space-y-1">
                      {(item as any).details?.map((detail: string, detailIndex: number) => (
                        <li key={detailIndex} className="text-gray-300 text-sm">
                          • {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;