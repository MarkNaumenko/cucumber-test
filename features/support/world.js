var chrome = require('selenium-webdriver/chrome'),
	chromeDriverPath = require('chromedriver').path;

chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriverPath).build());

function CustomWorld() {
	this.driver = new chrome.Driver()
};

module.exports = function() {
	this.World = CustomWorld;
};