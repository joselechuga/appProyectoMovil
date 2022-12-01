import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  
  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }

  getParagraphText() {
    return element(by.css('app-inicio h2')).getText();
  }
}
