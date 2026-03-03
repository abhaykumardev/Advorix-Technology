import React from 'react';
import { Users, Target, Rocket, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 bg-slate-950">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              We are a team of <span className="text-gradient-cyan">creatives</span> and <span className="text-gradient-purple">engineers</span>.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Founded in 2018, Nexus has grown from a small design studio to a full-service digital agency. We believe in the power of technology to solve complex problems and create meaningful human connections.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-neon-cyan/20 blur-2xl rounded-3xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80"
                alt="Our team"
                className="rounded-3xl shadow-2xl relative z-10 border border-white/10 opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-10">
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-neon-cyan mb-6 border border-white/10">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  To empower businesses by providing innovative, scalable, and user-centric digital solutions that drive sustainable growth and excellence.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-neon-purple mb-6 border border-white/10">
                  <Rocket className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  To be the global leader in digital transformation, recognized for our creativity, technical prowess, and unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white/5 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Clients Worldwide', value: '250+', color: 'text-neon-cyan' },
              { label: 'Projects Completed', value: '600+', color: 'text-neon-purple' },
              { label: 'Team Members', value: '45+', color: 'text-neon-emerald' },
              { label: 'Years Experience', value: '8+', color: 'text-neon-cyan' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase tracking-widest font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Meet Our Leadership</h2>
            <p className="mt-4 text-lg text-slate-400">The minds behind our most successful projects.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Sarah Jenkins', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Michael Chen', role: 'CTO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
              { name: 'Elena Rodriguez', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square border border-white/10">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-neon-cyan font-mono text-sm uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
