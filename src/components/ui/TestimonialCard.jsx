import React from 'react';
import GlassCard from './GlassCard';
import { QuoteIcon } from 'lucide-react';

const TestimonialCard = ({ content, author, role, company, image }) => {
  return (
    <GlassCard hoverable className="relative">
      <QuoteIcon className="absolute top-4 right-4 w-8 h-8 text-gray-700" />
      <div className="mb-6">
        <p className="text-gray-300 italic">{content}</p>
      </div>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-400">{role}</div>
          <div className="text-sm text-blue-400">{company}</div>
        </div>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;
