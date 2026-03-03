import React, { useState } from 'react';
import { ExternalLink, Plus } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Apps',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Social Media Redesign',
      category: 'UI/UX Design',
      img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Healthcare Management',
      category: 'Mobile Apps',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-24 bg-slate-950">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Our <span className="text-gradient-purple">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of our latest work and the impact we've created for our clients.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-slate-950 sticky top-20 z-30 border-b border-white/5 backdrop-blur-md bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                  filter === cat
                    ? 'bg-white text-slate-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl bg-white/5 aspect-[4/3] border border-white/5">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-neon-cyan text-sm font-mono uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-950 hover:bg-neon-cyan transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white/5 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-neon-cyan mb-8 flex justify-center">
              <Plus className="w-12 h-12 rotate-45 animate-pulse" />
            </div>
            <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed mb-10">
              "Working with Nexus was a game-changer for our brand. Their attention to detail and technical expertise helped us launch a product that exceeded all our expectations."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Client"
                className="w-14 h-14 rounded-full object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <div className="font-bold text-white">David Miller</div>
                <div className="text-slate-500 text-sm font-mono uppercase tracking-wider">CEO, TechFlow Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
