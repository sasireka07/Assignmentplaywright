import { test, expect , chromium} from '@playwright/test'; 
import path from 'path';
import process from 'process';

test('Hard assertions', async ({ page }) => 
    {

//1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
 await page.goto('https://demoqa.com/automation-practice-form');

//2. Wait for Page-load
await page.waitForLoadState('load');

//3. Enter First name and Last name
const firstName=await page.locator('input[id="firstName"]');
await firstName.fill('Sasi');


//4. Enter Email
const email=await page.locator('//input[@id="userEmail"]');
await email.fill('rose.bloom22@gmail.com');

//5. Select Gender (Male)
await selectGenderOption(page,'Female');

//6. Enter mobile number
const mobileNumber=await page.locator('//input[@id="userNumber"]');
await mobileNumber.fill('9944021251');

//7.Select DOB (1-Feb-1991)
const dob=await page.locator('//input[@id="dateOfBirthInput"]');
await dob.fill('02 Aug 2026');
await page.keyboard.press('Tab');

//8.Search and Select Computer Science and English
const subject=await page.locator('input.subjects-auto-complete__input');
await subject.click(); 
await subject.pressSequentially('Maths', { delay: 300 }); 
await subject.press('Enter');

//9.Select Hobbies as Sports and Reading


await selectHobbiesOption(page,'Music');

//10.Upload photo
const uploadPhoto = page.locator('#uploadPicture');
const uploadFilePath = path.join(__dirname, 'july2026.pdf');
console.log(uploadFilePath);
await uploadPhoto.setInputFiles(uploadFilePath);

await page.locator('#submit').scrollIntoViewIfNeeded();
await page.evaluate(() => window.scrollTo(0, 1400))

//11.Submit Details
const submitButton=await page.locator('#submit')
await submitButton.click();
    })

    async function selectGenderOption(page:any, option :string ):Promise<void>{
//locate the radio button
const radioButton = await page.locator(`input[value="${option}"]`);
await radioButton.click();
    }

    async function selectHobbiesOption(page:any, option :string ):Promise<void>{
//locate the checkbox button
const checkboxButton = await page.locator(`label:has-text("${option}")`);
await checkboxButton.click();
    }