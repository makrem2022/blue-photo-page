import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Thermometer, Wind, Droplets, Leaf, Zap } from 'lucide-react';
import labScale from '@/assets/lab-scale.jpg';

const features = [
  {
    icon: Thermometer,
    title: 'Air Cooling',
    description: 'The WEFE TECH system harnesses the power of nature to cool the air. Our commercial unit delivers 695 kW cooling capacity—equivalent to 198 traditional 12,000 BTU air conditioners—using only 6 kW of solar energy. Instead 260 kW for 200 traditional AC. That means 99.5% of cooling comes from natural water evaporation.',
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
          <h3 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">How It Works</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-muted-foreground leading-relaxed">
                  Low-pressure open nozzle system produces droplets distributed homogeneously in scattered form regularly along a special hydrophobic mesh, so that billions of dispersed droplets are formed and stick on the mesh.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                <p className="text-muted-foreground leading-relaxed">
                  The ambient hot air is drawn from outside to flow into the evaporation chamber at a controlled speed through the meshwork to immerse billions of droplets stuck to the mesh from all sides, evaporating them to produce coolness that turns into cold air which will be blown out.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-muted-foreground leading-relaxed">
                  Water is pumped inside in order to produce constantly and regularly new droplets to replace the evaporated ones and to wash the mesh and protecting it from salting.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</span>
                <p className="text-muted-foreground leading-relaxed">
                  The system uses a high technical efficient and at the same time very cost-effective material as evaporator. This low-cost approach allows us to build evaporative cooling on a very large scale, generating several megawatts of cooling power.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">5</span>
                <p className="text-muted-foreground leading-relaxed">
                  The WEFE-TECH® system is a modular system. After a continuous steady regime is established, its extend achieves about 2500 m² where the temperature is reduced by 10°C to 15°C and the relative humidity is elevated to 90%. Number of modules depends on the required area to be cooled.
                </p>
              </div>
              
              <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                <p className="text-sm text-foreground font-medium">
                  ✨ An additional optional system can be added to convert the excess moisture to 60% into fresh drinking water and the residual brine water into salt. This can easily reach an outside temperature between 19°C to 23°C with humidity between 40% and 60%.
                </p>
              </div>
            </div>
          </div>
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
