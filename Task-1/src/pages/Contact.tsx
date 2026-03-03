import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 bg-slate-950">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Get in <span className="text-gradient-cyan">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Let's build something amazing together.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-lg text-slate-400 mb-10">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-neon-cyan shrink-0 border border-white/10">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Phone</div>
                      <div className="text-slate-400">+1 (555) 000-0000</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-neon-cyan shrink-0 border border-white/10">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Email</div>
                      <div className="text-slate-400">hello@nexus.com</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-neon-cyan shrink-0 border border-white/10">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Office</div>
                      <div className="text-slate-400">123 Innovation Way, Tech City, TC 54321</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl text-white border border-white/10 shadow-2xl shadow-neon-cyan/5">
                <h3 className="text-xl font-bold mb-4">Join our newsletter</h3>
                <p className="text-slate-400 mb-6">Get the latest news and updates from Nexus.</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-grow px-4 py-3 rounded-xl bg-white/5 text-white placeholder-slate-500 border border-white/10 focus:ring-2 focus:ring-neon-cyan outline-none transition-all"
                  />
                  <button className="px-6 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-neon-cyan transition-all">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white/5 p-8 md:p-12 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-neon-emerald/10 text-neon-emerald rounded-full flex items-center justify-center mx-auto mb-6 border border-neon-emerald/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-lg text-slate-400 mb-8">
                      Thank you for reaching out. We'll be in touch with you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-neon-cyan font-bold hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-mono uppercase tracking-widest text-slate-400">First Name</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-mono uppercase tracking-widest text-slate-400">Last Name</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono uppercase tracking-widest text-slate-400">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono uppercase tracking-widest text-slate-400">Subject</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all appearance-none">
                        <option>General Inquiry</option>
                        <option>Project Proposal</option>
                        <option>Partnership</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono uppercase tracking-widest text-slate-400">Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition-all resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button
                      disabled={loading}
                      type="submit"
                      className="w-full py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-neon-cyan transition-all flex items-center justify-center disabled:opacity-70 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    >
                      {loading ? (
                        <div className="w-6 h-6 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
