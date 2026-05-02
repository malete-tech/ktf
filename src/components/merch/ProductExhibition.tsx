import { motion } from 'framer-motion';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { ExternalLink } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'MTF-TS-01',
    name: 'MTF Branded T-Shirt',
    description: 'Minimalist tech-luxe design. 100% heavy cotton, oversized fit, screen-printed iconic logo. Engineered for high-stakes building.',
    tagline: 'The Builder\'s Uniform',
    image: '/merch/tshirt.png',
    isLimited: true
  },
  {
    id: 'MTF-HD-02',
    name: 'Tech Festival Hoodie',
    description: 'Black heavy-weight fleece with a structured technical fit. Features the metallic KTF blueprint across the back.',
    tagline: 'Technical Armor',
    image: '/merch/hoodie.png',
    isLimited: true
  },
  {
    id: 'KTF-NB-03',
    name: 'Tech Ecosystem Notebook',
    description: 'Hardbound matte black notebook. 192 grid-lined pages for logic design and strategic planning. Features a blind-debossed KTF logo.',
    tagline: 'Strategic Intelligence',
    image: '/merch/notebook.png'
  },
  {
    id: 'MTF-SP-04',
    name: 'Sticker Pack (v2.0)',
    description: 'High-visibility laptop decals. Waterproof vinyl featuring tech humor, KTF branding, and ecosystem-specific coding icons.',
    tagline: 'Digital Identity',
    image: '/merch/stickers.png'
  },
  {
    id: 'MTF-LS-05',
    name: 'Tech Accessories Sleeve',
    description: 'Premium dark-felt laptop sleeve. Minimalist protection with a signature MTF leather patch. Designed for 14-inch/16-inch laptops.',
    tagline: 'Hardware Shield',
    image: '/merch/sleeve.png'
  }
];

export function ProductExhibition() {
  return (
    <Section id="exhibition" className="bg-background py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-32 text-center max-w-2xl mx-auto">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-8">Culture_Showcase</h4>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-12">
            The Exhibition <br />
            <span className="text-secondary italic">Gallery.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed px-4">
             Explore the physical manifestations of the MTF ecosystem. Each piece is designed 
             as a functional artifact of the building culture.
          </p>
        </div>

        <div className="flex justify-center mb-40 px-4">
           <a href="https://your-store-url.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-16">
                Visit Official Store <ExternalLink size={18} className="ml-4" />
              </Button>
           </a>
        </div>

        {/* Exhibition Items */}
        <div className="space-y-64">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-32 items-center`}
            >
              {/* Image Side */}
              <div className="flex-1 relative group w-full">
                <div className="absolute inset-0 bg-primary/5 rounded-none transform rotate-3 group-hover:rotate-0 transition-transform duration-1000" />
                <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-low border border-outline-variant/30">
                  {product.isLimited && (
                    <div className="absolute top-0 right-0 z-10 bg-secondary text-white text-[10px] font-bold px-6 py-3 uppercase tracking-[0.2em]">
                      Limited Edition
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-1000"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 text-center lg:text-left">
                <span className="text-[10px] font-mono tracking-[0.4em] text-secondary uppercase mb-6 block">
                  Artifact // {product.id}
                </span>
                <h3 className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2 italic">
                  {product.tagline}
                </h3>
                <h2 className="text-4xl sm:text-6xl font-display font-medium text-primary mb-8 uppercase tracking-tighter">
                  {product.name}
                </h2>
                <div className="h-px w-20 bg-secondary/30 mb-8 mx-auto lg:mx-0" />
                <p className="text-on-surface-variant text-lg font-light leading-relaxed italic mb-12 max-w-md mx-auto lg:mx-0">
                  {product.description}
                </p>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                   <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                   <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Functional Integrity Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-64 border-t border-outline-variant/20 pt-40 px-4">
           <h3 className="text-3xl font-display font-medium uppercase mb-12 text-primary text-center">Ready to Acquire?</h3>
           <a href="https://your-store-url.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-20">
                Access Official Store <ExternalLink size={20} className="ml-6" />
              </Button>
           </a>
           <p className="mt-12 text-[10px] font-mono text-primary/40 uppercase tracking-widest">
              Secure Checkout // Global Logistics // MTF_AUTHORIZED
           </p>
        </div>
      </div>
    </Section>
  );
}
