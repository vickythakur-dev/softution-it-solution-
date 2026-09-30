import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'portfolio' },
    { name: 'Why Us', id: 'why-choose-us' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF7]/95 backdrop-blur-md shadow-sm border-b border-[#111827]/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Zone 1: Brand Logo (Strict Rule Compliant) */}
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#0F766E] rounded-md"
        >
 <img 
  src="/logo.png" 
  alt="Softuition IT Solutions" 
  className="h-20 md:h-24 w-auto object-contain scale-110" 
/>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="text-sm font-medium text-[#111827]/70 hover:text-[#0F766E] transition-colors relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0F766E] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Zone 3: Call to Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleItemClick('contact')}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0F766E] text-[#FAFAF7] text-xs font-semibold rounded-lg hover:bg-[#0D9488] active:bg-[#0B7D77] transition-colors shadow-sm whitespace-nowrap"
          >
            <PhoneCall size={14} />
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#111827]/80 hover:text-[#0F766E] transition-colors rounded-lg focus-visible:outline-2 focus-visible:outline-[#0F766E]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-x-0 top-[68px] bg-[#FAFAF7] border-b border-[#111827]/10 transition-all duration-300 md:hidden overflow-hidden ${
          isOpen ? 'max-h-[360px] opacity-100 shadow-md' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className="text-left py-2.5 text-base font-semibold text-[#111827]/80 hover:text-[#0F766E] transition-colors border-b border-[#111827]/5"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleItemClick('contact')}
            className="mt-2 w-full flex items-center justify-center gap-2 py-3 bg-[#0F766E] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#0D9488] transition-colors shadow-sm"
          >
            <PhoneCall size={16} />
            Let's Talk
          </button>
        </div>
      </div>
    </header>
  );
}
