const { Builder, By } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
jest.setTimeout(1000 * 60 * 5); // 5 minuter
let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async () => {
    await driver.quit();
});

test('Efter push ska toppen av stacken vara "Apelsin" (failar med flit)', async () => {
    const pushButton = await driver.findElement(By.id('push'));
    await pushButton.click();

    const alert = await driver.switchTo().alert();
    await alert.sendKeys("Banan");
    await alert.accept();

    const top = await driver.findElement(By.id('top_of_stack')).getText();
    expect(top).toBe("Banan");
});