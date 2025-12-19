import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Flag, Footprints, Mic } from 'lucide-react';
import { events } from '@/data/campaignData';

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
            Meet the Candidate
          </span>
          <h2 className="heading-section mt-4 text-foreground">
            Upcoming Events
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Join us in person. Your voice shapes our campaign.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
            const IconComponent = eventTypeIcons[event.type] || Users;
            const dateInfo = formatDate(event.date);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
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
                    Attend Event
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Calendar Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 btn-secondary">
            <Calendar className="w-5 h-5" />
            View Full Calendar
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;