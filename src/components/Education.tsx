import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Social Work (MSW) - HR',
      university: 'Alagappa University',
      period: '2024 - 2026',
      location: 'Karaikudi, India',
      details: [
        'Specialization: Human Resources',
        'Currently Pursuing',
        'Relevant Coursework: Organizational Behavior, HR Analytics, Labor Laws, Employee Relations'
      ]
    },
    {
      degree: 'Master of Business Administration (MBA)',
      university: 'Bharathidasan University',
      period: '2018 - 2020',
      location: 'Trichy, India',
      details: [
        'Specialization: HR & Finance',
        'Percentage: 61%',
        'Key Subjects: Strategic HRM, Financial Management, Organizational Development',
      ]
    },
    {
      degree: 'Bachelor of Commerce (B.Com)',
      university: 'The American College',
      period: '2015 - 2018',
      location: 'Madurai, India',
      details: [
        'Major: General Commerce',
        'Percentage: 60%',
        'Key Subjects: Business Management, Accounting, Business Law',
      ]
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and qualifications that have shaped my professional path
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-blue-400 font-medium">{edu.university}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <span className="mr-4">{edu.period}</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </span>
              </div>
              
              <ul className="space-y-2 mt-4">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
