import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OlvidoPasswordPage } from './olvido-password.page';

describe('OlvidoPasswordPage', () => {
  let component: OlvidoPasswordPage;
  let fixture: ComponentFixture<OlvidoPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidoPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OlvidoPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
