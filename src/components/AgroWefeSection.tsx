import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Check, Sun, Droplets, Thermometer, Users, Coins } from 'lucide-react';
import agroWefe from '@/assets/agro-wefe.jpg';
import agroPv from '@/assets/agro-pv.jpg';

const challenges = [
  'Arid and semi-arid regions receive less than 200mm of annual rainfall',
  'Conventional agriculture is impossible without massive irrigation infrastructure',
  'Heat stress damages crops and reduces yields by 30-50%',
  'Water evaporation wastes 60-80% of irrigation water before reaching plant roots',
  'Climate change is expanding desert areas and intensifying heat waves',
];

const solutions = [
  {
    icon: Thermometer,
    title: 'Temperature Reduction',
    description: 'Lower outdoor temperature from 40°C to 25°C, eliminating heat stress on crops and livestock.',
  },
  {
    icon: Droplets,
    title: 'Water Efficiency',
    description: 'Reduce irrigation needs by 60% through increased humidity and reduced evapotranspiration.',
  },
  {
    icon: Sun,
    title: 'Dual-Use Land',
    description: 'Same land produces both solar electricity (above) and agricultural crops (below).',
  },
];

const advantages = [
  'Dual function: green electricity production AND crop protection from heat stress',
  'Diversify farmer income through solar electricity sales to the grid',
  'Improve livestock well-being with shaded, cool environments reducing heat stress mortality',
  'Better working conditions for farmers during heat waves - safer and more productive',
  'Create qualified jobs in rural areas and boost local economy',
  'Contribute to national renewable energy targets and carbon neutrality goals',
  'Transform previously unproductive desert land into valuable agricultural assets',
  'Reduce dependency on imported food by increasing local production capacity',
];

const economicModel = [
  {
    icon: Users,
    title: 'Farmer Benefits',
    points: [
      'Free installation of cooling/shading infrastructure',
      'Regular income from land lease for solar panels',
      'Increased crop yields and new crop varieties possible',
      'Reduced water and irrigation costs',
    ],
  },
  {
    icon: Coins,
    title: 'Investor Benefits',
    points: [
      'Enhanced PV efficiency (+15%) and lifespan (+30%)',
      'Carbon credits from agricultural carbon sequestration',
      'ESG-compliant investment with measurable social impact',
      'Long-term stable returns from electricity production',
    ],
  },
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
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            A revolutionary combination of WEFE-TECH cooling technology and Agri-PV (agricultural photovoltaics), creating optimal microclimates for crop cultivation and animal production in hot arid regions that were previously considered unsuitable for agriculture.
          </p>
        </motion.div>

        {/* The Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-destructive/5 rounded-2xl p-8 border border-destructive/20"
        >
          <h3 className="font-heading font-bold text-xl text-foreground mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <span className="text-destructive text-lg">!</span>
            </span>
            The Global Challenge of Arid Agriculture
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 mt-2" />
                <p className="text-muted-foreground text-sm">{challenge}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="font-heading font-bold text-2xl text-foreground text-center mb-8">
            Our Integrated Solution
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-ocean flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{solution.title}</h4>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
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
              Transform Barren Desert into Productive Farmland
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AGRO-WEFE TECH makes the impossible possible: growing crops and raising livestock in regions where conventional agriculture has failed. By creating artificial microclimates beneath solar panel arrays, we provide the shade, humidity, and temperature reduction that plants and animals need to thrive.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              This is not just incremental improvement - it's a complete transformation of land use potential. Desert regions that produced nothing can now support diverse agriculture while simultaneously generating clean electricity.
            </p>
            
            <div className="space-y-3">
              {advantages.slice(0, 4).map((advantage, index) => (
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
                  <p className="text-foreground text-sm">{advantage}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
              Win-Win Economic Partnership Model
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our innovative business model aligns the interests of farmers, investors, and the environment. Solar energy companies gain enhanced panel performance, farmers gain new income streams, and communities gain sustainable development.
            </p>
            
            <div className="space-y-3 mb-8">
              {advantages.slice(4).map((advantage, index) => (
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
                  <p className="text-foreground text-sm">{advantage}</p>
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

        {/* Economic Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {economicModel.map((model, index) => (
            <div key={model.title} className="bg-card rounded-xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center">
                  <model.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-bold text-xl text-foreground">{model.title}</h4>
              </div>
              <ul className="space-y-3">
                {model.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
