import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Thermometer, Wind, Droplets, Leaf, Zap } from 'lucide-react';
import labScale from '@/assets/lab-scale.jpg';

const features = [
  {
    icon: Thermometer,
    title: 'Air Cooling',
    description: 'The WEFE TECH system harnesses the power of nature to cool the air. Our commercial unit delivers 695 kW cooling capacity—equivalent to 198 traditional 12,000 BTU air conditioners—using only 3 kW of solar energy. That means 99.5% of cooling comes from natural water evaporation.',
    highlight: '230x more efficient than consumed energy',
  },
  {
    icon: Wind,
    title: 'Air Purification',
    description: 'An effective air purification system that washes air with salt water, capable of killing bacteria and viruses. One unit purifies over 100 million cubic meters of air daily—washing air inside and outside the device to create a pure, healthy environment for humans, animals and plants.',
    highlight: '100M+ m³ purified daily',
  },
  {
    icon: Droplets,
    title: 'Water Desalination',
    description: 'Transform sea water or brackish water into usable fresh water through natural evaporation processes. Unlike conventional systems, WEFE TECH needs only 1000 L/h of salty water—no separate desalination required—with zero CO2 emissions.',
    highlight: 'Zero CO2 emissions',
  },
  {
    icon: Leaf,
    title: 'Support Irrigation',
    description: 'The system increases relative humidity with fine water droplets for efficient plant absorption, while temperature reduction significantly lowers evapotranspiration. This ensures effective water-saving and supported dry-farming with high quality, strong-rooted plants.',
    highlight: 'Supported dry-farming',
  },
  {
    icon: Zap,
    title: 'PV Enhancement',
    description: 'WEFE TECH provides contactless, unaltered air cooling of photovoltaic systems for efficient heat dissipation. Boost your PV-solar power plant yield by 15% and extend panel lifetime by 30%—we change your climate with steady cold wind.',
    highlight: '15% more yield, 30% longer life',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/30"
    >
      <div className="absolute inset-0 rounded-xl gradient-ocean opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      <div className="relative">
        <div className="w-14 h-14 rounded-xl gradient-ocean flex items-center justify-center mb-4">
          <feature.icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{feature.description}</p>
        <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {feature.highlight}
        </span>
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="features" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Five-in-One Solution
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Revolutionary Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            WEFE-TECH harnesses the power of salt water and solar energy to deliver cooling, humidification, water desalination, water saving and air purification simultaneously. 
            The system simulates the natural water cycle, accelerating it to occur in hours instead of seasons.
          </p>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-secondary/50 rounded-2xl p-8 mb-16"
        >
          <h3 className="font-heading font-bold text-xl text-foreground mb-4 text-center">How It Works</h3>
          <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            The WEFE TECH system uses salt water (sea water or brackish water) and solar energy in both forms (thermal and photovoltaic). 
            It relies on purely physical scientific principles without any chemical catalyst or additive. Salt water is the driver—valued as an inexhaustible, 
            abundant resource to produce cold air, desalted water, purified air, and humidified atmosphere favorable for crop cultivation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Scale comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-strong"
        >
          <img 
            src={labScale} 
            alt="WEFE-TECH from lab to industrial scale" 
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 to-transparent flex items-end">
            <div className="p-8 text-primary-foreground">
              <h3 className="font-heading font-bold text-2xl mb-2">From Lab to Industrial Scale</h3>
              <p className="text-primary-foreground/80 max-w-2xl">
                Proven technology scaling from lab experiments to pilot scale to commercial deployments. 
                Our modular system adapts to any project size with consistent performance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
