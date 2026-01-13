import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Factory, Warehouse, ShoppingCart, CalendarDays, Building, Home, Leaf, Drumstick, Theater } from 'lucide-react';

const applications = [
  { icon: Factory, label: 'Manufacturing Plants' },
  { icon: Warehouse, label: 'Warehouses' },
  { icon: ShoppingCart, label: 'Shopping Centres' },
  { icon: CalendarDays, label: 'Events & Weddings' },
  { icon: Building, label: 'Stadiums & Gyms' },
  { icon: Home, label: 'Commercial Kitchens' },
  { icon: Leaf, label: 'Green Houses' },
  { icon: Drumstick, label: 'Poultry & Stables' },
  { icon: Theater, label: 'Auditoriums' },
];

export const ApplicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="applications" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Versatile Solutions
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Potential Applications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            WEFE-TECH can be applied across a wide range of industries and spaces requiring efficient outdoor cooling.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/30 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <app.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground">{app.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
