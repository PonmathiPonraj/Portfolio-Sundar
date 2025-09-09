import { useEffect, useRef } from 'react';

// Add NodeJS.Timeout type for TypeScript
declare global {
  interface Window {
    clearTimeout: (timeoutId: ReturnType<typeof setTimeout>) => void;
    setTimeout: (callback: () => void, delay: number) => number;
  }
}

const AnimatedBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Create particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      // Clear existing particles
      particlesRef.current.innerHTML = '';
      orbsRef.current = [];
      
      // Create small particles
      const particleCount = window.innerWidth < 768 ? 20 : 40;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 1px and 3px
        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation
        const duration = Math.random() * 20 + 20; // 20-40s
        const delay = Math.random() * -20; // Start at random position in animation
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        
        particlesRef.current.appendChild(particle);
      }
      
      // Create gradient orbs
      const orbCount = 3;
      const colors = [
        'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
        'from-cyan-500/10 via-blue-500/10 to-indigo-500/10',
        'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10'
      ];
      
      for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement('div');
        orb.className = `gradient-orb bg-gradient-to-br ${colors[i % colors.length]}`;
        
        // Random size between 200px and 400px
        const size = Math.random() * 200 + 200;
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        
        // Position orbs at different corners
        const positions = [
          { top: '10%', left: '10%', right: undefined, bottom: undefined },
          { top: '60%', right: '15%', left: undefined, bottom: undefined },
          { bottom: '10%', left: '30%', top: undefined, right: undefined }
        ] as const;
        
        const position = positions[i % positions.length];
        if (position.top) orb.style.top = position.top;
        if (position.left) orb.style.left = position.left;
        if (position.right) orb.style.right = position.right;
        if (position.bottom) orb.style.bottom = position.bottom;
        
        // Random animation
        const duration = Math.random() * 40 + 80; // 80-120s
        orb.style.animationDuration = `${duration}s`;
        orb.style.animationDelay = `${Math.random() * -duration}s`;
        
        particlesRef.current.appendChild(orb);
        orbsRef.current.push(orb);
      }
    };
    
    // Handle window resize
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        createParticles();
      }, 250);
    };
    
    // Initial setup
    createParticles();
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);
  
  return <div ref={particlesRef} className="fixed inset-0 -z-10 overflow-hidden" />;
};

export default AnimatedBackground;
