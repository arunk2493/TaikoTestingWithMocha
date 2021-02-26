const { openBrowser, goto, closeBrowser, write, press } = require('taiko');

describe('Taiko with jest',()=>{
    beforeAll(async() => {
        await openBrowser();
    });
    it('should use Taiko to search google', async() => {
        await goto('google.com');
        await write('flying foxes');
        await press('Enter');
    });
    afterAll(async ()=>{
        await closeBrowser();
    })
})


