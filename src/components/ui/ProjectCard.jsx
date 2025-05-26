import React from 'react';
import GlassCard from './GlassCard';

const ProjectCard = ({ title, description, image, category, technologies }) => {
  return (
    <GlassCard hoverable className="overflow-hidden group">
      <div className="relative overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
