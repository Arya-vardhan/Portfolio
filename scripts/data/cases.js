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
    title: "FORENSIC RECORD: CYBERSECURITY ACCREDITATIONS & BADGES",
    subtitle: "CREDENTIAL VERIFICATION // CISCO & HACK THE BOX",
    stamp: "OFFICIAL CLEARANCE",
    badge: "CREDLY & HTB VERIFIED",
    summary: "Certified by Cisco Networking Academy (Junior Cybersecurity Analyst, Networking Basics, IT Essentials) and Hack The Box Academy (Network Foundations).",
    content: `
      <div class="space-y-3 text-xs font-mono">
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Cisco: Junior Cybersecurity Analyst</span>
          <a href="https://www.credly.com/badges/baf50dae-b67b-41f2-a45f-c1f854e6567e" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold hover:underline">Credly [VERIFIED] ↗</a>
        </div>
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Cisco: Networking Basics</span>
          <a href="https://www.credly.com/badges/0aa99b23-f8f8-4e09-b4ab-2ee9e76d9331" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold hover:underline">Credly [VERIFIED] ↗</a>
        </div>
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Hack The Box: Solid Basis (Network Foundations)</span>
          <a href="https://academy.hackthebox.com/achievement/badge/ba738bc3-efc1-11ef-864f-bea50ffe6cb4" target="_blank" rel="noopener noreferrer" class="text-emerald-700 font-bold hover:underline">HTB [AWARDED] ↗</a>
        </div>
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Cisco: IT Essentials (PC Hardware &amp; OS Maintenance)</span>
          <span class="text-emerald-700 font-bold">[VERIFIED]</span>
        </div>
        <div class="p-2 bg-stone-100 rounded border border-stone-300 flex justify-between items-center">
          <span>• Udemy: Ethical Hacking &amp; Penetration Testing</span>
          <span class="text-amber-700 font-bold">[COMPLETED]</span>
        </div>
        <div class="pt-2 flex flex-wrap gap-2">
          <button onclick="open3DBadgeInspector('cisco-analyst')" class="px-3 py-1.5 bg-gradient-to-r from-red-950 via-stone-900 to-amber-900 hover:brightness-125 text-amber-300 border border-amber-500/50 rounded text-xs font-mono font-bold transition-all shadow flex items-center gap-1.5">
            <span>⚡</span>
            <span>Inspect 3D Evidence Badges (360°) →</span>
          </button>
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
  },
  robosoccer: {
    id: "robosoccer",
    pageUrl: "pages/academics.html",
    title: "HONOR ARTIFACT: 2ND PLACE ROBO SOCCER",
    subtitle: "INTER-COLLEGE TOURNAMENT // VISHNU INSTITUTE OF TECHNOLOGY",
    stamp: "COMPETITION RUNNER-UP",
    badge: "2ND POSITION // 2023",
    summary: "Built and piloted an agile 4WD custom chassis combat robot in the inter-college Robo Soccer tournament at Vishnu Institute of Technology.",
    content: `
      <div class="space-y-4 text-xs">
        <div class="p-3 bg-amber-50 rounded border border-amber-300 font-mono space-y-1">
          <div class="font-bold text-amber-950 text-sm">ROBOT SPECIFICATIONS & ARCHITECTURE:</div>
          <div>• Drivetrain: 4WD high-torque metal gear motors with differential drive</div>
          <div>• Chassis: Custom lightweight aluminum alloy frame with shock dampening</div>
          <div>• Ball Control: Front-mounted active roller dribbler mechanism</div>
          <div>• Control Protocol: Low-latency RF transceivers with dual-stick remote</div>
        </div>
        <p>Competed across rounds of fast-paced robotic agility, ball trapping, and scoring against regional engineering college teams, securing <strong>2nd Position</strong> overall.</p>
        <div class="pt-2">
          <a href="pages/academics.html" class="px-3 py-1.5 bg-amber-950 hover:bg-amber-900 text-amber-200 rounded text-xs font-mono font-bold transition-colors inline-block">
            View Academic & Award Ledger →
          </a>
        </div>
      </div>
    `
  },
  secondary_edu: {
    id: "secondary_edu",
    pageUrl: "pages/academics.html",
    title: "INSTITUTIONAL RECORD: SECONDARY & DIPLOMA",
    subtitle: "ACADEMIC ARCHIVE // TECHNICAL FOUNDATION",
    stamp: "VERIFIED INSTITUTIONS",
    badge: "2018 – 2022 LEDGER",
    summary: "Diploma in Electronics & Communication Engineering from Smt. B. Seetha Polytechnic, preceded by SSC from Sri Vaishnavi High School.",
    content: `
      <div class="space-y-3 text-xs">
        <div class="p-3 bg-stone-100 rounded border border-stone-300 space-y-1">
          <div class="font-bold text-stone-900 font-mono">1. Smt. B. Seetha Polytechnic, Vishnupur (2019 – 2022)</div>
          <div>Diploma in Electronics &amp; Communication Engineering (ECE).</div>
          <div class="text-stone-600">Core study: Microprocessors, analog communications, digital logic design, printed circuit design, and instrumentation.</div>
        </div>
        <div class="p-3 bg-stone-100 rounded border border-stone-300 space-y-1">
          <div class="font-bold text-stone-900 font-mono">2. Sri Vaishnavi High School (2018)</div>
          <div>Secondary School Certificate (SSC). Completed with distinction in science and mathematics.</div>
        </div>
        <div class="pt-2">
          <a href="pages/academics.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded text-xs font-mono font-bold transition-colors inline-block">
            View Complete Education Ledger →
          </a>
        </div>
      </div>
    `
  },
  cisco_badges: {
    id: "cisco_badges",
    pageUrl: "pages/cybersecurity.html",
    title: "CREDENTIAL RECORD: VERIFIED CYBER INTELLIGENCE BADGES",
    subtitle: "OFFICIAL VERIFICATION // CISCO NETACAD & HACK THE BOX",
    stamp: "OFFICIAL CLEARANCE",
    badge: "CREDLY & HTB VERIFIED",
    summary: "Official verified cyber credentials earned by Arya Vardhan Gelli from Cisco Networking Academy (Credly) and Hack The Box Academy.",
    content: `
      <div class="space-y-3 text-xs font-mono">
        <div class="p-3 bg-stone-100 rounded border border-stone-300 space-y-1">
          <div class="flex justify-between items-center">
            <span class="font-bold text-emerald-800 text-sm">• Cisco: Junior Cybersecurity Analyst</span>
            <a href="https://www.credly.com/badges/baf50dae-b67b-41f2-a45f-c1f854e6567e" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold hover:underline">Credly ↗</a>
          </div>
          <p class="text-stone-600 text-[11px] font-sans">Vulnerability management, threat intelligence, host defense, network monitoring, cryptography, firewalls, and incident response planning.</p>
        </div>

        <div class="p-3 bg-stone-100 rounded border border-stone-300 space-y-1">
          <div class="flex justify-between items-center">
            <span class="font-bold text-emerald-800 text-sm">• Cisco: Networking Basics</span>
            <a href="https://www.credly.com/badges/0aa99b23-f8f8-4e09-b4ab-2ee9e76d9331" target="_blank" rel="noopener noreferrer" class="text-blue-700 font-bold hover:underline">Credly ↗</a>
          </div>
          <p class="text-stone-600 text-[11px] font-sans">Network architecture, IPv4/IPv6 packet transport, subnetting, cabling, routing/switch topologies, and 13 Cisco Packet Tracer activities.</p>
        </div>

        <div class="p-3 bg-stone-100 rounded border border-stone-300 space-y-1">
          <div class="flex justify-between items-center">
            <span class="font-bold text-lime-800 text-sm">• Hack The Box Academy: Network Foundations</span>
            <a href="https://academy.hackthebox.com/achievement/badge/ba738bc3-efc1-11ef-864f-bea50ffe6cb4" target="_blank" rel="noopener noreferrer" class="text-emerald-700 font-bold hover:underline">HTB Academy ↗</a>
          </div>
          <p class="text-stone-600 text-[11px] font-sans">Network Foundations module completed. Packet inspection with Wireshark, protocol stack internals, and offensive/defensive network security fundamentals.</p>
        </div>

        <div class="pt-2 flex flex-wrap items-center gap-2">
          <button onclick="open3DBadgeInspector('cisco-analyst')" class="px-3 py-1.5 bg-gradient-to-r from-red-950 via-stone-900 to-amber-900 hover:brightness-125 text-amber-300 border border-amber-500/50 rounded text-xs font-mono font-bold transition-all shadow flex items-center gap-1.5">
            <span>⚡</span>
            <span>Examine Badges in 3D (360° Spin) →</span>
          </button>
          <a href="pages/cybersecurity.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-200 rounded text-xs font-mono font-bold transition-colors inline-block">
            Open Cyber Dossier →
          </a>
        </div>
      </div>
    `
  },
  esp32_i2c: {
    id: "esp32_i2c",
    pageUrl: "pages/hardware-lab.html",
    title: "HARDWARE TELEMETRY: ESP32 I2C SENSOR BUS",
    subtitle: "CIRCUIT SCHEMATICS // ATMOSPHERIC WEATHER NODE",
    stamp: "HARDWARE BENCH",
    badge: "I2C PROTOCOL // 400KHZ",
    summary: "Firmware and pinout architecture for real-time telemetry streaming from atmospheric sensors over I2C to an OLED display and Wi-Fi cloud broker.",
    content: `
      <div class="space-y-3 text-xs font-mono">
        <div class="p-3 bg-stone-900 text-emerald-400 rounded space-y-1 border border-stone-700">
          <div class="text-amber-300 font-bold">> ESP32_I2C_BUS_MAP:</div>
          <div>• GPIO 21 (SDA) -> BMP280, SHT31, SSD1306</div>
          <div>• GPIO 22 (SCL) -> Clock line (400kHz fast mode)</div>
          <div>• 0x3C: SSD1306 128x64 Graphic Display</div>
          <div>• 0x76: BMP280 Barometric Pressure &amp; Temp</div>
          <div>• 0x44: SHT31 Precision Relative Humidity</div>
          <div>• Wi-Fi MQTT: 2.4GHz 802.11b/g/n Telemetry Uplink</div>
        </div>
        <p class="text-stone-700 font-sans">Developed September 2023 with custom deep-sleep duty cycles to achieve ultra-low field power consumption.</p>
        <div class="pt-2">
          <a href="pages/hardware-lab.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded text-xs font-mono font-bold transition-colors inline-block">
            Inspect Hardware Lab Bench →
          </a>
        </div>
      </div>
    `
  },
  tts_waveform: {
    id: "tts_waveform",
    pageUrl: "pages/hardware-lab.html",
    title: "AUDIO FORENSICS: RPi REAL-TIME TTS ENGINE",
    subtitle: "EDGE AUDIO SYNTHESIS // EMBEDDED LINUX ALSA",
    stamp: "EDGE COMPUTE",
    badge: "OFFLINE INFERENCE",
    summary: "Real-time edge text-to-speech synthesizer running locally on a Raspberry Pi 4 Model B without cloud dependency or network latency.",
    content: `
      <div class="space-y-3 text-xs">
        <div class="p-3 bg-stone-100 rounded border border-stone-300 font-mono space-y-1">
          <div class="font-bold text-stone-900">EDGE BENCHMARK METRICS:</div>
          <div>• Host Platform: Raspberry Pi 4 Model B (4GB RAM, Linux Kernel 6.x)</div>
          <div>• Audio Interface: 3.5mm DAC / I2S audio amplifier</div>
          <div>• Speech Synthesis Engine: Offline neural Piper &amp; eSpeak-NG C library</div>
          <div>• Synthesis Latency: &lt;180ms from ASCII string input to DAC PCM buffer</div>
          <div>• Cloud Dependency: 0% (Fully self-contained offline edge build)</div>
        </div>
        <p>Built between September 2023 and January 2024 to provide an offline voice output system for assistive communication devices.</p>
        <div class="pt-2">
          <a href="pages/hardware-lab.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded text-xs font-mono font-bold transition-colors inline-block">
            Inspect Audio Hardware →
          </a>
        </div>
      </div>
    `
  },
  rvm_schematic: {
    id: "rvm_schematic",
    pageUrl: "pages/rvm.html",
    title: "FORENSIC SPECIMEN #ET-84: RVM MECHANICAL CHUTE SORTER",
    subtitle: "LAB EVIDENCE RECORD // VISHNUSPIRE R&D PROTOTYPE",
    stamp: "LAB EVIDENCE",
    badge: "PROTOTYPE TAG",
    summary: "Physical electromechanical sorting mechanism inspected and validated for automated bottle segregation based on optical triggers.",
    content: `
      <div class="space-y-3 text-xs">
        <div class="p-4 bg-[#faf6ed] text-stone-900 rounded font-typewriter space-y-2 border border-stone-300 shadow-inner">
          <div class="text-amber-950 font-bold border-b border-stone-300 pb-1 flex justify-between items-center">
            <span>LAB INSPECTION LOG // PROTOTYPE VERIFICATION:</span>
            <span class="stamp border-emerald-700 text-emerald-800 text-[9px] px-1 py-0.2">HARDWARE PASS</span>
          </div>
          <div><strong>1. Optical Intake Trigger:</strong> Non-contact infrared sensor array initiates bottle inspection cycle upon object insertion.</div>
          <div><strong>2. Dimensional Verification:</strong> Ultrasonic acoustic profiling confirms container size and internal storage capacity.</div>
          <div><strong>3. Controller Evaluation:</strong> Python control daemon processes sensory data and issues mechanical gate actuation pulse.</div>
          <div><strong>4. Mechanical Sorting:</strong> 180° servo diversion chute segregates recyclables into internal containment chamber.</div>
          <div><strong>5. Incentive Accounting:</strong> Automated credit token logged upon verified physical deposit.</div>
        </div>
        <div class="pt-2">
          <a href="pages/rvm.html" class="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-white rounded text-xs font-mono font-bold transition-colors inline-block">
            View Complete RVM Patent Dossier →
          </a>
        </div>
      </div>
    `
  },
  cadsys_spec: {
    id: "cadsys_spec",
    pageUrl: "pages/cadsys.html",
    title: "FIELD SPEC: OSP 48-CORE OPTICAL FIBER RUN",
    subtitle: "OUTSIDE PLANT TELECOM // CADSYS (INDIA) LTD",
    stamp: "OSP COMPLIANT",
    badge: "48-COUNT SM FIBER",
    summary: "Production telecom engineering drawing specs for aerial fiber routing and structural pole sag clearance calculations.",
    content: `
      <div class="space-y-3 text-xs">
        <div class="p-4 bg-[#f8f4ec] rounded border border-amber-800/30 space-y-2 text-stone-900 font-typewriter">
          <div class="font-bold border-b border-stone-300 pb-1 flex justify-between items-center">
            <span>CADSYS OSP DRAFTING SPECIFICATION:</span>
            <span class="stamp border-blue-700 text-blue-800 text-[9px] px-1 py-0.2">TOLERANCE OK</span>
          </div>
          <div><strong>• Route Infrastructure:</strong> Corning SMF-28e+ 48-Core Single-Mode Loose Tube aerial fiber distribution.</div>
          <div><strong>• Structural Catenary Sag:</strong> Structural clearance verified under &lt;2.1% span margin under maximum load.</div>
          <div><strong>• Municipal Standards:</strong> Exceeds National Electrical Safety Code (NESC) clearance guidelines.</div>
          <div><strong>• Work Print Generation:</strong> Validated via Aramis-DT GIS Work Print Generator &amp; Katapault photogrammetry.</div>
        </div>
        <div class="pt-2">
          <a href="pages/cadsys.html" class="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded text-xs font-mono font-bold transition-colors inline-block">
            Open CADSYS Case Blueprint →
          </a>
        </div>
      </div>
    `
  },
  av_telematics: {
    id: "av_telematics",
    pageUrl: "pages/cognizant.html",
    title: "SURVEILLANCE REPORT: AUTONOMOUS VEHICLE FIELD TRIALS",
    subtitle: "COGNIZANT MOBILITY LAB // HIGH-DEFINITION CORRIDOR 04",
    stamp: "QA PASS 100%",
    badge: "HYD_TEST_NODE_04",
    summary: "Field road trial telemetry report confirming HD map corridor correlation, multi-sensor synchronization, and zero critical safety regressions.",
    content: `
      <div class="space-y-3 text-xs">
        <div class="p-4 bg-[#fcf8f0] text-stone-900 rounded space-y-2 border border-stone-300 font-typewriter shadow-inner">
          <div class="text-stone-950 font-bold border-b border-stone-300 pb-1 flex justify-between items-center">
            <span>AV SURVEILLANCE &amp; TELEMETRY LOG:</span>
            <span class="stamp border-emerald-700 text-emerald-800 text-[9px] px-1 py-0.2">VALIDATED</span>
          </div>
          <div><strong>• Dead-Reckoning Trajectory:</strong> GPS / IMU road alignment verified at 99.8% precision over continuous test miles.</div>
          <div><strong>• Lane-Boundary Margin:</strong> Lateral deviation maintained within &lt;1.8cm across diverse urban corridor geometries.</div>
          <div><strong>• HD Map Correlation:</strong> Real-time vector layers locked with physical roadway infrastructure and signage.</div>
          <div><strong>• Quality Verdict:</strong> Autonomous Vehicle SWQ Suite #84 concluded with zero critical behavioral safety faults.</div>
        </div>
        <div class="pt-2">
          <a href="pages/cognizant.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded text-xs font-mono font-bold transition-colors inline-block">
            Open Full Cognizant AV Report →
          </a>
        </div>
      </div>
    `
  },
  dispatch_slip: {
    id: "dispatch_slip",
    pageUrl: "pages/resume.html",
    title: "OFFICIAL DISPATCH & TRANSMISSION ROUTE",
    subtitle: "COMMUNICATION PROTOCOL // GELLI ARYA VARDHAN",
    stamp: "DIRECT WIRE",
    badge: "HYDERABAD, IN",
    summary: "Official contact coordinates and communication routing for Arya Vardhan Gelli.",
    content: `
      <div class="space-y-3 text-xs font-mono">
        <div class="p-3 bg-stone-100 rounded border border-stone-300 space-y-1.5">
          <div>• Primary Email: <strong>aryavardhan.gelli@outlook.com</strong></div>
          <div>• Secure Line: <strong>+91 9381074100</strong></div>
          <div>• LinkedIn: <strong>linkedin.com/in/gelli-arya-vardhan/</strong></div>
          <div>• GitHub: <strong>github.com/Arya-vardhan</strong></div>
          <div>• Base: Hyderabad, Telangana, India (IST UTC+5:30)</div>
        </div>
        <div class="pt-2 flex gap-2">
          <a href="mailto:aryavardhan.gelli@outlook.com" class="px-3 py-1.5 bg-red-900 hover:bg-red-800 text-white rounded text-xs font-mono font-bold transition-colors inline-block">
            Send Email Dispatch →
          </a>
          <a href="pages/resume.html" class="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-100 rounded text-xs font-mono font-bold transition-colors inline-block">
            Official Resume Dossier →
          </a>
        </div>
      </div>
    `
  }
};

