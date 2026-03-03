import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Menu, 
  X,
  Github,
  Twitter,
  Linkedin,
  Cpu,
  Globe,
  Layers,
  Sparkles,
  ChevronDown,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[95%] max-w-6xl ${isScrolled ? 'glass-dark py-3 px-10 rounded-full shadow-[0_0_50px_rgba(139,92,246,0.1)] border-white/10' : 'bg-transparent py-6 px-8 rounded-none border-transparent'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <div className="w-11 h-11 bg-gradient-to-tr from-violet-600 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg relative z-10 group-hover:rotate-12 transition-transform">
              <Zap className="text-white w-6 h-6" />
            </div>
          </div>
          <span className="font-display font-bold text-2xl tracking-[-0.05em] text-white">LUMINA</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {['Capabilities', 'Architecture', 'Process', 'Pricing'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400 hover:text-white transition-all hover:tracking-[0.35em] relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-white transition-colors">Portal</button>
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
              Join Waitlist
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 glass-dark rounded-3xl p-8 flex flex-col gap-6 md:hidden border border-white/10"
          >
            {['Features', 'Process', 'Pricing', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-stone-300">{item}</a>
            ))}
            <hr className="border-white/10" />
            <button className="bg-violet-600 text-white w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-400 mb-8">
              <Sparkles className="w-3 h-3" />
              Intelligence Reimagined
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 gradient-text-futuristic">
              The Future <br /> 
              <span className="italic font-serif text-violet-400 lowercase">of</span> Work.
            </h1>
            <p className="text-lg md:text-xl text-stone-400 mb-12 max-w-xl leading-relaxed font-light">
              Lumina is the world's first neural productivity engine. It doesn't just manage tasks—it anticipates them, automates them, and evolves with your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-violet-600 text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-violet-500 transition-all shadow-2xl shadow-violet-600/20 flex items-center justify-center gap-3 group">
                Deploy Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-dark text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <Play className="w-4 h-4 fill-white" />
                View System
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-12">
              <div>
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Uptime</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">12M+</div>
                <div className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Tasks Automated</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-dark rounded-[40px] p-4 border-white/20 shadow-2xl overflow-hidden shimmer">
              <img 
                src="https://picsum.photos/seed/dashboard/1200/800?grayscale" 
                className="rounded-[32px] opacity-60 mix-blend-lighten"
                alt="Dashboard"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-dark p-6 rounded-3xl border-white/20 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Task Optimized</div>
                  <div className="text-[10px] text-stone-500">Saved 4.2 hours today</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Neural Core",
      description: "Proprietary LLM optimized for organizational logic and cross-tool reasoning."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Edge Sync",
      description: "Zero-latency synchronization across every device, anywhere in the world."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Deep Context",
      description: "Automatically maps relationships between documents, chats, and codebases."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero-Knowledge",
      description: "End-to-end encryption ensures even we can't see your proprietary data."
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-500 mb-4">Capabilities</div>
          <h2 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
            Engineered for the <br /> <span className="text-stone-500">Next Generation.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-12 hover:bg-white/5 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 glass-dark rounded-2xl flex items-center justify-center mb-8 text-violet-400 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-stone-500 leading-relaxed font-light text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Neural Mapping",
      description: "Lumina scans your existing workflows and maps the hidden connections between your data silos."
    },
    {
      number: "02",
      title: "Pattern Recognition",
      description: "Our engine identifies repetitive bottlenecks and suggests high-impact automation paths."
    },
    {
      number: "03",
      title: "Autonomous Execution",
      description: "Deploy agents that handle scheduling, documentation, and reporting without human intervention."
    }
  ];

  return (
    <section id="process" className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-500 mb-4">The Workflow</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-12">How Lumina <br /> <span className="italic font-serif text-violet-400 lowercase">evolves</span> your team.</h2>
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-4xl font-display font-bold text-white/10 group-hover:text-violet-500/50 transition-colors">{step.number}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-stone-500 font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass-dark rounded-full border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent"></div>
              <div className="w-3/4 h-3/4 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-1/2 h-1/2 border border-violet-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <Zap className="w-20 h-20 text-white relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Core",
      price: "0",
      features: ["3 Neural Agents", "Standard Context Mapping", "Community Support", "Basic Integrations"],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "49",
      features: ["Unlimited Agents", "Deep Context Engine", "Priority Edge Sync", "Advanced Analytics", "Custom Integrations"],
      cta: "Deploy Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Dedicated Neural Core", "On-Premise Deployment", "White-Glove Onboarding", "SLA Guarantees"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Simple, Scalable <br /> <span className="text-stone-500">Intelligence.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[40px] border transition-all duration-500 flex flex-col ${plan.popular ? 'bg-violet-600 border-violet-500 shadow-2xl shadow-violet-600/20 scale-105 z-10' : 'glass-dark border-white/10 hover:border-white/20'}`}
            >
              <div className="mb-10">
                <div className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-4 ${plan.popular ? 'text-white/70' : 'text-violet-500'}`}>{plan.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-6xl font-bold tracking-tighter">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-sm opacity-60">/mo</span>}
                </div>
              </div>
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-light">
                    <CheckCircle2 className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-violet-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${plan.popular ? 'bg-white text-black hover:bg-stone-100' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How does the Neural Context engine work?",
      a: "Our engine uses a proprietary vector-mapping algorithm that analyzes the semantic relationships between your disparate data sources, creating a unified 'knowledge graph' for your organization."
    },
    {
      q: "Is my data used to train global models?",
      a: "Absolutely not. We use an isolated architecture where each organization has its own private neural core. Your data never leaves your secure environment."
    },
    {
      q: "Can I integrate with legacy software?",
      a: "Yes. Lumina supports over 2,000+ native integrations and provides a robust API for custom legacy systems."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked <br /> <span className="text-stone-500">Questions.</span></h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-dark rounded-3xl p-8 border-white/10">
              <h4 className="text-lg font-bold mb-4 flex items-center justify-between">
                {faq.q}
                <ChevronDown className="w-5 h-5 text-stone-500" />
              </h4>
              <p className="text-stone-500 font-light leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-32">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">LUMINA</span>
            </div>
            <p className="text-stone-500 max-w-xs mb-10 font-light leading-relaxed">
              Pioneering the next era of organizational intelligence. Built for teams that demand the impossible.
            </p>
            <div className="flex gap-6">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-stone-500 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {['Product', 'Company', 'Legal'].map((cat) => (
            <div key={cat}>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8">{cat}</h5>
              <ul className="space-y-4 text-sm text-stone-500 font-light">
                {['Link One', 'Link Two', 'Link Three', 'Link Four'].map(link => (
                  <li key={link}><a href="#" className="hover:text-violet-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600">
          <p>© 2026 LUMINA NEURAL SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Architecture = () => {
  return (
    <section id="architecture" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-500 mb-4">The Infrastructure</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Neural Distributed <br /> <span className="text-stone-500">Architecture.</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-dark rounded-[40px] p-12 border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-64 h-64 text-violet-500" />
            </div>
            <h3 className="text-3xl font-bold mb-6">The Core Engine</h3>
            <p className="text-stone-400 font-light leading-relaxed mb-8 max-w-md">
              Our proprietary neural core is distributed across 14 global regions, ensuring sub-50ms latency for real-time reasoning and autonomous execution.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">Tensor-Optimized</div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest">Auto-Scaling</div>
            </div>
          </div>
          
          <div className="glass-dark rounded-[40px] p-12 border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Security Layer</h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                Military-grade encryption with zero-knowledge architecture. Your data is yours alone.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3 text-violet-400">
                <Shield className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">SOC2 Type II Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GlobalReach = () => {
  return (
    <section className="py-32 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-600/20 blur-[120px] rounded-full"></div>
            <Globe className="w-full h-auto text-white/10 animate-[pulse_8s_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-500 blur-xl animate-ping"></div>
                <div className="w-4 h-4 bg-violet-500 rounded-full relative z-10"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-violet-500 mb-4">Global Network</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Intelligence without <br /> <span className="text-stone-500">Boundaries.</span></h2>
            <p className="text-stone-400 font-light leading-relaxed mb-12">
              Lumina operates on a global scale, connecting teams across continents with a unified intelligence layer that transcends time zones and languages.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-2xl font-bold text-white mb-1">140+</div>
                <div className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">Autonomous Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-violet-500/30">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Architecture />
        <Process />
        <GlobalReach />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
