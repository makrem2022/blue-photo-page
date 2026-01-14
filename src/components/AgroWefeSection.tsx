import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Check, Zap, Droplets, Sun, Users, Briefcase, TreePine } from 'lucide-react';
import agroWefe from '@/assets/agro-wefe.jpg';
import agroPv from '@/assets/agro-pv.jpg';

const advantages = [
  {
    icon: Zap,
    title: 'Dual Function',
    description: 'Produces green electricity even in summer seasons while protecting crops and livestock from heat stress and bad weather.',
  },
  {
    icon: Briefcase,
    title: 'Diversified Income',
    description: 'Offers farmers the possibility of producing and selling solar electricity through a win-win partnership with energy suppliers.',
  },
  {
    icon: Users,
    title: 'Livestock Well-being',
    description: 'Creates shaded, cool spaces protecting animals from sun, heat stress and predators—increasing fertility, productivity and quality of meat, milk or coat.',
  },
  {
    icon: Sun,
    title: 'Better Working Conditions',
    description: 'Provides strategic shade and air-conditioned spaces during summer heat waves, making open field work more pleasant.',
  },
  {
    icon: TreePine,
    title: 'Local Economy Boost',
    description: 'Generates economic and social activities requiring technical teams, design offices—creating qualified, sustainable jobs in rural areas.',
  },
  {
    icon: Droplets,
    title: 'Renewable Energy Development',
    description: 'Contributes significantly to the development of renewable energies and sustainable resource management.',
  },
];

const processComponents = [
  'WEFE TECH system',
  'Agri-PV solar panels',
  'Solar pumping of brackish water',
  'Solar desalination plant',
];

const processProducts = [
  'Green electricity',
  'Crops (fodder for livestock or vegetables)',
  'Desalinated water (irrigation, drinking, cleaning)',
  'Manure (fertilizers)',
  'Wool and leather (extra income)',
];

export const AgroWefeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="agro-wefe" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      
      <div className="container-wide relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Agricultural Innovation
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            AGRO-WEFE TECH
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            A revolutionary combination of WEFE-TECH and Agri-PV, creating microclimates favorable for crop cultivation 
            and animal production in hot arid regions. WEFE-TECH cools and humidifies the space beneath PV panels, 
            transforming barren land into productive farms.
          </p>
        </motion.div>

        {/* Challenge description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8 mb-16 text-center"
        >
          <h3 className="font-heading font-bold text-xl text-foreground mb-4">The Challenge</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Arid areas with annual rainfall rarely exceeding 200mm desperately need irrigation. However, over-pumping 
            of water tables has deteriorated quality and become a limiting factor for agricultural development. 
            Lands that were once fertile have become barren and desolate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={agroWefe} 
                alt="AGRO-WEFE Tech system in arid region" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
              The AGRO-WEFE TECH Process
            </h3>
            <p className="text-muted-foreground mb-6">
              AGRO-WEFE TECH reduces evapotranspiration and irrigation needs while making hot arid regions 
              productive for agricultural crops. This new process comes to transform abandoned lands into thriving farms.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-4 border border-border">
                <h4 className="font-heading font-semibold text-foreground mb-3">Components</h4>
                <ul className="space-y-2">
                  {processComponents.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <h4 className="font-heading font-semibold text-foreground mb-3">Products</h4>
                <ul className="space-y-2">
                  {processProducts.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-heading font-bold text-2xl text-foreground mb-8 text-center">
            Key Advantages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
              Win-Win Partnership Model
            </h3>
            <p className="text-muted-foreground mb-6">
              Our economic model brings farmers and solar energy suppliers together, creating new revenue streams 
              while protecting the environment. The implementation promotes the creation of new qualified and 
              sustainable jobs that contribute to the dynamism of rural areas.
            </p>
            
            <div className="bg-teal/10 border border-teal/20 rounded-xl p-6">
              <p className="text-foreground italic">
                "The development of local projects makes it possible to enhance the value of the land concerned 
                while providing concrete solutions to combat global warming and water shortages."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={agroPv} 
                alt="Agri-PV solar installation" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ocean-deep/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
