import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle, RefreshCw, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    id: string;
    timestamp: string;
  } | null>(null);

  const servicesList = [
    'Website Development',
    'Software Development',
    'CRM Development',
    'HRMS Solutions',
    'App Development',
    'UI/UX Design',
    'Consulting & Support'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your project details.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API pipeline latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionReceipt({
        id: `SFT-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      service: 'Website Development',
      message: '',
    });
    setIsSubmitted(false);
    setSubmissionReceipt(null);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAF7] border-t border-[#111827]/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Corporate Coordinates */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-wider text-[#0F766E] uppercase mb-3 block">05. Engagement</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight mb-6">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-sm sm:text-base text-[#111827]/60 leading-relaxed mb-10 font-normal">
              Have a critical website, high-performance software system, or custom business database to engineer? Contact us now. Our senior advisory leads reply within 4 business hours.
            </p>

            <div className="space-y-6 w-full">
              {/* Telephone */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-[#111827]/5 transition-all">
                <div className="p-3 bg-[#0F766E]/5 text-[#0F766E] rounded-xl">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111827]/40 uppercase tracking-wider mb-1">Call Our Advisory Experts</h4>
                  <p className="text-sm font-serif font-bold text-[#111827] mb-0.5">
                    <a href="tel:7803927245" className="hover:text-[#0F766E] transition-colors">7803927245</a>
                  </p>
                  <p className="text-sm font-serif font-bold text-[#111827]">
                    <a href="tel:9329900464" className="hover:text-[#0F766E] transition-colors">9329900464</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-[#111827]/5 transition-all">
                <div className="p-3 bg-[#0F766E]/5 text-[#0F766E] rounded-xl">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111827]/40 uppercase tracking-wider mb-1">Corporate Enquiries</h4>
                  <p className="text-sm font-serif font-bold text-[#111827]">
                    <a href="mailto:sales.softuition@gmail.com" className="hover:text-[#0F766E] transition-colors">sales.softuition@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Work Hours */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white border border-transparent hover:border-[#111827]/5 transition-all">
                <div className="p-3 bg-[#0F766E]/5 text-[#0F766E] rounded-xl">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111827]/40 uppercase tracking-wider mb-1">Operational Hours</h4>
                  <p className="text-xs text-[#111827]/60 leading-normal">
                    Monday – Saturday: 09:00 AM – 07:00 PM <br />
                    Response window guaranteed within 4 Hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Fully Validated Lead Capture Interface */}
          <div className="lg:col-span-7 bg-white border border-[#111827]/5 p-8 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden">
            
            {/* Top design highlight bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0F766E] to-[#C2410C]" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="border-b border-[#111827]/10 pb-4 mb-6">
                  <h3 className="text-lg font-serif font-bold text-[#111827]">Project Inquiry Pipeline</h3>
                  <p className="text-xs text-[#111827]/50 mt-1 font-normal">Please complete the coordinates so our developers can pre-analyze your request.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-bold text-[#111827]/70 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Thakur"
                      className={`w-full px-4 py-3 bg-[#FAFAF7] border rounded-lg text-sm text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:ring-1 focus:ring-[#0F766E] transition-all ${
                        errors.name ? 'border-red-400' : 'border-[#111827]/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] font-bold text-[#111827]/70 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. vickythakur@gmail.com"
                      className={`w-full px-4 py-3 bg-[#FAFAF7] border rounded-lg text-sm text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:ring-1 focus:ring-[#0F766E] transition-all ${
                        errors.email ? 'border-red-400' : 'border-[#111827]/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service drop-down */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-[11px] font-bold text-[#111827]/70 uppercase tracking-wider">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#FAFAF7] border border-[#111827]/10 rounded-lg text-sm text-[#111827] focus:outline-none focus:ring-1 focus:ring-[#0F766E] transition-all"
                  >
                    {servicesList.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-bold text-[#111827]/70 uppercase tracking-wider">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your system requirements, timeline, budget, or other coordinates..."
                    className={`w-full px-4 py-3 bg-[#FAFAF7] border rounded-lg text-sm text-[#111827] placeholder-[#111827]/30 focus:outline-none focus:ring-1 focus:ring-[#0F766E] transition-all ${
                      errors.message ? 'border-red-400' : 'border-[#111827]/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-500 flex items-center gap-1">
                      <AlertCircle size={10} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button with animated feedback */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#0F766E] text-[#FAFAF7] font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#0D9488] active:bg-[#0B7D77] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="animate-spin" size={14} />
                      Analyzing Coordinates...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Transmit Project Brief
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* High-End Confirmation Receipt View (Anti-Slop / Professional Engagement) */
              <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                <div className="inline-flex p-4 bg-[#0F766E]/10 text-[#0F766E] rounded-full">
                  <CheckCircle size={44} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-[#111827]">Transmission Received Successfully</h3>
                  <p className="text-xs text-[#111827]/60 max-w-sm mx-auto font-normal">
                    Thank you, <strong className="text-[#111827] font-semibold">{formData.name}</strong>. Your project coordinates have been logged in our queue.
                  </p>
                </div>

                {/* Compact elegant Receipt Details */}
                <div className="max-w-md mx-auto bg-[#FAFAF7] border border-[#111827]/5 p-6 rounded-2xl text-left space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono border-b border-[#111827]/5 pb-3">
                    <span className="text-[#111827]/40">RECEIPT NUMBER</span>
                    <span className="font-bold text-[#C2410C]">{submissionReceipt?.id}</span>
                  </div>

                  <div className="space-y-2 text-xs text-[#111827]/70 font-normal">
                    <div className="flex justify-between">
                      <span>Inquirer:</span>
                      <span className="font-semibold text-[#111827]">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mailing Target:</span>
                      <span className="font-semibold text-[#111827]">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Selected Class:</span>
                      <span className="font-semibold text-[#0F766E]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timestamp:</span>
                      <span className="font-mono text-[10px] text-[#111827]">{submissionReceipt?.timestamp} Today</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#111827]/5 text-center">
                    <p className="text-[10px] font-semibold text-[#0F766E] tracking-wider uppercase">
                      Advisor Assigned · SLA Response &lt; 4 Hours
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-[#0F766E] hover:text-[#0D9488] hover:underline flex items-center gap-1.5 mx-auto transition-colors cursor-pointer"
                >
                  Submit Another Brief
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
