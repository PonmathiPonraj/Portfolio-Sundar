import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ProfessionalExperience = () => {
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
      title: 'HR Generalist',
      company: 'Kevell Corp',
      location: 'India',
      period: 'Feb 2024 - Present',
      achievements: [
        'Experienced HR Generalist with hands-on expertise in end-to-end recruitment for both IT and Non-IT roles, onboarding/offboarding, and background verification.', 
        'Skilled in conducting orientation programs, educating employees on HR policies, and driving employee engagement and redemption initiatives.',
        'Proven track record in managing performance appraisal processes, employee grievance resolution, and staffing augmentation.',
        'Adept at client handling, stakeholder management, and supporting overall HR operations with efficiency and professionalism.'
      ]
    },
    {
      title: 'US IT Recruiter',
      company: 'Vagus Technologies',
      location: 'India',
      period: 'Jul 2022 - Sep 2023',
      achievements: [
        'Worked as a US IT Recruiter, handling both IT roles like Senior Java Developer, Solution Architect, QA Analyst, and Non-IT roles such as Sales Director, Mechanical Engineer, and Maintenance Engineer.',
        'Proficient in using sourcing platforms like Dice, Monster, LinkedIn, and internal ATS for talent acquisition.',
        'Experienced in cold calling, conducting initial screening interviews, collecting skill matrices via email, and coordinating interviews with hiring managers.',
        'Maintained strong candidate pipelines and ensured smooth communication across all stages of the recruitment process.'
      ]
    },
    {
      title: 'Transaction Processing Officer',
      company: 'Mphasis',
      location: 'India',
      period: 'Dec 2020 - Apr 2022',
      achievements: [
        'Worked on Reinsurance payment operations, handling high-value transactions across multiple global currencies.',
        'Utilized tools such as Lotus Notes, SAP, IPS, and IMACS to conduct detailed customer account reviews and data reconciliations.',
        'Audited onshore reports, provided actionable feedback, and managed rejected payments through resolution and reprocessing.',
        'Created live spreadsheets for real-time tracking and processed customer payments efficiently.',
        'Also trained new employees and supported various operational and reporting tasks to ensure compliance and accuracy.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
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
                <div className="absolute left-6 w-4 h-4 bg-blue-900 border-4 border-white shadow-lg rounded-full"></div>

                {/* Content card */}
                <div className="ml-20 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-900 text-white rounded-lg">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-blue-900 font-semibold">{item.company}</p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience; 