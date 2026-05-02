import { Section } from '../layout/Section';
import { motion } from 'framer-motion';

export function HistoryShift() {
  return (
    <Section className="bg-background py-40 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-6">
            Chapter 02
          </h4>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-8">
            The Shift <br />
            <span className="text-on-surface-variant italic font-light">in Direction.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* The Gap */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-secondary/40" />
            <div className="pl-8">
              <h3 className="text-2xl font-bold text-primary mb-6">The Realization</h3>
              <p className="text-on-surface-variant font-light leading-relaxed mb-6">
                As the vision developed under the Malete Tech Forum (MTF), it became clear
                that a traditional conference format would not fully achieve the intended impact.
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed">
                While conferences provided inspiration, they often lacked the depth of practical
                engagement needed to truly prepare students for real-world tech environments.
              </p>
            </div>
          </motion.div>

          {/* The Insight */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-primary/40" />
            <div className="pl-8">
              <h3 className="text-2xl font-bold text-primary mb-6">The Gap</h3>
              <p className="text-on-surface-variant font-light leading-relaxed mb-6">
                MTF identified a fundamental disconnect — the gap between learning <em>about</em> tech
                and actually experiencing how the tech ecosystem works.
              </p>
              <blockquote className="border-l-2 border-secondary/50 pl-6 py-2">
                <p className="text-primary italic font-light text-lg">
                  "Knowing about tech is not the same as knowing how to operate within it."
                </p>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
