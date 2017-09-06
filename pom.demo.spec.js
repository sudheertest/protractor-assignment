describe('do login', function(){
var customerPage = require('./CustomerLoginPage.js');
var dashBoardPage = require('./DashBoardPage.js');
var catalogPage = require('./CatalogPage.js');


	beforeEach(function(){
		browser.get("https://app.signalfx.com/#/signin");
		browser.waitForAngularEnabled(false);
	});

	xit("search in dashboard", function(){
		customerPage.onlyDoLoginEnter();
			var emailValue = customerPage.getEmailValue().then(function(text){
			console.log("entered email value is: " + text);
			});
		
		customerPage.getEmailPwd().then(function(text){
		console.log("entered email pwd is: " + text)
			});
	

		expect(browser.getTitle()).toEqual("Dashboards");
		browser.close();
	});
	


	xit('fill login and search dashboard', function(){
		browser.waitForAngularEnabled(false);
		customerPage.doLogin();
	
		expect(browser.getCurrentUrl()).toContain('#/dashboard');

		dashBoardPage.getPageTitle().then(function(text){
			console.log("page title: " + text);
		});	
		expect(dashBoardPage.getPageTitle()).toEqual("Dashboards");
		expect(dashBoardPage.getDashBoardMenu().isPresent()).toBe(true);

		dashBoardPage.enterSearchKey("chin");
		browser.close();
	});



	describe('do login and search catalog', function(){

		it('fill login and search catalog', function(){
			browser.waitForAngularEnabled(false);
			customerPage.doLogin();
			catalogPage.navigateToCatalog();

			expect(browser.getCurrentUrl()).toContain('#/catalog');

			browser.getTitle().then(function(text){
				console.log("page title: " + text);
			});	

			expect(browser.getTitle()).toEqual("Catalog");
			catalogPage.searchCatalog("chin");

		});

	});

});