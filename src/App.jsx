import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import WebDevelopment from './pages/services/WebDevelopment';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import ITConsulting from './pages/services/ITConsulting';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* Service detail pages */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />

            {/* 404 Page */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
