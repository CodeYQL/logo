const puppeteer = require('puppeteer');

(async () => {
  console.log('Preparing...');

  const logoPath = `file://${process.cwd()}/logo.html`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(logoPath);

  try {
    console.log('Generating logo...');
    await page.screenshot({
      path: 'logo.png',
      omitBackground: true,
      clip: {
        x: 0,
        y: 0,
        width: 200,
        height: 200
      }
    });
  } catch (err) {
    console.error(err);
    process.exit(2)
  }

  await browser.close();
})();
