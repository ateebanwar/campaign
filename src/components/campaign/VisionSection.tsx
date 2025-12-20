import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Droplets, Sparkles, Shield, Megaphone, GraduationCap, CheckCircle2 } from 'lucide-react';
import { promises, visionContent } from '@/data/campaignData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  droplets: Droplets,
  sparkles: Sparkles,
  shield: Shield,
  megaphone: Megaphone,
  'graduation-cap': GraduationCap,
};

const VisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(promises[0].id);

  const activePromise = promises.find(p => p.id === activeTab) || promises[0];
  const ActiveIcon = iconMap[activePromise.icon] || Sparkles;

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="section-padding bg-section-dark"
    >
      <div className="container-campaign">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium uppercase tracking-wider text-sm">
            My Commitment to You
          </span>
          <h2 className="heading-section mt-4 text-secondary-foreground">
            Vision & Promises
          </h2>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            {visionContent.subheadline}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {promises.map((promise) => {
            const Icon = iconMap[promise.icon] || Sparkles;
            return (
              <button
                key={promise.id}
                onClick={() => setActiveTab(promise.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === promise.id
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-secondary-foreground/10 text-secondary-foreground/80 hover:bg-secondary-foreground/20'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{promise.title.split(' ').slice(0, 2).join(' ')}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-secondary-foreground/10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Promise Details */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                    <ActiveIcon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary-foreground">
                    {activePromise.title}
                  </h3>
                </div>

                {/* Problem */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-destructive rounded-full" />
                    <h4 className="font-semibold text-destructive">The Problem</h4>
                  </div>
                  <p className="text-secondary-foreground/80 pl-4 border-l-2 border-destructive/30">
                    {activePromise.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <h4 className="font-semibold text-primary">My Solution</h4>
                  </div>
                  <p className="text-secondary-foreground/80 pl-4 border-l-2 border-primary/30">
                    {activePromise.solution}
                  </p>
                </div>

                {/* Execution */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <h4 className="font-semibold text-accent">How I'll Do It</h4>
                  </div>
                  <p className="text-secondary-foreground/80 pl-4 border-l-2 border-accent/30">
                    {activePromise.execution}
                  </p>
                </div>
              </div>

              {/* Right - Visual/Stats */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-secondary-foreground/10">
                  <div className="text-center mb-8">
                    <ActiveIcon className="w-20 h-20 text-accent mx-auto mb-4 opacity-80" />
                    <h4 className="text-xl font-semibold text-secondary-foreground">
                      Key Milestones
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {activePromise.execution.split('. ').filter(Boolean).map((milestone, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-secondary/10 rounded-lg p-4"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-secondary-foreground/90 text-sm">
                          {milestone.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Promise Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent/20 text-accent px-6 py-3 rounded-full">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">
              {visionContent.guaranteeText}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;