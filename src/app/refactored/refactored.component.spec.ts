import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactoredComponent } from './refactored.component';

describe('RefactoredComponent', () => {
  let component: RefactoredComponent;
  let fixture: ComponentFixture<RefactoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefactoredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefactoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
