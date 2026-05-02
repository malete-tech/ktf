import { ReactNode } from 'react';
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Mic, Link as LinkIcon } from 'lucide-react';
import { Card } from '../ui/Card';

const ORIGIN_PILLARS = [
  {
    icon: Lightbulb,
    title: 'The Vision',
    description:
      'A structured tech gathering within Kwara State University — bringing students, innovators, and tech enthusiasts together.',
  },
  {
    icon: Mic,
    title: 'The Format',
    description:
      'Talks, panels, and knowledge-sharing sessions modeled after the KWASU Tech Conference by GetskilledNG.',
  },
  {
    icon: Users,
    title: 'The People',
    description: (<>Influenced by <strong>Muhammad Jimoh Bawa (MBO GRAPHICS)</strong>, the founder of GetskilledNG, KTC was built to create impact through connection.</>),
  },
];

export function HistoryOrigin() {
  return (
    <Section id="origin" className="bg-surface pb-32">
      <div className="mb-24 max-w-2xl px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-6">
            Chapter 01
          </h4>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-8">
            The KWASU Tech <br />
            <span className="text-on-surface-variant italic font-light">Conference.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            The journey began with the KWASU Tech Conference (KTC) — a foundational idea
            for building a structured tech gathering on campus. It was conceived as a platform
            to bring students, innovators, and tech enthusiasts together through talks,
            panels, and knowledge-sharing sessions.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
        {ORIGIN_PILLARS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <Card className="p-10 h-full flex flex-col justify-end bg-surface-container-low border-outline-variant/30 hover:shadow-xl transition-all duration-500 group">
              <div className="mb-12 h-14 w-14 bg-white flex items-center justify-center border border-outline-variant/20 rounded-none transform transition-transform group-hover:rotate-12">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                {item.description as ReactNode}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-24 pt-12 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-8 px-4 lg:px-0"
      >
        <div className="max-w-md">
          <h4 className="text-lg font-bold text-primary mb-2">Connect to the Archive</h4>
          <p className="text-on-surface-variant text-sm font-light">
            Explore the legacy of the KWASU Tech Conference through our official social archives.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="https://instagram.com/kwasutechconf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 border border-outline-variant/30 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 font-mono text-[10px] uppercase tracking-widest w-full sm:w-auto block rounded-md overflow-hidden relative group"
          >
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            <LinkIcon size={14} className="relative z-10" />
            <span className="relative z-10">Instagram</span>
          </a>
          <a 
            href="https://x.com/kwasutechconf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3 border border-outline-variant/30 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 font-mono text-[10px] uppercase tracking-widest w-full sm:w-auto block rounded-md overflow-hidden relative group"
          >
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            <LinkIcon size={14} className="relative z-10" />
            <span className="relative z-10">X / Twitter</span>
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
