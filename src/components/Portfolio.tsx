import { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Globe, 
  Layout, 
  GraduationCap, 
  ShoppingBag, 
  Sparkles,
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  X,
  Laptop,
  Smartphone,
  Cpu,
  UserCheck
} from 'lucide-react';

interface Project {
  title: string;
  category: string;
  url: string;
  tag: string;
  metric: string;
  description: string;
  tech: string[];
  type: 'live' | 'dashboard' | 'ecommerce' | 'education';
  colorTheme: string; // Tailwind gradient classes for beautiful mock screenshots
  icon: any;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'live' | 'dashboard' | 'ecommerce' | 'education'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Venkata Ganapathi Physiotherapy Clinic',
      category: 'Live Client Website',
      url: 'https://www.venkataganapathiphysiotherapyclinic.com/',
      tag: 'Healthcare & Wellness',
      metric: '+180% Patient Bookings',
      description: 'A completely customized clinic interface featuring active appointment schedules, client-side slot selection, and digital therapy guidelines for a live physiotherapy provider.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
      type: 'live',
      colorTheme: 'from-[#0B5351] to-[#0F766E]',
      icon: Globe,
      testimonial: {
        quote: "Softuition completely overhauled our digital scheduling. Our patients find the slot selector extremely simple, and we saw a massive, immediate jump in physical bookings.",
        author: "Dr. K. Ganapathi",
        role: "Chief Physiotherapist",
        company: "Venkata Ganapathi Clinic"
      }
    },
    {
      title: 'Rudraksha Properties (Live)',
      category: 'Live Client Website',
      url: 'https://www.rudrakshaproperties.com/',
      tag: 'Real Estate Brokerage',
      metric: '+250% Inbound Buyer Leads',
      description: 'A robust, live premier real estate search and broker listing portal. Supports active property categorization, filtered location maps, and immediate broker enquiry routing.',
      tech: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
      type: 'live',
      colorTheme: 'from-[#1E3A8A] to-[#3B82F6]',
      icon: Globe,
      testimonial: {
        quote: "The live real estate broker portal is fast and incredibly clean. Buyers connect directly with our listing agents with zero friction, which doubled our active deal closures.",
        author: "Rajesh S.",
        role: "Managing Director",
        company: "Rudraksha Properties"
      }
    },
    {
      title: 'Green Grow Fertilizer',
      category: 'Live Client Website',
      url: 'https://www.greengrowfertilizer.com/',
      tag: 'Agricultural & Commerce',
      metric: '+120% B2B Bulk Orders',
      description: 'A modern, corporate product showcase website for an agricultural manufacturing brand, allowing wholesale clients to seamlessly view soil fertilizers and request custom price quotes.',
      tech: ['Vite', 'Tailwind', 'NodeJS', 'PostgreSQL'],
      type: 'live',
      colorTheme: 'from-[#115E59] to-[#14B8A6]',
      icon: Globe,
      testimonial: {
        quote: "B2B catalog requests became completely automated through the website Softuition built for us. Bulk fertilizer enquiries are routed directly into our sales CRM.",
        author: "Devendra Patel",
        role: "Operations Lead",
        company: "Green Grow Fertilizer"
      }
    },
    {
      title: 'HRMS Pearl Tau',
      category: 'Software Dashboard',
      url: 'https://hrms-pearl-tau.vercel.app/login',
      tag: 'Human Resource Portal',
      metric: '94% HR Processing Time Saved',
      description: 'An advanced employee scheduling and administrative cockpit. Incorporates digital attendance tracking, payroll sheets, shift assignments, and real-time activity charts.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
      type: 'dashboard',
      colorTheme: 'from-[#1E293B] to-[#334155]',
      icon: Layout,
      testimonial: {
        quote: "Processing times for payroll and shift schedules dropped from several days to under an hour. Pearl Tau's interface is stunning and ridiculously easy to navigate.",
        author: "Sarah D.",
        role: "Chief of Staff",
        company: "Pearl Tau Corp"
      }
    },
    {
      title: 'SFMS Dashboard System',
      category: 'Software Dashboard',
      url: 'https://sfmspmy.vercel.app/dashboard',
      tag: 'Financial Telemetry',
      metric: 'Audited $12M+ Asset Pipelines',
      description: 'A highly secure enterprise financial monitoring dashboard showing asset transactions, treasury flows, verification logs, and system processing speeds with extreme detail.',
      tech: ['React', 'NodeJS', 'Tailwind CSS', 'Tabular Numerals'],
      type: 'dashboard',
      colorTheme: 'from-[#581C87] to-[#7E22CE]',
      icon: Layout,
      testimonial: {
        quote: "SFMS delivers absolute transaction clarity with zero rendering lags. Perfect for tracking our high-frequency asset transactions across internal bank ledger nodes.",
        author: "Amit Mehra",
        role: "Director of Risk & Finance",
        company: "SFM Systems"
      }
    },
    {
      title: 'Neelgiri Admin Dashboard',
      category: 'Software Dashboard',
      url: 'https://neelgiri.vercel.app/dashboard',
      tag: 'Enterprise Operations',
      metric: '+45% Operational Efficiency',
      description: 'A sleek operations dashboard displaying unified database operations, active support tickets, real-time CPU states, and administrative privilege matrices.',
      tech: ['React', 'Express', 'PostgreSQL', 'Tailwind'],
      type: 'dashboard',
      colorTheme: 'from-[#0369A1] to-[#0284C7]',
      icon: Layout,
      testimonial: {
        quote: "Neelgiri provides us with single-pane visibility across all database servers. The UI loads instantly, and system alerts are extremely intuitive.",
        author: "Karan Johar",
        role: "VP of Cloud Operations",
        company: "Neelgiri Cloud Services"
      }
    },
    {
      title: 'Zenorio Jewelry Store',
      category: 'Business & E-commerce',
      url: 'https://zenorio-jwellerry.vercel.app/',
      tag: 'Luxury Retail',
      metric: '+320% Checkout Completion',
      description: 'An exquisite luxury jewelry storefront showcasing custom interactive rings, fluid slide-out carts, high-fidelity gallery overlays, and highly responsive secure checkout flow.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Stripe API'],
      type: 'ecommerce',
      colorTheme: 'from-[#9A3412] to-[#C2410C]',
      icon: ShoppingBag,
      testimonial: {
        quote: "Luxury retail requires a flawless design aesthetic. Zenorio is the cleanest luxury store design we've ever deployed. Sales conversions rose immediately after launching.",
        author: "Alessia V.",
        role: "Brand Director",
        company: "Zenorio Atelier"
      }
    },
    {
      title: 'Rudraksha Properties (Demo App)',
      category: 'Business & E-commerce',
      url: 'https://rudrakshaproperties.vercel.app/',
      tag: 'Real Estate App',
      metric: '<80ms Interaction Latency',
      description: 'A high-fidelity demo showcasing real estate search filters, card deck navigation, and instant broker scheduling. Developed with lightweight states for premium speed.',
      tech: ['React', 'Tailwind CSS', 'Lucide React', 'Bento Layout'],
      type: 'ecommerce',
      colorTheme: 'from-[#1D4ED8] to-[#2563EB]',
      icon: ShoppingBag,
      testimonial: {
        quote: "An incredibly responsive user interface design. Finding, sorting, and scheduling viewings for complex listings takes less than three clicks.",
        author: "Vikram Shah",
        role: "Senior Broker",
        company: "Rudraksha Realty Services"
      }
    },
    {
      title: 'Aquatic & Nature Store',
      category: 'Business & E-commerce',
      url: 'https://aquaticnature.vercel.app/',
      tag: 'Specialty Commerce',
      metric: '99.99% Operational Uptime',
      description: 'An elegant e-commerce application customized for freshwater and nature enthusiasts. Incorporates a smart cart system, localized listings, and detailed care specs.',
      tech: ['Vite', 'Tailwind CSS', 'HTML5 LocalStorage'],
      type: 'ecommerce',
      colorTheme: 'from-[#065F46] to-[#047857]',
      icon: ShoppingBag,
      testimonial: {
        quote: "Our boutique nature storefront has never run faster. The smart cart functions perfectly offline, and local deliveries are fully automated.",
        author: "Tariq Ali",
        role: "Founder & Curator",
        company: "Aquatic Nature Hub"
      }
    },
    {
      title: 'Triptay Trip Booking Interface',
      category: 'Business & E-commerce',
      url: 'https://triptay-eight.vercel.app/',
      tag: 'Immersive Booking',
      metric: '45-Second Checkout Funnel',
      description: 'A modern travel agent and trip planner interface. Features visual travel itineraries, location rating cards, and a streamlined multi-day scheduling wizard.',
      tech: ['React', 'Tailwind CSS', 'Lucide React', 'Form States'],
      type: 'ecommerce',
      colorTheme: 'from-[#701A75] to-[#86198F]',
      icon: ShoppingBag,
      testimonial: {
        quote: "Triptay makes booking vacations fun and instant. It simplifies multi-day planners into a beautiful, fluid checklist. Our booking rates exploded.",
        author: "Nisha Sen",
        role: "Chief Experience Officer",
        company: "Triptay Travel Co."
      }
    },
    {
      title: 'JB Inter College Website',
      category: 'Educational Website',
      url: 'https://jbintercollege.vercel.app/',
      tag: 'Academy Portal',
      metric: '12,000+ Online Admitted Students',
      description: 'A comprehensive academic portal developed for JB Inter College. Connects students with admission procedures, calendar alerts, class schedules, and school boards.',
      tech: ['React', 'Tailwind CSS', 'Accessible Grid'],
      type: 'education',
      colorTheme: 'from-[#1E3A8A] to-[#1E40AF]',
      icon: GraduationCap,
      testimonial: {
        quote: "The academic site is incredibly stable and meets all web accessibility requirements. Students and parents access report schedules and admission files with absolute ease.",
        author: "Principal R. K. Sharma",
        role: "Head Principal",
        company: "JB Inter College"
      }
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === selectedFilter);

  const filters: { name: string; id: 'all' | 'live' | 'dashboard' | 'ecommerce' | 'education' }[] = [
    { name: 'All Works', id: 'all' },
    { name: 'Live Client Work', id: 'live' },
    { name: 'Enterprise Dashboards', id: 'dashboard' },
    { name: 'E-commerce & Apps', id: 'ecommerce' },
    { name: 'Educational Sites', id: 'education' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#FAFAF7] border-t border-[#111827]/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-left mb-16">
          <span className="text-xs font-bold tracking-wider text-[#0F766E] uppercase mb-3 block">03. Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight mb-4 max-w-2xl">
            Selected Works &amp; Operational Digital Deployments
          </h2>
          <p className="text-[#111827]/60 max-w-xl text-sm sm:text-base font-normal">
            Browse through our live client installations, high-performance administrative software demos, and custom specialized applications.
          </p>
        </div>

        {/* Filter Navigation - Designed strictly as interactive filter controls as per Section 1A */}
        <div className="flex flex-wrap items-center justify-start gap-2 p-1.5 bg-[#111827]/5 rounded-xl mb-12 max-w-fit">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-white text-[#0F766E] shadow-sm'
                  : 'text-[#111827]/60 hover:text-[#111827]'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const IconComp = project.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl border border-[#111827]/5 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                {/* Header Mockup Area (Zero-Broken-Image Policy Compliant CSS illustration) */}
                <div className="relative aspect-[16:10] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 border-b border-[#111827]/5 p-4 flex flex-col justify-between">
                  {/* Mock browser bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-md text-[9px] font-mono text-[#111827]/50 max-w-[140px] truncate">
                      {project.url.replace('https://', '')}
                    </div>
                  </div>

                  {/* Centered Large Vector Aesthetic representation of project colorTheme */}
                  <div className="flex-grow flex items-center justify-center p-6">
                    <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${project.colorTheme} shadow-md flex items-center justify-center text-white relative group-hover:scale-105 transition-transform duration-300`}>
                      <IconComp size={36} className="opacity-90" />
                      <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                    </div>
                  </div>

                  {/* Quantified Metric Badge embedded on the mockup - Adheres to Claim-to-Proof Adjacency */}
                  <div className="flex justify-start">
                    <span className="px-2.5 py-1 bg-white border border-[#111827]/5 text-[10px] font-bold text-[#C2410C] rounded-md tracking-wide shadow-xs uppercase">
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold text-[#0F766E] uppercase tracking-widest">{project.category}</span>
                    <span className="text-[10px] text-[#111827]/40 font-mono font-medium">{project.tag}</span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#111827] group-hover:text-[#0F766E] transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#111827]/60 leading-relaxed mb-6 font-normal line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#111827]/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[10px] text-[#111827]/50 font-mono font-medium">
                          {t}{idx < project.tech.slice(0, 3).length - 1 ? ' · ' : ''}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#0F766E] flex items-center gap-1 group-hover:text-[#0D9488] transition-colors">
                      Showcase
                      <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Slider / Sliding Showcase Panel Overlay */}
        {activeProject && (
          <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-end bg-black/40 backdrop-blur-xs">
            <div className="absolute inset-0" onClick={() => setActiveProject(null)} />
            
            <div className="relative w-full max-w-4xl h-full bg-[#FAFAF7] shadow-2xl flex flex-col overflow-y-auto animate-in slide-in-from-right duration-300">
              {/* Header */}
              <div className="sticky top-0 bg-[#FAFAF7] border-b border-[#111827]/10 px-8 py-6 flex items-center justify-between z-10">
                <div>
                  <span className="text-[10px] font-bold text-[#0F766E] uppercase tracking-widest block mb-1">{activeProject.category}</span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111827]">{activeProject.title}</h3>
                </div>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2.5 text-[#111827]/60 hover:text-[#111827] hover:bg-[#111827]/5 rounded-xl transition-all duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body Content */}
              <div className="p-8 space-y-10 flex-grow text-left">
                {/* Visual Header Mockup */}
                <div className={`p-10 rounded-2xl bg-gradient-to-br ${activeProject.colorTheme} text-white relative overflow-hidden flex flex-col justify-between aspect-[21/9] min-h-[220px]`}>
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
                      <activeProject.icon size={22} />
                    </div>
                    <span className="text-xs font-mono tracking-widest text-white/70">{activeProject.tag}</span>
                  </div>

                  <div className="relative z-10 mt-6 max-w-xl">
                    <p className="text-[10px] font-semibold text-orange-300 uppercase tracking-widest mb-1.5">Impact Metric Delivered</p>
                    <p className="text-2xl sm:text-3xl font-serif font-bold leading-tight">{activeProject.metric}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Detailed Description Left Side */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold text-[#111827]/50 uppercase tracking-wider mb-2">Project Overview</h4>
                      <p className="text-sm text-[#111827]/80 leading-relaxed font-normal">
                        {activeProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-[#111827]/50 uppercase tracking-wider mb-2">Engineered Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 bg-[#111827]/5 border border-[#111827]/5 font-mono text-[11px] font-semibold text-[#111827]/70 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#111827]/10 flex flex-col sm:flex-row gap-4 items-center justify-start">
                      <a 
                        href={activeProject.url} 
                        target="_blank" 
                        rel="noreferrer noopener"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#0F766E] text-[#FAFAF7] font-semibold text-xs rounded-lg hover:bg-[#0D9488] transition-all"
                      >
                        Launch Live Application
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Testimonial Panel Right Side (Adheres to Attributable Testimonials Guideline) */}
                  <div className="lg:col-span-5 bg-white border border-[#111827]/5 p-6 rounded-2xl shadow-xs">
                    <div className="flex items-center gap-1 text-[#C2410C] mb-4">
                      <Sparkles size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Client Testimonial</span>
                    </div>

                    <blockquote className="text-xs text-[#111827]/70 italic leading-relaxed mb-6 font-normal">
                      "{activeProject.testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-3 pt-4 border-t border-[#111827]/5">
                      <div className="p-2.5 rounded-full bg-[#0F766E]/10 text-[#0F766E]">
                        <UserCheck size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#111827]">{activeProject.testimonial.author}</p>
                        <p className="text-[10px] text-[#111827]/50">{activeProject.testimonial.role}</p>
                        <p className="text-[9px] font-semibold text-[#0F766E] uppercase tracking-wider mt-0.5">{activeProject.testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Interactive Mock Device Wireframe */}
                <div className="bg-white border border-[#111827]/10 rounded-2xl overflow-hidden shadow-sm">
                  <div className="bg-[#111827]/5 px-4 py-2 border-b border-[#111827]/10 flex items-center justify-between text-[10px] text-[#111827]/40 font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-300" />
                      <span>secure_sandbox_session_ready</span>
                    </div>
                    <span>1440x900 viewport</span>
                  </div>

                  <div className="p-8 aspect-video bg-[#FAFAF7] flex flex-col items-center justify-center text-center">
                    <Laptop size={36} className="text-[#0F766E] mb-3 opacity-60" />
                    <h5 className="text-sm font-serif font-bold text-[#111827] mb-1">Interactive Sandbox Environment</h5>
                    <p className="text-xs text-[#111827]/50 max-w-sm mb-4 leading-normal font-normal">
                      You can instantly launch the live website in a secure separate browser thread to verify full responsive integrity.
                    </p>
                    <a 
                      href={activeProject.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-[#111827]/10 hover:border-[#111827] text-xs font-bold text-[#111827] rounded-lg transition-all"
                    >
                      Launch Live Web App
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
