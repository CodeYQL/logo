const puppeteer = require('puppeteer');

async function screenshot(page, width, height) {
  console.log(`Generating ${width}x${height}...`);
  return await page.setViewport({
    width,
    height
  })
  .then(() => page.screenshot({
    path: `logo_${width}x${height}.png`,
    omitBackground: true
  }));
}

(async () => {
  console.log('Preparing...');

  const logoPath = `file://${process.cwd()}/logo.html`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(logoPath);

  await screenshot(page, 200, 200);

  await page.$eval('h1', h1 => h1.style['font-size'] = '60px');  

  await screenshot(page, 960, 150);

  await page.$eval('body', h1 => h1.style['justify-content'] = 'flex-end');
  await page.$eval('h1', h1 => {
    h1.style['justify-content'] = 'flex-end';
    h1.style['padding'] = '40px';
  });

  await screenshot(page, 600, 338);

  await browser.close();
})();
