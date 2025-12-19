import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { candidateInfo } from '@/data/campaignData';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Professional Solid Background with Subtle Texture */}
      <div className="absolute inset-0 z-0 bg-slate-950">
        {/* Subtle Noise/Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Very faint abstract depth element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/20 skew-x-[-12deg] translate-x-1/4" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-campaign min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 pt-20 pb-0 overflow-visible">
        {/* Left Content - Text */}
        <motion.div
          style={{ opacity }}
          className="flex-1 text-center lg:text-left space-y-6 lg:pr-12 py-12 lg:py-0"
        >
          {/* Ward Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium backdrop-blur-sm border border-primary/30">
              {candidateInfo.ward}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-hero text-white"
          >
            {candidateInfo.tagline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 font-light max-w-xl mx-auto lg:mx-0"
          >
            {candidateInfo.subTagline}
          </motion.p>

          {/* Candidate Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-4"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-accent">
              {candidateInfo.name}
            </h2>
            <p className="text-slate-400 mt-2">{candidateInfo.position}</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Vote for {candidateInfo.name.split(' ')[0]}
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="btn-outline border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white flex items-center justify-center gap-2"
            >
              See My Vision
            </button>
          </motion.div>
        </motion.div>

        {/* Right Content - Candidate Image (Transparent Cut-out) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ y }}
          className="flex-1 mt-12 lg:mt-0 relative self-end lg:h-[85vh] flex items-end justify-center lg:justify-end overflow-visible"
        >
          <div className="relative w-full max-w-2xl lg:max-w-none flex justify-center lg:justify-end">
            <img
              src={candidateInfo.heroImage}
              alt={candidateInfo.name}
              className="w-[90%] md:w-[80%] lg:w-auto lg:h-[110%] object-contain object-bottom select-none pointer-events-none"
              style={{
                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))',
                marginBottom: '-2px' // Prevent sub-pixel gaps at bottom
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-slate-500 hover:text-slate-300 transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;