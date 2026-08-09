//
import{test,expect, chromium} from '@playwright/test';

test('browser actions',async({})=>{
//lauch the chromium browser engine to get edge browser(chrome broser will open)
const browserEngine=await chromium.launch({channel:'msedge',headless:false});//default chrome browser if we update {channel:'msedge'} it will launch edge

//launch the browser context within browser engine (Incognito tab)--edge browser
const browserContext=await browserEngine.newContext();

//clear all cokkieswithin the browser context
await browserContext.clearCookies();

//launcg the page within browser context (browser tab)
const page=browserContext.newPage();

////max the browser window to specific resolution
(await page).setViewportSize({width:1920,height:1080});

//launch the application with the url www.google.com
(await page).goto("https://www.google.com");

//verify the google applciation launch successfully within browser window
await expect(page).toHaveTitle("Google");

//launch the differnt application within the same page within browser window www.playwight.dev


//navigate back to previos application google
(await page).goBack();


//move forward to the next applciation, playwright within the browser
(await page).goForward();


//relaod the page within the browser window
(await page).reload();
//launch the new application with new window 
const newPage= await browserContext.newPage();
//launch new application within new window  by using url www.selenium.dev
await newPage.goto("https://selenium.dev");

//go back to previous taba nd display PW appln in other tab
(await page).bringToFront();

//verify or capture the url present in the current browser window
let currentUrl=(await page).url();
console.log(currentUrl);

//close the current page
(await page).close();

//close the browser context and all pages inside the context
await browserContext.close();
await browserEngine.close();
});