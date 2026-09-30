import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavClick: (sectionId: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#FAFAF7]">
      {/* Decorative clean background patterns - subtle teal and copper light blooms (no garish neon colors) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Soft, warm ambient light at top-right */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C2410C]/5 blur-[120px]" />
        {/* Soft, professional teal ambient light at bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0F766E]/5 blur-[120px]" />
        
        {/* Subtle geometric background grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(#111827 1.5px, transparent 1.5px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        {/* Left Column: Headline and Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Subtle micro tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F766E]/10 rounded-full text-[#0F766E] text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#0F766E] animate-pulse" />
            Empowering Digital Excellence
          </div>

          {/* Headline - Balanced using max-w and text-wrap */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#111827] tracking-tight leading-[1.1] mb-6 max-w-2xl text-wrap-balance">
            Softuition <br />
            <span className="text-[#0F766E]">IT Solutions</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-[#111827]/70 leading-relaxed max-w-xl mb-10 font-normal">
            We Build Smart Digital Solutions for Growing Businesses. Custom websites, high-performance software, and systems designed to scale your business operations seamlessly.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavClick('portfolio')}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0F766E] text-[#FAFAF7] font-semibold text-sm rounded-lg hover:bg-[#0D9488] active:bg-[#0B7D77] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              View Our Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavClick('contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#FAFAF7] text-[#111827] border border-[#111827]/20 font-semibold text-sm rounded-lg hover:bg-[#111827] hover:text-[#FAFAF7] hover:border-[#111827] transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-12 pt-8 border-t border-[#111827]/10 w-full grid grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#C2410C]" />
              <span className="text-xs font-semibold text-[#111827]/80">Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#C2410C]" />
              <span className="text-xs font-semibold text-[#111827]/80">On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#C2410C]" />
              <span className="text-xs font-semibold text-[#111827]/80">Secure Systems</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Abstract Tech Frame (Elegant Graphic representation) */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-2xl border border-[#111827]/10 bg-white p-6 shadow-xl relative overflow-hidden group">
            {/* Soft inner glow */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0F766E] to-[#C2410C]" />
            
            <div className="flex items-center justify-between border-b border-[#111827]/10 pb-4 mb-6">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs font-mono text-[#111827]/40">softuition.system.config</span>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#111827]/5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#0F766E]">Enterprise Websites</span>
                  <span className="text-[10px] font-mono text-[#C2410C] font-semibold">Active</span>
                </div>
                <div className="h-1.5 w-full bg-[#111827]/10 rounded-full overflow-hidden">
                  <div className="h-full w-[94%] bg-[#0F766E] rounded-full" />
                </div>
              </div>

              <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#111827]/5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#0F766E]">Custom CRM &amp; ERP Platforms</span>
                  <span className="text-[10px] font-mono text-[#C2410C] font-semibold">Deploying</span>
                </div>
                <div className="h-1.5 w-full bg-[#111827]/10 rounded-full overflow-hidden">
                  <div className="h-full w-[88%] bg-[#0F766E] rounded-full" />
                </div>
              </div>

              <div className="p-3 bg-[#FAFAF7] rounded-lg border border-[#111827]/5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#0F766E]">HRMS Solutions</span>
                  <span className="text-[10px] font-mono text-[#C2410C] font-semibold">Ready</span>
                </div>
                <div className="h-1.5 w-full bg-[#111827]/10 rounded-full overflow-hidden">
                  <div className="h-full w-[100%] bg-[#0F766E] rounded-full" />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#111827]/5 flex items-center justify-between text-xs text-[#111827]/50 font-medium">
              <span>Operational Efficiency</span>
              <span className="font-mono text-[#111827] font-semibold">99.8% Perfect</span>
            </div>

            {/* Subtle background abstract graphic floating */}
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#0F766E]/10 rounded-full blur-xl group-hover:bg-[#0F766E]/15 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
