// src/components/ui/AnimatedSection.tsx
import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './AnimatedSection.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0
}) => {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <div 
      ref={elementRef}
      className={`animated-section ${className} ${hasIntersected ? 'animate' : ''}`}
      style={{ 
        animationName: hasIntersected ? animation : 'none',
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;