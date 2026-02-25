'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';
import { projects } from '@/data/portfolio';

type Project = typeof projects[0];

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass glass-hover animated-border rounded-2xl overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      {/* Thumbnail placeholder */}
      <div
        className="h-48 relative overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, var(--surface-2), var(--surface-3))`,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 60%),
                              radial-gradient(circle at 70% 50%, rgba(167, 139, 250, 0.06) 0%, transparent 60%)`,
          }}
        />
        <p
          className="font-mono text-xs relative z-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {project.tags.slice(0, 2).join(' + ')}
        </p>

        {/* hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: 'rgba(6, 8, 16, 0.7)' }}
        >
          <span
            className="font-mono text-xs flex items-center gap-1"
            style={{ color: 'var(--accent)' }}
          >
            View Details <ChevronRight size={12} />
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="font-display font-bold text-lg mb-2 group-hover:text-[--accent] transition-colors duration-200"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-5 line-clamp-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div
          className="flex items-center gap-4 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Github size={13} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[500] flex items-center justify-center p-4"
        style={{ background: 'rgba(6, 8, 16, 0.85)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          style={{ border: '1px solid rgba(0, 212, 255, 0.2)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-start justify-between p-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div>
              <h3
                className="font-display font-bold text-xl mb-1"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.longDescription}
            </p>

            <h4
              className="font-display font-semibold text-sm mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Key Features
            </h4>
            <ul className="space-y-2 mb-8">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'var(--accent)' }}
                  />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border font-mono text-xs transition-all duration-200"
                  style={{
                    color: 'var(--text-primary)',
                    borderColor: 'rgba(255,255,255,0.12)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.3)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                  }}
                >
                  <Github size={14} />
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs"
                  style={{
                    background: 'linear-gradient(135deg, #00D4FF, #7EB3FF)',
                    color: '#060810',
                    fontWeight: 600,
                  }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--surface-0)' }}>
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Projects</p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Things I've{' '}
            <span className="gradient-text">actually shipped</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Production systems, not toy projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
