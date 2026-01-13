import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TreePine, Users, Building2, Globe, Heart, Briefcase } from 'lucide-react';

const impactCategories = [
  {
    icon: TreePine,
    title: 'Environmental Impact',
    color: 'from-teal to-teal-light',
    description: 'Our technology contributes to environmental restoration and climate change mitigation.',
    impacts: [
      'Improves water and air quality by filtering pollutants and reducing dust',
      'Actively combats desertification by enabling vegetation growth in arid zones',
      'Mitigates global warming with zero CO2 emissions during operation',
      'Promotes rational use of sustainable natural resources (sun, salt water)',
      'Enables greening of abandoned and degraded land',
      'Creates carbon sinks through restored vegetation',
      'Reduces pressure on freshwater resources',
    ],
  },
  {
    icon: Users,
    title: 'Social Impact',
    color: 'from-ocean-light to-sky',
    description: 'We create lasting positive change for communities in challenging environments.',
    impacts: [
      'Improves outdoor working conditions for farmers during extreme heat',
      'Increases community stability by creating sustainable livelihoods',
      'Diversifies and increases income for small-scale farmers',
      'Reduces health risks from heat stress and air pollution',
      'Reduces illegal migration by creating economic opportunities locally',
      'Empowers rural communities with clean technology',
      'Improves food security in vulnerable regions',
    ],
  },
  {
    icon: Building2,
    title: 'Responsible Investment',
    color: 'from-primary to-ocean-light',
    description: 'A compelling ESG investment opportunity with measurable impact.',
    impacts: [
      'Environmental protection with quantifiable metrics',
      'Water saving initiatives reducing consumption by 60%',
      'Job creation with focus on gender equality and inclusion',
      'Support for local economic development',
      'Promotion of renewable energy adoption',
      'Alignment with UN Sustainable Development Goals',
      'Transparent impact reporting and verification',
    ],
  },
];

const sdgGoals = [
  { number: 2, title: 'Zero Hunger', description: 'Enabling food production in previously unproductive regions' },
  { number: 6, title: 'Clean Water', description: 'Desalinating water and reducing irrigation needs' },
  { number: 7, title: 'Clean Energy', description: 'Enhancing solar PV efficiency and lifespan' },
  { number: 8, title: 'Decent Work', description: 'Creating sustainable jobs in rural communities' },
  { number: 13, title: 'Climate Action', description: 'Zero-emission cooling and carbon sequestration' },
  { number: 15, title: 'Life on Land', description: 'Combating desertification and restoring ecosystems' },
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
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            AGRO-WEFE TECH creates lasting positive change across environmental, social and economic dimensions. Our integrated approach addresses multiple UN Sustainable Development Goals simultaneously, making every investment count multiple times.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <category.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-6">
                {category.description}
              </p>
              <ul className="space-y-3">
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

        {/* UN SDG Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-sky" />
            <h3 className="font-heading font-bold text-xl text-primary-foreground">
              Aligned with UN Sustainable Development Goals
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-4 bg-primary-foreground/5 rounded-xl"
              >
                <span className="block font-heading font-bold text-2xl text-sky mb-1">
                  SDG {goal.number}
                </span>
                <span className="block text-primary-foreground font-medium text-sm mb-2">
                  {goal.title}
                </span>
                <span className="text-primary-foreground/60 text-xs">
                  {goal.description}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Potentiality */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-4">
            Massive Market Potential
          </h3>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            The global need for sustainable cooling, water, and agricultural solutions in arid regions represents an enormous market opportunity that is only growing with climate change.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: '200,000 km', label: 'Coastal line worldwide affected by seawater intrusion into groundwater' },
              { value: '2,400 GW', label: 'Yearly installed PV capacity globally that could benefit from our cooling technology' },
              { value: '€50k/ha/year', label: 'Average revenue per hectare from integrated agri-PV operations' },
              { value: '€120B', label: 'Potential yearly revenue from capturing just 5% of addressable market' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10"
              >
                <span className="block font-heading font-bold text-2xl md:text-3xl text-sky mb-2">
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
