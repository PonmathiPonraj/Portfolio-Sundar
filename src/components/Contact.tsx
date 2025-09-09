import { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, FileText, Calendar, MessageCircle, X, Chrome, MessageSquare, Phone } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAppDialog, setShowAppDialog] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleScheduleCall = () => {
    setShowAppDialog(true);
  };

  const handleCloseDialog = (e: React.MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
      setShowAppDialog(false);
    }
  };

  const appOptions = [
    {
      name: 'Google Meet',
      icon: <Chrome className="w-6 h-6" />,
      action: () => window.open('https://meet.google.com/new', '_blank')
    },
    {
      name: 'WhatsApp',
      icon: <MessageSquare className="w-6 h-6" />,
      action: () => window.open('https://wa.me/916369115038', '_blank')
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      action: () => window.open('https://linkedin.com/in/sundar-sivanesan', '_blank')
    },
    {
      name: 'Gmail',
      icon: <Mail className="w-6 h-6" />,
      action: () => {
        const subject = 'Schedule a Call';
        const body = 'Hi Sundar, I would like to schedule a call with you.';
        window.location.href = `mailto:ssundar.hr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
    },
    {
      name: 'Phone',
      icon: <Phone className="w-6 h-6" />,
      action: () => window.location.href = 'tel:+916369115038'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);



  const contactInfo = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+91 6369115038',
      link: 'https://wa.me/916369115038'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Sundar Sivanesan',
      link: 'https://linkedin.com/in/sundar-sivanesan'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'ssundar.hr@gmail.com',
      link: 'mailto:ssundar.hr@gmail.com'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      value: 'Sundar Sivanesan',
      link: 'https://linkedin.com/in/sundar-sivanesan',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your HR needs or explore potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className={`flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="w-full max-w-lg space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, HR challenges, or ways to improve 
                  workplace culture. Whether you're looking for HR expertise or want to explore collaboration, 
                  let's start a conversation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Social Links & Quick Actions */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="w-full max-w-lg space-y-8">
              {/* Social Links */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-300 ${social.color} hover:text-blue-600`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-800 rounded-lg hover:bg-gray-100 transition-all duration-300">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Download Resume</span>
                  </button>
                  <button 
                    onClick={handleScheduleCall}
                    className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-800 rounded-lg hover:bg-gray-100 transition-all duration-300 text-left"
                  >
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Schedule a Call</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-300">
            © 2025 Sundar S. Built with passion for connecting great people with great opportunities.
          </p>
        </div>
      </div>

      {/* App Selection Dialog */}
      {showAppDialog && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseDialog}
        >
          <div 
            ref={dialogRef}
            className="bg-white rounded-xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Choose an App</h3>
              <button 
                onClick={() => setShowAppDialog(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-3">
              {appOptions.map((app, index) => (
                <button
                  key={index}
                  onClick={() => {
                    app.action();
                    setShowAppDialog(false);
                  }}
                  className="w-full flex items-center space-x-4 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    {app.icon}
                  </div>
                  <span className="font-medium text-gray-900">{app.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;