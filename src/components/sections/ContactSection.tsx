'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call — replace with your actual form handler (e.g. Formspree, Resend)
    await new Promise((res) => setTimeout(res, 1500));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: 'var(--text-primary)',
    borderRadius: '12px',
    padding: '12px 16px',
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--surface-0)' }}>
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <p className="section-label justify-center">Contact</p>
            <h2
              className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Let's build something{' '}
              <span className="gradient-text">solid.</span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Have a project, opportunity, or just want to talk backend? I'm here.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left: social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 flex flex-col gap-4"
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className="glass glass-hover animated-border rounded-xl p-4 flex items-center gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0, 212, 255, 0.1)' }}
                >
                  <Mail size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    Email
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover animated-border rounded-xl p-4 flex items-center gap-3"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0, 212, 255, 0.1)' }}
                >
                  <Github size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    GitHub
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    /{siteConfig.github.split('/').pop()}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover animated-border rounded-xl p-4 flex items-center gap-3"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0, 212, 255, 0.1)' }}
                >
                  <Linkedin size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    /{siteConfig.linkedin.split('/').pop()}
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-3"
            >
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-8 text-center flex flex-col items-center gap-4"
                  style={{ border: '1px solid rgba(52, 211, 153, 0.3)' }}
                >
                  <CheckCircle size={40} style={{ color: '#34D399' }} />
                  <h3 className="font-display font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
                    Message sent!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-mono text-sm mt-2 px-4 py-2 rounded-lg border transition-all duration-200"
                    style={{ color: 'var(--accent)', borderColor: 'rgba(0,212,255,0.3)' }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-6 space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-xs mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 212, 255, 0.4)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 212, 255, 0.4)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs mb-2"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What are you working on?"
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(0, 212, 255, 0.4)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                    whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-opacity duration-200"
                    style={{
                      background: 'linear-gradient(135deg, #00D4FF, #7EB3FF)',
                      color: '#060810',
                      fontFamily: 'var(--font-display)',
                      opacity: status === 'sending' ? 0.7 : 1,
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 rounded-full border-t-transparent"
                          style={{ borderColor: '#060810', borderTopColor: 'transparent' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p
                    className="text-xs text-center"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Replace with{' '}
                    <a
                      href="https://formspree.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent)' }}
                    >
                      Formspree
                    </a>{' '}
                    or{' '}
                    <a
                      href="https://resend.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent)' }}
                    >
                      Resend
                    </a>{' '}
                    for real email delivery
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
