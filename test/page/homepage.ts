import ApplicationPage from "./ApplicationPage"
import { realpathSync } from "fs";

const selectors={
    findownerbutton:'//*[@id="main-navbar"]/ul/li[3]/a',
    firstname:'//*[@id="firstName"]',
    lastname:'//*[@id="lastName"]',
    address:'//*[@id="address"]',
    city:'//*[@id="city"]',
    telephone:'//*[@id="telephone"]',
    addownersumbmitbutton:'//*[@id="add-owner-form"]/div[2]/div/button',
    navigatetofindowner:'//*[@id="main-navbar"]/ul/li[3]/a',
    navigatetoaddowner:'/html/body/div/div/a',
    addownerbutton:'//*[@id="add-owner-form"]/div[2]/div/button'

}
class HomePage extends ApplicationPage {

    constructor() {
        super()
        selectors;
        
    }

    async addfirstname(firstnamevalue)
     {
        const firstname = await $('//*[@id="firstName"]');
        firstname.setValue(firstnamevalue);
    } 

    async addLastName(lastnamevalue)
     {
        const lastname = await $('//*[@id="lastName"]');
        lastname.setValue(lastnamevalue);
    }

    async addAddress(addressvalue)
     {
        const address = await $('//*[@id="address"]');
        address.setValue(addressvalue);
    }

    async addCity(cityvalue) 
    {
        const city = await $('//*[@id="city"]');
        city.setValue(cityvalue);
    }

    async addtelephone(telephonevalue) 
    {
        const telephone = await $('//*[@id="telephone"]');
        telephone.setValue(telephonevalue);
        await browser.pause(2000);
    }

    async submitAddOwnerDetails() 
    {
        const addownerbutton = await $('//*[@id="add-owner-form"]/div[2]/div/button');
        addownerbutton.click();
        await browser.pause(2000);
    }

    
    async navigateToFindOwner() 
    {
        await (await $('//*[@id="main-navbar"]/ul/li[3]/a')).click()
        await browser.pause(1000);
    }
    async navigateToAddOwner()
     {
        const addOwnerButton = await $('/html/body/div/div/a')
        addOwnerButton.click()
        await browser.pause(1000);
    }
    
    async AddOwner() 
    {
        const buttonClick = await $('//*[@id="add-owner-form"]/div[2]/div/button')
        buttonClick.click();
        await browser.pause(1000)
    }

    async checkOwnerInformationExists(){
        let addOwnerInfo = await $('/html/body/div/div/table[1]')
        let ISDispalyed= addOwnerInfo.isDisplayed();
        console.log("ISDispalyed? "+ ISDispalyed)
        return ISDispalyed;
    }

    async findOwnerPage() {
        let findOwnerPage = await $('div.container.xd-container')
        let isDisplayed=findOwnerPage.isDisplayed();
        console.log("ISDispalyed? "+ isDisplayed)
        return isDisplayed;
    }

    //div.container-fluid

    async addOwnerPage() {
        let addOwnerPage = await $('div.container-fluid')
        let isDisplayed=addOwnerPage.isDisplayed();
        console.log("ISDispalyed? "+ isDisplayed)
        return isDisplayed;
    }

     public async verifyaddOwnerNameDetails()
     {
     let name = await (await (await $('/html/body/div/div/table[1]/tbody/tr[1]/td')).getText())
     return name;
     }
     public async verifyaddOwnerAddressDetails()
     {
        let address=await $('/html/body/div/div/table[1]/tbody/tr[2]/td').getText();
        return address;
     }
     public async verifyaddOwnerCityDetails()
     {
        let city=await $('/html/body/div/div/table[1]/tbody/tr[3]/td').getText();
        return city;
     }
     public async verifyaddOwnerTelephoneDetails()
     {
        let telephone=await $('/html/body/div/div/table[1]/tbody/tr[4]/td').getText();  
        return telephone;
     }
}


const homePage = new HomePage();
export { homePage }
