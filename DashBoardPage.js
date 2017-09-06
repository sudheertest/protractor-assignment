//DashBoardPage.js

var DashBoardPage = function(){
	var EC = protractor.ExpectedConditions;
	var search = $('i.icon-search');
	var searchModel = $('input[ng-model=searchText]');
	var selectFromResult = $('a[ng-href*="#/dashboard"]');
	var sidebar =$('i.icon-catalog');
	var usageMetrics = $('a[title="Usage Metrics"]');
	var sideNavFlex = $('div.flexstatic.navflex.left-side-bar');
	

var dashBoardMenu = element(by.css('a[track-click="global-header-nav-dashboards"]'));

	this.getDashBoardMenu = function(){
		browser.wait(EC.elementToBeClickable(dashBoardMenu),10000, "Time out for submit button visibility");
		return dashBoardMenu;
	};


	this.getPageTitle = function(){
		return browser.getTitle();
	};

	this.enterSearchKey = function(searchKey){
	
		browser.wait(EC.elementToBeClickable(search),10000, "Time out for submit button visibility");
		search.click();
		searchModel.sendKeys(searchKey);
		browser.wait(EC.elementToBeClickable(selectFromResult),10000, "Time out for submit button visibility");
		selectFromResult.click();
	};
};


module.exports = new DashBoardPage();