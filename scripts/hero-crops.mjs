import { chromium } from 'playwright';

const VIEWPORT = { width: 1440, height: 900 };

const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: VIEWPORT });
await page.goto('http://localhost:3000', { waitUntil: 'load' });
await page.waitForTimeout(4500);

// Park the cursor so the head sits over empty background, left side
await page.mouse.move(300, 620);
await page.waitForTimeout(1500);

// Native-res crop of the field edge (dither boundary + interior)
await page.screenshot({
  path: 'scripts/crop-field.png',
  clip: { x: 180, y: 500, width: 260, height: 240 },
});

// Native-res crop of empty background (base grid check)
await page.screenshot({
  path: 'scripts/crop-grid.png',
  clip: { x: 1050, y: 620, width: 200, height: 180 },
});

await browser.close();
console.log('done');
