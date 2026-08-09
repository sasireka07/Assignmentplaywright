import {test,expect,chromium} from '@playwright/test';

test('Windows Handling',async({page,context})=>{
await page.goto('https://the-internet.herokuapp.com/windows');

//wait new tab to click
const [newPage]=await Promise.all([
    context.waitForEvent('page'),
    page.locator('a[href="/windows/new"]').click()

]);

await newPage.waitForLoadState();

//Print titles 
console.log('Parent title:', await page.title()); 
console.log('Child title:', await newPage.title());

// Verify text in child page
await expect(newPage.locator('h3')).toHaveText('New Window');

// Close child tab 
await newPage.close();

// Continue in parent page 
await expect(page.locator('h3')).toHaveText('Opening a new window'); 
});