import tooleQA from "../pageobjects/Tool-QA.pages"


describe("Tool QA page Validation", async function () {


    it("Cheking home page title is ToolsQA Home Page", async function () {

        await browser.setTimeout({ pageLoad: 5000, implicit: 5000 });
        browser.url("https://demoqa.com/");
        await browser.maximizeWindow();
        await browser.pause(3000);
        await tooleQA.Verify_Page_Title("ToolsQA");
    })


    it("Verify Element Card Menu Options", async function () {
        await browser.setTimeout({ pageLoad: 5000, implicit: 5000 });
        browser.url("https://demoqa.com/");
        await browser.maximizeWindow();
        await browser.pause(3000);
        await tooleQA.Verify_Page_Title("ToolsQA");
        await tooleQA.elementCardClick();
        await tooleQA.Verify_Page_Title("ToolsQA");
        await tooleQA.subItemsOfElementCard();

    })

    it("Verify Text Box Input Data", async function () {
        await browser.setTimeout({ pageLoad: 5000, implicit: 5000 });
        browser.url("https://demoqa.com/");
        await browser.maximizeWindow();
        await browser.pause(3000);
        await tooleQA.Verify_Page_Title("ToolsQA");
        await tooleQA.elementCardClick();
        await tooleQA.Verify_Page_Title("ToolsQA");
        await tooleQA.ElementsOptionClick("Text Box");
        await tooleQA.Verify_Page_Title("ToolsQA");
        await browser.pause(3000);
        await tooleQA.enterTextBoxData("Naga", "vishnumahanthi.n@360logica.com", "Testing", "Testing");
        await browser.pause(3000);
        await tooleQA.getEnterTextBoxData("Naga", "vishnumahanthi.n@360logica.com", "Testing", "Testing");

    })

})