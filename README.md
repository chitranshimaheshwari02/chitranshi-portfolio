# Chitranshi Maheshwari — Portfolio

A single-page portfolio built with **React (Create React App)**, **SCSS**, and vanilla JavaScript, styled after a beige/purple "creative designer" template and populated from your resume.

## Run it locally

```bash
npm install
npm start
```

Opens at http://localhost:3000 with hot reload.

## Set up EmailJS (contact form)

The contact form sends messages straight to your inbox via [EmailJS](https://www.emailjs.com) — no backend needed, and it's free for up to 200 emails/month.

1. **Sign up** at https://www.emailjs.com and log in.
2. **Add an email service**: Email Services → Add New Service → pick Gmail (or your provider) → connect your account. Note the **Service ID**.
3. **Create a template**: Email Templates → Create New Template. Use these variables in the template body (they match what the form sends):
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`

   Example template body:
   ```
   New message from your portfolio!

   From: {{from_name}} ({{from_email}})

   {{message}}
   ```
   Set the "To email" field to your own email address. Note the **Template ID**.
4. **Get your Public Key**: Account → General → API Keys → copy the **Public Key**.
5. **Create a `.env` file** in the project root (copy `.env.example`) and fill in your three values:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
   REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
6. **Restart** `npm start` (env vars are only read at startup).

Until this is set up, submitting the form will show a friendly "email isn't set up yet" message instead of failing silently — so you'll always know it's working (or not) before sharing the site.

**Note:** these are read as `process.env.REACT_APP_*` at build time, so if you deploy (Vercel/Netlify), add the same three variables in your host's environment variable settings too.

## Build for production

```bash
npm run build
```

Outputs a static site to `build/` — deploy it to Vercel, Netlify, GitHub Pages, etc.

## Structure

```
src/
  components/     one component + one .scss file per section
  data/           resumeData.js — all your content lives here, edit freely
  hooks/          useReveal.js — scroll-triggered animation hook
  styles/         _variables.scss, _mixins.scss, global.scss
```

## Customize

- **Content** — edit `src/data/resumeData.js` (name, role, experience, projects, skills, links).
- **Colors** — edit the tokens at the top of `src/styles/_variables.scss`.
- **Photo** — swap the `MonogramArt` SVG in `src/components/Hero.js` for an `<img>` of your own photo if you'd like.
- **Fonts** — loaded from Google Fonts (Baloo 2 + DM Sans) in `public/index.html`.

## Animations included

- Scroll-triggered fade/rise reveals on every section (IntersectionObserver-based, respects `prefers-reduced-motion`)
- Hover lifts on cards, project tiles, and nav links
- Floating/spinning doodle stickers (star, smiley, arrow-draw, heart) in the hero
- Animated skill progress bars that fill on scroll into view
- Infinite auto-scrolling "tools" marquee (pauses on hover)
- Sticky nav with active-section highlighting and a scroll-blurred background
