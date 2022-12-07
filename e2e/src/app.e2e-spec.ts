import { by, element } from 'protractor';
import { AppPage } from './app.po';


describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Visitando Page Inicio', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Menu');
  });

  it('se muestra el texto del inicio', () => {
    page.navigateTo();
    expect(element(by.id("home")).click());
  });
});
