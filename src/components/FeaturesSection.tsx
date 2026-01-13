import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Thermometer, Wind, Droplets, Leaf, Zap, Sun } from 'lucide-react';
import labScale from '@/assets/lab-scale.jpg';
import wefeSystem from '@/assets/wefe-system.jpg';

const features = [
  {
    icon: Thermometer,
    title: 'Air Cooling',
    description: 'Revolutionary outdoor air cooling reducing temperature from 40°C to 25°C. With just 3kW of solar energy input, we produce 695kW of cooling capacity - an unprecedented efficiency ratio of 1:230. This passive system requires no compressor, no refrigerant gas, and operates silently with minimal maintenance.',
  },
  {
    icon: Wind,
    title: 'Air Purification',
    description: 'Natural air washing process using salt water that purifies over 100 million cubic meters of air daily. This eliminates dust particles, pollutants, bacteria, viruses, and allergens. The salt water acts as a natural disinfectant, creating healthier environments for agriculture and human activity.',
  },
  {
    icon: Droplets,
    title: 'Water Desalination',
    description: 'Transform sea water or brackish groundwater into usable fresh water through natural evaporation-condensation processes. Unlike traditional desalination plants, our system requires no high-pressure membranes, no chemicals, and produces zero harmful brine discharge to the environment.',
  },
  {
    icon: Leaf,
    title: 'Support Irrigation & Water Saving',
    description: 'By increasing ambient humidity and reducing evapotranspiration, plants absorb water more efficiently. This enables "supported dry-farming" techniques, reducing irrigation water needs by up to 60% while maintaining optimal crop growth in regions with less than 200mm annual rainfall.',
  },
  {
    icon: Zap,
    title: 'PV Panel Enhancement',
    description: 'Boost photovoltaic panel efficiency by 15% and extend lifespan by 30% through contactless air cooling. When PV panels overheat, they lose efficiency dramatically. Our cooling spray maintains optimal operating temperature without any direct contact with the panels.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Salt Water Supply',
    description: 'Sea water or brackish groundwater is pumped to the system using solar-powered pumps, requiring minimal energy input.',
  },
  {
    step: '02',
    title: 'Atomization',
    description: 'Water is atomized into ultra-fine droplets (10-50 microns) creating a mist that maximizes evaporation surface area.',
  },
  {
    step: '03',
    title: 'Natural Evaporation',
    description: 'Hot dry air naturally evaporates the water droplets, absorbing heat energy and cooling the surrounding environment significantly.',
  },
  {
    step: '04',
    title: 'Multi-Benefit Output',
    description: 'Simultaneously delivers cool humid air, purified atmosphere, reduced water loss, and enhanced conditions for agriculture and solar panels.',
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
        <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{feature.title}</h3>
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
            Revolutionary WEFE-TECH Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            WEFE-TECH harnesses the abundant power of salt water and solar energy to deliver a comprehensive solution for hot arid regions. Our patented technology addresses the interconnected challenges of Water scarcity, Energy needs, Food security, and Ecosystem restoration simultaneously.
          </p>
        </motion.div>

        {/* Technical Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-secondary/50 rounded-2xl p-8 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-8 h-8 text-primary" />
                <h3 className="font-heading font-bold text-xl text-foreground">The Science Behind WEFE-TECH</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our technology exploits a fundamental physics principle: water evaporation absorbs enormous amounts of heat energy. When 1 liter of water evaporates, it absorbs 2.4 MJ (0.667 kWh) of thermal energy from the surrounding air, cooling it significantly without any mechanical refrigeration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In hot arid regions where temperatures regularly exceed 40°C and humidity is below 30%, the evaporation potential is extremely high. WEFE-TECH strategically uses this natural phenomenon, combined with abundant solar energy and available salt water (sea water or brackish groundwater), to create comfortable microclimates.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={wefeSystem} 
                alt="WEFE-TECH scientific principle" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
            How WEFE-TECH Works
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-heading font-bold text-primary/10 mb-2">{item.step}</div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-8 h-0.5 bg-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                Proven technology scaling from controlled lab experiments to commercial pilot deployments. Our modular design allows flexible installation from small greenhouse applications to large-scale agricultural operations covering hectares of land.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
