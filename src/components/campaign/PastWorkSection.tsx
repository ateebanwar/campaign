import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp,
  Construction,
  Zap,
  HeartPulse,
  GraduationCap,
  Calendar,
  Droplets,
  Trash2,
  AlertTriangle,
  Lightbulb,
  Users
} from 'lucide-react';
import { pastWorkData, pastWorkContent, PastWork } from '@/data/campaignData';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Water Supply': Droplets,
  'Sanitation': Trash2,
  'Emergency Relief': AlertTriangle,
  'Infrastructure': Lightbulb,
  'Social Welfare': Users,
  'Education': GraduationCap,
};

const PastWorkCard = ({
  work,
  index,
  isExpanded,
  onToggle
}: {
  work: PastWork;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const IconComponent = categoryIcons[work.category] || Users;

  // Auto-sliding logic
  useEffect(() => {
    if (!work.gallery || work.gallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % (work.gallery?.length || 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [work.gallery]);

  const hasGallery = work.gallery && work.gallery.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-fit flex flex-col"
    >
      {/* Top Image Slider */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {hasGallery ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={work.gallery![currentImageIndex]}
                alt={`${work.title} slide ${currentImageIndex}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Slider Indicators */}
            {work.gallery!.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {work.gallery!.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-4 bg-white' : 'w-1 bg-white/40'
                      }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground/20">
            <IconComponent className="w-16 h-16" />
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
            {work.category}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {work.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{work.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-4 h-4 text-accent" />
            <span>{work.year}</span>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && work.description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-4 border-t border-border/50 mt-2">
                <p className="text-sm text-body leading-relaxed">
                  {work.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-muted/50 hover:bg-primary/10 transition-colors text-sm font-bold text-foreground"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              {work.ctaLabel} <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const PastWorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Auto-collapse when scrolling away
  useEffect(() => {
    if (!isInView) {
      setExpandedId(null);
    }
  }, [isInView]);

  if (!pastWorkData || pastWorkData.length === 0) return null;

  return (
    <section
      id="past-work"
      ref={sectionRef}
      className="section-padding bg-background relative"
    >
      <div className="container-campaign relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            {pastWorkContent.badgeText}
          </span>
          <h2 className="heading-section text-foreground">
            {pastWorkContent.headline}
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            {pastWorkContent.subheadline}
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastWorkData.map((work, index) => (
            <PastWorkCard
              key={work.id}
              work={work}
              index={index}
              isExpanded={expandedId === work.id}
              onToggle={() => setExpandedId(expandedId === work.id ? null : work.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWorkSection;