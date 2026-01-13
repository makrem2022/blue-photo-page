import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Award, Calendar, MapPin, Users, Target, Lightbulb } from 'lucide-react';
import wefeSystem from '@/assets/wefe-system.jpg';

const milestones = [
  { year: '2013', event: 'Initial concept development and early research on evaporative cooling' },
  { year: '2018', event: 'First lab-scale prototype demonstrating 15°C temperature reduction' },
  { year: '2022', event: 'BRIK OUTDOOR AC (BOAC) officially founded in Tunisia' },
  { year: '2023', event: 'Industrial-scale pilot deployment and validation' },
  { year: '2024', event: 'International recognition at Slush 2024, Helsinki' },
  { year: '2025', event: 'Commercial partnerships and market expansion' },
];

const achievements = [
  { icon: Award, title: 'Patented Technology', description: 'International patents protecting our innovative cooling methodology' },
  { icon: Users, title: 'Expert Team', description: 'Multidisciplinary team combining engineering, agriculture, and business expertise' },
  { icon: Target, title: 'Proven Results', description: 'Demonstrated 15°C cooling reduction in real-world deployments' },
  { icon: Lightbulb, title: 'Continuous Innovation', description: 'Ongoing R&D to expand applications and improve efficiency' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
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
                <strong className="text-foreground">BRIK OUTDOOR AC (BOAC)</strong> is a dynamic and innovative Tunisian startup, 
                founded by Dr. Mounir BRIK in 2022 after nearly a decade of research and development. The company represents 
                the culmination of Dr. BRIK's personal mission to address the growing challenges of climate change and water 
                scarcity in arid regions.
              </p>
              <p>
                BOAC is committed to providing concrete, practical solutions to combat global warming and water shortages 
                affecting communities across the Middle East, North Africa, and other hot arid regions worldwide. Our approach 
                recognizes that these challenges are deeply interconnected - you cannot solve water scarcity without addressing 
                energy, food security, and ecosystem health together.
              </p>
              <p>
                Our multidisciplinary team brings together expertise in mechanical engineering, agricultural science, solar 
                energy systems, and sustainable business development. We work intensively on understanding and optimizing the 
                synergies between competing uses of water, land, and energy-related resources, recognizing that true 
                sustainability requires integrated thinking.
              </p>
              <p>
                BOAC aims to connect multi-sectorial stakeholders - farmers, energy companies, governments, and investors - 
                to improve resource use efficiency and accelerate sustainable development. We deliver turnkey Agri-PV solutions 
                that combine efficient agri-food production, food processing capabilities, and clean energy generation in a 
                single integrated system.
              </p>
            </div>

            <div className="mt-8 p-6 bg-secondary/50 rounded-xl border-l-4 border-primary">
              <p className="text-foreground font-medium italic">
                "BOAC has successfully developed a new modular high-efficient outdoor cooling system capable of reducing 
                Outdoor Air Temperature from 40°C to 25°C on a large open-air area, using only 3kW of solar energy to 
                produce 695kW of cooling capacity."
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
            <div className="relative rounded-2xl overflow-hidden shadow-strong mb-8">
              <img 
                src={wefeSystem} 
                alt="WEFE-TECH System" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Achievements grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-4 border border-border"
                >
                  <achievement.icon className="w-6 h-6 text-primary mb-2" />
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-muted-foreground text-xs">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl gradient-ocean opacity-20 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-sky/20 -z-10" />
          </motion.div>
        </div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-secondary/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary" />
            <h3 className="font-heading font-bold text-xl text-foreground">Our Journey</h3>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <span className="font-heading font-bold text-2xl text-primary">{milestone.year}</span>
                <div className="w-full h-1 bg-primary/20 my-2 rounded-full">
                  <div className="w-3 h-3 bg-primary rounded-full -mt-1" />
                </div>
                <p className="text-muted-foreground text-sm">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-2 text-muted-foreground"
        >
          <MapPin className="w-5 h-5 text-primary" />
          <span>Headquartered in Tunisia • Operating globally in hot arid regions</span>
        </motion.div>
      </div>
    </section>
  );
};
