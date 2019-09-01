import { LoginPage } from '../PageObjects/LoginPageObject';
import { TestInitialize } from '../Utils/TestInitialize';

const loginPage = new LoginPage();
const testInitialization = new TestInitialize();

fixture(`orange page`)
    .page `https://opensource-demo.orangehrmlive.com/index.php/auth/login`
    .beforeEach(async t => {
        await testInitialization.testInitialization();
    })

    test('Login test', async t => {
        console.log('test');
        await loginPage.putUsername();
        await loginPage.putPassword();
        await loginPage.clickLoginButton();
        let welcomeElement = await loginPage.findWelcome();
        await t.expect(welcomeElement !== undefined).ok('Welcome element found')
    });

