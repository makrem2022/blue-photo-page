import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import agroWefe from '@/assets/agro-wefe.jpg';
import agroPv from '@/assets/agro-pv.jpg';

const advantages = [
  'Dual function: green electricity production and crop protection from heat stress',
  'Diversify farmer income through solar electricity sales',
  'Improve livestock well-being with shaded, cool environments',
  'Better working conditions for farmers during heat waves',
  'Create qualified jobs and boost local economy',
  'Contribute to renewable energy development',
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
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A revolutionary combination of WEFE-TECH and Agri-PV, creating microclimates favorable for crop cultivation and animal production in hot arid regions.
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
              Transform Barren Land into Productive Farms
            </h3>
            <p className="text-muted-foreground mb-8">
              Arid areas with less than 200mm annual rainfall desperately need innovative solutions. AGRO-WEFE TECH reduces evapotranspiration and irrigation needs while making hot arid regions productive for agricultural crops.
            </p>
            
            <div className="space-y-3">
              {advantages.slice(0, 3).map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-teal" />
                  </div>
                  <p className="text-foreground">{advantage}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

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
            <p className="text-muted-foreground mb-8">
              Our economic model brings farmers and solar energy suppliers together, creating new revenue streams while protecting the environment.
            </p>
            
            <div className="space-y-3">
              {advantages.slice(3).map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-teal" />
                  </div>
                  <p className="text-foreground">{advantage}</p>
                </motion.div>
              ))}
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
