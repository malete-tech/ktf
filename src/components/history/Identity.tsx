import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { TrendingUp, HandMetal, Globe } from 'lucide-react';

const PILLARS = [
  {
    icon: TrendingUp,
    label: 'Progression',
    statement: 'From concept to ecosystem.',
    detail: 'What started as a one-day conference idea has grown into a comprehensive tech ecosystem simulation.',
  },
  {
    icon: HandMetal,
    label: 'Participation',
    statement: 'From passive attendance to active operation.',
    detail: 'Every attendee is an operator — building, pitching, and solving real problems under real constraints.',
  },
  {
    icon: Globe,
    label: 'Platform',
    statement: 'A unified space for innovation.',
    detail: 'Innovation, collaboration, and practical exposure — converging in one high-intensity experience.',
  },
];

export function HistoryIdentity() {
  return (
    <Section className="bg-surface py-40">
      <div className="mb-24 text-center max-w-2xl mx-auto px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-6">
            Chapter 05
          </h4>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-8">
            Today's <br />
            <span className="text-secondary italic">Identity.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            KWASU Tech Festival is the evolved form of the original KWASU Tech Conference.
            It is not just an event format change — it is a redefinition of how technology
            is experienced on campus.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-12 lg:grid-cols-3 max-w-5xl mx-auto px-4 lg:px-0">
        {PILLARS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="text-center"
          >
            <div className="mb-8 h-16 w-16 bg-white flex items-center justify-center border border-outline-variant/20 rounded-none mx-auto transform transition-transform hover:rotate-6">
              <item.icon size={28} className="text-primary" />
            </div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-4">
              {item.label}
            </h4>
            <h3 className="text-2xl font-bold text-primary mb-4">{item.statement}</h3>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed max-w-xs mx-auto">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
