import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const blogPosts = [
  {
    title: 'Slush 2024 in Helsinki – Finland',
    description: "The World's most founder-focused startup event. We will be attending SLUSH 2024 to present our WEFE TECH system.",
    date: '20-21 November 2024',
    category: 'Event',
  },
  {
    title: 'Workshop on WEFE TECH and HVAC',
    description: 'We are organizing a workshop on WEFE TECH and HVAC in Bengardane, Tunisia.',
    date: 'August 21, 2024',
    category: 'Workshop',
  },
  {
    title: 'First WEFE-TECH Unit in Full Operation',
    description: 'Our first "WEFE-TECH" unit is running in full operation at our client site in Rue Almarsa km 3, Bengardane, Tunisia.',
    date: 'September 2023 - October 2023',
    category: 'Milestone',
  },
  {
    title: 'Governmental Grant Award',
    description: 'The WEFE TECH system has been awarded a Governmental grant through AIR program competition for its high innovation and scalability potential.',
    date: 'June 2023',
    category: 'Award',
  },
  {
    title: 'Novel Agro PV & Novel Irrigation System',
    description: 'WEFE TECH is a breakthrough technology achieving technical dreams that turnover industrial and agricultural traditions through ACPV (Agro Cooled PhotoVoltaic) system.',
    date: 'May 2023',
    category: 'Innovation',
  },
  {
    title: 'ISH 2023 in Frankfurt – Germany',
    description: 'The World leading HVAC and Water Technologies Fair. We attended ISH 2023 to present our WEFE TECH system.',
    date: 'March 13-17, 2023',
    category: 'Event',
  },
];

const categoryColors: Record<string, string> = {
  Event: 'bg-primary/10 text-primary',
  Workshop: 'bg-teal/10 text-teal',
  Milestone: 'bg-sky/10 text-sky',
  Award: 'bg-amber-500/10 text-amber-600',
  Innovation: 'bg-emerald-500/10 text-emerald-600',
};

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Latest Updates
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            News & Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with our latest achievements, events, and technological breakthroughs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] || 'bg-muted text-muted-foreground'}`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
              </div>
              
              <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {post.description}
              </p>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
              >
                Read More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
