var CustomerLoginPage =  function() {
	var email = element(by.css('input#email'));
	var password = element(by.css('input#password'));
	var submitButton = $('button.login-button');
	var submitButtonAttr = element(by.css('button[class="login-button"]'));
	
	var EC = protractor.ExpectedConditions;
	var emailCredential = "chindian.quotes@gmail.com";
	var pwd = "Chin@sf1";

	this.doLogin = function() {
		browser.waitForAngularEnabled(false);
		email.sendKeys(emailCredential);
		password.sendKeys(pwd);

		console.log("waitForAngularEnabled: " + browser.waitForAngularEnabled());
		console.log("waitForAngular: " + browser.waitForAngular());
	

		// browser.pause(5860);
		browser.sleep(6000);
		browser.wait(EC.elementToBeClickable(submitButton),10000, "Time out for submit button visibility");
		submitButton.click();

		browser.sleep(12000);
		return require('./DashBoardPage.js');
	};

	this.onlyDoLoginEnter = function(){
		email.sendKeys(emailCredential);
		password.sendKeys(pwd);
		// browser.sleep(9000);
		browser.wait(submitButton.isDisplayed(),10000);	
		
		console.log("waitForAngularEnabled: " + browser.waitForAngularEnabled());
		console.log("waitForAngular: " + browser.waitForAngular());
		// browser.wait(() => element(by.partialLinkText('Logout')));
	};

	this.getEmailValue = function(){
		return email.getAttribute('value');
	};

	this.getEmailPwd = function(){
		 return password.getAttribute('value');
	};
};


module.exports =  new CustomerLoginPage();