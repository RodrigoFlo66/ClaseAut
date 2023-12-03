const {chromium, expect } = require('@playwright/test');
const { setDefaultTimeout, BeforeAll, AfterAll, Given, When, Then, After, Before } = require('@cucumber/cucumber');

let browser;
let page;
setDefaultTimeout(60*1000);

Before(async () => {
    page = await browser.newPage();
});
BeforeAll(async () => {
    browser = await chromium.launch({headless: false});
});
After(async () => {
    await page.close();
});
AfterAll(async () => {
    await browser.close();
});
    Given('El administrador inicia sesión', async function () {
        await page.goto('https://comicnexus.onrender.com/');
        await page.getByPlaceholder('Nombre de usuario').fill('ComicNexus');
        await page.getByPlaceholder('Contraseña').fill('ComicNexus123');
        await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
        return Promise.resolve(); 
    });
    

    When('Se dirige a panel de administrador y Seleciona el comic Aquaman para editar', async function () {
        await page.getByRole('button', { name: '' }).click();
        await page.getByRole('link', { name: 'Panel administrador' }).click();
        await page.getByRole('button', { name: 'Editar cómic' }).click();
        await page.locator('li').filter({ hasText: 'AquamanSeleccionar' }).getByRole('button').click();
        await page.waitForTimeout(2000); 
    return Promise.resolve();
    });      
    
    Then('Se obtiene el valor del titulo y se compara con Aquaman', async function () {
        try {
            const tituloDelComic = await page.getByPlaceholder('Ingrese el título del cómic').getAttribute('value');
            await expect(tituloDelComic).toBe('Aquaman');
            console.log('El título del cómic es Aquaman.');
            return Promise.resolve();
        } catch (error) {
            console.error('Los datos no corresponden al comic Aquaman. La prueba ha fallado.');
            throw error; 
        }
    });
    Then('Se obtiene el valor del autor y se compara con el autor esperado', async function () {
        try {
            const autoresDelComic = await page.getByPlaceholder('Ingrese los autores').getAttribute('value');
            await expect(autoresDelComic).toBe('DC Comics');
            console.log('El autor del cómic es DC Comics.');
            return Promise.resolve();
        } catch (error) {
            console.error('Error al obtener y comparar los autores del cómic.');
            throw error;
        }
    });
    Then('Se obtiene el valor de la fecha de publicación y se compara con la fecha esperada', async function () {
        try {
            const fechaPublicacion = await page.$eval('#fechaPublicacion', input => input.value);
            await expect(fechaPublicacion).toBe('2023-11-15');
            console.log('La fecha de publicación del cómic es 15/11/2023.');
            return Promise.resolve();
        } catch (error) {
            console.error('Error al obtener y comparar la fecha de publicación del cómic.');
            throw error;
        }
    });
    
    Then('Se obtiene el valor de la sinopsis y se compara con la sinopsis esperada', async function () {
        try {
            const sinopsisDelComic = await page.$eval('#sinopsis', textarea => textarea.value);
            await expect(sinopsisDelComic).toBe('Mitad humano, mitad atlante, Arthur Curry es un habitante del poderoso reino subacuático de la Atlántida criado por un hombre humano.');
            console.log('La sinopsis del cómic es: Mitad humano, mitad atlante, Arthur Curry es un habitante del poderoso reino subacuático de la Atlántida criado por un hombre humano.');
            console.log('¡¡Prueba exitosa!!');
            return Promise.resolve();
        } catch (error) {
            console.error('Error al obtener y comparar la sinopsis del cómic.');
            throw error;
        }
    });
      

