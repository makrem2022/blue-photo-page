import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Target, Lightbulb, Users, Leaf } from 'lucide-react';
import wefeSystem from '@/assets/wefe-system.jpg';

const companyHighlights = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Providing concrete solutions to combat global warming and water shortages through innovative WEFE technologies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Working on synergies and trade-offs between competing uses of water, land, and energy-related resources.',
  },
  {
    icon: Users,
    title: 'Multi-Sectorial Approach',
    description: 'Connecting stakeholders across sectors to improve resource use and sustainable development.',
  },
  {
    icon: Leaf,
    title: 'Turnkey Solutions',
    description: 'Delivering complete Agri-PV solutions for efficient agri-food production, processing and energy production.',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Our Company
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              About BRIK OUTDOOR AC
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">BRIK OUTDOOR AC (BOAC)</span> is a dynamic and innovative 
                Tunisian startup, founded by Dr. Mounir BRIK in 2022, continuing his personal career to meet the growing 
                need for sustainable development in the region.
              </p>
              <p>
                BOAC is committed to providing concrete solutions to combat global warming and water shortages. 
                Our multidisciplinary team works on the synergies and trade-offs between competing uses of water, 
                land, and energy-related resources.
              </p>
              <p>
                We aim to connect multi-sectorial stakeholders to improve resource use and sustainable development. 
                BOAC delivers turnkey Agri-PV solutions for efficient agri-food production, processing, and energy production.
              </p>
            </div>

            <div className="mt-8 p-6 bg-teal/10 rounded-xl border-l-4 border-teal">
              <p className="text-foreground font-medium italic">
                "BOAC has successfully developed a new modular high-efficient outdoor cooling system capable of reducing 
                Outdoor Air Temperature from 40°C to 25°C on a large open-air area."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={wefeSystem} 
                alt="WEFE-TECH System" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl gradient-ocean opacity-20 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-sky/20 -z-10" />
          </motion.div>
        </div>

        {/* Company highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <highlight.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
