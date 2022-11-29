import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {by, element} from 'protractor';
import { HomePage } from './home.page';


/**
 * 
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

 */

describe('TESTEO HOME ', () => {

  it(' El componente se debe iniciar ', () => {
    const component = new HomePage();
    expect(component).toBeDefined();    
        
  });

it('El componente está definido',()=>{
  const component = new HomePage();
  expect(component).toBeInstanceOf(HomePage);
});

});
