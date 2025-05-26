import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Globe, Code, Smartphone, Cloud, ShieldCheck, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Globe size={48} className="text-blue-400" />,
    title: 'Web Development',
    description:
      'Custom websites and web applications built with the latest technologies for optimal performance and user experience.',
  },
  {
    icon: <Code size={48} className="text-purple-400" />,
    title: 'Software Development',
    description:
      'Tailored software solutions designed to streamline your business processes and boost productivity.',
  },
  {
    icon: <Smartphone size={48} className="text-green-400" />,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
  },
  {
    icon: <Cloud size={48} className="text-cyan-400" />,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and migration services to enhance flexibility and reduce operational costs.',
  },
  {
    icon: <ShieldCheck size={48} className="text-red-400" />,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your business data and systems from evolving threats.',
  },
  {
    icon: <BarChart3 size={48} className="text-yellow-400" />,
    title: 'IT Consulting',
    description:
      'Strategic technology consulting to help you make informed decisions and achieve your business goals.',
  },
];

const ServicesSection = () => {
  return (
    <section id='services' className="relative py-20 bg-black ">
      {/* Subtle background effects */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            We offer a comprehensive range of IT services to help your business
            thrive in the digital era.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} hoverable className="flex flex-col items-center text-center p-8">
              <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
