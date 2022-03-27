const browserObject = require('./browser');
const scrapperController = require('./pageController');

// Start the browser and create a broswer instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scrapper controller
scrapperController(browserInstance)