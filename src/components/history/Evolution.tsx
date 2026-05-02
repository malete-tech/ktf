import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TIMELINE = [
  {
    phase: 'Phase 01',
    label: 'KTC',
    title: 'KWASU Tech Conference',
    description: 'Talk-based, panel-driven format. Passive audience experience.',
    accent: 'bg-outline-variant/40',
  },
  {
    phase: 'Phase 02',
    label: 'MTF',
    title: 'Malete Tech Forum',
    description: 'Strategic rethinking. Identifying the gap between knowledge and experience.',
    accent: 'bg-secondary/40',
  },
  {
    phase: 'Phase 03',
    label: 'KTF',
    title: 'KWASU Tech Festival',
    description: 'Immersive, simulation-driven ecosystem. Active participation and real-world exposure.',
    accent: 'bg-primary',
  },
];

export function HistoryEvolution() {
  return (
    <Section className="bg-surface py-40 overflow-hidden">
      <div className="mb-24 text-center max-w-2xl mx-auto px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-6">
            Chapter 03
          </h4>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-8">
            The Evolution <br />
            <span className="text-secondary italic">into KTF.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            The KWASU Tech Conference evolved into the KWASU Tech Festival — a deliberate move
            away from passive, talk-based events toward an immersive, experience-driven model.
          </p>
        </motion.div>
      </div>

      {/* Evolution Timeline */}
      <div className="relative max-w-4xl mx-auto px-4 lg:px-0">
        {/* Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/20 -translate-x-1/2 hidden md:block" />

        <div className="space-y-32">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-center gap-16 ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Point */}
              <div
                className={`absolute left-1/2 top-6 h-5 w-5 rounded-full ${item.accent} border-4 border-background -translate-x-1/2 z-10 hidden md:block`}
              />

              <div className="flex-1 w-full text-center md:text-left">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-4">
                  {item.phase}
                </h4>
                <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                  <span className="text-xs font-mono tracking-widest text-primary/50 uppercase bg-surface-container-low px-3 py-1 border border-outline-variant/20">
                    {item.label}
                  </span>
                  {i < TIMELINE.length - 1 && (
                    <ArrowRight size={14} className="text-outline-variant hidden sm:block" />
                  )}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-on-surface-variant font-light italic leading-relaxed max-w-sm mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
