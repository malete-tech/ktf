import { MerchHero } from '../components/merch/Hero';
import { ProductExhibition } from '../components/merch/ProductExhibition';
import { MerchWhyBuy } from '../components/merch/WhyBuy';
import { Section } from '../components/layout/Section';
import { motion } from 'framer-motion';

export default function Merch() {
  return (
    <main className="bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* HERO SECTION */}
        <MerchHero />

        {/* PRODUCT EXHIBITION SECTION */}
        <ProductExhibition />

        {/* BRAND VALUES SECTION */}
        <MerchWhyBuy />




        {/* FOOTER ACCENT */}
        <Section className="py-20 bg-background text-center opacity-10">
           <div className="max-w-4xl mx-auto border-t border-primary/20 pt-20">
              <span className="text-[140px] font-display font-black tracking-tighter text-primary select-none opacity-5">MTF_MERCH</span>
           </div>
        </Section>
      </motion.div>
    </main>
  );
}
