import { test, expect } from '@playwright/test'; 
test('webactions and assertions', async ({ page }) => 
    {
await page.goto('https://example.com');

//lcoate element
const element=page.locator('h1[value="element"]');
//common web eleemnt validation

//check if the element is visible or not
const isElementVisible=await expect(element).toBeVisible();//true or false

//check if the element enabled
const isElementEnabled=await expect(element).toBeEnabled(); //true or false

//check if the element is selected already.(if the element checkbox)
const isElementSelected=await expect(element).toBeChecked(); //true or false

//check if the element is disappeared
const isElementHidden=await expect(element).toBeHidden(); //true or false

//Button web eleemnt validation
//Locate the button element
const button=page.locator('//button[@name="LogIn"]');

//verify label of the buton
const buttonText=await button.textContent();//VAlye form the elemenbt
const buttonLabel=await button.getAttribute("value");//specific attribute of thelement
await expect(buttonText).toBe('LogIn');
await expect(buttonLabel).toBe('LogIn');

//click on the button
await button.click();

//double click
await button.dblclick();

//right click
await button.click({button:'right'});//right click


//mouse hover
await button.hover();

//scroll till the button is getting displayed
await button.scrollIntoViewIfNeeded();

await page.mouse.wheel(100,0);//scroll to right
await page.mouse.wheel(0,100);//scroll to left
await page.mouse.wheel(0,-100);//scroll up
await page.mouse.wheel(-100,0);//scroll down

//drag and drop
const drag=await page.locator('//div[@val="target"]');
await button.dragTo(drag);

//forceclick on the button is not responding
await button.click({force:true});

//TEXTBOX WEB ELEMENT

//locate eleemnt
const textbox=await page.locator('//input[@name="username"]');


//placeholder
const placeHolder=await textbox.getAttribute("placeholder");

//clear textbox
await textbox.clear();

//type into textbox
await  textbox.fill("sasi");

//verify the text into textbox
await textbox.getAttribute('value');
//press function keys in textbox
await textbox.press('Enter');

   


    //checkbox
const checkBox=page.locator('//input[@name="agree"]')

const checked=await checkBox.isChecked();
if(!checked){
    await checked.click();
}

//radiobox
const radioBox=page.locator('//input[@name="agree"]')
await radioBox.check();

//dropdown
const dropdown=page.locator('//select[@name="options"]');


//select one of the option
await dropdown.selectOption({label:'webservice'}); //label
await dropdown.selectOption({value:'ws'}); //value
await dropdown.selectOption({index:1});  //index

//option selected form dropdown
const selectedOption=await dropdown.inputValue();
await expect(selectedOption).toBe('webservice');

//extract all the options
const allOptions=await dropdown.locator('option').allTextContents();

//verify dropdown is selected  multi select dropdown
const isMultiselect=await dropdown.getAttribute('multiple');
if(isMultiselect==null){

    await dropdown.selectOption({label:'webservice'}); //label
await dropdown.selectOption({value:'ws'}); //value
await dropdown.selectOption({index:1})
}
//select and deselect
if(isMultiselect==null){

    await dropdown.selectOption({label:'webservice'}); //label
await dropdown.selectOption({value:'ws'}); //value
await dropdown.selectOption({index:1})
}


//img validation
const img=page.locator('//img[@name="sample"]');
//imag is displayed or not
await expect(img).toBeVisible();


//img is valid source path 
const imageSource=await img.getAttribute('src')
const expectPath ="https:gogole.com"
await expect(imageSource).toBe(expectPath);

//alignment position
const imagePosition=await img.boundingBox();
const x=imagePosition?.x;
const y=imagePosition?.y;

//size of the img or resolution

const imageResolution=await img.boundingBox();
const width=imageResolution?.width;
const height=imageResolution?.height;

//Hyperlink

const hyperLink=await page.locator('//a[@href="djhdfk"]');
const hyperlinkref=await hyperLink.getAttribute('href');
await hyperLink.click();
const currentURL=page.url();
await expect(currentURL).toBe(hyperlinkref);

//verify textcontent

const textElement=page.locator('//h1[@name="sampeltext"]');
const textcontent=await textElement.textContent();
await expect(textcontent).toBe('Simple text');



//upload
const uploadElement=page.locator('//input[@type="file"])');
await uploadElement.setInputFiles('path/to/file.txt');


//window-Alerts
const alertsButton=page.locator('/button[@name="alertButton"]');

    page.once('dialog',async dialog => {
        const alertmsg=dialog.message();

        //ok
        await dialog.accept();

        //cancel
  await dialog.dismiss();
//enter text
    await dialog.accept('Textbox to be accept');



    });

await alertsButton.click();

//Frame
const frame=page.frameLocator('iframe[@id="frmae1"]');

const frameElement=frame.locator('h1[value="frameElement"]');





 });