import { test, expect } from '@playwright/test';

test('Register Menu', async ({ browser }) => {
  
  const context = await browser.newContext({
    httpCredentials: {
      username: 'jkt',
      password: 'RsonSmW7UgLUKm9',
    },
  });

  const page = await context.newPage();

  await page.goto('https://auction.lelangmobilku.co.id/login', { waitUntil: 'domcontentloaded' });

  // Klik Daftar Sekarang
  const daftarLink = page.getByRole('link', { name: 'Daftar Sekarang' });
  await daftarLink.waitFor({ state: 'visible' });
  await daftarLink.click();

  // Isi form pribadi
  const namaDepan = page.getByRole('textbox', { name: 'Nama Depan' });
  await namaDepan.waitFor({ state: 'visible' });
  await namaDepan.fill('tester');

  const namaBelakang = page.getByRole('textbox', { name: 'Nama Belakang' });
  await namaBelakang.waitFor({ state: 'visible' });
  await namaBelakang.fill('qa');

  const tempatLahir = page.getByRole('textbox', { name: 'Tempat Lahir' });
  await tempatLahir.waitFor({ state: 'visible' });
  await tempatLahir.fill('Jakarta');

  // Tanggal lahir (tanggal + tahun)
  const tanggalInput = page.getByRole('textbox', { name: 'DD/MM/YYYY' }).first();
  await tanggalInput.waitFor({ state: 'visible' });
  await tanggalInput.click();
  await page.getByText('10').click();
  await page.getByRole('button', { name: 'Open years overlay' }).click();
  await page.getByText('Cancel').click();
  await tanggalInput.click();
  await page.getByText('10').click();
  await page.getByText('Select').click();

  // Nomor KTP
  const ktpInput = page.getByRole('textbox', { name: 'Nomor KTP' });
  await ktpInput.waitFor({ state: 'visible' });
  await ktpInput.fill('3111111111111111');

  // Upload File
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator("//button[normalize-space(.)='Upload File']").click(),
  ]);
  await fileChooser.setFiles('test-data/animeID.jpg');

  // Centang checkbox
  await page.getByRole('checkbox').check();
  await page.getByRole('checkbox').check();

  // Pilih alamat
  // const provinsi = page.getByRole('listbox').first();
  // await provinsi.click();
  // await page.getByRole('option', { name: 'DKI Jakarta' }).click();

  // const kota = page.getByRole('listbox').nth(1);
  // await kota.click();
  // await page.getByRole('option', { name: 'Kota Jakarta Timur' }).click();

  await page.getByRole('listbox').first().click();
  await page.getByRole('option', { name: 'DKI Jakarta' }).click();

  await page.getByRole('listbox').nth(1).click();
  await page.getByRole('option', { name: 'Kota Jakarta Timur' }).click();

  // Isi domisili
  const domisili = page.locator('textarea').first();
  await domisili.fill('test domisili');

  // Nomor Telepon
  const telepon = page.getByRole('textbox', { name: 'Nomor Telepon', exact: true });
  await telepon.fill('081111111118');

  // Pekerjaan, kendaraan, tujuan
  await page.getByRole('listbox').nth(2).click();
  await page.getByRole('option', { name: 'Wiraswasta' }).click();
  await page.getByRole('listbox').nth(3).click();
  await page.getByRole('option', { name: 'Mobil', exact: true }).click();
  await page.getByRole('listbox').nth(4).click();
  await page.getByRole('option', { name: 'Kendaraan Penumpang' }).click();
  await page.getByRole('listbox').nth(5).click();
  await page.getByRole('option', { name: 'Pribadi' }).click();

  // Password dan email
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi Baru' }).fill('test12345');
  await page.getByRole('textbox', { name: 'Masukkan Ulang Kata Sandi Baru' }).fill('test12345');
  await page.getByRole('textbox', { name: 'Email' }).fill('test.qa01@testmail.com');

  // Klik Selanjutnya
  await page.getByRole('button', { name: 'Selanjutnya' }).click();


  //tab data pembayaran
  await page.waitForSelector('text=Data Pembayaran', { state: 'visible' });
  await page.getByText('Data Pembayaran').click();

  //Isi data rekening
  await page.getByRole('textbox', { name: 'Nomor Rekening' }).click();
  const namaPemilik = page.getByRole('textbox', { name: 'Nama Pemilik Rekening' });
  await namaPemilik.waitFor({ state: 'visible' });
  await namaPemilik.fill('tester');

// Ambil locator untuk textbox "Nomor Rekening"
//const rekeningInput = page.getByRole('textbox', { name: 'Nomor Rekening' });

// Tunggu elemen muncul dan terlihat
//await rekeningInput.waitFor({ state: 'visible' });

// Klik setelah elemen siap
//await rekeningInput.click();

 // Isi nomor rekening
 await page.getByRole('textbox', { name: 'Nomor Rekening' }).click();
 await page.getByRole('textbox', { name: 'Nomor Rekening' }).fill('1234');

  // Pilih bank
  const bankList = page.getByRole('listbox').first();
  await bankList.click();
  await page.getByRole('option', { name: 'BANK BCA', exact: true }).click();

  // Nama pemilik rekening
  await page.getByRole('textbox', { name: 'Nama Pemilik Rekening' }).fill('tester');

  // Jenis pendapatan
  await page.getByRole('listbox').nth(1).click();
  await page.getByRole('option', { name: 'Gaji/Upah' }).click();

  // Metode pembayaran
  await page.getByRole('listbox').nth(2).click();
  await page.getByRole('option', { name: 'Bank Transfer' }).click();

  // Klik Daftar
  await page.getByRole('button', { name: 'Daftar' }).click();

  // ✅ Tunggu konfirmasi atau redirect
  await page.waitForLoadState('networkidle');
});