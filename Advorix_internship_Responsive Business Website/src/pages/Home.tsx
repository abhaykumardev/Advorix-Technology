import React from 'react';
import { ArrowRight, CheckCircle2, BarChart3, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm font-mono mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-neon-cyan mr-2 animate-pulse"></span>
                SYSTEM_STATUS: ACTIVE // 2026
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Transforming Ideas into <span className="text-gradient-cyan">Digital Reality</span>
              </h1>
              <p className="mt-6 text-lg text-slate-400 sm:text-xl max-w-3xl leading-relaxed">
                Nexus helps forward-thinking companies build, scale, and optimize their digital presence with cutting-edge technology and strategic design.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-slate-950 bg-white hover:bg-neon-cyan md:text-lg transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-neon-cyan/20"
                >
                  Start a Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center justify-center px-8 py-4 border border-white/10 text-base font-bold rounded-2xl text-white bg-white/5 hover:bg-white/10 md:text-lg transition-all backdrop-blur-sm"
                >
                  View Our Work
                </Link>
              </div>
              <div className="mt-12 flex items-center space-x-8 opacity-30 grayscale invert">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-6" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-3xl shadow-[0_0_50px_rgba(0,242,255,0.1)] overflow-hidden border border-white/10">
                <img
                  className="w-full opacity-80"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                  alt="Dashboard preview"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-mono text-neon-cyan tracking-[0.2em] uppercase mb-4">// Why Choose Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Everything you need to scale your business
            </p>
            <p className="mt-4 text-lg text-slate-400">
              We provide a comprehensive suite of tools and expertise to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Strategic Growth',
                desc: 'Data-driven strategies tailored to your unique business goals and market position.',
                icon: BarChart3,
                color: 'neon-cyan'
              },
              {
                title: 'Global Reach',
                desc: 'Expand your presence across borders with localized digital experiences.',
                icon: Globe,
                color: 'neon-purple'
              },
              {
                title: 'Enterprise Security',
                desc: 'Top-tier security protocols to protect your data and your customers privacy.',
                icon: Shield,
                color: 'neon-emerald'
              },
              {
                title: 'High Performance',
                desc: 'Lightning-fast applications built with the latest performance optimizations.',
                icon: Zap,
                color: 'neon-cyan'
              },
              {
                title: 'Proven Results',
                desc: 'A track record of delivering measurable ROI for businesses of all sizes.',
                icon: CheckCircle2,
                color: 'neon-purple'
              },
              {
                title: 'Modern Stack',
                desc: 'We use the most reliable and scalable technologies in the industry.',
                icon: ArrowRight,
                color: 'neon-emerald'
              },
            ].map((feature, idx) => (
              <div key={idx} className="relative group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="relative">
                  <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:text-neon-cyan transition-colors`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden border border-white/10 shadow-2xl shadow-neon-cyan/5">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to take your business to the next level?
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Join hundreds of successful companies that have transformed their digital presence with Nexus.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-neon-cyan transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
