import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TreePine, Users, Building2 } from 'lucide-react';

const impactCategories = [
  {
    icon: TreePine,
    title: 'Environmental',
    color: 'from-teal to-teal-light',
    impacts: [
      'Improves water and air quality',
      'Contributes to fight against desertification',
      'Mitigates global warming with zero CO2 emissions',
      'Promotes rational use of sustainable resources',
      'Greening of abandoned land',
    ],
  },
  {
    icon: Users,
    title: 'Social',
    color: 'from-ocean-light to-sky',
    impacts: [
      'Improves working conditions',
      'Increases community stability',
      'Diversifies income of small farmers',
      'Reduces disease risk',
      'Reduces illegal immigration',
    ],
  },
  {
    icon: Building2,
    title: 'Responsible Investment',
    color: 'from-primary to-ocean-light',
    impacts: [
      'Environmental protection',
      'Water saving initiatives',
      'Job creation with gender equality',
      'Local development support',
      'Promotion of renewable energy',
    ],
  },
];

export const ImpactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impacts" className="section-padding gradient-ocean">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-sky uppercase tracking-wider mb-3">
            Making a Difference
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Positive Impacts
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            AGRO-WEFE TECH creates lasting positive change across environmental, social and economic dimensions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impactCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.impacts.map((impact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="flex items-start gap-3 text-primary-foreground/90"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky flex-shrink-0 mt-2" />
                    <span className="text-sm">{impact}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Market Potentiality */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-8">
            Market Potential
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '200,000 km', label: 'Coastal line affected by seawater intrusion' },
              { value: '2,400 GW', label: 'Yearly installed PV capacity globally' },
              { value: '€120B', label: 'Potential yearly revenue from 5% market share' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10"
              >
                <span className="block font-heading font-bold text-3xl md:text-4xl text-sky mb-2">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/70 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
