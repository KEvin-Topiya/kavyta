import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import { Users2Icon, RocketIcon, TargetIcon } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '1+' },
  { label: 'Projects Completed', value: '5' },
  { label: 'Team Members', value: '5' },
  { label: 'Global Clients', value: '2' }
];

const teamMembers = [
  {
    name: 'Radhika Bhut',
    role: 'Lead Developer',
    image: 'r.png'
  },
  {
    name: 'Kevin Topiya',
    role: 'CEO & Founder',
    image: 'k.png'
  },
  {
    name: 'Viraj Parsana',
    role: ' COO & Co-Founder',
    image: 'v.png'
  },
  {
    name: 'Heli Chauhan',
    role: 'Design Director',
    image: 'h.png'
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader
          title="About Us"
          subtitle="We're a team of passionate technologists building the future of digital solutions"
        />

        {/* Story Section */}
        <div className="mb-20">
          <GlassCard className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-gray-300 mb-4">
            Founded in 2025 by Kevin, our journey began with a vision to empower businesses through technology. Built from the ground up with passion and purpose, we’re laying the foundation for a company that delivers impactful digital solutions.

We’re driven by a culture of friendliness and excellence — where creativity meets problem-solving, and every project is a chance to grow. Our focus is on providing smart, adaptable IT services for businesses ready to evolve in a digital-first world.

We're just getting started — and we're building with intention.
            </p>
            <p className="text-gray-300">
              Today, we're proud to serve clients worldwide, delivering
              cutting-edge solutions that drive innovation and growth. Our
              commitment to excellence and customer satisfaction remains at the
              heart of everything we do.
            </p>
          </GlassCard>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <GlassCard className="text-center">
            <RocketIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-400">
              Pushing boundaries and exploring new technologies to deliver
              cutting-edge solutions.
            </p>
          </GlassCard>
          <GlassCard className="text-center">
            <TargetIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Excellence</h3>
            <p className="text-gray-400">
              Committed to delivering the highest quality in everything we do.
            </p>
          </GlassCard>
          <GlassCard className="text-center">
            <Users2Icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Collaboration</h3>
            <p className="text-gray-400">
              Working together with our clients to achieve extraordinary
              results.
            </p>
          </GlassCard>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <GlassCard key={index} className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
