import { NightwatchBrowser } from "nightwatch";
import { rulesExcludeObj, runOnlyObj, util } from "../utils/AccessibilityUtil";


module.exports={

    'Run everything except contrast and region':''+function (browser:NightwatchBrowser) {

        browser
            .url('https://wwwuat.iselect.com.au/health-insurance/')
            .click('xpath','//*[@id="type-select"]')
            .sendKeys('xpath',"//*[@id='healthClientSession_customer_homeAddress']","testaddress")
            .axeInject()
            .axeRun('body', rulesExcludeObj)
            .end();
    } ,
    'Run these rules only in home and needs page':''+function (browser:NightwatchBrowser) {
        browser
            .url("https://www.iselect.com.au/life/")
            .axeInject()
            .axeRun('body',runOnlyObj)
            .click("xpath","//a[@class='start-select-link trackable-link']")
            .axeInject()
            .axeRun('body',runOnlyObj)
            .end();
     },  
     'Run all rules':''+function (browser:NightwatchBrowser) {
        browser
            .url('https://www.iselect.com.au/')
            .axeInject()
            .axeRun('body', {
            })
            .end();
     },
     
     'using utility':function (browser:NightwatchBrowser) {
        browser
            .url("https://www.iselect.com.au/life/")
            util.axeInjectAndAxeRun(runOnlyObj)
            .click("xpath","//a[@class='start-select-link trackable-link']")
            util.axeInjectAndAxeRun(runOnlyObj)
            .end();
     }, 


  
}