/* ==================== CANVAS 2D RED YARN PHYSICS ENGINE ==================== */

let canvas = null;
let ctx = null;

export function initYarn(canvasEl) {
  canvas = canvasEl;
  ctx = canvas.getContext('2d');
  drawYarnNetwork();
}

export function drawYarnNetwork() {
  if (!canvas) {
    canvas = document.getElementById('yarn-canvas');
    if (canvas) ctx = canvas.getContext('2d');
  }
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Master Pin (Center Suspect)
  const centerPin = { x: 1540 + 250, y: 860 - 8 + 9 };

  // Clue Pins
  const cluePins = [
    { x: 400 + 280, y: 240 - 6 + 9 },    // Cognizant
    { x: 2250 + 270, y: 220 - 6 + 9 },   // CADSYS
    { x: 320 + 280, y: 960 - 6 + 9 },    // RVM
    { x: 480 + 280, y: 1680 - 6 + 9 },   // Hardware Lab
    { x: 1540 + 270, y: 1640 - 6 + 9 },  // Cyber Forensics
    { x: 2680 + 270, y: 960 - 6 + 9 },   // Mystery Game
    { x: 2880 + 250, y: 240 - 6 + 9 },   // Academics
    { x: 2480 + 280, y: 1640 - 6 + 9 },  // Contact Comms
  ];

  // Secondary cross-threads between main clues
  const crossConnections = [
    [0, 2], // Cognizant -> RVM
    [2, 3], // RVM -> Hardware Lab
    [3, 4], // Hardware -> Cyber
    [1, 6], // CADSYS -> Academics
    [4, 7], // Cyber -> Contact
    [5, 7], // Mystery -> Contact
  ];

  // Authentic Evidence Peripheral Pins
  const auxPins = {
    avTelematics: { x: 1020 + 135, y: 220 + 6 },
    cadsysSpec: { x: 1980 + 125, y: 160 + 6 },
    rvmSchematic: { x: 950 + 130, y: 880 + 6 },
    robosoccer: { x: 1120 + 120, y: 1220 + 6 },
    esp32: { x: 1080 + 130, y: 1640 + 6 },
    ttsWaveform: { x: 1060 + 135, y: 2000 + 6 },
    secondaryEdu: { x: 3080 + 140, y: 780 + 6 },
    ciscoBadges: { x: 2140 + 140, y: 1360 + 6 },
    dispatchSlip: { x: 3100 + 130, y: 1660 + 6 },
  };

  const auxConnections = [
    { from: cluePins[0], to: auxPins.avTelematics, sag: 18 },  // Cognizant -> AV Telematics
    { from: cluePins[1], to: auxPins.cadsysSpec, sag: 16 },    // CADSYS -> OSP Field Spec
    { from: cluePins[2], to: auxPins.rvmSchematic, sag: 20 },  // RVM -> RVM Schematic
    { from: cluePins[3], to: auxPins.esp32, sag: 22 },         // Hardware -> ESP32 I2C
    { from: cluePins[3], to: auxPins.ttsWaveform, sag: 24 },   // Hardware -> RPi TTS
    { from: cluePins[4], to: auxPins.ciscoBadges, sag: 20 },   // Cyber -> Cisco Badges
    { from: cluePins[6], to: auxPins.robosoccer, sag: 34 },    // Academics -> Robo Soccer
    { from: cluePins[6], to: auxPins.secondaryEdu, sag: 22 },  // Academics -> Secondary Edu
    { from: cluePins[7], to: auxPins.dispatchSlip, sag: 22 },  // Contact -> Dispatch Memo
    { from: centerPin, to: auxPins.robosoccer, sag: 28 },      // Center -> Robo Soccer Trophy
    { from: centerPin, to: auxPins.ciscoBadges, sag: 26 },     // Center -> Cisco Badges
  ];

  function drawThread(p1, p2, sagAmount = 26, color = '#dc2626') {
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2 + sagAmount;

    // Drop Shadow on Corkboard
    ctx.beginPath();
    ctx.moveTo(p1.x + 3, p1.y + 6);
    ctx.quadraticCurveTo(midX + 3, midY + 8, p2.x + 3, p2.y + 6);
    ctx.strokeStyle = 'rgba(25, 12, 5, 0.45)';
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.filter = 'blur(3px)';
    ctx.stroke();
    ctx.filter = 'none';

    // Core Red Yarn
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.quadraticCurveTo(midX, midY, p2.x, p2.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.4;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Subtle Fiber Highlight
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.quadraticCurveTo(midX, midY - 0.5, p2.x, p2.y);
    ctx.strokeStyle = 'rgba(255, 160, 160, 0.55)';
    ctx.lineWidth = 0.8;
    ctx.stroke();
  }

  // Radiating threads from center
  cluePins.forEach((targetPin) => {
    const dist = Math.hypot(targetPin.x - centerPin.x, targetPin.y - centerPin.y);
    const sag = Math.min(38, Math.max(16, dist * 0.025));
    drawThread(centerPin, targetPin, sag, '#dc2626');
  });

  // Cross connections
  crossConnections.forEach(([i1, i2]) => {
    const p1 = cluePins[i1];
    const p2 = cluePins[i2];
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
    const sag = Math.min(32, Math.max(12, dist * 0.02));
    drawThread(p1, p2, sag, '#b91c1c');
  });

  // Authentic Evidence Peripheral Threads
  auxConnections.forEach(({ from, to, sag }) => {
    drawThread(from, to, sag, '#c02626');
  });
}

