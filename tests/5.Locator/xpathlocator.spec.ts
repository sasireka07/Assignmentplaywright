//syntax 1://tagName[@attributeName='attributeValue']
//syntax 2//tagName[text()='text-Value']

//syntax 3//tagName[contains@attributeName='attributeValue']
//syntax 4//tagName[contains(text(),'text-Value')]


//syntax 5//tagName[starts-with(@attributeName='attributeValue')]
//syntax 6//tagName[starts-with(text()='text-Value')]


//syntax 7//tagName[@attribute1="attributeValue1" and @attribute2="attributeValue2" and text()='text-value'] 


//syntax8: adv xpathpath with relationship
//referfence-xpath:: relationship/target-xpath
//child
//parent
//ancestor
//following-sibling--younger
//preceding-sibling--elder
//following
//preceding -->prev generator
// /(child)
// //(with-in-the-family)

//target--sibling--parent--ancestor--ancestor's parent


//ancestor://ul[@class="leftmenu"]
//parent://li
//sibling:NA
//target://a[text()="services"]

////ul[@class="leftmenu"]/child::li/child::a[text()="services"]

////li[text()="Solutions"]//folowing-sibling::li[2]/child::a[text()="Services"];

import { test, expect } from '@playwright/test'; 
test('parabank', async ({ page }) => 
    {
     await page.goto('https://parabank.parasoft.com/parabank/index.htm'); 
//syntax 1
     await page.locator('//img[@class="logo"]');

//syntax 2
     await page.locator('//p[@text()="Experience the difference"]');

//syantax 3
    await page.locator('//img[contains(@src,"logo")');

//syntax 4
     await page.locator('//p[contains(text(),"difference"]');


//syntax 5
     await page.locator('//p[starts-with(text(),"Experience"]'); 
     
 
//syntax 6
     await page.locator('//p[starts-with(text(),"difference"]');     


//syntax 7
     await page.locator('//img[@class="logo" and alt="paraBank"]')   ;  


//locate the services link using syntax 8
await page.locator()










});