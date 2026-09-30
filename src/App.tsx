import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Smooth scroll helper for navigational callbacks
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of the sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Scroll to top on first mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAFAF7] text-[#111827] overflow-x-hidden selection:bg-[#0F766E]/20 selection:text-[#0F766E]">
      
      {/* Absolute Navbar sticky overhead */}
      <Navbar onNavClick={handleNavClick} />

      {/* Hero Showcase Block */}
      <Hero onNavClick={handleNavClick} />

      {/* Detailed About Us Section */}
      <About />

      {/* Services Portfolio Grid */}
      <Services onNavClick={handleNavClick} />

      {/* Project Portfolio and Live URL Showcases */}
      <Portfolio />

      {/* Why Choose Us Differentiators */}
      <WhyChooseUs />

      {/* Fully Validated Contact Form and Coordinate Center */}
      <Contact />

      {/* Clean Bottom Footer with mirrored anchors */}
      <Footer onNavClick={handleNavClick} />
      
    </div>
  );
}
