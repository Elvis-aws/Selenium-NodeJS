
const webdriver = require('selenium-webdriver'),
   By = webdriver.By,
   until = webdriver.until;

let driver;
let HubIpAddress = 'http://167.172.59.97:4444/wd/hub';
let capabilities = {
    'browserName' : 'chrome',
    'browser_version' : '86.0.4240.75',
    'os' : 'LINUX',
    'resolution' : '1024x768',
    'name' : 'SampleTest'
     }


async function initializeDriver(){

    try 
    {
        driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    } catch (error) {

        console.log(error);
    }
    return driver;
};

async function remoteDriver(){

    try 
    {
        driver = await new  webdriver.Builder()
        .usingServer(HubIpAddress)
        .withCapabilities(capabilities)
        .build();

    } catch (error) {

        console.log(error);
    }
    return driver;
};

async function closeDriver(){

    if (driver != null) {
        driver.quit();
        return true;
    }

    return false;
}

module.exports.initializeDriver = initializeDriver;
module.exports.remoteDriver = remoteDriver;
module.exports.closeDriver = closeDriver;

