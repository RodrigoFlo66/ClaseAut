import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://comicnexus.onrender.com/');
  
  await page.getByPlaceholder('Nombre de usuario').click();
  await page.getByPlaceholder('Nombre de usuario').fill('ComicNexus');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('ComicNexus123');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
 
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('link', { name: 'Panel administrador' }).click();
  await page.getByRole('button', { name: 'Editar cómic' }).click();
  await page.locator('li').filter({ hasText: 'AquamanSeleccionar' }).getByRole('button').click();
  await page.getByPlaceholder('Ingrese el título del cómic').click();
  const tituloDelComic = await page.getByPlaceholder('Ingrese el título del cómic').getAttribute('value');

    // Comparar el texto con 'Aquaman'
    if (tituloDelComic === 'Aquaman') {
      console.log('El título del cómic es Aquaman. Prueba exitosa.');
    } else {
      console.error('El título del cómic no es Aquaman. La prueba ha fallado.');
    }
    // Cerrar la página al finalizar la prueba
  await page.close();

});