const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: "new"});
    const page = await browser.newPage();
    await page.goto("file:///home/rudraksht/repos/html-converter/backend/cert.html");
    await page.evaluate(() => {
        document.querySelector("#name").textContent = "John Doe";
    });
    await page.pdf({
        path: "cert.pdf",
        format: "A4",
        printBackground: true,
        landscape: true,
    });
    await browser.close();
})();
