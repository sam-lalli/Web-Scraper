const scraperObject = {
    url: 'http://book.toscrape.com',
    async scraper(broswer){
        let page = await broswer.newPage();
        await page.goto(this.url);

    }
}

module.exports = scraperObject;