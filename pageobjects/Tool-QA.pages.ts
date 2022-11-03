import Page from "./page"

class Tool_QA extends Page {

    private get elementCardPath() {
        return $("h5=Elements")
    }
    private get elementMenuOptions() {
        return $$("//div[@class='left-pannel']/div[1]/div[1]/div/ul/li");
    }
    public get elementExpandButton() {
        return $("(//span[contains(@class,'group-header')])[1]")
    }
    public get fullNameTextBox() {
        return $("#userName")
    }
    public get emailTextBox() {
        return $("#userEmail")
    }
    public get currentAddressTextBox() {
        return $("#currentAddress")
    }
    public get permanentAddressTextBox() {
        return $("#permanentAddress")
    }
    public get submitButtonClicked() {
        return $("#submit")
    }
    public get getFullNameText() {
        return $("#name")
    }
    public get getEmailText() {
        return $("#email")
    }
    public get getCurrentAddressText() {
        return $("//p[@id='currentAddress']")
    }
    public get getPermanentAddressText() {
        return $("//p[@id='permanentAddress']")
    }
    public async Verify_Page_Title(expectedTitle: string) {
        browser.pause(5000);
        let actualTitle = await browser.getTitle();
        expect(expectedTitle).toStrictEqual(actualTitle);
        console.log("Title Validated");
    }
    public async elementCardClick() {
        console.log("Clicking on the Element Card");
        await this.elementCardPath.scrollIntoView();
        await this.elementCardPath.click();
    }
    public async subItemsOfElementCard() {
        await browser.pause(3000);
        await this.ElementsOptionList("Text Box");
        await this.ElementsOptionList("Check Box");
        await browser.pause(3000);
        await  this.elementExpandButton.click();
        await browser.pause(3000);
        var TextBoxStatus: boolean = await this.ElementsOptionList("Text Box");
        var CheckBoxStatus: boolean = await this.ElementsOptionList("Check Box");
        
        expect(TextBoxStatus).toEqual(false);
        expect(CheckBoxStatus).toEqual(false);
    }
    public async ElementsOptionList(expectedOption: string) {
        const count = await (this.elementMenuOptions).length;
        console.log("Element Count:-----" + count);
        let flag = false;
        for (let i: number = 0; i < count; i++) {
            const elementValue: any = await this.elementMenuOptions[i].getText();
            console.log("Actual Value = " + elementValue);
            if (elementValue === expectedOption) {
                flag = true;
                break;
            }
        }
        
 
        return flag;
    }
    public async ElementsOptionClick(expectedOption: string) {
        
        const count = await (this.elementMenuOptions).length;
        for (let i: number = 0; i < count; i++) {
            const elementValue: any = await this.elementMenuOptions[i].getText();
            console.log("Actual value = " + elementValue);
            if (elementValue === expectedOption) {
                await (await this.elementMenuOptions[i]).isFocused();
                (await this.elementMenuOptions[i]).click();
                break;
            }
        }
    }
    public async enterTextBoxData(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.fullNameTextBox.scrollIntoView();
        await this.fullNameTextBox.setValue(fullName);
        await this.emailTextBox.addValue(email);
        await this.currentAddressTextBox.addValue(currentAddress);
        await this.permanentAddressTextBox.addValue(currentAddress);
        await this.submitButtonClicked.click();
    }
    public async getEnterTextBoxData(expectedFullName: string, expectedEmai: string, expectedCurrentAddress: string, expectedPermanentAddress: string) {
        let name = await this.getFullNameText.getText();
        let email = await this.getEmailText.getText();
        let currentAddress = await this.getCurrentAddressText.getText();
        let permanentAddress = await this.getPermanentAddressText.getText();
        
        let actualName: string[] = name.split(":");
        let actualEmail: string[] = email.split(":");
        let actualCurrentAddress: string[] = currentAddress.split(":");
        let actualPermanentAddress: string[] = permanentAddress.split(":");
        
        expect(actualName[1]).toEqual(expectedFullName);
        expect(actualEmail[1]).toEqual(expectedEmai);
        expect(actualCurrentAddress[1]).toEqual(expectedCurrentAddress);
        expect(actualPermanentAddress[1]).toEqual(expectedPermanentAddress);
    }
}
export default new Tool_QA();