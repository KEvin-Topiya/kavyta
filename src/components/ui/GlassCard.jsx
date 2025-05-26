import React from 'react';

const GlassCard = ({ children, className = '', hoverable = false }) => {
  return (
    <div
      className={`
        bg-charcoal-700/60 backdrop-blur-lg border border-charcoal-600 
        rounded-xl shadow-xl p-6 
        ${hoverable ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-orange-500/50' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
