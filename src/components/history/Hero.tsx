import { motion } from 'framer-motion';

export function HistoryHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-32">
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-x-0 top-1/4 h-px bg-primary/20 animate-pulse" />
        <div className="absolute inset-x-0 bottom-1/3 h-px bg-primary/20 animate-pulse delay-1000" />
        <div className="absolute left-1/3 inset-y-0 w-px bg-primary/20 animate-pulse delay-500" />
        <div className="absolute right-1/3 inset-y-0 w-px bg-primary/20 animate-pulse delay-1500" />

        {/* Floating Rings */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-72 h-72 border border-primary/15 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 border border-primary/10 rounded-full"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-mono tracking-[0.4em] text-primary/60 uppercase mb-8 block">
            Archive Loaded // Phase: 00_HISTORY
          </span>
          <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-display font-medium leading-[0.9] tracking-tighter text-primary mb-12 uppercase">
            Our <br />
            <span className="text-secondary italic">Story.</span>
          </h1>

          <p className="max-w-xl mx-auto text-on-surface-variant text-lg lg:text-xl font-light italic mb-12">
            "From conference rooms to festival grounds — the evolution of how tech is experienced on campus."
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[8px] font-mono tracking-widest uppercase">Scroll to Explore</span>
        <div className="w-px h-12 bg-primary/40" />
      </motion.div>
    </section>
  );
}
