import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Rocket, Palette, Eye, Briefcase, Flame } from 'lucide-react';

const CHANGES = [
  {
    icon: Rocket,
    title: 'Real-World Simulations',
    description:
      'Tech simulations and startup challenges that mirror actual industry pressure — not theoretical exercises.',
  },
  {
    icon: Palette,
    title: 'Cross-Discipline Integration',
    description:
      'Developers, creatives, and strategists working together in unified teams — the way real companies operate.',
  },
  {
    icon: Eye,
    title: 'Innovation Showcases',
    description:
      'Interactive exhibitions where participants demonstrate live builds, prototypes, and creative solutions.',
  },
  {
    icon: Briefcase,
    title: 'Career & Skill Development',
    description:
      'Hands-on experiences that build portfolios and professional competence, not just certificates.',
  },
  {
    icon: Flame,
    title: 'High-Energy Environment',
    description:
      'A dynamic atmosphere blending learning with creativity and competition — designed to energize, not lecture.',
  },
];

export function HistoryChanges() {
  return (
    <Section className="bg-background py-40">
      <div className="mb-24 max-w-2xl px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-6">
            Chapter 04
          </h4>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-8">
            What <br />
            <span className="text-on-surface-variant italic font-light">Changed.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            The transformation introduced a fundamentally new approach to how technology
            is experienced on campus.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
        {CHANGES.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            <Card className="p-10 h-full flex flex-col bg-surface-container-low border-outline-variant/30 hover:shadow-xl transition-all duration-500 group">
              <div className="mb-8 h-14 w-14 bg-white flex items-center justify-center border border-outline-variant/20 rounded-none transform transition-transform group-hover:rotate-12">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed mt-auto">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
