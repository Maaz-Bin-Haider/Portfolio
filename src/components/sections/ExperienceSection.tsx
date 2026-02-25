'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '@/data/portfolio';

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--surface-1)' }}>
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Experience</p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Where I've been{' '}
            <span className="gradient-text">building</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative"
            >
              {/* Card */}
              <div className="glass rounded-2xl p-8 animated-border">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(0, 212, 255, 0.1)',
                          color: 'var(--accent)',
                        }}
                      >
                        {job.type}
                      </span>
                    </div>
                    <h3
                      className="font-display font-bold text-xl mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {job.role}
                    </h3>
                    <p
                      className="font-semibold text-lg"
                      style={{ color: 'var(--accent)' }}
                    >
                      {job.company}
                    </p>
                  </div>

                  <div
                    className="flex flex-col gap-1.5 text-right"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <div className="flex items-center gap-1.5 justify-end font-mono text-xs">
                      <Calendar size={12} />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1.5 justify-end font-mono text-xs">
                      <MapPin size={12} />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {job.highlights.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + j * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'var(--accent)' }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
