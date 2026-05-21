# STILL — A Calm Emotional Space

A free, installable web app for emotional grounding.
No backend. No login. No tracking. Works offline.

---

## What it is

STILL is a Spotify-style ambient space for your inner world.
It has mood rooms with atmospheric visuals, generative ambient
soundscapes, and slowly rotating reflective quotes.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire app (one file) |
| `sw.js` | Service worker (enables offline + install) |
| `manifest.json` | PWA metadata (install to home screen) |

---

## Deploy for free in 2 minutes

### Option 1 — GitHub Pages (recommended)
1. Create a free GitHub account at github.com
2. New repository → upload these 3 files
3. Settings → Pages → Branch: main → Save
4. Your app is live at `https://yourname.github.io/still`

### Option 2 — Netlify Drop
1. Go to netlify.com/drop
2. Drag the folder with all 3 files onto the page
3. Done — instant live URL

### Option 3 — Vercel
1. vercel.com → Add New → upload folder
2. Live in seconds with a vercel.app URL

---

## Install on any device

Once deployed, visit the URL in a browser:

- **iPhone/iPad**: Share → Add to Home Screen
- **Android**: Menu → Install App / Add to Home Screen
- **Mac/Windows/Linux**: Chrome address bar → install icon

The app works fully offline after the first visit.

---

## Customise without coding

Open the app → tap the **✦** button (top right) → edit:

- **App name** — rename it for your family/community
- **Quotes** — paste your own, one per line, format: `Text | Author`
- **Rooms** — change rooms, colours, emoji
- **Your message** — the greeting shown on arrival
- **Breathing speed** — how fast the ring pulses

All changes save automatically in the browser.

---

## Sharing with family

Each person who installs it gets their own copy.
They can customise their own version independently.

To share a pre-customised version for a family/community:
1. Edit the `DEFAULTS` object in `index.html` (lines ~100–130)
2. Change the quotes array and rooms array to your own
3. Redeploy — everyone who visits gets your defaults

---

## Soundscapes

All sound is generated live in the browser using the Web Audio API:
- Rain, Ocean, Fire, Wind — shaped noise filters
- Bells — 432Hz pure sine tone
- Drone — layered overtone series at 110Hz

No audio files needed. No copyright. Infinite and free.

---

## Privacy

- Zero tracking, zero analytics, zero cookies
- Nothing leaves your device
- All settings stored in browser localStorage
- Can be used fully offline

---

## Inspired by

The brief: a calm Spotify-style emotional space.
The spirit: stillness as a radical act.

---

*"Be still and know."*
