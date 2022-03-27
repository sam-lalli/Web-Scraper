const pageScrapper = require('./pageScraper');
async function scrapeAll(browserInstance) {
    let broswer;
    try {
        broswer = await browserInstance;
        await pageScrapper.scraper(broswer);
    }
    catch (err){
        console.log("Could not resolve broswer instance", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)
