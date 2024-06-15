import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmailSentComponent } from './dialog-email-sent.component';

describe('DialogEmailSentComponent', () => {
  let component: DialogEmailSentComponent;
  let fixture: ComponentFixture<DialogEmailSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEmailSentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEmailSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
