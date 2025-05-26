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
            <Route path="/kavyata/" element={<Home />} />
            <Route path="/kavyata/about" element={<About />} />
            <Route path="/kavyata/services" element={<Services />} />
            <Route path="/kavyata/portfolio" element={<Portfolio />} />
            <Route path="/kavyata/testimonials" element={<Testimonials />} />
            <Route path="/kavyata/contact" element={<Contact />} />
            <Route path="/kavyata/blog" element={<Blog />} />
            <Route path="/kavyata/blog/:id" element={<BlogPost />} />

            {/* Service detail pages */}
            <Route path="/kavyata/services/web-development" element={<WebDevelopment />} />
            <Route path="/kavyata/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/kavyata/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/kavyata/services/it-consulting" element={<ITConsulting />} />

            {/* 404 Page */}
            <Route path="/kavyata/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
