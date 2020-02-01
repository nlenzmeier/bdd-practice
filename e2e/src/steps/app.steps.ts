import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('BDD Test');
});

When(/^I click the Display Text button$/, async () => {
  await page.clickButton();
});

Then(/^I should see Hi there!$/, async () => {
  expect(await page.getDisplayMessage()).to.equal('Hi there!');
})
