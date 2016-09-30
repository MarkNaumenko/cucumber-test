var seleniumWebdriver = require('selenium-webdriver');

module.exports = function () {

	this.setDefaultTimeout(60000); //Setting timeout for elements waiting
	
	this.Given(/^I am on the Onliner.by web site$/, function() {
    	return this.driver.get('https://www.onliner.by/');
    });

    this.Then(/^I click on "([^"]*)"$/, function (text) {
        return this.driver.findElement({className:'fast-search__input'}).then(function(element) {
    	    return element.click();
        });
    });

    this.Then(/^I input "([^"]*)"$/, function(text) {
    	return this.driver.findElement({className:'fast-search__input'}).then(function(element) {
    	    return element.sendKeys(text);
        });
    });

    this.Then(/^I should go to a market page$/, function() {

    	timeout = 10000;

    	myDriver = this.driver;

    	this.driver.wait(function() {
    		myDriver.findElement({className:'search__close'}).isDisplayed();
    		return myDriver.findElement({linkText:'Apple iPhone 6s 16GB Silver'}).isDisplayed();
		}, timeout);

    	return this.driver.findElement({linkText:'Apple iPhone 6s 16GB Silver'}).then(function(element) {
    	    return element.click();
        });
    });

      // this.Then(/^I should see "([^"]*)"$/, function (text) {
      //   var xpath = "//*[contains(text(),'" + text + "')]";
      //   var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
      //   return this.driver.wait(condition, 10000);
      // });
};