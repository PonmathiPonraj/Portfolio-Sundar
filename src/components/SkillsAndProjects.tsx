import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  TrendingUp, 
  Shield, 
  Database, 
  MessageSquare, 
  FileText, 
  BarChart3,
  ExternalLink,
  Award,
  Target,
  CheckCircle,
  Clock
} from 'lucide-react';

const SkillsAndProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationProgress, setAnimationProgress] = useState<{ [key: string]: number }>({});
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
            
            // Also animate competencies
            competencies.forEach((competency, index) => {
              setTimeout(() => {
                setAnimationProgress(prev => ({
                  ...prev,
                  [competency.name]: competency.level
                }));
              }, (skills.length * 200) + (index * 150));
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
      name: 'Talent Acquisition',
      level: 95,
      icon: <Search className="w-6 h-6" />,
      description: 'End-to-end recruitment lifecycle management'
    },
    {
      name: 'Employee Engagement',
      level: 90,
      icon: <Users className="w-6 h-6" />,
      description: 'Culture building and retention programs'
    },
    {
      name: 'Performance Management',
      level: 88,
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Appraisal processes and career development'
    },
    {
      name: 'Compliance & Legal',
      level: 92,
      icon: <Shield className="w-6 h-6" />,
      description: 'Statutory compliance and policy implementation'
    },
    {
      name: 'Compensation & Payroll',
      level: 85,
      icon: <Database className="w-6 h-6" />,
      description: 'Compensation management and payroll processing'
    },
    {
      name: 'Employee Relations',
      level: 90,
      icon: <MessageSquare className="w-6 h-6" />,
      description: 'Conflict resolution and grievance handling'
    },
    {
      name: 'HR Operations',
      level: 87,
      icon: <FileText className="w-6 h-6" />,
      description: 'Onboarding, offboarding, and lifecycle management'
    },
    {
      name: 'Strategic HR',
      level: 83,
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Stakeholder management and strategic planning'
    }
  ];

  const competencies = [
    { name: 'Leadership', level: 88, color: '#9333ea' },
    { name: 'Communication', level: 92, color: '#9333ea' },
    { name: 'Problem Solving', level: 90, color: '#9333ea' },
    { name: 'Strategic Thinking', level: 85, color: '#9333ea' },
    { name: 'Adaptability', level: 91, color: '#9333ea' },
    { name: 'Team Collaboration', level: 89, color: '#9333ea' }
  ];

  const projects = [
    {
      title: 'Comprehensive Recruitment Program',
      category: 'Talent Acquisition',
      description: 'Streamlined end-to-end recruitment process for IT and Non-IT roles, reducing time-to-hire by 40%.',
      icon: <Users className="w-8 h-8" />,
      achievements: [
        'Reduced time-to-hire by 40% through optimized screening',
        'Successfully filled 200+ positions across departments',
        'Implemented ATS integration for better tracking',
        'Improved candidate experience with structured interviews'
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
      title: 'Employee Engagement & Retention',
      category: 'Culture & Engagement',
      description: 'Developed comprehensive engagement programs increasing retention by 25% and boosting workplace satisfaction.',
      icon: <TrendingUp className="w-8 h-8" />,
      achievements: [
        'Increased retention by 25% through engagement programs',
        'Launched internal mobility and career development pathways',
        'Created feedback mechanisms for continuous improvement',
        'Organized team-building and wellness initiatives'
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
    },
    {
      title: 'Compliance Management System',
      category: 'Legal & Compliance',
      description: 'Established robust compliance framework ensuring 100% adherence to statutory requirements and internal policies.',
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
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Strengths in Action</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set demonstrated through strategic HR initiatives that have driven measurable business impact.
          </p>
        </div>

        {/* Skills Section */}
        {/* <div className="mb-20">
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
                

              </div>
            ))}
          </div>
        </div> */}

        {/* Leadership Competencies */}
        <div className="mb-20">
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
                      strokeWidth="3"
                      strokeDasharray={`${competency.level} 100`}
                      className="transition-all duration-1000 ease-out"
                      style={{ 
                        stroke: competency.color,
                        transitionDelay: `${index * 150 + 1000}ms` 
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">{competency.level}%</span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{competency.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Strategic HR Initiatives</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${
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
                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
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

                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-blue-900">{value}</div>
                        <div className="text-xs text-gray-600">{key}</div>
                      </div>
                    ))}
                  </div>

                  {selectedProject === index && (
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-gray-600">
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
            <div className="inline-flex items-center space-x-8 p-6 bg-gray-50 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">4+</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">200+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndProjects; 