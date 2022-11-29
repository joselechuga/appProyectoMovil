import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

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

  it(' 1- El componente se debe iniciar ', () => {
    const component = new HomePage();
    expect(component).toBeDefined();    
    expect(component).toBeInstanceOf(HomePage);    
  });

  it('2- El  ', () => {
    const component = new HomePage();
   
  });
});
