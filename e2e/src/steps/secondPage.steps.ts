import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import {SecondPage} from '../pages/secondPage.po';


let page: SecondPage;

Before(() => {
  page = new SecondPage();
});

Given(/^I am on the second page$/, async () => {
  await page.navigateTo();
});

Then(/^I should see a paragraph$/, async () => {
  expect(await page.grabParagraphText()).to.equal('I am on page-2!');
});
