import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Factory, Warehouse, ShoppingCart, CalendarDays, Building, Home, Leaf, Drumstick, Theater, GraduationCap, Dumbbell, Store, ChefHat, Users, Church } from 'lucide-react';
import airPurification from '@/assets/air-purification.jpg';

const applications = [
  { icon: Factory, label: 'Manufacturing Plants', description: 'Cool large industrial spaces efficiently' },
  { icon: Warehouse, label: 'Warehouses', description: 'Maintain optimal storage conditions' },
  { icon: Store, label: 'Show Rooms', description: 'Comfortable display environments' },
  { icon: ShoppingCart, label: 'Shopping Centres', description: 'Enhanced customer comfort' },
  { icon: CalendarDays, label: 'Events & Weddings', description: 'Outdoor celebration cooling' },
  { icon: ChefHat, label: 'Commercial Kitchens', description: 'Heat stress reduction for staff' },
  { icon: Users, label: 'Hajj Gatherings', description: 'Mass gathering comfort solutions' },
  { icon: Church, label: 'Big Mosques', description: 'Worship space cooling' },
  { icon: Building, label: 'Stadiums', description: 'Sports venue climate control' },
  { icon: Dumbbell, label: 'Gyms', description: 'Fitness environment optimization' },
  { icon: Leaf, label: 'Green Houses', description: 'Controlled growing environments' },
  { icon: Drumstick, label: 'Poultry & Livestock', description: 'Animal welfare improvements' },
  { icon: Theater, label: 'Auditoriums', description: 'Performance space comfort' },
  { icon: GraduationCap, label: 'School Yards & Barracks', description: 'Educational and military facilities' },
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
            Other Potential Applications
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Beyond agriculture, WEFE-TECH can be applied across a wide range of industries and spaces 
            requiring efficient outdoor cooling. Here are some examples—but not to exclude other possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {applications.map((app, index) => (
            <motion.div
              key={app.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="group relative bg-card rounded-xl p-4 md:p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/30 text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/10 transition-colors">
                <app.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-sm md:text-base text-foreground mb-1">{app.label}</h3>
              <p className="text-xs text-muted-foreground hidden md:block">{app.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Air purification highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden shadow-strong"
        >
          <img 
            src={airPurification} 
            alt="WEFE-TECH air purification in action" 
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep/90 to-ocean-deep/40 flex items-center">
            <div className="p-8 md:p-12 text-primary-foreground max-w-2xl">
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">Universal Cooling Solution</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Any space requiring efficient outdoor or large-area cooling can benefit from WEFE-TECH. 
                Our modular system adapts to your specific needs while delivering consistent performance 
                with zero CO2 emissions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
