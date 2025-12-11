import { test, expect } from '@playwright/test';

test('test', async ({ browser }) => {

  // di bypass basic auth
  const context = await browser.newContext({
    httpCredentials: {
      username: 'jkt', 
      password: 'RsonSmW7UgLUKm9'
    }
  });

  const page = await context.newPage();

  // lanjut halaman login aplikasi
  await page.goto('https://auction.lelangmobilku.co.id/login');

  await page.getByRole('link', { name: 'Daftar Sekarang' }).click();
  await page.getByRole('textbox', { name: 'Nama Depan' }).click();
  await page.getByRole('textbox', { name: 'Nama Depan' }).fill('tester');
  await page.getByRole('textbox', { name: 'Nama Belakang' }).click();
  await page.getByRole('textbox', { name: 'Nama Belakang' }).fill('qa');
  await page.getByRole('textbox', { name: 'Tempat Lahir' }).click();
  await page.getByRole('textbox', { name: 'Tempat Lahir' }).fill('Jakarta');
  await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).first().click();
  await page.getByText('10').click();
  await page.getByRole('button', { name: 'Open years overlay' }).click();
  await page.getByText('Cancel').click();
  await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).first().click();
  await page.getByText('10').click();
  await page.getByText('Select').click();
  await page.getByRole('textbox', { name: 'Nomor KTP' }).click();
  await page.getByRole('textbox', { name: 'Nomor KTP' }).fill('1111111111111114');
  await page.getByRole('button', { name: 'Upload File' }).click();
  //await page.pause();
 const [fileChooser] = await Promise.all([
  page.waitForEvent('filechooser'),
  page.locator("//button[normalize-space(.)='Upload File']").click(),
]);

await fileChooser.setFiles('test-data/animeID.jpg');
  await page.getByRole('checkbox').check();
  await page.getByRole('checkbox').check();
  await page.getByRole('listbox').first().click();
  await page.getByRole('option', { name: 'DKI Jakarta' }).click();
  await page.getByRole('listbox').nth(1).click();
  await page.getByRole('option', { name: 'Kota Jakarta Timur' }).click();
  await page.locator('textarea').first().fill('test domisili');
  await page.getByRole('textbox', { name: 'Nomor Telepon', exact: true }).fill('081111111118');
  await page.getByRole('listbox').nth(2).click();
  await page.getByRole('option', { name: 'Wiraswasta' }).click();
  await page.getByRole('listbox').nth(3).click();
  await page.getByRole('option', { name: 'Mobil', exact: true }).click();
  await page.getByRole('listbox').nth(4).click();
  await page.getByRole('option', { name: 'Kendaraan Penumpang' }).click();
  await page.getByRole('listbox').nth(5).click();
  await page.getByRole('option', { name: 'Pribadi' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi Baru' }).fill('test12345');
  await page.getByRole('textbox', { name: 'Masukkan Ulang Kata Sandi Baru' }).fill('test12345');
  await page.getByRole('textbox', { name: 'Email' }).fill('test.qa1@testmail.com');
  await page.getByRole('button', { name: 'Selanjutnya' }).click();
  await page.getByRole('listbox').nth(1).click();
  await page.getByRole('option', { name: 'Kab. Adm. Kep. Seribu' }).click();
  await page.getByRole('button', { name: 'Selanjutnya' }).click();
  await page.waitForSelector("//input[@placeholder='Nomor Rekening']");
  await page.getByRole('textbox', { name: 'Nomor Rekening' }).fill('1234');
  await page.getByRole('listbox').first().click();
  await page.getByRole('option', { name: 'BANK BCA', exact: true }).click();
  await page.getByRole('textbox', { name: 'Nama Pemilik Rekening' }).fill('tester');
  await page.getByRole('listbox').nth(1).click();
  await page.getByRole('option', { name: 'Gaji/Upah' }).click();
  await page.getByRole('listbox').nth(2).click();
  await page.getByRole('option', { name: 'Bank Transfer' }).click();
  await page.getByRole('button', { name: 'Daftar' }).click();
});