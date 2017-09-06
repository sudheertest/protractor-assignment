describe("Do login", function(){ 
	
	it("Open Signal Fx Login Page", function(){
		browser.get("https://app.signalfx.com/#/signin");
		expect(browser.getCurrentUrl()).toEqual("https://app.signalfx.com/#/signin");
		
		// browser.pause();
		browser.debugger();

		browser.getTitle().then(function(text){
			console.log('Titile is: ' +  text);
			expect("Login").toEqual(text);
		});
		

	});

});

describe('1st tests', () => {
  it('true is true', () => expect(true).toBe(true));
});