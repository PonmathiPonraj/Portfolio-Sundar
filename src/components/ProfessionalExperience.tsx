import React, { useState, useEffect } from 'react';
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp, Briefcase, Star, Clock, Globe } from 'lucide-react';

const ProfessionalExperience = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'HR Generalist',
      company: 'Kevell Corp',
      location: 'Madurai',
      period: 'Feb 2024 - Present',
      duration: '10+ months',
      type: 'Full-time',
      color: 'from-emerald-400 via-teal-500 to-cyan-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      icon: Briefcase,
      skills: ['Recruitment', 'Onboarding', 'Performance Management', 'Employee Relations'],
      responsibilities: [
        'End-to-end recruitment for IT & Non-IT roles across multiple departments',
        'Comprehensive employee onboarding & offboarding process management',
        'Performance appraisal system implementation and management',
        'Strategic stakeholder management and client relationship building'
      ],
      achievements: [
        'Successfully recruited 50+ candidates across IT and Non-IT positions with 95% retention rate',
        'Streamlined onboarding process reducing time-to-productivity by 30%',
        'Implemented performance management system improving employee satisfaction by 25%',
        'Enhanced client relationships resulting in 40% increase in repeat business'
      ]
    },
    {
      title: 'US IT Recruiter',
      company: 'Vagus Technologies',
      location: 'Trichy',
      period: 'Jul 2022 - Sep 2023',
      duration: '1 year 3 months',
      type: 'Full-time',
      color: 'from-blue-400 via-indigo-500 to-purple-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: Globe,
      skills: ['IT Recruitment', 'Talent Sourcing', 'Interview Coordination', 'ATS Management'],
      responsibilities: [
        'Specialized recruitment for IT roles including Senior Java Developer, Solution Architect, QA Analyst',
        'Multi-platform talent sourcing using Dice, Monster, LinkedIn, and internal ATS systems',
        'Comprehensive interview coordination and candidate screening processes',
        'Strategic pipeline management and candidate relationship building'
      ],
      achievements: [
        'Successfully placed 80+ IT professionals in senior roles across US companies',
        'Maintained 90% interview-to-offer conversion rate through effective screening',
        'Built robust talent pipeline of 500+ qualified candidates',
        'Reduced average time-to-fill from 45 to 25 days through process optimization'
      ]
    },
    {
      title: 'Transaction Processing Officer',
      company: 'Mphasis',
      location: 'Bengaluru',
      period: 'Dec 2020 - Apr 2022',
      duration: '1 year 5 months',
      type: 'Full-time',
      color: 'from-purple-400 via-pink-500 to-rose-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: Star,
      skills: ['Payment Processing', 'Data Reconciliation', 'System Operations', 'Team Training'],
      responsibilities: [
        'Complex reinsurance payment operations handling high-value multi-currency transactions',
        'Advanced data reconciliation using Lotus Notes, SAP, IPS, and IMACS systems',
        'Comprehensive audit processes for onshore reports with actionable feedback',
        'Team training and mentoring for payment processing workflows'
      ],
      achievements: [
        'Processed $50M+ in reinsurance payments with 99.8% accuracy rate',
        'Reduced payment processing errors by 60% through improved reconciliation processes',
        'Successfully trained 15+ new team members with 100% certification rate',
        'Implemented automated reporting system saving 20 hours weekly'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-400 to-blue-300 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover my career journey through impactful roles and measurable achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 transform -translate-x-0.5 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              const isVisible = visibleCards.includes(index);
              const isExpanded = expandedCard === index;
              const isLeft = index % 2 === 0; // Alternate sides: 0,2,4... = left, 1,3,5... = right

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`experience-card relative transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-white border-4 border-blue-400 rounded-full shadow-lg z-10 transform -translate-x-2 hidden md:block">
                    <div className="absolute inset-1 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Experience Card */}
                  <div className={`relative w-full ${isLeft ? 'md:w-5/12 md:mr-auto md:pr-8' : 'md:w-5/12 md:ml-auto md:pl-8'}`}>
                    <div className={`${experience.bgColor} ${experience.borderColor} border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group`}>
                      {/* Card Header */}
                      <div className={`bg-gradient-to-r ${experience.color} p-4 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                        
                        <div className={`relative z-10 flex items-start justify-between ${isLeft ? '' : 'flex-row-reverse'}`}>
                          <div className={`flex items-start gap-3 ${isLeft ? '' : 'flex-row-reverse text-right'}`}>
                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                              <div className={`flex items-center gap-2 mb-1 ${isLeft ? '' : 'flex-row-reverse'}`}>
                                <Building2 className="w-4 h-4" />
                                <span className="text-base font-semibold">{experience.company}</span>
                              </div>
                              <div className={`flex flex-wrap items-center gap-3 text-xs opacity-90 ${isLeft ? '' : 'flex-row-reverse'}`}>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{experience.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{experience.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{experience.duration}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <button
                            onClick={() => setExpandedCard(isExpanded ? null : index)}
                            className="p-1.5 bg-white/20 hover:bg-white/30 rounded-md transition-colors flex-shrink-0"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button> */}
                        </div>
                      </div>

                      {/* Card Content - Expandable */}
                      <div className={`transition-all duration-500 overflow-hidden ${
                        isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="p-4">
                          {/* Skills Tags */}
                          <div className="mb-4">
                            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">Core Skills</h4>
                            <div className="flex flex-wrap gap-1.5">
                              {experience.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-0.5 bg-gradient-to-r ${experience.color} text-white text-xs font-medium rounded-full shadow-sm`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Responsibilities */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1">
                              <Briefcase className="w-4 h-4 text-blue-600" />
                              Key Responsibilities
                            </h4>
                            <div className="grid gap-2">
                              {experience.responsibilities.map((responsibility, idx) => (
                                <div key={idx} className="flex items-start gap-2 p-2 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.color} mt-1.5 flex-shrink-0`}></div>
                                  <span className="text-gray-700 text-sm leading-relaxed">{responsibility}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              Key Achievements
                            </h4>
                            <div className="grid gap-2">
                              {experience.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start gap-2 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-l-3 border-green-400">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></div>
                                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expand/Collapse Footer */}
                      {!isExpanded && (
                        <div className="text-center py-3 border-t border-gray-100">
                          <button
                            onClick={() => setExpandedCard(index)}
                            className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center gap-1 mx-auto transition-colors"
                          >
                            <span>View Details</span>
                            <ChevronDown className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Globe className="w-5 h-5" />
            <span>Let's Connect & Explore Opportunities</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;