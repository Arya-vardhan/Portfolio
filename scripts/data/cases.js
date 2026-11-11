/* ==================== EVIDENCE DATA REPOSITORY ==================== */

export const EVIDENCE_DETAILS = {
  center: {
    id: "center",
    pageUrl: "pages/resume.html",
    title: "PERSON OF INTEREST: ARYA VARDHAN GELLI",
    subtitle: "DOSSIER ARCHIVE // BIOMETRIC & PROFESSIONAL CLEARANCE",
    stamp: "SUBJECT VERIFIED",
    badge: "HYD_NODE // LEVEL 1",
    summary: "Final-year Electronics & Communication Engineer specializing in Autonomous Vehicle Software Quality (AV SWQ), Embedded IoT Platforms, and Cisco-Certified Network Security.",
    content: `
      <div class="space-y-4">
        <div class="p-3 bg-stone-100 rounded border border-stone-300 font-mono text-xs space-y-1">
          <div>• CURRENT ROLE: PE Autonomous Vehicle SWQ @ Cognizant (11+ mos)</div>
          <div>• PRIOR ROLE: Junior Design Engineer @ CADSYS (8 mos)</div>
          <div>• HARDWARE LAB: Raspberry Pi, ESP32, Arduino, OSP Telecommunications</div>
          <div>• CREDENTIALS: Cisco Junior Cyber Analyst, Cisco Networking Basics, Ethical Hacking</div>
        </div>
        <p>Demonstrated history traversing the physical-to-digital engineering boundary: from low-level GPIO hardware interfacing on microcontrollers up to production software regression suites for enterprise autonomous mobility clients.</p>
        <div class="pt-2 flex gap-3">
          <a href="pages/resume.html" class="px-3 py-1.5 bg-red-900 hover:bg-red-800 text-white rounded text-xs font-mono font-bold transition-colors inline-block">
            View Complete Official Resume Dossier →
          </a>
        </div>
      </div>
    `
  },
  cognizant: {
    id: "cognizant",
    pageUrl: "pages/cognizant.html",
    title: "CASE 01: COGNIZANT AUTONOMOUS VEHICLE SWQ",
    subtitle: "DEPLOYED SYSTEM AUDIT // MAPPING VERIFICATION SUITE",
    stamp: "ACTIVE ENGAGEMENT",
    badge: "JAN 2026 – PRESENT (11 MOS)",
    summary: "Analyzing autonomous vehicle system behaviors for enterprise clients, running regression validation, and operating specialized High-Definition Mapping verification tools.",
    content: `
      <div class="space-y-4">
        <p><strong>Primary Objective:</strong> Ensure zero safety anomalies and millimeter-level fidelity in client autonomous vehicle mapping environments.</p>
        <div class="p-3 bg-stone-900 text-stone-100 rounded font-mono text-xs space-y-1">
          <div class="text-emerald-400 font-bold">> SYSTEM_DIAGNOSTICS_RUN --TARGET=AV_SWQ_MAPPING</div>
          <div>[PASS] Multi-layer road geometry consistency check (Tolerance &lt; 2cm)</div>
          <div>[PASS] Sensor fusion telemetry ingestion: LiDAR, RADAR, HD-Camera</div>
          <div>[PASS] Edge regression testing across dynamic driving scenarios</div>
          <div class="text-amber-400">[LOG] Zero safety violation flags generated</div>
        </div>
        <p>Operates specialized mapping tools, evaluates complex behavior logs, and validates quality metrics to ensure safety across edge driving corridors.</p>
        <div class="pt-2">
          <a href="pages/cognizant.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded text-xs font-mono font-bold transition-colors inline-block">
            Open Dedicated Cognizant AV Case File →
          </a>
        </div>
      </div>
    `
  },
  cadsys: {
    id: "cadsys",
    pageUrl: "pages/cadsys.html",
    title: "CASE 02: CADSYS (INDIA) LTD — OSP TELECOM DESIGN",
    subtitle: "INFRASTRUCTURE SCHEMATICS // ARAMIS-DT CAD ARCHIVE",
    stamp: "VERIFIED OSP",
    badge: "APR 2025 – NOV 2025 (8 MOS)",
    summary: "Engineered Outside Plant (OSP) telecommunications infrastructure designs, structural sag calculations, Katapault job sheets, and optical fiber route planning.",
    content: `
      <div class="space-y-4">
        <div class="p-3 bg-sky-950 text-sky-100 rounded font-mono text-xs space-y-1 border border-sky-700">
          <div class="text-amber-400 font-bold">> CADSYS_OSP_CALCULATIONS:</div>
          <div>• Sag and Tension analysis across aerial pole spans (Catenary calculation)</div>
          <div>• Optical Fiber Routing: Single-mode 48-count trunk line distribution</div>
          <div>• Katapault photogrammetric pole audit &amp; job planning</div>
          <div>• Terminal address verification &amp; utility clearance drafting</div>
        </div>
        <p>Translated field surveys into production-grade telecom work prints using Aramis-DT with strict adherence to aerial and underground utility clearances.</p>
        <div class="pt-2">
          <a href="pages/cadsys.html" class="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded text-xs font-mono font-bold transition-colors inline-block">
            Open Dedicated CADSYS OSP Case File →
          </a>
        </div>
      </div>
    `
  },
  rvm: {
    id: "rvm",
    pageUrl: "pages/rvm.html",
    title: "PATENT ARTIFACT: REVERSE VENDING MACHINE (RVM)",
    subtitle: "HARDWARE AUTOMATION // VISHNUSPIRE DEVELOPMENT LABS",
    stamp: "HARDWARE PATENT",
    badge: "JUN 2024 – AUG 2024 (3 MOS)",
    summary: "Engineered an automated Reverse Vending Machine using Raspberry Pi 4, optical proximity sensors, and servo chutes to sort plastic bottles for municipal recycling.",
    content: `
      <div class="space-y-4">
        <div class="p-3 bg-stone-100 rounded border border-stone-300 font-mono text-xs space-y-1.5">
          <div class="font-bold text-stone-900">HARDWARE INTERFACING LEDGER:</div>
          <div>• Controller: Raspberry Pi 4 Model B (Linux)</div>
          <div>• Sensor Peripherals: Ultrasonic echo distance + IR proximity</div>
          <div>• Motorized Actuation: Dual micro-servo sorting gates</div>
          <div>• Software: Python GPIO daemon with local telemetry log</div>
        </div>
        <p>Built as an intern at Vishnuspire to solve municipal plastic bottle sorting bottlenecks through low-cost sensor integration and automated servo actuation.</p>
        <div class="pt-2">
          <a href="pages/rvm.html" class="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-white rounded text-xs font-mono font-bold transition-colors inline-block">
            Open Detailed RVM Hardware Blueprint →
          </a>
        </div>
      </div>
    `
  },
  hardware: {
    id: "hardware",
    pageUrl: "pages/hardware-lab.html",
    title: "LAB BENCH: EMBEDDED & IOT TELEMETRY SYSTEMS",
    subtitle: "MICROCONTROLLER PROTOCOLS // REAL-TIME EDGE COMPUTING",
    stamp: "100% OPERATIONAL",
    badge: "3 PROTOCOL BUILDS",
    summary: "Firmware and circuit prototypes across ESP32 atmospheric telemetry, analog biomedical vital signs monitoring, and Raspberry Pi speech synthesis.",
    content: `
      <div class="space-y-3 text-xs">
        <div class="p-2.5 bg-stone-100 rounded border border-stone-300">
          <div class="font-bold text-emerald-800 font-mono">1. ESP32 IoT Weather Monitoring Station (Sep 2023)</div>
          <div>I2C sensor bus atmospheric telemetry (Temp, Humidity, Pressure) streamed via Wi-Fi with low-power sleep cycles.</div>
        </div>
        <div class="p-2.5 bg-stone-100 rounded border border-stone-300">
          <div class="font-bold text-rose-800 font-mono">2. Health and Vitals Monitoring System (May – Jul 2023)</div>
          <div>Analog signal conditioning for pulse oximetry and temperature monitoring with ADC filtering algorithms.</div>
        </div>
        <div class="p-2.5 bg-stone-100 rounded border border-stone-300">
          <div class="font-bold text-blue-800 font-mono">3. Real-Time Text-to-Speech Engine on Raspberry Pi (Sep 2023 – Jan 2024)</div>
          <div>Offline edge speech synthesizer running directly on Linux without cloud network latency for assistive devices.</div>
        </div>
        <div class="pt-2">
          <a href="pages/hardware-lab.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded text-xs font-mono font-bold transition-colors inline-block">
            Inspect Hardware Lab Bench →
          </a>
        </div>
      </div>
    `
  },
  cyber: {
    id: "cyber",
    pageUrl: "pages/cybersecurity.html",
    title: "FORENSIC RECORD: CISCO CYBERSECURITY ACCREDITATIONS",
    subtitle: "CREDENTIAL VERIFICATION // NETWORK DEFENSE AUDIT",
    stamp: "OFFICIAL CLEARANCE",
    badge: "4 ACCREDITED BADGES",
    summary: "Certified by Cisco Networking Academy in threat defense, network administration, and hardware troubleshooting, plus ethical hacking foundations.",
    content: `
      <div class="space-y-3 text-xs font-mono">
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Cisco: Junior Cybersecurity Analyst Career Path</span>
          <span class="text-emerald-700 font-bold">[VERIFIED]</span>
        </div>
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Cisco: Networking Basics (IP Addressing &amp; Protocols)</span>
          <span class="text-emerald-700 font-bold">[VERIFIED]</span>
        </div>
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Cisco: IT Essentials (PC Hardware &amp; OS Maintenance)</span>
          <span class="text-emerald-700 font-bold">[VERIFIED]</span>
        </div>
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Udemy: Ethical Hacking &amp; Penetration Testing</span>
          <span class="text-amber-700 font-bold">[COMPLETED]</span>
        </div>
        <div class="pt-2">
          <a href="pages/cybersecurity.html" class="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-white rounded text-xs font-mono font-bold transition-colors inline-block">
            Open Full Cybersecurity Dossier →
          </a>
        </div>
      </div>
    `
  },
  mystery: {
    id: "mystery",
    pageUrl: "pages/mystery-game.html",
    title: "CASE SOLVER PLATFORM: 'BORED?' & MINI-GAMES-MANIA",
    subtitle: "INTERACTIVE DEDUCTION ENGINE // WEB STATE ARCHITECTURE",
    stamp: "INTERACTIVE WEB",
    badge: "LIVE WEB ENGINES",
    summary: "Creator of 'Bored? A Mystery Solving Game' and 'Mini-Games-Mania', turning logic deduction and social gaming into interactive web apps.",
    content: `
      <div class="space-y-4">
        <div class="p-3 bg-stone-900 text-amber-200 rounded font-mono text-xs space-y-2">
          <div class="font-bold text-red-400">BORED? — A MYSTERY SOLVING GAME</div>
          <p class="text-stone-300">An interactive mystery deduction experience where players inspect evidence dossiers, verify alibis, and reason through narrative crime scenes.</p>
          <div class="border-t border-stone-700 pt-2 font-bold text-sky-400">MINI-GAMES-MANIA</div>
          <p class="text-stone-300">A web-based social party gaming platform featuring fast casual multiplayer games built using Firebase Studio and deployed on Vercel.</p>
        </div>
        <div class="pt-2">
          <a href="pages/mystery-game.html" class="px-3 py-1.5 bg-amber-950 hover:bg-amber-900 text-amber-200 rounded text-xs font-mono font-bold transition-colors inline-block">
            Launch Case Solver Experience →
          </a>
        </div>
      </div>
    `
  },
  academics: {
    id: "academics",
    pageUrl: "pages/academics.html",
    title: "ACADEMIC & COMPETITION ARCHIVE",
    subtitle: "INSTITUTIONAL RECORDS // ROBOTICS ACHIEVEMENTS",
    stamp: "ACCREDITED ECE",
    badge: "B.TECH ECE [2022–2025]",
    summary: "Graduated with B.Tech in Electronics & Communication from Vishnu Institute of Technology; 2nd Place in Inter-College Robo Soccer.",
    content: `
      <div class="space-y-3 text-xs">
        <div class="p-2.5 bg-stone-100 rounded border border-stone-300">
          <div class="font-bold text-stone-900">B.Tech, Electronics and Communication Engineering (2022–2025)</div>
          <div class="text-stone-700">Vishnu Institute of Technology (Autonomous)</div>
        </div>
        <div class="p-2.5 bg-stone-100 rounded border border-stone-300">
          <div class="font-bold text-stone-900">Diploma, Electronics and Communication Engineering (2019–2022)</div>
          <div class="text-stone-700">Smt. B. Seetha Polytechnic</div>
        </div>
        <div class="p-2.5 bg-amber-50 rounded border border-amber-300">
          <div class="font-bold text-amber-900">Competition Awards:</div>
          <div>🏆 2nd Position in Inter-College Robo Soccer Tournament</div>
          <div>⚙️ Co-Organized Engineering Project Expo at College Annual Fest</div>
        </div>
        <div class="pt-2">
          <a href="pages/academics.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded text-xs font-mono font-bold transition-colors inline-block">
            View Institutional Records →
          </a>
        </div>
      </div>
    `
  }
};

