import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Thermometer, Wind, Droplets, Leaf, Zap } from 'lucide-react';
import labScale from '@/assets/lab-scale.jpg';

const features = [
  {
    icon: Thermometer,
    title: 'Air Cooling',
    description: 'Reduce outdoor temperature from 40°C to 25°C using only 3kW of solar energy while producing 695kW of cooling capacity.',
  },
  {
    icon: Wind,
    title: 'Air Purification',
    description: 'Purify over 100 million cubic meters of air daily by washing it with salt water, eliminating dust, pollutants, bacteria and viruses.',
  },
  {
    icon: Droplets,
    title: 'Water Desalination',
    description: 'Transform sea water or brackish water into usable fresh water through natural evaporation processes.',
  },
  {
    icon: Leaf,
    title: 'Support Irrigation',
    description: 'Increase humidity and reduce evapotranspiration for efficient water absorption by plants, enabling supported dry-farming.',
  },
  {
    icon: Zap,
    title: 'PV Enhancement',
    description: 'Boost photovoltaic panel efficiency by 15% and extend lifespan by 30% through contactless air cooling.',
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
        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            WEFE-TECH harnesses the power of salt water and solar energy to deliver cooling, humidification, water desalination, water saving and air purification simultaneously.
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
              <p className="text-primary-foreground/80">Proven technology scaling from lab experiments to commercial deployments</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
