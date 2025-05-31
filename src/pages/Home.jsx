import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import FloatingCube from '../components/3d/FloatingCube';
import GlassCard from '../components/ui/GlassCard';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div className="bg-black">
      <Helmet>
      <title>Home | Kavyta</title>
      <meta name="description" content="Welcome to Kavyta - Innovating the digital world." />
    </Helmet>
      <HeroSection />
      <ServicesSection />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="flex flex-col md:flex-row items-center justify-between p-12 gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Innovation Through Technology
              </h2>
              <p className="text-gray-400 mb-4">
                We leverage cutting-edge technology to create solutions that
                drive business growth and innovation.
              </p>
              <p className="text-gray-400">
                Our team of experts is dedicated to delivering excellence in
                every project we undertake.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <FloatingCube />
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
