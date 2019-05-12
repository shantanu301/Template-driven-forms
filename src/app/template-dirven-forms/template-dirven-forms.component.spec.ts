import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDirvenFormsComponent } from './template-dirven-forms.component';

describe('TemplateDirvenFormsComponent', () => {
  let component: TemplateDirvenFormsComponent;
  let fixture: ComponentFixture<TemplateDirvenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDirvenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDirvenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
