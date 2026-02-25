# Muhammad Maaz Rehan — Portfolio

A production-grade personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles sections)
│   └── globals.css         # Global styles + CSS variables
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CvFloatingButton.tsx
│   │   ├── CustomCursor.tsx
│   │   └── SectionWrapper.tsx
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── GithubSection.tsx
│       └── ContactSection.tsx
├── data/
│   └── portfolio.ts        # ← EDIT THIS FILE to update all content
public/
└── cv.pdf                  # ← Add your CV here
```

---

## ✏️ How to Customize

### Update your info
Edit **`src/data/portfolio.ts`** — this is the single source of truth:
- `siteConfig` — name, email, GitHub, LinkedIn links
- `skills` — skill categories + individual skill levels
- `experience` — work history with highlights
- `projects` — project cards with descriptions

### Add your CV
Place your CV PDF at: `public/cv.pdf`

### Add real contact form
In `ContactSection.tsx`, replace the `handleSubmit` function with a real API call:
- **Formspree**: `https://formspree.io` (free, no backend needed)
- **Resend**: `https://resend.com` (email API)

### Update GitHub username
In `src/data/portfolio.ts`, set your real GitHub URL:
```ts
github: 'https://github.com/YOUR_USERNAME',
```

---

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts. Vercel will auto-detect Next.js.

### Option 2: GitHub + Vercel Dashboard
1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Click Deploy — Vercel handles everything automatically

### Option 3: One-click deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 🛠️ Build & Lint

```bash
# Production build
npm run build

# Start production server locally
npm run start

# Lint
npm run lint
```

---

## 🎨 Design Tokens

All colors are controlled via CSS variables in `globals.css`:

```css
:root {
  --accent: #00D4FF;          /* Primary accent color */
  --surface-0: #060810;       /* Darkest bg */
  --surface-1: #0D1117;       /* Section bg alternate */
  --surface-2: #161B22;       /* Card background */
  --text-primary: #F0F6FF;    /* Main text */
  --text-secondary: #8B949E;  /* Subtitles */
  --text-muted: #484F58;      /* Labels */
}
```

To change the accent color, update `--accent` in `globals.css` and `tailwind.config.ts`.

---

## 📦 Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| react-type-animation | Typing effect |
| Syne + DM Sans | Typography |
| JetBrains Mono | Code font |

---

## 🏆 Performance

Optimized for Lighthouse score > 90:
- Next.js `<Image>` for all images
- Google Fonts loaded via CSS `@import`
- CSS-variable-based theming (no JS theme switching)
- Framer Motion `useInView` for scroll animations (no heavy observers)
- `once: true` on all animations to avoid re-triggering

---

Built with ❤️ for Muhammad Maaz Rehan
