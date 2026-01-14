import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sami Barhoumi',
    role: 'Chercheur (Researcher)',
    quote: 'Bravo, Solution impeccable de refroidissement de l\'espace',
    translation: 'Bravo, impeccable space cooling solution',
  },
  {
    name: 'Salah Ben Abdallah',
    role: 'Ingenieur (Engineer)',
    quote: 'Very impressive solution',
  },
  {
    name: 'Salah Idoudi',
    role: 'Ingenieur (Engineer)',
    quote: 'Amazing solution',
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            What Experts Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from professionals who have experienced the WEFE-TECH system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card rounded-2xl p-8 border border-border shadow-soft"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full gradient-ocean flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
              
              <div className="pt-4">
                <blockquote className="text-foreground text-lg mb-2 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {testimonial.translation && (
                  <p className="text-sm text-muted-foreground mb-6 italic">
                    ({testimonial.translation})
                  </p>
                )}
                
                {!testimonial.translation && <div className="mb-6" />}
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-ocean flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
