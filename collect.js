const fs = require('fs');
const puppeteer = require('puppeteer');
const _ = require('lodash');
const outDir = 'collected';
const screenshotsToCollect = [
    {category: 'dungeon', pages: 2},
    {category: 'heroes'},
    {category: 'monsters'},
    {category: 'minerals'},
    {category: 'obstacles'}
];

async function takeSingleScreenshot(filename, path) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(path);
    const elementHandler = await page.$('#appContainer');
    await elementHandler.screenshot({
        path: filename,
        type: 'jpeg',
        quality: 100
    });

    await browser.close();
}

(async () => {
    if (!fs.existsSync(outDir)){
        fs.mkdirSync(outDir);
    }

    await _(screenshotsToCollect)
        .flatMap(({category, pages}) => pages ? _.times(pages, n => `${category}/${n * 32}/${(n + 1) * 32}`) : [category])
        .map(relative => `http://localhost:8080/${relative}`)
        .forEach(async path => {
            console.log(`collecting: ${path}`)
            const filename = `${outDir}/${/^http:\/\/localhost:8080\/([\w\d\/]+)$/.exec(path)[1].replace(/\//g, '-')}.jpeg`
            await takeSingleScreenshot(filename, path)
        })
})();
