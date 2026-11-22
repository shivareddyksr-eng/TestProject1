 
 import {test,expect,chromium} from '@playwright/test'
 
 /*
test('Lauching Chrome Browser',async ()=>{
    console.log("Welcome Shiva");

    //creating a browser
     let browser = await chromium.launch({
        headless:false
     });

     // using browser,  creating a browser session (browser Context)

     let context1 = await browser.newContext();
     let context2 = await browser.newContext();

     // inside a browser session, creating a page

      let page1 =   await context1.newPage();
      let page2 = await context1.newPage();

      await page1.goto('https://www.flipkart.com/');
      await page2.goto('https://www.amazon.in/');
    
     // sleep(10000);
})

*/


test ('Lauching browser using fixtiure', async ({page})=>{

   await  page.goto('https://www.amazon.in/')

    await page.context().storageState({
        path:'auth.json'
    })

    let brow_contx = await page.context();

    let coks = await brow_contx.cookies();

    console.log(coks);

    console.log(coks.values);
    
    

})