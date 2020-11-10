let assert = require('assert');
let hooks = require('../DriverInit/hooks');
let home = require('../Pages/HomePage');


describe('Click On Login Button On HomePage',function() {
    
    it('First test case', async function(){
        await hooks.mochaHooks.beforeAll();
        await home.pageObjects.clickOnLoginButton();
        var bool = await hooks.mochaHooks.afterAll();
        assert.ok(bool)
        console.log('First Testing complete');
    }),

    it('Second Test case', async function(){
        console.log('Second Testing complete');
    })
});