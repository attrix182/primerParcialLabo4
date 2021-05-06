import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmContainerComponent } from './abm-container.component';

describe('AbmContainerComponent', () => {
  let component: AbmContainerComponent;
  let fixture: ComponentFixture<AbmContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
