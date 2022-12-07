import { browser, element, by} from 'protractor';

describe('JOJO APP',()=>{
    // codigo de configuración
    beforeEach(()=>{
        browser.get("/");
    });
    // Prueba 1
    it("El inicio se muestra por defecto",()=>{
        expect(element(by.id("Title")).getText()).toContain("JOJO APP");
    });
    // Prueba 2
    it("El usuario puede navegar a la pestaña de login",async ()=>{
        await element(by.id("abre")).click();
        browser.driver.sleep(500);
        expect(element(by.id("abre")).getText()).toContain("login");
    });
});