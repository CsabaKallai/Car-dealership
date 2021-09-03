import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelIComponent } from './model-i.component';

describe('ModelIComponent', () => {
  let component: ModelIComponent;
  let fixture: ComponentFixture<ModelIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
