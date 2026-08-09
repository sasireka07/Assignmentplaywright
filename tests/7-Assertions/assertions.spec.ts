//Assertion-compare ER with AR

//1.Hard Assertions-fail the pgm wherever there is mismatch
 //syntax:expect(actual).toBe(expected)

//2.Soft assertions-continue the pgm execution and fail end of the TC
//syntax:syntax:expect.soft(actual).toBe(expected)

import { test, expect } from '@playwright/test'; 
test('Hard assertions', async ({ page }) => 
    {
await page.goto('https://www.google.com');

//lcoate element
await expect.soft(page).toHaveTitle('Google2');
//await expect(page).toHaveURL('https://www.google.com');
await expect.soft(page).toHaveURL('https://www.google2.com');
console.log("Execution completed successfully");
    })

//other assertions

//expect(element).toBeVisible()
//expect(element).toBeHidden()
//expect(element).toBeEnabled()
//expect(element).toBeDisabled()
//expect(element).toBeChecked()
//expect(element).toHaveText(text)
//expect(element).toBeValue(value)
//expect(element).toHaveAttribute(name,value)
//expect(element).toHaveTitle(title)
//expect(element).toHaveURL(url)
