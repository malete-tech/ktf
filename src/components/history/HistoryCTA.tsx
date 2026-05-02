import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function HistoryCTA() {
  return (
    <Section className="bg-background py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto px-4 lg:px-0"
      >
        <span className="text-[10px] font-mono tracking-[0.4em] text-primary/60 uppercase mb-8 block">
          The Next Chapter Starts With You
        </span>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-8">
          Be Part of the <br />
          <span className="text-secondary italic">Future.</span>
        </h2>
        <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
          The story isn't over. The next chapter of KTF is being written right now — and you can be in it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/register" className="w-full sm:w-auto">
            <Button size="lg" className="w-full px-12">
              Get Access Permit
            </Button>
          </Link>
          <Link to="/experience" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full px-12">
              Explore the Experience
            </Button>
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
