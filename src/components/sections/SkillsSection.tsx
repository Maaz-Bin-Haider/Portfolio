'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skills } from '@/data/portfolio';

const colorMap: Record<string, string> = {
  cyan: '#00D4FF',
  blue: '#7EB3FF',
  violet: '#A78BFA',
  emerald: '#34D399',
  orange: '#FB923C',
};

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-xs" style={{ color: 'var(--text-secondary)' }}>
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color: colorMap[color] }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${colorMap[color]}, ${colorMap[color]}88)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--surface-0)' }}>
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Technical Skills</p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            What I work with,{' '}
            <span className="gradient-text">day-to-day</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(group.category)}
              onMouseLeave={() => setHovered(null)}
              className="glass glass-hover animated-border rounded-2xl p-6 cursor-default transition-all duration-300"
              style={{
                borderColor:
                  hovered === group.category
                    ? `${colorMap[group.color]}30`
                    : 'rgba(255,255,255,0.06)',
                boxShadow:
                  hovered === group.category
                    ? `0 0 30px ${colorMap[group.color]}10`
                    : 'none',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                  style={{
                    background: `${colorMap[group.color]}12`,
                    border: `1px solid ${colorMap[group.color]}25`,
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  className="font-display font-semibold text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {group.category}
                </h3>
              </div>

              {group.items.map((skill, j) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={i * 0.1 + j * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
