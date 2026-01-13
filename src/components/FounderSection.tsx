import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Globe } from 'lucide-react';
import founderImg from '@/assets/founder.jpg';

const credentials = [
  {
    icon: GraduationCap,
    title: 'PhD in Environmental Biotechnology',
    description: 'University of Natural Resources and Applied Life Sciences (BOKU), Vienna, Austria',
  },
  {
    icon: Briefcase,
    title: '25+ Years Experience',
    description: 'Planning, design, implementation, supervision, R&D and project management',
  },
  {
    icon: Award,
    title: 'Multiple Inventions',
    description: 'MEM-TRICK® and BAAS-BRIK® patented technologies',
  },
  {
    icon: Globe,
    title: 'International Network',
    description: 'Member of International Association on Water Quality and Austro-Tunisian Chamber of Commerce',
  },
];

export const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="founder" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Leadership
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Meet the Founder
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={founderImg} 
                alt="Dr. Eng. Mounir BRIK" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl gradient-ocean opacity-20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
              Dr. Eng. Mounir BRIK
            </h3>
            <p className="text-primary font-semibold mb-6">DEA, PE, GF</p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A senior-level professional with expertise as a manager at private companies and governmental institutions. 
              Dr. BRIK is an accomplished problem-solver whose unique mix of technical, engineering, and business expertise 
              lends itself to developing business strategies with an eye toward financial viability.
            </p>

            <div className="space-y-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{cred.title}</h4>
                    <p className="text-sm text-muted-foreground">{cred.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
