import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Droplets, Trash2, Dog, Construction, Lightbulb, Building, ChevronRight } from 'lucide-react';
import { localIssues } from '@/data/campaignData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplets: Droplets,
  trash2: Trash2,
  dog: Dog,
  construction: Construction,
  lightbulb: Lightbulb,
  building: Building,
};

const IssuesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIssue, setActiveIssue] = useState<string | null>(null);

  return (
    <section
      id="issues"
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
            Understanding Our Challenges
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            Key Issues in Kalyan
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            I know these problems because I live them with you. Here's what needs to change.
          </p>
        </motion.div>

        {/* Issues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localIssues.map((issue, index) => {
            const IconComponent = iconMap[issue.icon] || Droplets;
            const isActive = activeIssue === issue.id;

            return (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div
                  className={`card-campaign p-6 cursor-pointer transition-all duration-300 ${
                    isActive ? 'ring-2 ring-primary shadow-glow' : ''
                  }`}
                  onClick={() => setActiveIssue(isActive ? null : issue.id)}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-card text-foreground flex items-center gap-2">
                        {issue.title}
                        <ChevronRight className={`w-5 h-5 text-primary transition-transform duration-300 ${
                          isActive ? 'rotate-90' : ''
                        }`} />
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-body text-sm mb-4">
                    {issue.description}
                  </p>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-border space-y-4">
                          <div>
                            <h4 className="font-semibold text-destructive text-sm mb-1">
                              Impact on Citizens:
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {issue.impact}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary text-sm mb-1">
                              My Approach:
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {issue.approach}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click Hint */}
                  <p className="text-xs text-muted-foreground mt-4 group-hover:text-primary transition-colors">
                    {isActive ? 'Click to collapse' : 'Click to learn more'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Have an issue I haven't mentioned? Let me know.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Report a Local Issue
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default IssuesSection;