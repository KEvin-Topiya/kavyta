import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import { CheckCircle2Icon, ArrowRightIcon } from 'lucide-react';
import Button from '../components/ui/Button';

const technologies = [
  'React', 'Node.js', 'Python', 'AWS', 'Azure',
  'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'TypeScript'
];

const services = [
  {
    title: 'Web Development',
    path: '/kavyata/services/web-development',
    description: 'Crafting responsive and dynamic websites to enhance your online presence.',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d',
    // imageUrl: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg',
    features: [
      'Custom Website Design',
      'Responsive Layouts',
      'SEO Optimization',
      'Content Management Systems',
    ],
  },
  {
    title: 'Software Development',
    path: '/kavyata/services/software-development',
    description: 'Developing robust software solutions to streamline your business operations.',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    // imageUrl: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
    features: [
      'Custom Software Solutions',
      'Enterprise Applications',
      'API Development',
      'System Integration',
    ],
  },
  {
    title: 'Mobile App Development',
    path: '/kavyata/services/mobile-app-development',
    description: 'Creating user-friendly mobile applications for iOS and Android platforms.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    // imageUrl: 'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Solutions',
      'App Store Deployment',
    ],
  },
  // {
  //   title: 'Cloud Solutions',
  //   path: '/services/cloud-solutions',
  //   description: 'Implementing scalable cloud infrastructures to support your business growth.',
  //   imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
  //   // imageUrl: 'https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-icon-connected-with-digital-devices-3d-vector-illustration_1284-30495.jpg',
  //   features: [
  //     'Cloud Migration',
  //     'Infrastructure as a Service (IaaS)',
  //     'Platform as a Service (PaaS)',
  //     'Cloud Security',
  //   ],
  // },
  // {
  //   title: 'Cybersecurity',
  //   path: '/services/cybersecurity',
  //   description: 'Protecting your digital assets with advanced security measures.',
  //   imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
  //   // imageUrl: 'https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg',
  //   features: [
  //     'Network Security',
  //     'Data Encryption',
  //     'Threat Monitoring',
  //     'Compliance Audits',
  //   ],
  // },
  {
    title: 'IT Consulting',
    path: '/kavyata/services/it-consulting',
    description: 'Providing expert guidance to optimize your IT strategies and infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    // imageUrl: 'https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg',
    features: [
      'IT Strategy Development',
      'Technology Assessment',
      'Process Improvement',
      'Project Management',
    ],
  },
];

const processSteps = [
  {
    title: 'Discovery',
    description: 'We begin by understanding your business needs and objectives',
  },
  {
    title: 'Planning',
    description: 'Creating detailed project roadmap and technical specifications',
  },
  {
    title: 'Development',
    description: 'Building your solution using cutting-edge technologies',
  },
  {
    title: 'Testing',
    description: 'Rigorous testing to ensure quality and performance',
  },
  {
    title: 'Deployment',
    description: 'Smooth deployment and transition to production',
  },
  {
    title: 'Support',
    description: 'Ongoing maintenance and support services',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black pt-20 pb-16">
      <div className="container mx-auto px-4">
        <PageHeader
          title="Our Services"
          subtitle="Comprehensive IT solutions tailored to your business needs"
        />

        {/* Service Cards */}
        {services.map((service, index) => (
          <GlassCard key={index} className="mb-8 p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <CheckCircle2Icon className="w-5 h-5 text-blue-400 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Learn More button with route */}
                <Link to={service.path}>
                  <Button>
                    Learn More
                    <ArrowRightIcon className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <img
                    src={`${service.imageUrl}?auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </GlassCard>
        ))}

        {/* Process Section */}
        <div className="my-20">
          <h2 className="text-2xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <GlassCard key={index} className="text-center" hoverable>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
              <GlassCard key={index} className="text-center py-4" hoverable>
                <span className="text-gray-300">{tech}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
