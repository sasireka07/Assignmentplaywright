//css locator-by using css properties

//cssSelector syntax
//1.tagName#id
//2.tagName#classname
//3.tagName[attribute='value']
//4.tagName[attribute*='value']//contains
//5.tagName[attribute^='value']//starts-with
//6.tagName[attribute$='value']//ends-with
//7.tagName[attribute$='value'][attribute$='value']//combine
import{test,expect, chromium} from '@playwright/test';
test('css Selector 1',async({page})=>{
await page.goto('https://www.googke.com');
await page.locator('textarea#APjfpq');

});