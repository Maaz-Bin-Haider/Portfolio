// 'use client';

// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Github } from 'lucide-react';
// import { siteConfig } from '@/data/portfolio';

// // Extract GitHub username from URL
// const githubUsername = siteConfig.github.split('/').pop() || 'maazrehan';

// export default function GithubSection() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-80px' });

//   return (
//     <section id="github" className="section-padding" style={{ background: 'var(--surface-1)' }}>
//       <div className="container-custom" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mb-12"
//         >
//           <p className="section-label">GitHub Activity</p>
//           <h2
//             className="font-display font-bold"
//             style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
//           >
//             Commit history &{' '}
//             <span className="gradient-text">open source</span>
//           </h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="grid md:grid-cols-2 gap-6 max-w-3xl"
//         >
//           {/* Stats card */}
//           <a
//             href={siteConfig.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="glass glass-hover animated-border rounded-2xl p-6 group"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <Github size={20} style={{ color: 'var(--accent)' }} />
//               <span
//                 className="font-display font-semibold"
//                 style={{ color: 'var(--text-primary)' }}
//               >
//                 GitHub Profile
//               </span>
//             </div>
//             <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
//               Check out my repositories, contributions, and open source work.
//             </p>
//             <span
//               className="font-mono text-xs"
//               style={{ color: 'var(--accent)' }}
//             >
//               @{githubUsername} →
//             </span>
//           </a>

//           {/* Stats image */}
//           <div className="glass rounded-2xl overflow-hidden">
//             <img
//               src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&text_color=8B949E&icon_color=00D4FF&title_color=F0F6FF&bg_color=0D1117`}
//               alt="GitHub Stats"
//               className="w-full h-full object-cover"
//               style={{ minHeight: '140px' }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Github, Star, GitFork, BookOpen, Users, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/data/portfolio';

const githubUsername = siteConfig.github.split('/').pop() || 'Maaz-Bin-Haider';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string | null;
  avatar_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
}

const langColors: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML: '#E34C26',
  CSS: '#563D7C',
  Shell: '#89E051',
};

function StatCard({ value, label, icon: Icon }: { value: number | string; label: string; icon: React.ElementType }) {
  return (
    <div
      className="flex flex-col items-center gap-1 p-4 rounded-xl"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <Icon size={16} style={{ color: 'var(--accent)' }} />
      <span className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
        {value}
      </span>
      <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
    </div>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-hover animated-border rounded-xl p-4 flex flex-col gap-3 group"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <BookOpen size={13} style={{ color: 'var(--accent)' }} />
          <span
            className="font-mono text-sm font-medium"
            style={{ color: 'var(--text-primary)' }}
          >
            {repo.name}
          </span>
        </div>
        <ExternalLink size={12} style={{ color: 'var(--text-muted)' }} className="flex-shrink-0 mt-0.5" />
      </div>
      {repo.description && (
        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
          {repo.description}
        </p>
      )}
      <div className="flex items-center gap-4 mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColors[repo.language] || '#8B949E' }} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          <Star size={11} />{repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          <GitFork size={11} />{repo.forks_count}
        </span>
      </div>
    </a>
  );
}

function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg animate-pulse ${className}`} style={{ background: 'rgba(255,255,255,0.05)' }} />
  );
}

export default function GithubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${githubUsername}`),
          fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');
        const userData: GitHubStats = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();
        setStats(userData);
        setRepos(reposData.filter((r) => !r.name.toLowerCase().includes(githubUsername.toLowerCase())).slice(0, 4));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHub();
  }, []);

  return (
    <section id="github" className="section-padding" style={{ background: 'var(--surface-1)' }}>
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label">GitHub Activity</p>
          <h2 className="font-display font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Code, commits &{' '}
            <span className="gradient-text">open source</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Profile card */}
          <div className="glass animated-border rounded-2xl p-6 mb-6 max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              {loading ? (
                <>
                  <Skeleton className="w-14 h-14 rounded-full" />
                  <div className="flex flex-col gap-2 flex-1">
                    <Skeleton className="h-5 w-40" />
                    <Skeleton className="h-3 w-56" />
                  </div>
                </>
              ) : (
                <>
                  {stats?.avatar_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={stats.avatar_url}
                      alt={stats.name || githubUsername}
                      className="w-14 h-14 rounded-full"
                      style={{ border: '2px solid rgba(0,212,255,0.3)' }}
                    />
                  )}
                  {!stats?.avatar_url && (
                    <div className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                      <Github size={24} style={{ color: 'var(--accent)' }} />
                    </div>
                  )}
                  <div>
                    <p className="font-display font-semibold mb-0.5" style={{ color: 'var(--text-primary)' }}>
                      {stats?.name || githubUsername}
                    </p>
                    {stats?.bio && (
                      <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{stats.bio}</p>
                    )}
                    <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
                      @{githubUsername} →
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {loading ? (
                Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-20 rounded-xl" />)
              ) : error ? (
                <div className="col-span-3 text-center py-4">
                  <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
                    View GitHub Profile →
                  </a>
                </div>
              ) : (
                <>
                  <StatCard value={stats?.public_repos ?? 0} label="Repositories" icon={BookOpen} />
                  <StatCard value={stats?.followers ?? 0} label="Followers" icon={Users} />
                  <StatCard value={stats?.following ?? 0} label="Following" icon={Users} />
                </>
              )}
            </div>
          </div>

          {/* Repos grid */}
          {!error && repos.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
              {loading
                ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32 rounded-xl" />)
                : repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
