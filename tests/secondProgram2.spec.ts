
import {test,expect,chromium} from '@playwright/test'

test('Program1', async ()=>{

    let browser = await chromium.launch({
        channel:'chrome',
        headless:false
    })

    let brow_Contx = await browser.newContext();

    let page1 = await brow_Contx.newPage();

    await page1.goto('https://www.flipkart.com/');
})