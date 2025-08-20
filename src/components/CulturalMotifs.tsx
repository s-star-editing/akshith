
import React from 'react';

interface CulturalMotifsProps {
  className?: string;
}

const CulturalMotifs: React.FC<CulturalMotifsProps> = ({ className }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Lotus motif top left */}
      <div className="absolute -top-6 -left-6 cultural-motif animate-float">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5C45 20 35 30 20 35 35 40 45 50 50 65 55 50 65 40 80 35 65 30 55 20 50 5Z" fill="currentColor" />
          <path d="M50 15C46 26 39 33 26 37 39 41 46 48 50 59 54 48 61 41 74 37 61 33 54 26 50 15Z" fill="currentColor" />
          <circle cx="50" cy="37" r="5" fill="currentColor" />
        </svg>
      </div>

      {/* Peacock motif top right */}
      <div className="absolute -top-8 -right-8 cultural-motif animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M70 20C50 20 40 40 50 60 40 50 30 50 20 60 30 40 50 30 70 20Z" fill="currentColor" />
          <path d="M65 25C50 30 45 45 50 55 45 50 35 50 30 55 35 40 50 35 65 25Z" fill="currentColor" />
          <circle cx="60" cy="30" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Rangoli corner bottom left */}
      <div className="absolute -bottom-8 -left-8 cultural-motif animate-spin-slow">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10L55 40L85 50L55 60L50 90L45 60L15 50L45 40L50 10Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50 20L53 40L70 50L53 60L50 80L47 60L30 50L47 40L50 20Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </div>

      {/* Diya bottom right */}
      <div className="absolute -bottom-8 -right-8 cultural-motif animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 60C30 45 70 45 70 60L65 70H35L30 60Z" fill="currentColor" />
          <path d="M35 70L40 80H60L65 70H35Z" fill="currentColor" />
          <path d="M50 30C40 40 40 55 50 55 60 55 60 40 50 30Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default CulturalMotifs;
