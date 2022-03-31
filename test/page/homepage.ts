import ApplicationPage from "./ApplicationPage"


class HomePage extends ApplicationPage {

    constructor() {
        super()
    }
    async navigateToFindOwner() {
        await (await $('//*[@id="main-navbar"]/ul/li[3]/a')).click()
        await browser.pause(1000);
    }
    async navigateToAddOwner() {
        let addOwnerButton = await $('/html/body/div/div/a')
        addOwnerButton.click()
        await browser.pause(1000);
    }
    
    async AddOwner() {
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
}
const homePage = new HomePage();
export { homePage }
