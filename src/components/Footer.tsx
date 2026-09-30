import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onNavClick(sectionId);
  };

  return (
    <footer className="bg-[#111827] text-[#FAFAF7]/80 pt-20 pb-8 border-t border-[#FAFAF7]/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start text-left">
        
        {/* Column 1: Brand info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span ><img 
  src="/logo.png" 
  alt="Softuition IT Solutions" 
  className="h-16 md:h-20 w-auto object-contain bg-white rounded-xl p-2 mb-4 shadow-lg" 

/></span>
          </div>
          <p className="text-xs text-[#FAFAF7]/60 leading-relaxed font-normal">
            A premium digital solutions consultancy engineered to build fast websites, cost-effective enterprise CRMs, automated HRMS portals, and highly secure custom software systems.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-[#FAFAF7]/5 text-[#FAFAF7]/60 hover:text-[#FAFAF7] hover:bg-[#FAFAF7]/10 rounded-lg transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-[#FAFAF7]/5 text-[#FAFAF7]/60 hover:text-[#FAFAF7] hover:bg-[#FAFAF7]/10 rounded-lg transition-colors">
              <Twitter size={16} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-[#FAFAF7]/5 text-[#FAFAF7]/60 hover:text-[#FAFAF7] hover:bg-[#FAFAF7]/10 rounded-lg transition-colors">
              <Github size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Mirror site links */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold text-[#FAFAF7] uppercase tracking-widest border-b border-[#FAFAF7]/10 pb-2">Navigation Mirror</h4>
          <ul className="space-y-3 text-xs font-medium">
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#FAFAF7] transition-colors">About Softuition</a>
            </li>
            <li>
              <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#FAFAF7] transition-colors">Our Capabilities</a>
            </li>
            <li>
              <a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')} className="hover:text-[#FAFAF7] transition-colors">Project Portfolio</a>
            </li>
            <li>
              <a href="#why-choose-us" onClick={(e) => handleLinkClick(e, 'why-choose-us')} className="hover:text-[#FAFAF7] transition-colors">Differentiators</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-[#FAFAF7] transition-colors">Consultation Desk</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Coordinates */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold text-[#FAFAF7] uppercase tracking-widest border-b border-[#FAFAF7]/10 pb-2">Engagement Coordinates</h4>
          <ul className="space-y-4 text-xs font-normal">
            <li className="flex items-start gap-2.5">
              <Phone size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Advisory Helpline:</p>
                <p className="text-[#FAFAF7]/60 mt-0.5">7803927245 / 9329900464</p>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={14} className="text-[#0D9488] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Mailing Gateway:</p>
                <p className="text-[#FAFAF7]/60 mt-0.5">sales.softuition@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4: Trust parameters */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold text-[#FAFAF7] uppercase tracking-widest border-b border-[#FAFAF7]/10 pb-2">Company Registry</h4>
          <div className="space-y-3.5 text-xs text-[#FAFAF7]/60">
            <p className="leading-relaxed">
              Softuition IT Solutions provides pre-validated, compliance-hardened web and cloud software architectures. 
            </p>
            <div className="flex items-center gap-2 text-[10px] font-semibold text-[#0D9488] uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488]" />
              ISO 9001:2015 Certified
            </div>
            <div className="flex items-center gap-2 text-[10px] font-semibold text-[#0D9488] uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488]" />
              Secure Data Protocol Enforced
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal Notice */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#FAFAF7]/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#FAFAF7]/40">
        <p>© {currentYear} Softuition IT Solutions. All engineering rights reserved.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0 font-medium">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Framework</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Engagement</a>
          <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
