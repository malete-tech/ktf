import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../layout/Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/kwasutf (1).png', alt: 'KWASU Tech Festival Moment 1' },
  { src: '/kwasutf (2).png', alt: 'KWASU Tech Festival Moment 2' },
  { src: '/kwasutf (3).png', alt: 'KWASU Tech Festival Moment 3' },
  { src: '/kwasutf (5).png', alt: 'KWASU Tech Festival Moment 4' },
];

const AUTOPLAY_MS = 5000;

export function HistoryGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % GALLERY_IMAGES.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    <Section className="bg-surface py-32 overflow-hidden">
      <div className="mb-16 max-w-2xl px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-primary/20" />
            <span className="text-[10px] font-mono tracking-widest text-primary/60 uppercase">
              Captured Moments
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-6">
            Through the <br />
            <span className="text-on-surface-variant italic font-light">Lens.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            Visual snapshots from the evolution of the KWASU Tech Festival — a glimpse into
            the energy, collaboration, and creativity that defines the experience.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-5xl mx-auto px-4 lg:px-0">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] border border-outline-variant/30 bg-surface-container-low">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={current}
              src={GALLERY_IMAGES[current].src}
              alt={GALLERY_IMAGES[current].alt}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Prev / Next */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous image"
              className="h-12 w-12 flex items-center justify-center border border-outline-variant/30 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="h-12 w-12 flex items-center justify-center border border-outline-variant/30 bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2">
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? 'w-8 bg-primary'
                    : 'w-4 bg-outline-variant/40 hover:bg-outline-variant'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <span className="text-[10px] font-mono tracking-widest text-primary/50 uppercase">
            {String(current + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </Section>
  );
}
