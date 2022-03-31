import { Given, Then, When } from "@wdio/cucumber-framework";
import data from "../data/testdata";
import { homePage } from "../page/HomePage";


Given(/^User is adding new owner in petclinic application$/, async function () 
{
    await browser.url(data.APP_URL.BASE_URL);
    await browser.maximizeWindow();
    await browser.pause(2000);
});

When(/^User clicks on find owner menu from home page$/, async function()
 {
  await homePage.navigateToFindOwner();
 });

 Then(/^Find Owner screen gets dispalyed$/, async function()
 {
   
 });

 When(/^User clicks on add owner menu from home page$/, async function()
 {
  await homePage.navigateToAddOwner();
 });

 Then(/^Add information screen get displayed$/, async function()
 {
   
 });

When(/^User provides all the details firstname,lastname,address,city telephone of new owner and submit$/, async function() {

   // Adding new data
   const firstName = await $('//*[@id="firstName"]');
   firstName.setValue(data.AddOwner.firstName);
   await browser.pause(500);

   const lastName = await $('//*[@id="lastName"]');
   lastName.setValue(data.AddOwner.lastName);
   await browser.pause(500);

   const address = await $('//*[@id="address"]');
   address.setValue(data.AddOwner.address);
   await browser.pause(500);

   const city = await $('//*[@id="city"]');
   city.setValue(data.AddOwner.city);
   await browser.pause(500);

   const tephone = await $('//*[@id="telephone"]');
   tephone.setValue(data.AddOwner.telephone);
   await browser.pause(500);

   const addOwnerBtn = await $('//*[@id="add-owner-form"]/div[2]/div/button');
   addOwnerBtn.click();
   await browser.pause(5000);
   
});


Then(/^User can see information added page$/, async function()
{
  // expect(await homePage.checkOwnerInformationExists()).toBe(true)
});


 
