import { t } from 'testcafe';

export class TestInitialize {
    async testInitialization() {
        await t.maximizeWindow();
    }
}