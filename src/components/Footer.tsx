import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-ocean-deep py-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg gradient-sky flex items-center justify-center">
              <Droplets className="w-5 h-5 text-ocean-deep" />
            </div>
            <span className="font-heading font-bold text-xl text-primary-foreground">WEFE-TECH</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/60 text-sm"
          >
            © {new Date().getFullYear()} BRIK OUTDOOR AC. All rights reserved.
          </motion.p>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-6"
          >
            <a href="#home" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Home
            </a>
            <a href="#features" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Features
            </a>
            <a href="#contact" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Contact
            </a>
          </motion.nav>
        </div>
      </div>
    </footer>
  );
};
