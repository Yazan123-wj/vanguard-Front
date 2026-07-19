import { chromium } from 'playwright';

const BASE = 'http://localhost:3000';
const VIEWPORT = { width: 1440, height: 900 };

const browser = await chromium.launch({
  args: ['--enable-unsafe-swiftshader'],
});
const page = await browser.newPage({ viewport: VIEWPORT });

await page.goto(BASE, { waitUntil: 'load' });
// Wait out the loader (floor 1.4s + exit ~1.5s). Do NOT touch the mouse.
await page.waitForTimeout(4500);

// 1. Untouched on load: the base dither grid must be visible everywhere
await page.screenshot({ path: 'scripts/hero-untouched.png' });
await page.screenshot({
  path: 'scripts/crop-grid.png',
  clip: { x: 1040, y: 600, width: 220, height: 190 },
});

const cx = VIEWPORT.width / 2;
const cy = VIEWPORT.height / 2;

// 2. 5s FPS trace during fast S-curve sweeps
const fpsPromise = page.evaluate(
  () =>
    new Promise((resolve) => {
      let frames = 0;
      const start = performance.now();
      const tick = () => {
        frames += 1;
        if (performance.now() - start < 5000) {
          requestAnimationFrame(tick);
        } else {
          resolve((frames / (performance.now() - start)) * 1000);
        }
      };
      requestAnimationFrame(tick);
    }),
);

let midSweepShot = false;
const steps = 160;
for (let i = 0; i < steps; i += 1) {
  const t = i / steps;
  const x = cx + Math.sin(t * Math.PI * 4) * 520;
  const y = cy + Math.sin(t * Math.PI * 8) * 220;
  await page.mouse.move(x, y);
  await page.waitForTimeout(28);

  if (!midSweepShot && i === Math.floor(steps * 0.62)) {
    midSweepShot = true;
    await page.screenshot({ path: 'scripts/hero-sweep.png' });
  }
}

const fps = await fpsPromise;

// 3. Rest: hold still, trail collapses to a compact round head
await page.mouse.move(cx - 200, cy - 30);
await page.waitForTimeout(2000);
await page.screenshot({ path: 'scripts/hero-rest.png' });
await page.screenshot({
  path: 'scripts/crop-field.png',
  clip: { x: cx - 200 - 130, y: cy - 30 - 115, width: 260, height: 240 },
});

console.log(JSON.stringify({ fps: Math.round(fps * 10) / 10 }));
await browser.close();
