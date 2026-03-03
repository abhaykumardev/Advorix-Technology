import React from 'react';
import { Monitor, Smartphone, Layout, Search, Megaphone, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      desc: 'Custom, responsive websites built with modern frameworks like React, Next.js, and Node.js.',
      icon: Code,
      color: 'text-neon-cyan',
      glow: 'shadow-neon-cyan/20'
    },
    {
      title: 'Mobile Apps',
      desc: 'Native and cross-platform mobile applications for iOS and Android that users love.',
      icon: Smartphone,
      color: 'text-neon-purple',
      glow: 'shadow-neon-purple/20'
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centric design that balances aesthetics with functionality for optimal engagement.',
      icon: Layout,
      color: 'text-neon-emerald',
      glow: 'shadow-neon-emerald/20'
    },
    {
      title: 'Digital Marketing',
      desc: 'Comprehensive marketing strategies to increase your brand visibility and conversion rates.',
      icon: Megaphone,
      color: 'text-neon-cyan',
      glow: 'shadow-neon-cyan/20'
    },
    {
      title: 'SEO Optimization',
      desc: 'Data-driven SEO techniques to help your business rank higher on search engine results.',
      icon: Search,
      color: 'text-neon-purple',
      glow: 'shadow-neon-purple/20'
    },
    {
      title: 'Cloud Solutions',
      desc: 'Scalable cloud infrastructure and migration services to modernize your business operations.',
      icon: Monitor,
      color: 'text-neon-emerald',
      glow: 'shadow-neon-emerald/20'
    },
  ];

  return (
    <div className="pt-24 bg-slate-950">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Our <span className="text-gradient-cyan">Services</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We offer a wide range of digital services to help your business grow and succeed in the modern marketplace.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 transition-all group">
                <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 border border-white/10 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center text-neon-cyan font-mono text-sm uppercase tracking-wider hover:text-white transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">How We Work</h2>
            <p className="mt-4 text-lg text-slate-400">Our streamlined process ensures quality and efficiency at every step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We start by understanding your goals, audience, and requirements.' },
              { step: '02', title: 'Strategy', desc: 'We develop a comprehensive plan and roadmap for your project.' },
              { step: '03', title: 'Execution', desc: 'Our team builds and designs your solution with precision.' },
              { step: '04', title: 'Delivery', desc: 'We launch your project and provide ongoing support.' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-white/5 mb-4 font-mono">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
