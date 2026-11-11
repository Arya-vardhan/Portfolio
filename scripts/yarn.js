/* ==================== CANVAS 2D RED YARN PHYSICS ENGINE ==================== */

let canvas = null;
let ctx = null;

export function initYarn(canvasEl) {
  canvas = canvasEl;
  ctx = canvas.getContext('2d');
  drawYarnNetwork();
}

export function drawYarnNetwork() {
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

  // Secondary cross-threads
  const crossConnections = [
    [0, 2], // Cognizant -> RVM
    [2, 3], // RVM -> Hardware Lab
    [3, 4], // Hardware -> Cyber
    [1, 6], // CADSYS -> Academics
    [4, 7], // Cyber -> Contact
    [5, 7], // Mystery -> Contact
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
}

