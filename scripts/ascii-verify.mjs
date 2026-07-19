import { chromium } from 'playwright';

const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000', { waitUntil: 'load' });
await page.waitForTimeout(4500);

await page.mouse.move(400, 500);
await page.waitForTimeout(800);
await page.screenshot({ path: 'scripts/ascii-bg.png' });

await page.mouse.move(900, 420, { steps: 24 });
await page.waitForTimeout(400);
await page.screenshot({ path: 'scripts/ascii-with-fluid.png' });

await browser.close();
console.log('done');
