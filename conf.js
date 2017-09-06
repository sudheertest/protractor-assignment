// conf.js
exports.config = {
 
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.demo.spec.js'],

  multiCapabilities: [
    {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 1

    }
  ],
  allScriptsTimeout: 40000,
  getPageTimeout: 25000,
  useAllAngular2AppRoots: true,
  // SELENIUM_PROMISE_MANAGER: false,

  onPrepare : function(){
    browser.driver.manage().window().maximize();
  },

  jasmineNodeOpts: {

    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 9999999
  },
};