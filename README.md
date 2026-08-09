# Shahban Ansari — Portfolio

Single-page portfolio built with **React + Vite**. Dark, editorial, terminal-flavored — the thieb.co vibe, adapted for a Linux Administrator who builds tools.

## Run locally

```bash
npm install      # once
npm run dev      # dev server → http://localhost:5173
npm run build    # production build → dist/
```

## Make it yours — files to edit

| File | What's in it |
|---|---|
| `src/components/Hero.jsx` | Name, tagline, bio, stat numbers. |
| `src/components/Toolbox.jsx` | Skills wall — replace with the tools you use. |
| `src/components/Experience.jsx` | Work history — newest role first. |
| `src/components/Strengths.jsx` | Key strengths checklist. |
| `src/components/Education.jsx` | Education & certifications. |
| `public/resume.pdf` | Your resume (replace to update the download). |
| `src/data/projects.js` | Your GitHub projects. Add/edit/remove cards here. |
| `src/components/Contact.jsx` | Email, phone, LinkedIn — **fill in the LinkedIn placeholder**. |
| `index.html` | Page `<title>` + meta description. |
| `public/favicon.svg` | The little browser-tab icon. |

## Deploy for free

The build uses `base: './'`, so it works on any static host with zero config.

### Option A — GitHub Pages (recommended, uses your GitHub account)

```bash
cd C:\Users\Admin\portfolio
git init
git add .
git commit -m "Initial portfolio"
```

1. On GitHub, create a **new repo** named `portfolio` (public).
2. Back in the terminal:
   ```bash
   git remote add origin https://github.com/shahvanansari1-glitch/portfolio.git
   git push -u origin main
   ```
3. On GitHub: repo → **Settings** → **Pages** → *Source*: **Deploy from a branch** → branch `main`, folder `/ (root)` → **Save**.
4. Wait ~1 min. Your site is live at:

   **https://shahvanansari1-glitch.github.io/portfolio/**

Every future `git push` redeploys automatically.

### Option B — Netlify (drag-and-drop, no git needed)

1. `npm run build` → the `dist/` folder is your site.
2. Go to **app.netlify.com/drop** and drag `dist/` in. Done.

### Option C — Vercel

Connect the GitHub repo on **vercel.com** — it auto-detects Vite. No config needed.

## Need a custom domain later?

Both GitHub Pages and Netlify support custom domains free (you just pay for the domain name itself, ~$10/yr).
