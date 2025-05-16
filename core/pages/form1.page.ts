import { DATA_PATTERN } from "../enums/dataPattern.enum";
import { loadJson } from "../utilities/data.util";
import { Page, expect } from '@playwright/test';

export default class Form1 {
    private readonly _page: Page;
    
    readonly _textTitle = "div.py-2 h5";
    readonly _textDescription = "#loremText";
    readonly _email = "#email";
    readonly _password = "#password";
    readonly _checkBox = "#exampleCheck1";
    readonly _submitBtn = "button[type=\"Submit\"]";
    
    private readonly _dataTest = loadJson(`./core/data/form1`);

    constructor (page: Page) {
        this._page = page;
    }

    public async openForm1 (): Promise<void> {
        await this._page.goto(this._dataTest.url);
        await expect(this._page).toHaveTitle(this._dataTest.pageTitle);
    }

    public async verifyContentTitle() {
        await expect(this._page.locator(this._textTitle)).
            toHaveText(this._dataTest.textTitle);
    }

    public async verifyContentDescription() {
        await expect(this._page.locator(this._textDescription)).
            toHaveText(this._dataTest.textDescription);
    }

    public async typeEmail() {
        await this._page.locator(this._email).
            fill((DATA_PATTERN.EMAIL_ADDRESS).
                replace("%generic-id%", (new Date().getTime()).toString()));
    }

    public async typePassword() {
        await this._page.locator(this._password).
            fill((DATA_PATTERN.PASSWORD).
                replace("%generoc-id%", (new Date().getTime()).toString()));
    }

    public async checkMeOut() {
        await this._page.locator(this._checkBox).click(); }

    public async submitForm() {
        await this._page.locator(this._submitBtn).click(); }
}