'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Server, Database, Cloud } from 'lucide-react';
import { education, experience } from '@/data/portfolio';

const highlights = [
  {
    icon: Server,
    title: 'Production Backend',
    description: 'Building real accounting & inventory systems deployed live on AWS EC2.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Complex PostgreSQL schemas with multi-table transactions and data integrity.',
  },
  {
    icon: Cloud,
    title: 'AWS Deployment',
    description: 'Full production stack: EC2 + Nginx + Gunicorn with 99.9% uptime.',
  },
];

const timeline = [
  {
    icon: GraduationCap,
    label: 'Education',
    title: education[0].degree,
    sub: education[0].institution,
    period: education[0].period,
    status: education[0].status,
  },
  {
    icon: Briefcase,
    label: 'Experience',
    title: experience[0].role,
    sub: experience[0].company,
    period: experience[0].period,
    status: 'Current',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--surface-1)' }}>
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About Me</p>
          <h2
            className="font-display font-bold mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Engineering software that{' '}
            <span className="gradient-text">runs in the real world</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              I'm a Python-focused Software Engineering undergraduate with hands-on experience
              building{' '}
              <span style={{ color: 'var(--text-primary)' }}>
                production-grade backend systems
              </span>{' '}
              for real businesses. I don't just write code — I engineer systems that handle actual
              financial workflows, real data, and live deployments.
            </p>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'var(--text-secondary)' }}
            >
              Currently at{' '}
              <span style={{ color: 'var(--accent)' }}>Swiss Tech Global</span>, I've built an
              end-to-end Accounting & Inventory Management System — from database schema design to
              AWS deployment — using Django, PostgreSQL, and REST APIs.
            </p>

            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass glass-hover rounded-xl p-4 flex items-start gap-4 animated-border"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0, 212, 255, 0.1)' }}
                  >
                    <h.icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p
                      className="font-display font-semibold text-sm mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {h.title}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {h.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p
              className="font-mono text-xs mb-8 uppercase tracking-widest"
              style={{ color: 'var(--text-muted)' }}
            >
              Timeline
            </p>
            <div className="relative">
              {/* vertical line */}
              <div
                className="absolute left-4 top-6 bottom-0 w-px"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                    className="relative flex gap-6 pl-14"
                  >
                    {/* icon */}
                    <div
                      className="absolute left-0 top-0 w-8 h-8 rounded-full border flex items-center justify-center z-10"
                      style={{
                        background: 'var(--surface-2)',
                        borderColor: 'rgba(0, 212, 255, 0.3)',
                      }}
                    >
                      <item.icon size={14} style={{ color: 'var(--accent)' }} />
                    </div>

                    <div className="glass rounded-xl p-5 flex-1">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <span
                          className="font-mono text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: 'rgba(0, 212, 255, 0.1)',
                            color: 'var(--accent)',
                          }}
                        >
                          {item.status}
                        </span>
                        <span
                          className="font-mono text-xs"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {item.period}
                        </span>
                      </div>
                      <h3
                        className="font-display font-semibold mb-1"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {item.sub}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
