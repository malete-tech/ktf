import { motion } from 'framer-motion';
import { HistoryHero } from '../components/history/Hero';
import { HistoryOrigin } from '../components/history/Origin';
import { HistoryShift } from '../components/history/Shift';
import { HistoryEvolution } from '../components/history/Evolution';
import { HistoryChanges } from '../components/history/Changes';
import { HistoryIdentity } from '../components/history/Identity';
import { HistoryGallery } from '../components/history/Gallery';
import { HistoryCTA } from '../components/history/HistoryCTA';

export function History() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-background min-h-screen"
    >
      <HistoryHero />
      <HistoryOrigin />
      <HistoryShift />
      <HistoryEvolution />
      <HistoryChanges />
      <HistoryIdentity />
      <HistoryGallery />
      <HistoryCTA />
    </motion.main>
  );
}
