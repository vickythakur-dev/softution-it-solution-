import { 
  Users, 
  Coins, 
  Calendar, 
  ShieldCheck, 
  HeartHandshake 
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Expert Engineering Team',
      description: 'Our senior developers and designers are seasoned experts, bringing robust craftsmanship, clean coding standards, and rigorous testing architectures to every single project.',
      icon: Users,
      metric: 'Senior-Only devs',
    },
    {
      title: 'Affordable & Clean Pricing',
      description: 'No hidden deployment fees, licensing surprises, or sudden maintenance costs. We provide completely transparent, milestones-based budgets that guarantee great values.',
      icon: Coins,
      metric: '0% Hidden Costs',
    },
    {
      title: 'Strict On-Time Delivery',
      description: 'We follow structured scrum environments and keep code repositories active daily. We value speed and execute on precise milestone agreements without delays.',
      icon: Calendar,
      metric: '100% On-Time rate',
    },
    {
      title: 'Secure & Scalable Solutions',
      description: 'All platforms we build are engineered to support active expansions. We implement high-grade database permissions, clean SQL policies, and pre-validated cloud firewalls.',
      icon: ShieldCheck,
      metric: 'Bank-Grade Security',
    },
    {
      title: '100% Client Satisfaction',
      description: 'We stand completely behind our software architecture. We offer complimentary deployment support and active maintenance packages to ensure continuous operational excellence.',
      icon: HeartHandshake,
      metric: 'Complimentary Support',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#FAFAF7] border-t border-[#111827]/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-left mb-16 max-w-xl">
          <span className="text-xs font-bold tracking-wider text-[#0F766E] uppercase mb-3 block">04. Differentiators</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight mb-4">
            Why Forward-Thinking Businesses Choose Softuition
          </h2>
          <p className="text-sm sm:text-base text-[#111827]/60 font-normal">
            We merge clean enterprise engineering with highly cooperative pricing and complete transparency to form long-term technology alliances.
          </p>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            
            // Adjust spans for a premium asymmetric layout
            const gridSpan = index === 3 || index === 4 ? 'md:col-span-1 lg:col-span-1' : 'md:col-span-1';

            return (
              <div 
                key={index}
                className={`group bg-white p-8 rounded-2xl border border-[#111827]/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left ${gridSpan}`}
              >
                <div>
                  {/* Clean header layout with unboxed micro metric indicator instead of pill badges */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3 bg-[#0F766E]/5 text-[#0F766E] rounded-xl group-hover:bg-[#0F766E]/10 transition-colors">
                      <IconComponent size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#C2410C] tracking-wide uppercase">
                      {point.metric}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#111827] mb-3 group-hover:text-[#0F766E] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs text-[#111827]/60 leading-relaxed font-normal mb-6">
                    {point.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#111827]/5 flex items-center gap-1.5 text-[10px] font-bold text-[#0F766E] uppercase tracking-widest mt-auto">
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
