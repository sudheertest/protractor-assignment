//CatalogPage.js

var CatalogPage = function(){

	var catalogMenu = $('a[track-click="global-header-nav-catalog"');
	var detectorTemplate = element(by.cssContainingText('div.bucket-header>span', 'DetectorTemplate'));

	var catalogInputSearch = $('input.catalog-filter-input');

	var EC = protractor.ExpectedConditions;

	this.navigateToCatalog = function(){ 
		browser.wait(EC.elementToBeClickable(catalogMenu), 10000);

		catalogMenu.click();
		browser.wait(EC.presenceOf(detectorTemplate), 10000);

	};


	this.searchCatalog = function(text){
		
		
		detectorTemplate.click();
		catalogInputSearch.click().clear().sendKeys(text);
		browser.sleep(6000);
	};
};

module.exports = new CatalogPage();