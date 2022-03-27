const puppeteer = require('puppeteer');

async function startBrowser() {
    let browser;
    try {
        console.log("Opening browser.....");
        browser = await puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (err) {
        console.log("Could not create browser => : ", err);
    }
    return browser;
}

module.exports = {
        startBrowser
};