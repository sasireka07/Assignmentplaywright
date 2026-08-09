//Parabank

//Title of the page
import { test, expect } from '@playwright/test'; 
test('parabank', async ({ page }) => 
    {
     await page.goto('https://parabank.parasoft.com/parabank/index.htm'); 
//Heading of the page
    const logo = page.getByAltText('ParaBank');
    const title = await logo.getAttribute('title'); 
    console.log('Title is:', title);
    //Heading under text
   const logoSubHeading=page.getByText('Experience the difference');
   const subTitle=await logoSubHeading.textContent();
   console.log('SubTitle is:', subTitle);

   //Links-Solutions
   const LinkSolutions=page.getByText('Solutions');
   const link1=await LinkSolutions.textContent();
   console.log('Link is:', link1);

   //Links-About Us
    const LinkAboutUs=page.getByText('About Us');
   const link2=await LinkAboutUs.first().textContent();
   console.log('Link is:', link2);

   //Links-Services
      const LinkServices=page.getByText('Services');
   const link3=await LinkServices.first().textContent();
   console.log('Link is:', link3);

   //Links-products
    const LinkProducts=page.getByText('Products');
   const link4=await LinkProducts.first().textContent();
   console.log('Link is:', link4);
//Links-Locations
  const LinkLocations=page.getByText('Locations');
   const link5=await LinkLocations.first().textContent();
   console.log('Link is:', link5);

   //Links-Admin Page
     const LinkAdminPage=page.getByText('Admin Page');
   const link6=await LinkAdminPage.first().textContent();
   console.log('Link is:', link6);

      //Heading-Customer Login
     const LinkCustomerLogin=page.getByText('Customer Login');
   const link7=await LinkCustomerLogin.textContent();
   console.log('Link is:', link7);

//Textlabel-Username
     const Username=page.getByText('Username');
   const link8=await Username.textContent();
   console.log('Link is:', link8);

   //TextLabel-Password
     const Password=page.getByText('Password');
   const link9=await Password.first().textContent();
   console.log('Link is:', link9);

 //ButtonLabel Login
     const loginButton = page.locator('input[type="submit"]');
   const buttonText = await loginButton.getAttribute('value'); 
   console.log('Button text is:', buttonText);

//Forgot login info?-links
const forgotLink=page.getByText('Forgot login info?');
   const link11=await forgotLink.textContent();
   console.log('Link is:', link11);

//Register-links
const registerLink=page.getByText('Register');
   const link12=await registerLink.textContent();
   console.log('Link is:', link12);


   //home-Icon
   const homeLink = page.getByRole('link', { name: 'home' });
   const text = await homeLink.first().textContent(); 
   console.log('Link text is:', text);

//about-Icon
   const about = page.getByRole('link', { name: 'about' });
   const textabout = await about.first().textContent(); 
   console.log('Link text is:', textabout);

   //contact-Icon
   const contact = page.getByRole('link', { name: 'contact' });
   const textcontact = await contact.first().textContent(); 
   console.log('Link text is:', textcontact);

//ATM Services-Sub heading link
const atm = page.getByText('ATM Services');
   const textatm = await atm.first().textContent(); 
   console.log('Link text is:', textatm);

 //Withdraw Funds-links  
   const withdraw = page.getByRole('link', { name: 'Withdraw Funds'});
   const textWithdraw = await withdraw.textContent(); 
   console.log('Link text is:', textWithdraw);

//Transfer Funds-links  
   const Transfer = page.getByRole('link', { name: 'Transfer Funds'});
   const textTransfer = await Transfer.first().textContent(); 
   console.log('Link text is:', textTransfer);

//Check Balances-links  
   const checkBalances = page.getByRole('link', { name: 'Check Balances'});
   const textCheckbalances = await checkBalances.first().textContent(); 
   console.log('Link text is:', textCheckbalances);

//  Make Deposits-links  
   const makeDeposits = page.getByRole('link', { name: 'Make Deposits'});
   const textMakeDeposits = await makeDeposits.textContent(); 
   console.log('Link text is:', textMakeDeposits);

//Online Services-Sub heading link
const services = page.getByText('Services');
   const textservices = await services.first().textContent(); 
   console.log('Link text is:', textservices);

//  Bill Pay-links  
   const billPay = page.getByRole('link', { name: 'Bill Pay'});
   const textBillPay = await billPay.first().textContent(); 
   console.log('Link text is:', textBillPay);

//  Account History-links  
   const accountHistory = page.getByRole('link', { name: 'Account History'});
   const textaccountHistory = await accountHistory.textContent(); 
   console.log('Link text is:', textaccountHistory);

//  Transfer Funds-links  
   const transferFunds = page.getByRole('link', { name: 'Transfer Funds'});
   const texttransferFunds = await transferFunds.first().textContent(); 
   console.log('Link text is:', texttransferFunds);

//  ReadMore-links  
   const readMore = page.getByRole('link', { name: 'Read More'});
   const textreadMore = await readMore.first().textContent(); 
   console.log('Link text is:', textreadMore);

//  Latest News-Heading  
   const news = page.getByRole('heading', { name: 'Latest News', level: 4 });
   const textnews = await news.textContent(); 
   console.log('Heading text is:', textnews);

//ParaBank Is Now Re-Opened-links
const reopened = page.getByRole('link', { name: 'ParaBank Is Now Re-Opened'});
   const textreopened = await reopened.textContent(); 
   console.log('Link text is:', textreopened);

//New! Online Bill Pay-links
const onlineBillPay = page.getByRole('link', { name: 'New! Online Bill Pay'});
   const textonlineBillPay  = await onlineBillPay.textContent(); 
   console.log('Link text is:', textonlineBillPay);

//New! Online Account Transfers-links
const accountTransfer = page.getByRole('link', { name: 'New! Online Account Transfers'});
   const textaccountTransfer  = await accountTransfer.textContent(); 
   console.log('Link text is:', textaccountTransfer);


 //Footer links-Home
const homeLinkFooter = page.getByRole('link', { name: 'Home'});
   const texthomeLinkFooter  = await homeLinkFooter.first().textContent(); 
   console.log('Footer Link text is:', texthomeLinkFooter);  

   //Footer links-About Us
const aboutUsLinkFooter = page.getByRole('link', { name: 'About Us'});
   const textaboutUsLinkFooter  = await aboutUsLinkFooter.first().textContent(); 
   console.log('Footer Link text is:', textaboutUsLinkFooter);

      //Footer links-Services
const servicesLinkFooter = page.getByRole('link', { name: 'Services'});
   const textServicesLinkFooter  = await servicesLinkFooter.first().textContent(); 
   console.log('Footer Link text is:', textServicesLinkFooter);

  //Footer links-Products
const productsLinkFooter = page.getByRole('link', { name: 'Products'});
   const textProductsLinkFooter = await productsLinkFooter.first().textContent(); 
   console.log('Footer Link text is:', textProductsLinkFooter);  

    //Footer links-locations
const locationsLinkFooter = page.getByRole('link', { name: 'Locations'});
   const textLocationsLinkFooter = await locationsLinkFooter.first().textContent(); 
   console.log('Footer Link text is:', textLocationsLinkFooter); 
   
   
//Footer links-Forum
const forumLinkFooter = page.getByRole('link', { name: 'Forum'});
   const textForumLinkFooter = await forumLinkFooter.first().textContent(); 
   console.log('Footer Link text is:', textForumLinkFooter);     

 //Footer links-Site Map
const sitemapLinkFooter = page.getByRole('link', { name: 'Site Map'});
   const textsitemapLinkFooter = await sitemapLinkFooter.first().textContent(); 
   console.log('Footer Link text is:', textsitemapLinkFooter);     
//Footer links-Contact Us
const contactUsLinkFooter = page.getByRole('link', { name: 'Contact Us'});
   const textContactUsLinkFooter = await contactUsLinkFooter.first().textContent(); 
   console.log('Footer Link text is:', textContactUsLinkFooter);  

});
