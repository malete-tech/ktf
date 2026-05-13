import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

const EVENT_SNAPSHOTS = [
  { src: '/events.jpg', label: '01_INNOVATION' },
  { src: '/pitch battle.jpg', label: '02_MOMENTUM' },
  { src: '/networking.jpg', label: '03_COLLISION' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-40 pb-20">
      {/* Subtle Grid - Minimalist approach */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0">
        <div className="absolute inset-x-0 top-0 h-full w-full bg-[linear-gradient(to_right,#002519_1px,transparent_1px),linear-gradient(to_bottom,#002519_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>



      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Main Kinetic Heading */}
        <div className="max-w-7xl mb-24 relative">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-8 lg:gap-x-12 gap-y-0 leading-none">
            <motion.span 
              animate={{ 
                x: [-100, 0, -100],
                opacity: [0.5, 1, 0.5],
                scale: [0.9, 1, 0.9]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="text-6xl sm:text-8xl lg:text-[10rem] font-display font-medium text-primary uppercase select-none"
            >
              Tech
            </motion.span>

            <motion.span 
              animate={{ 
                y: [50, 0, 50],
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="text-6xl sm:text-8xl lg:text-[10rem] font-display font-medium text-primary/40 uppercase select-none"
            >
              in
            </motion.span>

            <motion.span 
              animate={{ 
                x: [100, 0, 100],
                opacity: [0.5, 1, 0.5],
                scale: [0.9, 1, 0.9]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="text-6xl sm:text-8xl lg:text-[10rem] font-display font-medium text-secondary uppercase italic select-none"
            >
              Motion.
            </motion.span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
            className="h-px w-32 bg-secondary mx-auto my-12"
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mx-auto max-w-xl text-lg sm:text-xl text-on-surface-variant leading-relaxed font-light italic"
          >
            The premier student-led tech ecosystem. A radical collision of 
            innovators, builders, and technical masterminds.
          </motion.p>


          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-16"
          >
            <Link to="/register">
              <Button size="lg" className="px-16 text-xs font-bold uppercase tracking-[0.3em] rounded-none">
                Access Terminal
              </Button>
            </Link>
            <Link to="/experience">
              <Button variant="secondary" size="lg" className="px-16 text-xs font-bold uppercase tracking-[0.3em] border-primary/10 rounded-none hover:bg-primary/5">
                The Narrative
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Artifact Gallery - The "Event Feel" */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
           {EVENT_SNAPSHOTS.map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 1.5 + (i * 0.2), ease: [0.22, 1, 0.36, 1] }}
               className="group relative"
             >
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low border border-outline-variant/20">
                  <img 
                    src={item.src} 
                    alt={item.label} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-40 group-hover:opacity-0 transition-opacity" />
                  

                </div>

             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}


