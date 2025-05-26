import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/ui/BlogCard';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';

const categories = ['All', 'Technology', 'Development', 'Design', 'Business', 'Security'];

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
    image: 'https://picsum.photos/seed/web/400/300',
    date: 'Feb 15, 2024',
    readTime: '5 min read',
    category: 'Development',
  },
  {
    id: '2',
    title: 'Cybersecurity Best Practices for Businesses',
    excerpt: 'Essential security measures every business should implement to protect their digital assets.',
    image: 'https://picsum.photos/seed/security/400/300',
    date: 'Feb 12, 2024',
    readTime: '8 min read',
    category: 'Security',
  },
  {
    id: '3',
    title: 'AI in Modern Business Applications',
    excerpt: 'How artificial intelligence is transforming business operations and decision-making.',
    image: 'https://picsum.photos/seed/ai/400/300',
    date: 'Feb 10, 2024',
    readTime: '6 min read',
    category: 'Technology',
  },
  {
    id: '4',
    title: 'UI/UX Design Trends for 2024',
    excerpt: 'Latest design trends and practices for creating engaging user experiences.',
    image: 'https://picsum.photos/seed/design/400/300',
    date: 'Feb 8, 2024',
    readTime: '4 min read',
    category: 'Design',
  },
  {
    id: '5',
    title: 'Cloud Computing: A Comprehensive Guide',
    excerpt: 'Understanding cloud computing and its impact on modern businesses.',
    image: 'https://picsum.photos/seed/cloud/400/300',
    date: 'Feb 5, 2024',
    readTime: '7 min read',
    category: 'Technology',
  },
  {
    id: '6',
    title: 'Digital Transformation Strategies',
    excerpt: 'Key strategies for successful digital transformation in your organization.',
    image: 'https://picsum.photos/seed/digital/400/300',
    date: 'Feb 1, 2024',
    readTime: '5 min read',
    category: 'Business',
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-20 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader
          title="Our Blog"
          subtitle="Insights and updates from our team of experts"
        />

        {/* Featured Post */}
        <GlassCard className="mb-12 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/seed/featured/800/600"
                alt="Featured post"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-blue-400 text-sm mb-2 block">
                Featured Post
              </span>
              <h2 className="text-2xl font-bold mb-4">
                The Evolution of Technology: Past, Present, and Future
              </h2>
              <p className="text-gray-400 mb-4">
                A comprehensive look at how technology has evolved over the
                decades and what the future holds for innovation and digital
                transformation.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span className="mr-4">Feb 20, 2024</span>
                <span>10 min read</span>
              </div>
              <Button href="/blog/featured">Read More</Button>
            </div>
          </div>
        </GlassCard>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'outline'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
