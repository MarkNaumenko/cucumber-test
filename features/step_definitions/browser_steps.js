module.exports = function () {

    // var browser = require('protractor');
    // browser.ignoreSynchronization = true;

	this.setDefaultTimeout(60000); //Setting timeout for elements waiting
	
	this.Given(/^I am on the Onliner.by web site$/, function() {
    	return this.driver.get('https://www.onliner.by/');
    });

    this.Then(/^I click on "([^"]*)"$/, function (text) {
        return this.driver.findElement({className:'fast-search__input'}).then(function(element) {
    	    return element.sendKeys('a');
        });
    });

    this.Then(/^I input "([^"]*)"$/, function(text) {
    	return this.driver.findElement({className:'fast-search__input'}).then(function(element) {
    	    return element.sendKeys(text);
        });
    });

    this.Then(/^I should go to a market page$/, function() {
        this.driver.switchTo().frame(this.driver.findElement({className: 'modal-iframe'}));
        this.driver.sleep(3000);
        // myDriver = this.driver;

        // this.driver.wait(function() {
        //     return this.driver.findElement({className:'product__title-link'}).isDisplayed();
        // }, 3000);
      return this.driver.findElement({className:'product__title-link'}).click();      
    	//timeout = 10000;
  //   	this.driver.wait(function() {
  //   		myDriver.findElement({className:'search__close'}).isDisplayed();
  //   		return myDriver.findElement({linkText:'Apple iPhone 6s 16GB Silver'}).isDisplayed();
		// }, timeout);
    });

      // this.Then(/^I should see "([^"]*)"$/, function (text) {
      //   var xpath = "//*[contains(text(),'" + text + "')]";
      //   var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
      //   return this.driver.wait(condition, 10000);
      // });
    this.Then(/^I should see matrix dots$/, function() {
        return this.driver.findElement({xpath:'//span[contains(text(), "326")]'}).isDisplayed(); 
    });

    this.Then(/^I should see processor$/, function() {
        return this.driver.findElement({xpath:'//span[contains(text(), "Apple A9")]'}).isDisplayed(); 
    });

    this.Then(/^I should see scanner$/, function() {
        return this.driver.findElement({xpath:'//td[contains(text(), "Сканер")]/parent::tr/*/span[@class="i-tip"]'}).isDisplayed(); 
    });

    //    //tr/td/span[contains(text(), "Apple A9")]
    //    //tr/td[contains(text(), "Сканер")]/parent::tr

    this.Then(/^I should see length$/, function() {
        return this.driver.findElement({xpath:'//span[contains(text(), "138.3")]'}).isDisplayed(); 
    });

    this.Then(/^I should not see fm$/, function() {
        return this.driver.findElement({xpath:'//td[contains(text(), "FM-приёмник")]/parent::tr/*/span[@class="i-x"]'}).isDisplayed(); 
    });
};