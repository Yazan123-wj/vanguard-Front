import { chromium } from 'playwright';

const VIEWPORT = { width: 1440, height: 900 };

const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: VIEWPORT });
await page.goto('http://localhost:3000', { waitUntil: 'load' });
await page.waitForTimeout(4500);

// Rest over empty background, capture 3 moments to show the morphing
await page.mouse.move(320, 620);
await page.waitForTimeout(1600);
await page.screenshot({
  path: 'scripts/fluid-1.png',
  clip: { x: 100, y: 420, width: 460, height: 400 },
});
await page.waitForTimeout(1800);
await page.screenshot({
  path: 'scripts/fluid-2.png',
  clip: { x: 100, y: 420, width: 460, height: 400 },
});
await page.waitForTimeout(1800);
await page.screenshot({
  path: 'scripts/fluid-3.png',
  clip: { x: 100, y: 420, width: 460, height: 400 },
});

await browser.close();
console.log('done');
