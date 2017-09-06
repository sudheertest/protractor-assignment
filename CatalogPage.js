//CatalogPage.js

var CatalogPage = function(){

	var catalogMenu = $('a[track-click="global-header-nav-catalog"');
	var EC = protractor.ExpectedConditions;

	this.navigateToCatalog = function(){
		browser.wait(EC.elementToBeClickable(catalogMenu), 10000);
		
		catalogMenu.click();

	};
}

module.exports = new CatalogPage();