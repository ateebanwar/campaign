import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Users, Heart, Briefcase } from 'lucide-react';
import { aboutContent, candidateInfo } from '@/data/campaignData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  users: Users,
  heart: Heart,
  briefcase: Briefcase,
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-gradient-section"
    >
      <div className="container-campaign">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            About the Candidate
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            A Son of Kalyan, Fighting for Our Future
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Dedicated to serving the people of Kalyan Ward 8 with honesty and passion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-elevated">
                <div className="w-full h-full bg-gradient-to-br from-secondary/80 to-primary/60 min-h-[400px] flex items-end justify-center">
                  <img
                    src={candidateInfo.heroImage}
                    alt={candidateInfo.name}
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-xl -z-10" />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-glow z-20"
              >
                <span className="text-3xl font-bold">15+</span>
                <p className="text-sm opacity-90">Years of Service</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {aboutContent.story.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-body"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {aboutContent.highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon] || Home;
            return (
              <motion.div
                key={index}
                className="card-campaign p-6 text-center group hover:bg-primary transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h4 className="font-bold text-foreground group-hover:text-white transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-2 group-hover:text-white/80 transition-colors">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;