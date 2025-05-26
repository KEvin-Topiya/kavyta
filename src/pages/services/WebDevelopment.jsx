import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import GlassCard from '../../components/ui/GlassCard';
import { CheckCircle2Icon } from 'lucide-react';
import Button from '../../components/ui/Button';

const serviceData = {
  title: 'Web Development',
  subtitle: 'Crafting responsive and dynamic websites to enhance your online presence.',
  imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
  features: [
    'Custom Website Design',
    'Responsive Layouts',
    'SEO Optimization',
    'Content Management Systems',
  ],
  costing: [
    { plan: 'Starter', price: '$800', features: ['1 Page', 'Basic SEO'] },
    { plan: 'Professional', price: '$2000', features: ['5 Pages', 'Advanced SEO', 'CMS'] },
    { plan: 'Enterprise', price: '$4000', features: ['Unlimited Pages', 'Full SEO', 'E-commerce'] },
  ],
  technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js'],
};

const WebDevelopment = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <PageHeader
          title={serviceData.title}
          subtitle={serviceData.subtitle}
        />

        {/* Hero Section */}
        <section className="mb-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img
              src={`${serviceData.imageUrl}?auto=format&fit=crop&w=800&q=80`}
              alt="Web Development"
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-96"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-300 mb-6">
              We design and develop modern websites tailored to your brand identity. From single-page designs to complex portals, we ensure high performance, responsiveness, and engaging UI/UX.
            </p>
            <Button>Start Your Project</Button>
          </div>
        </section>

        {/* Key Features */}
        <section className="my-12">
          <h2 className="text-xl font-bold mb-6 text-blue-400">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceData.features.map((feature, index) => (
              <GlassCard
                key={index}
                className="group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300">
                    <CheckCircle2Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  {`We ensure high quality in "${feature}" using modern web technologies and best practices.`}
                </p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Costing */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 text-blue-400">Pricing Plans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.costing.map((plan, idx) => (
              <GlassCard key={idx} className="p-6">
                <h3 className="text-lg font-bold mb-2">{plan.plan}</h3>
                <p className="text-2xl font-semibold text-purple-400 mb-4">{plan.price}</p>
                <ul className="text-gray-300 space-y-1">
                  {plan.features.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 text-blue-400">Technologies We Use</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {serviceData.technologies.map((tech, index) => (
              <GlassCard key={index} className="py-4 text-center" hoverable>
                <span className="text-gray-200">{tech}</span>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Demo CTA */}
        <section className="text-center mt-20">
          <h2 className="text-2xl font-bold mb-4">Need a Stunning Website?</h2>
          <p className="text-gray-400 mb-6">Let's build your online presence together.</p>
          <Button>Request a Demo</Button>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopment;