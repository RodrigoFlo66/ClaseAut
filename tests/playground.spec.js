// import hexRGB from 'hex-rgb';
// import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');

test.afterEach( async ({ page }) => {
  await page.close();
});

test.describe('Pruebas de Sample app', () => {
  test('Verificar que login muestre error sin ningun usuario ', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/');
    await page.getByRole('link', { name: 'Sample App' }).click();
    await page.getByRole('button', { name: 'Log In' }).click();
    const errorMessage = await page.getByText('Invalid username/password');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveCSS('color', 'rgb(220, 53, 69)');
    //rgb(220, 53, 69)
  });

  test('Verificar que login funcione con una contraseña valida', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/');
    await page.getByRole('link', { name: 'Sample App' }).click();
    await page.waitForLoadState('domcontentloaded');
    await page.getByPlaceholder('User Name').fill('pepito');
    await page.locator('input[name="Password"]').fill('pwd');
    await page.getByRole('button', { name: 'Log In' }).click();
    const successMessage = await page.locator('#loginstatus');
    await expect(successMessage).toHaveClass('text-success');
    await expect(successMessage).toHaveCSS('color', 'rgb(40, 167, 69)');
  });
});