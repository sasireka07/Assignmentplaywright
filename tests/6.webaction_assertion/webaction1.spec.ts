import { test, expect , chromium} from '@playwright/test'; 
test('Hard assertions', async ({ page }) => 
    {
        //Launch application
 await page.goto('https://para.testar.org/parabank/about.htm');

 //application logo is displayed
const logo = page.locator('img[title="ParaBank"]');
 await expect(logo).toBeVisible(({ timeout: 10000 }));

 //verify the caption "Experince differnece"
const caption=await page.locator('h1.title');
 await expect(caption).toHaveText('ParaSoft Demo Website');
 

 
 //enter empty username
 const username=await page.locator('input[name="username"]');
await username.fill('invaliduser');
  //enter empty password
   const password=await page.locator('input[name="password"]');
   await password.fill('');

   //click on login
   const loginButton=await page.locator('input[value="Log In"]');
    await loginButton.click();

//capture error message
const errorMessage= page.locator('p.error');
await expect(errorMessage).toBeVisible({ timeout: 10000 });
await expect(errorMessage).toContainText('Please enter a username and password');
//await expect(errorMessage) .toContainText(' An internal error has occurred and has been logged');




//clcik on admin page link
const adminLink = page.locator('//a[text()="Admin Page"]');
await adminLink.click();

//select radio button soap
await selectDataAccessMode(page,"soap");

//scroll to element dropdown
const dropdown=await page.locator('select[name="loanProvider"]');
await dropdown.scrollIntoViewIfNeeded();

//option webservide
await dropdown.selectOption({label:'Web Service'});

//click on submit button
const submitButton=page.locator('input[value="submit"]');
    await submitButton.click();

    //success messgae
    const msg=await page.locator('b[text()="Settings Saved successfully"]');
    await expect(msg).toBeVisible();
//clcik on service page link


    })

    //select data access mode
   async function selectDataAccessMode(page:any, option :string ):Promise<void>{
//locate the radio button
const radioButton = await page.locator(`input[value="${option}"]`);
await radioButton.click();
    }