import { test, expect } from '@playwright/test';

test('test', async ({ browser }) => {

  const context = await browser.newContext({
    httpCredentials: {
      username: 'jkt',
      password: 'RsonSmW7UgLUKm9'
    }
  });

  const page = await context.newPage();

  await page.goto('https://auction.lelangmobilku.co.id/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('tester.qa62@testmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test123456');
  // automation pasti error Login karena muncul reCaptcha ga bisa dibypass harus dimatikan reCaptchanya hehehe
  await page.locator('iframe[name="a-ovkw1hri1x4l"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('#remember_me').check();
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.pause();
  await page.getByRole('link', { name: 'Deposit' }).click();
});
