import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  clickButton() {
    return element(by.tagName('button')).click();
  }

  getDisplayMessage() {
    return element(by.className('display')).getText() as Promise<string>;
  }

  countTableRows() {
    const row = element.all(by.tagName('tbody'));
    const value = row.all(by.tagName('tr'));
    return value.count() as Promise<number>;
  }

  redirect() {
    browser.getAllWindowHandles().then((handles: string[]) => {
      browser.switchTo().window(handles[(handles.length) - 1]).then(() => {
      });
    });
  }

  clickInputtedLink(linkOption: string) {
    return element(by.linkText(linkOption)).click();
  }

}
