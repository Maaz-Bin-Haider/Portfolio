'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Download, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';

// Floating orb component
function Orb({
  size,
  x,
  y,
  delay,
  color,
}: {
  size: number;
  x: string;
  y: string;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

// Grid dot background
function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }}
    />
  );
}

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'var(--surface-0)' }}
    >
      {/* Background effects */}
      <GridBackground />
      <Orb size={600} x="-10%" y="-20%" delay={0} color="rgba(0, 212, 255, 0.12)" />
      <Orb size={400} x="70%" y="50%" delay={2} color="rgba(167, 139, 250, 0.10)" />
      <Orb size={300} x="30%" y="70%" delay={4} color="rgba(0, 212, 255, 0.07)" />

      {/* Main content */}
      <div className="container-custom relative z-10 pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span
              className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border"
              style={{
                color: 'var(--accent)',
                borderColor: 'rgba(0, 212, 255, 0.25)',
                background: 'rgba(0, 212, 255, 0.06)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#22c55e',
                  boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)',
                }}
              />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Muhammad
            <br />
            <span className="gradient-text">Maaz Rehan</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={itemVariants}
            className="mb-6 font-display text-xl md:text-2xl font-semibold"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span>I'm a </span>
            <TypeAnimation
              sequence={[
                'Django Backend Developer.',
                2200,
                'Software Engineer.',
                2200,
                'Python Developer.',
                2200,
                'API Architect.',
                2200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: 'var(--accent)' }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mb-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            I build{' '}
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              scalable backend systems
            </span>{' '}
            with Django & PostgreSQL — from RESTful APIs to production deployments on AWS.
            Currently building at{' '}
            <span style={{ color: 'var(--accent)' }}>Swiss Tech Global</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #00D4FF, #7EB3FF)',
                color: '#060810',
                fontFamily: 'var(--font-display)',
              }}
            >
              View Projects
              <ExternalLink size={15} />
            </motion.a>
            <motion.a
              href={siteConfig.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-300"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'rgba(255, 255, 255, 0.12)',
                fontFamily: 'var(--font-display)',
                background: 'rgba(255,255,255,0.04)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              <Download size={15} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs transition-colors duration-200 group"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <span
              className="font-mono text-xs"
              style={{ color: 'var(--text-muted)' }}
            >
              📍 Karachi, Pakistan
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} style={{ color: 'var(--text-muted)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
