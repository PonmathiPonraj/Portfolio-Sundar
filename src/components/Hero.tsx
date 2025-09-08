import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Empowering People. Building Culture. Driving Growth.';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
    }
  } as const;

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.2 },
    animate: { 
      scale: 1.2, 
      opacity: 0,
      transition: { 
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse' as const
      } 
    }
  };

  return (
    <motion.section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgoJPGRlZnM+CgkJPHBhdHRlcm4gaWQ9InBhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDEwIDEwIj4KCQkJPHBhdGggZD0iTTAgMGgxMHYxMEgweiIgZmlsbD0ibm9uZSIvPgoJCQk8cGF0aCBkPSJNMSAwTDAgMU0xMCA5TDkgMTBNMSAxMEwwIDlNMTAgMUw5IDAiIHN0cm9rZT0iIzFhMjUzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KCQk8L3BhdHRlcm4+Cgk8L2RlZnM+Cgk8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <motion.div 
                className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center shadow-2xl relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <span className="text-4xl font-bold text-white">SS</span>
              </motion.div>
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 opacity-20"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              />
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              Sundar <motion.span 
                className="text-blue-400 inline-block"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse' as const
                }}
              >S</motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
              variants={itemVariants}
            >
              HR Generalist
            </motion.h2>

            <motion.div 
              className="h-16 flex items-center justify-center"
              variants={itemVariants}
            >
              <p className="text-xl md:text-2xl text-blue-300 font-medium min-h-[2rem] bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                {displayText}
                <motion.span 
                  className="inline-block ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: 'reverse' as const
                  }}
                >|</motion.span>
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-gray-300 mt-8"
              variants={itemVariants}
            >
              {[
                { icon: <MapPin className="w-5 h-5 text-blue-400" />, text: 'Madurai, Tamil Nadu' },
                { icon: <Mail className="w-5 h-5 text-blue-400" />, text: 'ssundar.hr@gmail.com' },
                { icon: <Phone className="w-5 h-5 text-blue-400" />, text: '+91 6369115038' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-700/50"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(30, 41, 59, 0.7)'
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: 'reverse' as const
        }}
      >
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;