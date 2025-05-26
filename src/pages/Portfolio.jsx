import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import ProjectCard from '../components/ui/ProjectCard';
import Button from '../components/ui/Button';

const categories = ['All', 'Web', 'Mobile', 'Desktop', 'Cloud'];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management.',
    image: 'https://picsum.photos/seed/ecom/400/300',
    category: 'Web',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts and nutrition with AI recommendations.',
    image: 'https://picsum.photos/seed/health/400/300',
    category: 'Mobile',
    technologies: ['React Native', 'Firebase', 'TensorFlow'],
  },
  {
    title: 'Cloud Migration Solution',
    description: 'Enterprise-level cloud migration and infrastructure management system.',
    image: 'https://picsum.photos/seed/cloud/400/300',
    category: 'Cloud',
    technologies: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Inventory Management',
    description: 'Desktop application for managing warehouse inventory and logistics.',
    image: 'https://picsum.photos/seed/inventory/400/300',
    category: 'Desktop',
    technologies: ['Electron', 'React', 'SQLite'],
  },
  {
    title: 'Social Media Dashboard',
    description: 'Comprehensive social media management and analytics platform.',
    image: 'https://picsum.photos/seed/social/400/300',
    category: 'Web',
    technologies: ['React', 'GraphQL', 'PostgreSQL'],
  },
  {
    title: 'IoT Control Center',
    description: 'Centralized management system for IoT devices and data analytics.',
    image: 'https://picsum.photos/seed/iot/400/300',
    category: 'Desktop',
    technologies: ['Python', 'React', 'MQTT'],
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-20 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader
          title="Our Portfolio"
          subtitle="Explore our latest projects and success stories"
        />

        {/* Category Buttons */}
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

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
