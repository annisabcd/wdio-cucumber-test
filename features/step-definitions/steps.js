const { Given, When, Then } = require('@wdio/cucumber-framework')
const LoginPage = require('../pageobjects/login.page')
import homePage from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';

Given('User is on login page', async () => {
  await LoginPage.open()
});

When('User inputs {string} as username and {string} as password and clicks the login button', async (username, password) => {
  await LoginPage.login(username, password)
});

When('User click login button', async () => {
  await LoginPage.btnSubmit.click();  
});

When('User inputs nothing but clicks the login button', async () => {
  await LoginPage.btnSubmit.click();
});


Then('User should be redirected to homepage', async () => {
  await homePage.validateOnHomePage();
  await browser.pause(2000);
});

Then('User should see error message {string}', async(errorMessage) => {
  await loginPage.validateWrongPasswordDisplayed(errorMessage)
  await browser.pause(1000);
})

Then('User should see error warning {string}', async(errorWarning) => {
  await loginPage.validateWrongAction(errorWarning)
  await browser.pause(1000);
})

Given('User is on homepage', async() => {
  await homePage.open();
})

When('User click Add to Cart button', async() => {
  await homePage.addToCartButton.click(); 
})

Then('the Item will be Add to Cart', async() => {
  await expect(homePage.cartIcon).toBeExisting();
})



