import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, AlertTriangle, Users, ArrowRight } from 'lucide-react';
import { ctaContent } from '@/data/campaignData';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const ctaOptions = ctaContent.options;

  return (
    <section
      id="volunteer"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-secondary via-secondary to-primary/80 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-campaign relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-section text-secondary-foreground">
            {ctaContent.headline}
          </h2>
          <p className="text-secondary-foreground/80 text-xl mt-4 max-w-2xl mx-auto">
            {ctaContent.subheadline}
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon === 'users' ? Users : option.icon === 'alert-triangle' ? AlertTriangle : Heart;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-secondary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/20 hover:bg-secondary-foreground/15 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-accent/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="text-xl font-semibold text-secondary-foreground mb-3">
                  {option.title}
                </h3>

                <p className="text-secondary-foreground/70 mb-6">
                  {option.description}
                </p>

                <button className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all">
                  {ctaContent.getStartedText}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {ctaContent.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">
                {stat.number}
              </div>
              <p className="text-secondary-foreground/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;