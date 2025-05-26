import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black pt-20 pb-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Blog Post {id}
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Blog post content coming soon
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
