import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Globe, Lightbulb, Users } from 'lucide-react';
import founderImg from '@/assets/dr-mounir-brik.jpg';

const credentials = [
  {
    icon: GraduationCap,
    title: 'PhD in Environmental Biotechnology',
    description: 'University of Natural Resources and Applied Life Sciences (BOKU), Vienna, Austria, 2001',
  },
  {
    icon: Briefcase,
    title: '25+ Years Experience',
    description: 'Planning, design, implementation, supervision, R&D and project management at private companies and governmental institutions',
  },
  {
    icon: Award,
    title: 'Multiple Inventions',
    description: 'MEM-TRICK® (Membrane Trickling Filter), BAAS-BRIK® (Biological Advanced Aerobic System), and WEFE-TECH®',
  },
  {
    icon: Globe,
    title: 'International Network',
    description: 'Member of International Association on Water Quality and Board of Directors of Austro-Tunisian Chamber of Commerce (2004-2012)',
  },
];

const achievements = [
  'Leadership: Identifies and develops opportunities; innovates and makes things happen',
  'Strategic vision with ability to build and implement sophisticated plans',
  'Extensive R&D experience at Research Centers and Industry',
  'Skilled strategist who transforms strategic plans into workable solutions',
  'Unique mix of technical, engineering, and business expertise for financially viable strategies',
];

const communityRoles = [
  'Chairman of Tunisian Cultural and Social Club in Vienna (2003-2006)',
  'Chairman of Association for Development and Investment in Bengradane, Tunisia (2011-present)',
  'Member of Nurnberg Conference on Energy Future and Climate Protection (2012)',
  'Co-Founder of South Tunisian THINK TANK on Integrated Sustainable Development (2011-2014)',
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

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
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
            
            {/* Personal info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 bg-card rounded-xl p-4 border border-border"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Personal:</span> Tunisian with Austrian citizenship, 
                born September 1, 1969, married with 3 children
              </p>
            </motion.div>
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
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A senior-level professional with expertise as a manager at private companies and governmental institutions. 
              Dr. BRIK is an accomplished problem-solver whose unique mix of technical, engineering, and business expertise 
              lends itself to developing business strategies with an eye toward financial viability.
            </p>

            <div className="space-y-4 mb-8">
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

        {/* Professional Summary & Community */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-bold text-lg text-foreground">Professional Summary</h4>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-teal" />
              </div>
              <h4 className="font-heading font-bold text-lg text-foreground">Community Affiliations</h4>
            </div>
            <ul className="space-y-3">
              {communityRoles.map((role, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                  {role}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
