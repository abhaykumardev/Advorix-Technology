import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <Navbar />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
