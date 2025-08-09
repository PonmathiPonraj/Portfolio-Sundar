import React, { useState, useEffect } from 'react';
import { ExternalLink, Users, TrendingUp, Award, Target, CheckCircle, Clock } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'End-to-End Recruitment Program',
      category: 'Talent Acquisition',
      description: 'Comprehensive recruitment strategy for IT and Non-IT roles, streamlining the entire hiring process from sourcing to onboarding.',
      icon: <Users className="w-8 h-8" />,
      achievements: [
        'Reduced time-to-hire by 40% through optimized screening processes',
        'Improved candidate experience with structured interview framework',
        'Successfully filled 200+ positions across multiple departments',
        'Implemented ATS integration for better candidate tracking'
      ],
      metrics: {
        'Positions Filled': '200+',
        'Time Reduction': '40%',
        'Candidate Satisfaction': '92%',
        'Process Efficiency': '85%'
      },
      duration: 'Feb 2024 - Present',
      status: 'Ongoing'
    },
    {
      title: 'Employee Engagement Initiative',
      category: 'Culture & Engagement',
      description: 'Developed and implemented comprehensive employee engagement programs to boost retention and workplace satisfaction.',
      icon: <TrendingUp className="w-8 h-8" />,
      achievements: [
        'Designed career development pathways for skill enhancement',
        'Launched internal mobility programs increasing retention by 25%',
        'Created feedback mechanisms for continuous improvement',
        'Organized team-building activities and wellness programs'
      ],
      metrics: {
        'Retention Increase': '25%',
        'Engagement Score': '88%',
        'Program Participation': '95%',
        'Career Advancement': '30+'
      },
      duration: 'Mar 2024 - Dec 2024',
      status: 'Completed'
    },
    {
      title: 'Compliance Management System',
      category: 'Legal & Compliance',
      description: 'Established robust compliance framework ensuring adherence to statutory requirements and internal policies.',
      icon: <Award className="w-8 h-8" />,
      achievements: [
        'Achieved 100% compliance across all regulatory requirements',
        'Implemented policy management system for easy access',
        'Conducted compliance training for all staff members',
        'Created audit trails for regulatory reporting'
      ],
      metrics: {
        'Compliance Rate': '100%',
        'Policy Updates': '25+',
        'Training Sessions': '15',
        'Audit Score': '98%'
      },
      duration: 'Jun 2024 - Oct 2024',
      status: 'Completed'
    },
    {
      title: 'Performance Evaluation Framework',
      category: 'Performance Management',
      description: 'Redesigned performance evaluation process with modern appraisal methods and continuous feedback mechanisms.',
      icon: <Target className="w-8 h-8" />,
      achievements: [
        'Implemented 360-degree feedback system',
        'Created goal-setting framework aligned with business objectives',
        'Introduced quarterly review cycles for better tracking',
        'Enhanced manager-employee communication through structured 1:1s'
      ],
      metrics: {
        'Employee Participation': '98%',
        'Goal Achievement': '87%',
        'Manager Satisfaction': '91%',
        'Process Improvement': '45%'
      },
      duration: 'Apr 2024 - Aug 2024',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Key Projects & Achievements</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic HR initiatives that have driven measurable business impact and enhanced employee experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-900 text-white rounded-lg mr-4">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        {project.status === 'Completed' ? (
                          <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                          <Clock className="w-4 h-4 text-blue-500 mr-1" />
                        )}
                        {project.status}
                      </div>
                    </div>
                    <p className="text-blue-900 font-medium text-sm">{project.category}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{project.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-900">{value}</div>
                      <div className="text-xs text-gray-300">{key}</div>
                    </div>
                  ))}
                </div>

                {selectedProject === index && (
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-sm text-gray-500">
                      <strong>Duration:</strong> {project.duration}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{project.duration}</span>
                  <button className="flex items-center text-blue-900 hover:text-blue-700 transition-colors">
                    <span className="text-sm mr-1">
                      {selectedProject === index ? 'Show Less' : 'View Details'}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-white rounded-xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">4+</div>
              <div className="text-sm text-gray-300">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">95%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900">200+</div>
              <div className="text-sm text-gray-300">Lives Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;