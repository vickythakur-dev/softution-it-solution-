import { 
  Globe, 
  Code2, 
  LineChart, 
  Briefcase, 
  Smartphone, 
  Palette,
  ArrowUpRight 
} from 'lucide-react';

interface ServicesProps {
  onNavClick: (sectionId: string) => void;
}

export default function Services({ onNavClick }: ServicesProps) {
  const servicesList = [
    {
      title: 'Website Development',
      description: 'Stunning, blazing fast, and SEO-optimized corporate websites and web applications built using cutting-edge React (Vite) and Tailwind stacks.',
      icon: Globe,
      color: 'bg-teal-50 text-teal-700',
    },
    {
      title: 'Software Development',
      description: 'Robust, tailored business-grade software backbones, secure APIs, and bespoke system software designed to eliminate operational bottlenecks.',
      icon: Code2,
      color: 'bg-orange-50 text-orange-700',
    },
    {
      title: 'CRM Development',
      description: 'Custom Customer Relationship Management portals built to aggregate user interactions, track pipelines, and generate custom performance metrics.',
      icon: LineChart,
      color: 'bg-blue-50 text-blue-700',
    },
    {
      title: 'HRMS Solutions',
      description: 'Feature-rich Human Resource Management Systems that automate payroll, shifts, leave schedules, employee directories, and performance grading.',
      icon: Briefcase,
      color: 'bg-indigo-50 text-indigo-700',
    },
    {
      title: 'App Development',
      description: 'High-end responsive progressive web apps (PWAs) and native feel mobile portals engineered for perfect performance on all touch devices.',
      icon: Smartphone,
      color: 'bg-purple-50 text-purple-700',
    },
    {
      title: 'UI/UX Design',
      description: 'Pre-validated interactive design mockups, wireframes, cohesive style guides, and design tokens centered around high usability and premium looks.',
      icon: Palette,
      color: 'bg-rose-50 text-rose-700',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAFAF7] border-t border-[#111827]/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-wider text-[#0F766E] uppercase mb-3 block">02. Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight">
              Bespoke Digital Solutions Tailored For Growing Enterprises
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#111827]/60 max-w-sm mt-4 md:mt-0 font-normal">
            We deliver enterprise-ready technology pipelines with maximum focus on speed, scalability, and secure architecture.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl border border-[#111827]/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left cursor-pointer hover:-translate-y-1"
                onClick={() => onNavClick('contact')}
              >
                {/* Clean, unboxed minimal icon setup */}
                <div className="p-3 bg-[#0F766E]/5 rounded-xl text-[#0F766E] mb-6 group-hover:bg-[#0F766E]/10 transition-colors">
                  <IconComponent size={24} />
                </div>

                <h3 className="text-lg font-serif font-bold text-[#111827] mb-3 flex items-center gap-1 group-hover:text-[#0F766E] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-[#111827]/60 leading-relaxed font-normal mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Micro interactivity trigger */}
                <span className="text-xs font-bold text-[#0F766E] flex items-center gap-1.5 group-hover:text-[#0D9488] transition-colors mt-auto">
                  Get Started
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                
                {/* Thin top gradient light highlight on card focus */}
                <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0F766E] to-[#C2410C] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
