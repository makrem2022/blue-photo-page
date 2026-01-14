import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TreePine, Users, Building2, Globe, Droplets, Wind, Sprout, Heart, Briefcase, Shield } from 'lucide-react';

const impactCategories = [
  {
    icon: TreePine,
    title: 'Environmental Impacts',
    color: 'from-teal to-teal-light',
    impacts: [
      { icon: Droplets, text: 'Improves water and air quality' },
      { icon: Sprout, text: 'Increases agricultural productivity' },
      { icon: Globe, text: 'Contributes to fight against desertification' },
      { icon: Wind, text: 'Mitigates global warming with zero CO2 emissions' },
      { icon: TreePine, text: 'Promotes rational use of sustainable resources' },
      { icon: Sprout, text: 'Greening of abandoned land' },
      { icon: Droplets, text: 'Improves water savings' },
      { icon: Globe, text: 'Produces agri-food needs locally' },
    ],
  },
  {
    icon: Users,
    title: 'Social Impacts',
    color: 'from-ocean-light to-sky',
    impacts: [
      { icon: Briefcase, text: 'Improves working conditions' },
      { icon: Users, text: 'Increases community stability' },
      { icon: Heart, text: 'Diversifies income of small farmers' },
      { icon: Shield, text: 'Reduces risk of spreading diseases' },
      { icon: Users, text: 'Reduces illegal immigration' },
      { icon: Heart, text: 'Increases desire for formal work' },
      { icon: Users, text: 'Increases aspirations of local residents' },
    ],
  },
  {
    icon: Building2,
    title: 'Socially Responsible Investment',
    color: 'from-primary to-ocean-light',
    impacts: [
      { icon: Shield, text: 'Environmental protection' },
      { icon: Droplets, text: 'Water saving initiatives' },
      { icon: Briefcase, text: 'Improvement of working conditions' },
      { icon: Users, text: 'Job creation with gender equality' },
      { icon: Globe, text: 'Local development and disadvantaged regions' },
      { icon: Wind, text: 'Reduction of CO2 emissions' },
      { icon: TreePine, text: 'Promotion of renewable energy' },
    ],
  },
];

const marketStats = [
  { 
    value: '200,000 km', 
    label: 'Coastal Line Affected',
    description: 'By seawater intrusion across MENA, South Europe, South America, Australia and more',
  },
  { 
    value: '2,400 GW', 
    label: 'Yearly PV Capacity',
    description: 'Global installed photovoltaic power plant capacity',
  },
  { 
    value: '€120B', 
    label: 'Potential Revenue',
    description: 'Yearly revenue from 5% market share (120 GW)',
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
            Impacts of AGRO-WEFE TECH
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Our technology creates lasting positive change across environmental, social and economic dimensions—
            providing concrete solutions to combat global warming and water shortages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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
                    <impact.icon className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{impact.text}</span>
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
          className="text-center"
        >
          <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-4">
            Market Potentiality
          </h3>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
            Our solution targets coastal regions affected by seawater intrusion across MENA countries, 
            South European countries, South American countries, Australia and more.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {marketStats.map((stat, index) => (
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
                <span className="block font-semibold text-primary-foreground mb-2">{stat.label}</span>
                <span className="text-primary-foreground/60 text-sm">{stat.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
