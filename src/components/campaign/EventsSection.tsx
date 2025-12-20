import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Flag, Footprints, Mic, ChevronUp } from 'lucide-react';
import { events, eventsContent } from '@/data/campaignData';

const eventTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  rally: Flag,
  meeting: Users,
  padyatra: Footprints,
  sabha: Mic,
};

const eventTypeColors: Record<string, string> = {
  rally: 'bg-destructive/10 text-destructive border-destructive/20',
  meeting: 'bg-primary/10 text-primary border-primary/20',
  padyatra: 'bg-accent/10 text-accent-foreground border-accent/20',
  sabha: 'bg-secondary text-secondary-foreground border-secondary',
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('en-IN', { month: 'short' }),
    weekday: date.toLocaleDateString('en-IN', { weekday: 'short' }),
  };
};

const EventsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedEvents = showAll ? events : events.slice(0, 3);

  const handleToggle = () => {
    if (showAll) {
      // If we're closing, track the current position relative to the section
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        // Scroll back to the section top or keep it in view
        setShowAll(false);
        // Small delay to allow the layout to start shifting before we scroll
        setTimeout(() => {
          sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      id="events"
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
            {eventsContent.badgeText}
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            {eventsContent.headline}
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            {eventsContent.subheadline}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedEvents.map((event, index) => {
              const IconComponent = eventTypeIcons[event.type] || Users;
              const dateInfo = formatDate(event.date);

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                  className="card-campaign overflow-hidden group"
                >
                  {/* Date Badge */}
                  <div className="bg-primary text-primary-foreground p-4 text-center">
                    <span className="text-sm font-medium opacity-80">{dateInfo.weekday}</span>
                    <div className="text-4xl font-bold">{dateInfo.day}</div>
                    <span className="text-sm font-medium opacity-80">{dateInfo.month}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Event Type Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border mb-4 ${eventTypeColors[event.type]}`}>
                      <IconComponent className="w-4 h-4" />
                      <span className="capitalize">{event.type}</span>
                    </div>

                    <h3 className="heading-card text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-body text-sm mb-4">
                      {event.description}
                    </p>

                    {/* Meta Info */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="mt-6 w-full py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                      {eventsContent.attendButtonText}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Calendar Toggle Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleToggle}
            className="inline-flex items-center gap-2 btn-secondary min-w-[200px] justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={showAll ? 'hide' : 'show'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-5 h-5" />
                    <span>{eventsContent.hideCalendarButtonText}</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>{eventsContent.fullCalendarButtonText}</span>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;