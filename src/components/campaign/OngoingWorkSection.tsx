import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    Clock,
    Calendar,
    ChevronRight,
    ArrowRight,
    ChevronLeft,
    Construction,
    Zap,
    HeartPulse,
    GraduationCap,
    Users
} from 'lucide-react';
import { ongoingWorkData, ongoingWorkContent, OngoingWork } from '@/data/campaignData';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    'Education & Energy': GraduationCap,
    'Infrastructure': Construction,
    'Social Welfare': HeartPulse,
    'Technology & Safety': Zap,
    'Community Service': Users,
};

const OngoingWorkCard = ({
    project,
    isExpanded,
    onToggle
}: {
    project: OngoingWork;
    isExpanded: boolean;
    onToggle: () => void;
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const IconComponent = categoryIcons[project.category] || Construction;

    // Auto-slide for expanded card gallery
    useEffect(() => {
        if (!isExpanded || !project.gallery || project.gallery.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % (project.gallery?.length || 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [isExpanded, project.gallery]);

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (project.gallery) setCurrentSlide((prev) => (prev + 1) % project.gallery.length);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (project.gallery) setCurrentSlide((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    };

    const hasGallery = project.gallery && project.gallery.length > 0;

    return (
        <motion.div
            layout
            onClick={onToggle}
            className={`relative h-[500px] md:h-[600px] overflow-hidden rounded-[2.5rem] cursor-pointer transition-all duration-500 ease-in-out group ${isExpanded ? 'flex-[4] shadow-2xl z-10' : 'flex-1 hover:flex-[1.2]'
                } md:block hidden`}
        >
            {/* Background / Slide Image */}
            <motion.div layout className="absolute inset-0 bg-muted">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={isExpanded ? (hasGallery ? project.gallery![currentSlide] : 'placeholder') : (hasGallery ? project.gallery![0] : 'placeholder')}
                        src={hasGallery ? (isExpanded ? project.gallery![currentSlide] : project.gallery![0]) : ''}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </AnimatePresence>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-70'}`} />
            </motion.div>

            {/* Collapsed State: Vertical Title */}
            <AnimatePresence>
                {!isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-x-0 bottom-0 top-0 flex flex-col items-center justify-center p-4 pointer-events-none"
                    >
                        <h3 className="text-white text-2xl font-bold uppercase tracking-widest whitespace-nowrap origin-center -rotate-90 select-none">
                            {project.title}
                        </h3>
                        <div className="absolute bottom-6 flex flex-col items-center gap-2">
                            <div className="w-1 h-12 bg-white/20 rounded-full relative overflow-hidden">
                                <motion.div
                                    animate={{ y: [0, 48] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute top-0 inset-x-0 h-4 bg-primary"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Expanded State: Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 }}
                        className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white"
                    >
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    {project.status || 'Active'}
                                </div>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                                {project.title}
                            </h3>
                            <p className="text-white/80 text-lg mb-8 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-6 mb-8 text-sm font-medium">
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-md border border-white/10">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    <span className="text-white/60">{ongoingWorkContent.startedLabel}:</span> {project.startDate}
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-md border border-white/10">
                                    <Clock className="w-4 h-4 text-accent" />
                                    <span className="text-white/60">{ongoingWorkContent.targetLabel}:</span> {project.estimatedCompletion}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold transition-all flex items-center gap-2 group/btn">
                                    {ongoingWorkContent.updatesButtonText}
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>

                                {hasGallery && project.gallery!.length > 1 && (
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={prevSlide}
                                            className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const MobileOngoingWorkCard = ({
    project,
    isExpanded,
    onToggle
}: {
    project: OngoingWork;
    isExpanded: boolean;
    onToggle: () => void;
}) => {
    const IconComponent = categoryIcons[project.category] || Construction;
    return (
        <div className="mb-4 bg-card border border-border/50 rounded-3xl overflow-hidden md:hidden">
            <div
                onClick={onToggle}
                className="p-6 flex items-center justify-between cursor-pointer"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl overflow-hidden bg-muted">
                        {project.gallery?.[0] ? (
                            <img src={project.gallery[0]} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground/20">
                                <IconComponent className="w-6 h-6" />
                            </div>
                        )}
                    </div>
                    <div>
                        <h3 className="font-bold text-foreground text-sm leading-tight">{project.title}</h3>
                        <span className="text-[10px] uppercase font-black text-primary tracking-widest">{project.category}</span>
                    </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-300 text-muted-foreground ${isExpanded ? 'rotate-90' : ''}`} />
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0">
                            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-4 bg-muted relative">
                                {project.gallery?.[0] && (
                                    <img src={project.gallery[0]} className="w-full h-full object-cover" />
                                )}
                                <div className="absolute top-3 right-3">
                                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold uppercase">
                                        <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                                        {project.status || 'Active'}
                                    </div>
                                </div>
                            </div>
                            <p className="text-body text-sm mb-4 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Calendar className="w-4 h-4 text-primary" />
                                    {project.startDate}
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Clock className="w-4 h-4 text-accent" />
                                    {project.estimatedCompletion}
                                </div>
                            </div>
                            <button className="w-full py-3.5 bg-primary text-white rounded-2xl font-bold text-sm">
                                {ongoingWorkContent.updatesButtonText}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const OngoingWorkSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.2 });
    const [expandedId, setExpandedId] = useState<string>(ongoingWorkData[0]?.id || '');

    // Auto-collapse when scrolling away
    useEffect(() => {
        if (!isInView) {
            setExpandedId('');
        }
    }, [isInView]);

    if (!ongoingWorkData || ongoingWorkData.length === 0) return null;

    return (
        <section id="ongoing-work" ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
            </div>

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
                        {ongoingWorkContent.badgeText}
                    </span>
                    <h2 className="heading-section text-foreground">
                        {ongoingWorkContent.headline}
                    </h2>
                    <p className="text-body mt-4 max-w-2xl mx-auto">
                        {ongoingWorkContent.subheadline}
                    </p>
                </motion.div>

                {/* Desktop Layout: Expandable Cards */}
                <div className="hidden md:flex gap-4 items-stretch justify-center h-[600px]">
                    {ongoingWorkData.map((project) => (
                        <OngoingWorkCard
                            key={project.id}
                            project={project}
                            isExpanded={expandedId === project.id}
                            onToggle={() => setExpandedId(project.id)}
                        />
                    ))}
                </div>

                {/* Mobile Layout: Accordion */}
                <div className="md:hidden">
                    {ongoingWorkData.map((project) => (
                        <MobileOngoingWorkCard
                            key={project.id}
                            project={project}
                            isExpanded={expandedId === project.id}
                            onToggle={() => setExpandedId(expandedId === project.id ? '' : project.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OngoingWorkSection;
