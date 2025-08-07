import React, { useState, useEffect } from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "People-Centric",
      description: "Putting employees at the heart of every decision and strategy."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Delivering measurable outcomes that align with business objectives."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empathetic Leader",
      description: "Building trust through genuine care and understanding."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Focused",
      description: "Continuously improving processes and exceeding expectations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-800">Professional Headshot</p>
                    <p className="text-xs text-gray-600">Sundar S, HR Generalist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Dynamic HR Professional with 4+ Years of Experience
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                A passionate and detail-oriented HR Generalist with hands-on experience across the full spectrum of human resource functions. 
                From end-to-end recruitment (both IT & Non-IT) to onboarding, offboarding, and conducting orientation programs, I ensure a seamless and positive employee experience from day one. 
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                I take pride in driving impactful employee engagement initiatives, conducting background verifications, and clearly communicating HR policies that align with company culture. 
                With a strong grasp of performance management, grievance handling, and staffing augmentation, 
                I've built a solid foundation in supporting both employees and business goals. 
              </p>

              <p className="text-gray-600 leading-relaxed">
                What sets me apart is my ability to collaborate across teams, manage client expectations, and bring human-centric solutions to everyday HR challenges. 
                I thrive on creating a workplace where people feel heard, valued, and empowered.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">120+</div>
                  <div className="text-sm text-gray-600">Successful Hires</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-500 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;