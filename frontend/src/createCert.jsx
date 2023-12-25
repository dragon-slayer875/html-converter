import { launch } from "puppeteer";

export default async function createCert() {
    const browser = await launch({headless: "new"});
    const page = await browser.newPage();
    await page.goto("./assets/cert.html");
    await page.evaluate(() => {
        document.querySelector("#name").textContent = "John Doe";
    });
    const buffer = await page.pdf({
        format: "A4",
        printBackground: true,
        landscape: true,
    });
    await browser.close();
    console.log("buffer");
    return buffer;
}


