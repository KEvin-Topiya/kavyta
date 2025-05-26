import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import TestimonialCard from '../components/ui/TestimonialCard';
import GlassCard from '../components/ui/GlassCard';

const testimonials = [
  {
    content:
      "TechNova transformed our business with their innovative solutions. Their team's expertise and dedication were invaluable to our digital transformation journey.",
    author: 'Sarah Williams',
    role: 'CEO',
    company: 'InnovateTech Inc',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    content:
      'Working with TechNova was a game-changer for our company. Their cloud solutions helped us scale efficiently while reducing operational costs.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'CloudScale Solutions',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    content:
      'The mobile app developed by TechNova exceeded our expectations. Their attention to detail and user experience expertise is unmatched.',
    author: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'MobileFirst Apps',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    content:
      "TechNova's cybersecurity solutions gave us peace of mind. Their proactive approach to security has protected our business from numerous threats.",
    author: 'David Thompson',
    role: 'Security Director',
    company: 'SecureNet Systems',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
];

const companies = [
  'TechCorp',
  'InnovateLabs',
  'FutureScale',
  'CloudNine',
  'DataFlow',
  'SmartSystems',
  'NextGen',
  'DigitalPrime',
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader
          title="Client Testimonials"
          subtitle="Hear what our clients say about working with us"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Companies Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            Trusted By Leading Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <GlassCard key={index} className="p-8 text-center" hoverable>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {company}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <GlassCard className="text-center p-12">
          <h2 className="text-2xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Testimonials;
