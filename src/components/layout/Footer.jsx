import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* TechNova Info */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              KAVYTA
            </h3>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative IT solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
              <SocialIcon icon={<Github size={18} />} href="#" />
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <FooterLink href="/kavyata/services">Web Development</FooterLink>
              <FooterLink href="/kavyata/services">Software Development</FooterLink>
              <FooterLink href="/kavyata/services">Mobile App Development</FooterLink>
              {/* <FooterLink href="/services">Cloud Solutions</FooterLink> */}
              <FooterLink href="/kavyata/services">IT Consulting</FooterLink>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="/kavyata/about">About Us</FooterLink>
              <FooterLink href="/kavyata/portfolio">Our Work</FooterLink>
              <FooterLink href="/kavyata/testimonials">Testimonials</FooterLink>
              <FooterLink href="/kavyata/blog">Blog</FooterLink>
              <FooterLink href="/kavyata/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Rajkot</p>
              {/* <p>Silicon Valley, CA 94043</p> */}
              <p className="flex items-center mt-2">
                <Mail size={16} className="mr-2" /> <a href="kavyata914@gmail.com">info@kavyta.site</a>
              </p>
              <p><a href="tel:+916356893665">+91 6356893665</a></p>
            </address>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Develop by Kevin Topiya. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="text-gray-500 text-sm hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span className="text-gray-500 text-sm hover:text-gray-400 cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social Icon Component
const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

// Footer Link Component
const FooterLink = ({ href, children }) => (
  <li>
    <Link to={href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
      {children}
    </Link>
  </li>
);

export default Footer;
