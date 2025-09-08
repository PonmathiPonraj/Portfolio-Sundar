import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';
import ProfileImage from '../assets/21570.png';
import { useState, useEffect } from 'react';

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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  } as const;

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  } as const;

  return (
    <motion.section 
      id="about" 
      className="py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={item}
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <motion.div 
            className="w-24 h-1 bg-blue-400 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            variants={item}
          >
            <motion.div 
              className="w-full h-96 bg-slate-800 rounded-2xl shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img 
                src={ProfileImage}
                alt="Sundar Sivanesan"
                className="w-full h-full object-cover object-center"
              />
              <motion.div 
                className="absolute bottom-8 left-8 right-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 border border-gray-600">
                  <p className="text-sm font-medium text-white">Sundar Sivanesan</p>
                  <p className="text-xs text-gray-300">HR Generalist</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={container}
          >
            <motion.h3 
              className="text-2xl font-bold text-white"
              variants={item}
            >
              Dynamic HR Professional with 4+ Years of Experience
            </motion.h3>
            
            <motion.p 
              className="text-gray-300 leading-relaxed"
              variants={item}
            >
              A passionate and detail-oriented HR Generalist with hands-on experience across the full spectrum of human resource functions. 
              From end-to-end recruitment (both IT & Non-IT) to onboarding, offboarding, and conducting orientation programs, I ensure a seamless and positive employee experience from day one. 
            </motion.p>
            
            <motion.p 
              className="text-gray-300 leading-relaxed"
              variants={item}
            >
              I take pride in driving impactful employee engagement initiatives, conducting background verifications, and clearly communicating HR policies that align with company culture. 
              With a strong grasp of performance management, grievance handling, and staffing augmentation, 
              I've built a solid foundation in supporting both employees and business goals. 
            </motion.p>

            <motion.p 
              className="text-gray-300 leading-relaxed"
              variants={item}
            >
              What sets me apart is my ability to collaborate across teams, manage client expectations, and bring human-centric solutions to everyday HR challenges. 
              I thrive on creating a workplace where people feel heard, valued, and empowered.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-8"
              variants={container}
            >
              <motion.div 
                className="text-center p-4 bg-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-500/30"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(30, 58, 138, 0.4)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                variants={item}
              >
                <div className="text-2xl font-bold text-blue-400">120+</div>
                <div className="text-sm text-gray-300">Successful Hires</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-blue-900/20 backdrop-blur-sm rounded-lg border border-blue-500/30"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(30, 58, 138, 0.4)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                variants={item}
              >
                <div className="text-2xl font-bold text-blue-400">4+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20"
          variants={container}
        >
          <motion.h3 
            className="text-2xl font-bold text-white text-center mb-12"
            variants={item}
          >
            Core Values
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4 mx-auto"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {value.icon}
                </motion.div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;