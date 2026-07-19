import { chromium } from 'playwright';

const VIEWPORT = { width: 1440, height: 900 };

const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: VIEWPORT });
await page.goto('http://localhost:3000', { waitUntil: 'load' });
await page.waitForTimeout(4500);

// S-curve sweep across the headline
const path = [
  [200, 750], [320, 640], [460, 520], [620, 430], [780, 420],
  [920, 470], [1040, 560], [1120, 500], [1180, 400], [1230, 300],
];
await page.mouse.move(200, 750);
await page.waitForTimeout(120);
for (const [x, y] of path) {
  await page.mouse.move(x, y, { steps: 14 });
}
await page.screenshot({ path: 'scripts/fluid-sweep.png' });

// second pass straight through the headline center
await page.mouse.move(300, 450, { steps: 20 });
await page.mouse.move(1100, 460, { steps: 30 });
await page.screenshot({ path: 'scripts/fluid-through-text.png' });

// let it dissipate
await page.waitForTimeout(2500);
await page.screenshot({ path: 'scripts/fluid-dissipated.png' });

// FPS during fast movement
const fps = await page.evaluate(
  () =>
    new Promise((resolve) => {
      let frames = 0;
      const start = performance.now();
      const tick = () => {
        frames += 1;
        if (performance.now() - start < 3000) requestAnimationFrame(tick);
        else resolve((frames / 3).toFixed(1));
      };
      requestAnimationFrame(tick);
    }),
);
for (let i = 0; i < 12; i += 1) {
  await page.mouse.move(300 + Math.random() * 800, 250 + Math.random() * 500, {
    steps: 8,
  });
}
console.log(JSON.stringify({ fps }));

await browser.close();
