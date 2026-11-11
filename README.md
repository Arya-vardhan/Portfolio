# Arya Vardhan Gelli — Engineering Portfolio

A high-performance, precision portfolio website crafted with the **Unslop** design philosophy for **Arya Vardhan Gelli** (PE Autonomous Vehicle SWQ @ Cognizant, Embedded Systems, Network Security).

---

## Design System & Unslop Implementation

Designed strictly following the [Unslop](https://github.com/heydamir/unslop) system to eliminate generic AI/template tells:

- **Zero Slop Tells**: No purple gradients, no blurry background glowing blobs, no floating emoji badges (`✨`, `🚀`), and no hyperbolic copy.
- **World & Palette**: Engineered with the **Ink Neutral Ramp** (`#07080d`, `#0b0d14`, `#11141c`, `#1a1e28`) matched to a hardware lab bench and autonomous vehicle telematics workstation.
- **Accents**: High-contrast, deliberate telemetry signals (phosphor green `#4cc38a` and amber `#f59e0b`) covering $< 3\%$ of the interface.
- **Typography**: Dual-family pairing with **IBM Plex Sans** (for calm, precise editorial hierarchy) and **IBM Plex Mono** (for technical parameters, tabular numbers, and diagnostic feeds).
- **Moments of Craft**: 
  - Live simulated **Telemetry & Systems Diagnostic Terminal** with real-time log ingestion.
  - Interactive **Hardware Project Rack** (Reverse Vending Machine with Raspberry Pi, ESP32 IoT Node, Health Biometrics).
  - Verifiable **Cisco NetAcad Certification Ledger** and Outside Plant (OSP) Engineering credentials.

---

## Local Preview

You can preview the portfolio using any local web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

Then visit: `http://localhost:8000`

---

## Deployment to GitHub Pages

To update your existing GitHub Pages site (`arya-vardhan.github.io`):

```bash
git init
git add .
git commit -m "feat: redesign portfolio with unslop engineering design system"
git branch -M main
git remote add origin https://github.com/Arya-vardhan/arya-vardhan.github.io.git
git push -u origin main --force
```

