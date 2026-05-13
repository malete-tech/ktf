import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Users, Globe, Zap } from 'lucide-react';

const REASONS = [
  {
    icon: Users,
    title: 'Community Identity',
    desc: 'Each item is a visual verification of your role in the KTF ecosystem.'
  },
  {
    icon: Globe,
    title: 'Supporting Ecosystem',
    desc: 'All proceeds are reinvested into grassroots technical mentorship and startup growth.'
  },
  {
    icon: Zap,
    title: 'Limited Edition',
    desc: 'Exclusive drops that are never reproduced, creating unique value for early builders.'
  }
];

export function MerchWhyBuy() {
  return (
    <Section className="bg-surface py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-8">System_Values</h4>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-12">
            Why the <br />
            <span className="text-secondary italic">Movement?</span>
          </h2>
          <p className="text-on-surface-variant text-lg lg:text-xl font-light leading-relaxed italic border-l-2 border-primary/20 pl-8 mb-12">
            "MTF Merchandise isn't about clothes; it's about the conviction to build. 
            When you wear the ecosystem, you signal a commitment to technical 
            mastery and collaborative innovation."
          </p>
          
          <div className="space-y-12">
             {REASONS.map((reason, i) => (
                <div key={i} className="flex gap-8 group">
                   <div className="h-14 w-14 flex-shrink-0 bg-primary/5 flex items-center justify-center border border-primary/10 rounded-none group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <reason.icon size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-primary mb-2 uppercase tracking-tighter group-hover:italic transition-all">{reason.title}</h3>
                      <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                         {reason.desc}
                      </p>
                   </div>
                </div>
             ))}
          </div>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative h-[600px] flex items-center justify-center group"
        >
           {/* Collage Background Elements */}
           <div className="absolute inset-0 bg-primary/5 rounded-none transform -rotate-1 opacity-20" />
           
           {/* Image 1: Hoodie (Back/Large) */}
           <div className="absolute top-10 left-10 w-2/3 aspect-[4/5] z-0 opacity-40 group-hover:opacity-100 transition-all duration-1000">
              <img 
                 src="/merch/hoodies 1.jpg" 
                 alt="KTF Hoodie" 
                 className="w-full h-full object-cover border border-primary/10 shadow-2xl"
              />
           </div>

           {/* Image 2: T-Shirt 1 (Middle/Offset) */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 aspect-[4/5] z-10 rotate-3 group-hover:rotate-0 transition-all duration-1000">
              <img 
                 src="/merch/t-shirt 1 (1).png" 
                 alt="KTF T-Shirt" 
                 className="w-full h-full object-cover border border-white/20 shadow-2xl"
              />
              <div className="absolute inset-0 border border-primary/20 pointer-events-none" />
           </div>

           {/* Image 3: T-Shirt 2 (Front/Bottom) */}
           <div className="absolute bottom-10 right-10 w-1/2 aspect-[4/5] z-20 -rotate-6 group-hover:rotate-0 transition-all duration-1000">
              <img 
                 src="/merch/t-shirt 1 (3).png" 
                 alt="KTF Minimal T-Shirt" 
                 className="w-full h-full object-cover border border-primary/10 shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
           </div>

           {/* Overlay Text */}
           <div className="absolute bottom-20 left-0 z-30 bg-primary text-white px-8 py-4 uppercase tracking-[0.4em] text-[10px] font-bold">
              Official_Supply_2026
           </div>

           {/* Decorative Lines */}
           <div className="absolute top-0 right-0 p-12 opacity-40">
              <div className="w-1 h-32 bg-primary/20" />
           </div>
           <div className="absolute bottom-0 left-0 p-12 opacity-40">
              <div className="w-1 h-32 bg-primary/20" />
           </div>
        </motion.div>
      </div>
    </Section>
  );
}
