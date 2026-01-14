import { motion } from 'framer-motion';
import { ChevronDown, Droplets, Sun, Wind, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated particles/bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-wide text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* WEFE Icons */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { Icon: Droplets, label: 'Water' },
              { Icon: Sun, label: 'Energy' },
              { Icon: Leaf, label: 'Food' },
              { Icon: Wind, label: 'Ecosystem' },
            ].map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs text-primary-foreground/80">{label}</span>
              </motion.div>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-primary-foreground mb-6 leading-tight"
          >
            WEFE-TECH
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light"
          >
            Water • Energy • Food • Ecosystem
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8"
          >
            Innovative climate control technology using salt water and solar energy to transform hot arid regions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8"
              asChild
            >
              <a href="#features">Discover Our Solution</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          {/* Temperature highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="inline-block glass-card rounded-2xl px-8 py-6"
          >
            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-heading font-bold text-destructive">40°C</span>
                <span className="text-sm text-muted-foreground">Outdoor</span>
              </div>
              <div className="flex items-center">
                <div className="w-16 h-1 bg-gradient-to-r from-destructive to-teal rounded-full" />
                <span className="mx-2 text-muted-foreground">→</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-heading font-bold text-teal">25°C</span>
                <span className="text-sm text-muted-foreground">With WEFE-TECH</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#features"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </section>
  );
};
