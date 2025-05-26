import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
      <p className="text-gray-400 text-lg">{subtitle}</p>
    </div>
  );
};

export default PageHeader;
