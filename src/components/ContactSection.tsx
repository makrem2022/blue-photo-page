import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { MapPin, Phone, Globe, Mail } from 'lucide-react';
import { Button } from './ui/button';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Bengardane, Tunisia',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+216 99 919 400',
    href: 'tel:+21699919400',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.wefe-tech.com',
    href: 'https://www.wefe-tech.com',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@wefe-tech.com',
    href: 'mailto:contact@wefe-tech.com',
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding gradient-ocean">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-sky uppercase tracking-wider mb-3">
            Get in Touch
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to transform your environment with WEFE-TECH? Let's discuss how we can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                <info.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-primary-foreground mb-2">{info.label}</h3>
              {info.href ? (
                <a 
                  href={info.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-primary-foreground/80">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-12"
            asChild
          >
            <a href="mailto:contact@wefe-tech.com">Send us a Message</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
