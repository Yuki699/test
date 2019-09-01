import { Selector } from 'testcafe';
import { t } from 'testcafe';
import { Utils } from '../Utils/Utils';

const utils = new Utils();

export class LoginPage {
    private loginButton = Selector('#btnLogin');
    private welcomeSign = Selector('#welcome');
    private userNameInput = Selector('#txtUsername');
    private passwordInput = Selector('#txtPassword');
    private userName = 'Admin';
    private password = 'admin123';

    async putUsername(): Promise<void> {
        await t.typeText(this.userNameInput, this.userName);
    }

    async putPassword(): Promise<void> {
        await t.typeText(this.passwordInput, this.password);
    }

    async clickLoginButton(): Promise<void> {
        await t.click(this.loginButton);
    }

    async findWelcome(): Promise<Selector> {
        return await this.welcomeSign;
    }

    async login(): Promise<void> {
        this.putUsername();
        this.putPassword();
        this.clickLoginButton();
        this.findWelcome();
    }
}

