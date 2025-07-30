import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-pulse">
            <Users className="w-12 h-12 text-white" />
          </div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
        </div>
        
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">
            Sundar S
          </h1>
          <p className="text-blue-200 text-lg">HR Generalist</p>
        </div>

        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-white/80 mt-4 text-sm">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;