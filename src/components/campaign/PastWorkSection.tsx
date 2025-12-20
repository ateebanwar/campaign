import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Droplets, Trash2, AlertTriangle, Lightbulb, Users, GraduationCap, ChevronRight, Maximize2 } from 'lucide-react';
import { pastWorkData } from '@/data/campaignData';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [activeWork, setActiveWork] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

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
            const isActive = activeWork === work.id;

            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div
                  className={`card-campaign overflow-hidden cursor-pointer transition-all duration-300 h-full flex flex-col ${isActive ? 'ring-2 ring-primary shadow-glow' : ''
                    }`}
                  onClick={() => setActiveWork(isActive ? null : work.id)}
                >
                  {/* Category Header */}
                  <div className={`px-6 py-4 border-b transition-colors duration-300 ${isActive ? 'bg-primary text-primary-foreground' : 'bg-gradient-to-r from-primary/10 to-accent/10 border-border/50'
                    }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'bg-white/20' : 'bg-primary/20'
                          }`}>
                          <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                        </div>
                        <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-primary'}`}>
                          {work.category}
                        </span>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-90 text-white' : 'text-primary'
                        }`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h3 className={`heading-card mb-3 transition-colors ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}>
                      {work.title}
                    </h3>
                    <p className="text-body text-sm mb-4">
                      {work.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{work.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{work.year}</span>
                      </div>
                    </div>

                    {/* Expanded Gallery */}
                    <AnimatePresence>
                      {isActive && work.gallery && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-border mt-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                                Visual Impact
                              </h4>
                              <span className="text-[10px] text-primary font-bold animate-pulse">
                                Click image to enlarge
                              </span>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2 snap-x">
                              {work.gallery.map((img, i) => (
                                <div
                                  key={i}
                                  className="min-w-[240px] h-32 rounded-lg overflow-hidden border border-border shrink-0 snap-start relative group/img"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(img);
                                    setSelectedTitle(work.title);
                                  }}
                                >
                                  <img
                                    src={img}
                                    alt={`${work.title} gallery ${i}`}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                  />
                                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                    <Maximize2 className="w-8 h-8 text-white drop-shadow-lg" />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-1 italic text-center">
                              ← Swipe to see more →
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover/Active Accent */}
                  <div className={`h-1 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    } origin-left`} />

                  {/* Simple Click Hint for Accessibility */}
                  <div className="px-6 py-2 bg-muted/30 text-center">
                    <span className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground/60">
                      {isActive ? 'Collapse Details' : 'Expand to see gallery'}
                    </span>
                  </div>
                </div>
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

      {/* Image Preview Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          <DialogHeader className="absolute top-4 left-4 z-10 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/20">
            <DialogTitle className="text-white text-lg font-bold">
              {selectedTitle}
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full group">
            <img
              src={selectedImage || ''}
              alt={selectedTitle || 'Gallery Preview'}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PastWorkSection;