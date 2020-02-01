import { browser, by, element } from 'protractor';

export class SecondPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/page-2') as Promise<any>;
  }

  grabParagraphText() {
    return element(by.className('success')).getText() as Promise<string>;
  }
}
