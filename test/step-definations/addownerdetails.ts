import { Given, Then, When } from "@wdio/cucumber-framework";
import data from "../data/testdata";
import { homePage } from "../page/HomePage";


Given(/^User is on petclinic home page$/, async function () {
  await browser.url(data.APP_URL.BASE_URL);
  await browser.maximizeWindow();
  await browser.pause(2000);
});

When(/^User clicks on find owner menu$/, async function () {
  await homePage.navigateToFindOwner();
});

Then(/^Find Owner page should be dispalyed$/, async function () {
  expect(await homePage.findOwnerPage()).toBe(true);
});


Given(/^User is on find owner page$/, async function () {
  expect(await homePage.findOwnerPage()).toBe(true);
});
When(/^User clicks on add owner button$/, async function () {
  await homePage.navigateToAddOwner();
});

Then(/^Owner information page should be displayed$/, async function () {
  expect(await homePage.addOwnerPage()).toBe(true);
});

When(/^User provides all the owner details$/, async function () {
  // Adding new data
  await homePage.addfirstname(data.AddOwner.firstName);
  await homePage.addLastName(data.AddOwner.lastName);
  await homePage.addAddress(data.AddOwner.address);
  await homePage.addCity(data.AddOwner.city);
  await homePage.addtelephone(data.AddOwner.telephone);
  await homePage.submitAddOwnerDetails();
});


Then(/^Owner information should be added$/, async function () {
  const name = await homePage.verifyaddOwnerNameDetails();
  const address = await homePage.verifyaddOwnerAddressDetails();
  const city = await homePage.verifyaddOwnerCityDetails();
  const telephone = await homePage.verifyaddOwnerTelephoneDetails();

  expect(name).toBe(data.AddOwner.firstName + " " + data.AddOwner.lastName)
  expect(address).toBe(data.AddOwner.address)
  expect(city).toBe(data.AddOwner.city)
  expect(telephone).toBe(data.AddOwner.telephone)

});



