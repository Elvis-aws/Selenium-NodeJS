let assert = require('assert');
let hooks = require('../DriverInit/hooks');
let home = require('../Pages/HomePage');


describe('Click On Login Button On HomePage',function() {
    this.timeout(50000);
    
    it('First test case', async function(){
        await hooks.mochaHooks.beforeAll();
        await home.pageObjects.clickOnLoginButton();
        var bool = await hooks.mochaHooks.afterAll();
        assert.ok(bool)
    }),

    it('Second Test case', async function(){
    })
});