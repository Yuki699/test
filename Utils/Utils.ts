import { Selector } from 'testcafe';
import { t } from 'testcafe';

export class Utils {
    async typeText(selector: Selector, text: string): Promise<void> {
        await t.typeText(selector, text).catch(error => {
        });
    }
}