import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-[15%] w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('https://img.pikbest.com/backgrounds/20190725/retro-sci-fi-background-futuristic-grid-landscape-of-the-1980-background-v_1508384jpg!w700wp')] bg-cover bg-center opacity-10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Innovative IT Solutions</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                For Your Business
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              We create cutting-edge digital solutions that transform businesses
              and drive growth in the modern technological landscape.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/kavyata/services">
                Our Services
              </Button>
            </div>

            {/* Trusted by companies */}
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black overflow-hidden"
                  >
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-300">Trusted by</p>
                <p className="text-sm text-blue-400">500+ businesses</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              {/* Main image with glass effect */}
              <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl rounded-full overflow-hidden  shadow-2xl backdrop-blur-sm bg-gray-900/40">
                <img
                  src="gif.gif"
                  alt="IT Solutions"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg overflow-hidden border border-gray-800 shadow-lg backdrop-blur-sm bg-gray-900/60 p-3 flex items-center justify-center animate-float">
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_1280.png"
                  alt="Web Development"
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                className="absolute -bottom-8 -left-8 w-40 h-24 rounded-lg overflow-hidden border border-gray-800 shadow-lg backdrop-blur-sm bg-gray-900/60 p-3 flex items-center justify-center animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    95%
                  </div>
                  <div className="text-xs text-gray-300">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
