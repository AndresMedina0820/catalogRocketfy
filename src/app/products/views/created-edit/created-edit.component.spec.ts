import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedEditComponent } from './created-edit.component';

describe('CreatedEditComponent', () => {
  let component: CreatedEditComponent;
  let fixture: ComponentFixture<CreatedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
