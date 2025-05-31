import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FloatingSphere from '../components/3d/FloatingSphere';
import { Helmet } from 'react-helmet-async';
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (

    <div className="min-h-screen bg-black pt-20 pb-16">
          <Helmet>
      <title>Contact Us | Kavyta</title>
      <meta name="description" content="Get in touch with Kavyta for your software and tech needs." />
    </Helmet>

      <div className="container mx-auto px-4">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with our team for any inquiries or support"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <GlassCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </GlassCard>

          {/* Contact Info + 3D Element */}
          <div className="space-y-6">
            <GlassCard className="p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-400">Rajkot</p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400"><a href="tel:+916356893665">+91 6356893665</a></p>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400"><a href="kavyata914@gmail.com">info@lupa.com</a></p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </GlassCard>

            <div className="flex justify-center">
              <FloatingSphere />
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <GlassCard className="p-8 mb-20">
          <div className="aspect-w-16 aspect-h-9">
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.335966142331!2d70.82905946667762!3d22.304822193903863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5e2265eaa6d%3A0xbf8824163cb9fbd3!2s3-6-7%2C%20Rd%20Number%201%2C%20near%20Meera%20complex%2C%20Gujarat%20Society%2C%20Arya%20Nagar%2C%20Rajkot%2C%20Gujarat%20360002!5e0!3m2!1sen!2sin!4v1744098643266!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
              title="Google Map"
            ></iframe>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Contact;
