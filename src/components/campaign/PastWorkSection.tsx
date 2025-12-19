import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Droplets, Trash2, AlertTriangle, Lightbulb, Users, GraduationCap } from 'lucide-react';
import { pastWorkData } from '@/data/campaignData';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Water Supply': Droplets,
  'Sanitation': Trash2,
  'Emergency Relief': AlertTriangle,
  'Infrastructure': Lightbulb,
  'Social Welfare': Users,
  'Education': GraduationCap,
};

const PastWorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="past-work"
      ref={sectionRef}
      className="section-padding bg-card"
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
            Proven Track Record
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            Work Before Office
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Actions speak louder than promises. Here's what I've done for our community 
            without holding any official position.
          </p>
        </motion.div>

        {/* Work Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastWorkData.map((work, index) => {
            const IconComponent = categoryIcons[work.category] || Users;
            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="card-campaign overflow-hidden group"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-4 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {work.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-card text-foreground mb-3 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-body text-sm mb-4">
                    {work.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{work.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{work.year}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Families Helped" },
            { number: "15", label: "Years Active" },
            { number: "100+", label: "Volunteers" },
            { number: "6+", label: "Major Initiatives" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10"
            >
              <span className="text-3xl md:text-4xl font-bold text-primary">
                {stat.number}
              </span>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PastWorkSection;