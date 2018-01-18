const puppeteer = require('puppeteer');

async function screenshot(page, width, height, css) {
  const details = `${width}x${height}${css ? `_${css}` : ''}`;
  console.log(`Generating ${details}...`);
  return await page.setViewport({
    width,
    height
  })
  .then(() => page.screenshot({
    path: `logos/logo_${details}.png`,
    omitBackground: true
  }));
}

async function generate(css) {
  console.log('Preparing...');

  const logoPath = `file://${process.cwd()}/logo.html`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(logoPath);

  if (css) {
    page.addStyleTag({
      path: `${css}.css`
    });
  }

  await page.$eval('h1', h1 => h1.style['font-size'] = '20px');

  await screenshot(page, 200, 200, css);

  await page.$eval('h1', h1 => h1.style['font-size'] = '50px');  

  await screenshot(page, 960, 150, css);

  await page.$eval('body', h1 => h1.style['justify-content'] = 'flex-end');
  await page.$eval('h1', h1 => {
    h1.style['justify-content'] = 'flex-end';
    h1.style['padding'] = '30px';
    h1.style['font-size'] = '30px'
  });

  await screenshot(page, 600, 338, css);

  await browser.close();
}

(async () => {
  await generate();
  await generate('dark');
})();