# Stainless Bending NZ — Website

Built with **Next.js 14** · Deployed on **Vercel**

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done.

### Option 2 — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo → Vercel auto-detects Next.js
4. Click **Deploy**

## Adding the Logo
Once the logo is ready:
1. Save it as `/public/images/logo.png` (or `.svg`)
2. In `src/app/page.js`, find the comment `{/* Logo placeholder */}`
3. Replace the `<div className="nav-logo-badge">SB</div>` with:
   ```jsx
   <img src="/images/logo.png" alt="Stainless Bending NZ" style={{ height: '40px', width: 'auto' }} />
   ```

## Adding Photos
Save images to `/public/images/` and replace the placeholder divs in `page.js`:

**Work gallery** — find `work-placeholder` divs and add:
```jsx
<img src="/images/your-photo.jpg" alt="Description" />
```

**About section** — find the `about-img-placeholder` div and replace with:
```jsx
<img src="/images/workshop.jpg" alt="Our workshop in Penrose" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

## Contact Form
The form currently shows a success state on submit. To wire it up to actually send emails, use one of:
- **Resend** (resend.com) — simple email API, free tier available
- **Formspree** (formspree.io) — no backend needed
- **Next.js API route** + nodemailer

## Project Structure
```
stainless-bending-nz/
├── src/
│   └── app/
│       ├── globals.css    ← All styles
│       ├── layout.js      ← HTML shell + metadata
│       └── page.js        ← Full site content
├── public/
│   └── images/            ← Drop logo + photos here
├── next.config.js
├── vercel.json
└── package.json
```
