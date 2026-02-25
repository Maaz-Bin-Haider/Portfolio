'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';

export default function CvFloatingButton() {
  return (
    <motion.a
      href={siteConfig.cvPath}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[150] flex items-center gap-2 px-4 py-3 rounded-full shadow-glow-lg font-mono text-xs font-medium"
      style={{
        background: 'linear-gradient(135deg, #00D4FF, #7EB3FF)',
        color: '#060810',
      }}
    >
      <Download size={14} strokeWidth={2.5} />
      Download CV
    </motion.a>
  );
}
