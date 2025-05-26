import React from 'react';
import GlassCard from './GlassCard';
import { Calendar, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ id, title, excerpt, image, date, readTime, category }) => {
  return (
    <GlassCard hoverable className="overflow-hidden group">
      <Link to={`/blog/${id}`}>
        {/* Blog Image */}
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

        {/* Blog Content */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{excerpt}</p>

        {/* Blog Meta Information */}
        <div className="flex items-center text-sm text-gray-500">
          <Calendar size={14} className="mr-1" />
          <span className="mr-4">{date}</span>
          <Clock3 size={14} className="mr-1" />
          <span>{readTime}</span>
        </div>
      </Link>
    </GlassCard>
  );
};

export default BlogCard;
