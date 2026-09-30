import { Code2, Target, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    {
      title: 'Scalable Architecture',
      description: 'We engineer software systems that seamlessly handle growing traffic and expanding user bases with zero performance compromise.',
      icon: Code2,
    },
    {
      title: 'Cost-Effective Innovation',
      description: 'Our high-performance solutions are budgeted perfectly for business growth, ensuring excellent returns on investment.',
      icon: Target,
    },
    {
      title: 'Client-Centric Process',
      description: 'We follow structured communication and sprint cycles, ensuring on-time delivery with completely transparent development status.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAFAF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Narrative Content & Mission */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-wider text-[#0F766E] uppercase mb-3">01. Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] mb-6 leading-tight max-w-lg">
              Engineering Cost-Effective &amp; Scalable Tech Foundations
            </h2>
            
            <p className="text-base text-[#111827]/70 leading-relaxed mb-6 font-normal">
              At <strong className="text-[#111827] font-semibold">Softuition IT Solutions</strong>, we specialize in developing modern enterprise websites, cloud business software, advanced CRM systems, and custom HRMS platforms.
            </p>
            
            <p className="text-base text-[#111827]/70 leading-relaxed mb-10 font-normal">
              We empower startups and growing companies alike with high-performance, cost-effective digital environments. Our platforms are crafted to drive efficiency, scale operations, and turn custom software into your ultimate competitive edge.
            </p>

            {/* Micro stats to support claims immediately in about context */}
            <div className="grid grid-cols-3 gap-6 w-full border-t border-[#111827]/10 pt-8 mt-4">
              <div>
                <p className="text-3xl font-serif font-bold text-[#0F766E] tabular-nums">50+</p>
                <p className="text-xs font-semibold text-[#111827]/60 mt-1 uppercase tracking-wider">Deployments</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-[#0F766E] tabular-nums">100%</p>
                <p className="text-xs font-semibold text-[#111827]/60 mt-1 uppercase tracking-wider">On-Time</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-[#0F766E] tabular-nums">10/10</p>
                <p className="text-xs font-semibold text-[#111827]/60 mt-1 uppercase tracking-wider">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Block: Core Pillars Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#111827]/5 p-1 rounded-2xl">
              <div className="bg-white p-8 rounded-2xl border border-[#111827]/5 shadow-sm">
                <h3 className="text-lg font-serif font-bold text-[#111827] mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-[#C2410C]" size={20} /> Our Core Delivery Model
                </h3>
                
                <div className="space-y-6 text-left">
                  {points.map((point, index) => {
                    const IconComponent = point.icon;
                    return (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="p-2.5 rounded-lg bg-[#0F766E]/10 text-[#0F766E] shrink-0 mt-1">
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#111827] mb-1">{point.title}</h4>
                          <p className="text-xs text-[#111827]/60 leading-relaxed font-normal">{point.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
