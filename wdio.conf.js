const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities:[{
        "platformName": "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Test",
        "appium:automationName": "UiAutomator2",
        "appium:appWaitActivity": ".MainActivity",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".SplashActivity"
      }]
}