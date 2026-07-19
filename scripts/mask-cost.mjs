import { chromium } from 'playwright';

const VIEWPORT = { width: 1440, height: 900 };

async function traceFps(page, disableMask) {
  if (disableMask) {
    await page.evaluate(() => {
      const layerB = document.querySelector('[data-hero] div[aria-hidden]');
      if (layerB instanceof HTMLElement) {
        layerB.style.maskImage = 'none';
        layerB.style.webkitMaskImage = 'none';
      }
    });
  }

  const cx = VIEWPORT.width / 2;
  const cy = VIEWPORT.height / 2;

  const fpsPromise = page.evaluate(
    () =>
      new Promise((resolve) => {
        let frames = 0;
        const start = performance.now();
        const tick = () => {
          frames += 1;
          if (performance.now() - start < 3000) {
            requestAnimationFrame(tick);
          } else {
            resolve((frames / (performance.now() - start)) * 1000);
          }
        };
        requestAnimationFrame(tick);
      }),
  );

  for (let i = 0; i < 100; i += 1) {
    const t = i / 100;
    await page.mouse.move(
      cx + Math.sin(t * Math.PI * 4) * 520,
      cy + Math.sin(t * Math.PI * 8) * 220,
    );
    await page.waitForTimeout(28);
  }

  return page.evaluate(() => void 0).then(() => fpsPromise);
}

const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: VIEWPORT });
await page.goto('http://localhost:3000', { waitUntil: 'load' });
await page.waitForTimeout(4500);

const withMask = await traceFps(page, false);
const withoutMask = await traceFps(page, true);

console.log(
  JSON.stringify({
    withMask: Math.round(withMask * 10) / 10,
    withoutMask: Math.round(withoutMask * 10) / 10,
  }),
);
await browser.close();
