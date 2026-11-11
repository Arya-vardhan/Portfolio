# Arya Vardhan Gelli — The Investigation Board Portfolio

An interactive, cinematic **Detective Investigation Board Portfolio** crafted for **Arya Vardhan Gelli** (PE Autonomous Vehicle SWQ @ Cognizant, Embedded Systems, Network Security).

Modeled on a classic detective conspiracy pinboard with an interactive corkboard, dynamic red yarn string network, 3D ambient dust motes (Three.js), cinematic zoom-and-pan camera navigation, and modular case file dossiers.

---

## Architecture & Project Structure

The project has been modularized into separate stylesheets, ES6 JavaScript modules, dedicated case dossier pages, and a Vite production build pipeline:

```
Portfolio/
├── index.html                  # Main Investigation Board Entry Point
├── package.json                # Dependencies (Vite, Three.js, GSAP)
├── vite.config.js              # Multi-page build configuration
│
├── pages/                      # Dedicated In-Depth Case Files
│   ├── cognizant.html          # Case 01: Cognizant AV SWQ (Corridor Logs & Tools)
│   ├── cadsys.html             # Case 02: CADSYS OSP Telecom (Blueprints & Sag Calcs)
│   ├── rvm.html                # Case 03: Vishnuspire Reverse Vending Machine (RPi GPIO)
│   ├── cybersecurity.html      # Case 04: Cisco NetAcad & Forensics Ledger
│   ├── hardware-lab.html       # Case 05: Embedded IoT Bench (ESP32, Health, TTS)
│   ├── mystery-game.html       # Case 06: "Bored?" Mystery Engine & Mini-Games
│   ├── academics.html          # Case 07: Academic & Robotics Competition Archive
│   └── resume.html             # Official Classified Resume / PDF Export View
│
├── styles/                     # Modular CSS
│   ├── base.css                # Typography & global resets
│   ├── corkboard.css           # Cork texture, lighting, pushpins & tape
│   ├── dossier.css             # Manila folders, typewriter styling, blueprints
│   ├── hud.css                 # Detective radar, flashlight & audio controls
│   └── modal.css               # Evidence examination lightbox
│
└── scripts/                    # Modular ES6 JavaScript
    ├── main.js                 # App coordinator & event orchestration
    ├── camera.js               # GSAP smooth camera glide & stop coordinates
    ├── yarn.js                 # HTML5 Canvas 2D red thread catenary physics
    ├── torch.js                # Dynamic flashlight / desk lamp cursor tracking
    ├── audio.js                # Web Audio API procedural sound engine
    ├── three-ambient.js        # Three.js 3D ambient dust motes & lighting
    ├── data/
    │   └── cases.js            # Structured case data & evidence records
    ├── modal.js                # Evidence lightbox modal controller
    └── tracker.js              # Case checklist & "Case Solved" unlock banner
```

---

## Running Locally

### Option 1: Using Vite Dev Server (Recommended)
```bash
npm run dev
```

### Option 2: Using Python HTTP Server
```bash
python -m http.server 8000
```
Open: `http://localhost:8000`

---

## Production Build

To bundle the entire project into the optimized `dist/` directory:
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```

---

## Deployment to GitHub Pages

To deploy your portfolio to `https://arya-vardhan.github.io`:

```bash
git add .
git commit -m "feat: deploy modular investigation board portfolio"
git push -u origin main
```
