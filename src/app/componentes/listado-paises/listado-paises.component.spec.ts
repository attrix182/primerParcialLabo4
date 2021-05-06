import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPaisesComponent } from './listado-paises.component';

describe('ListadoPaisesComponent', () => {
  let component: ListadoPaisesComponent;
  let fixture: ComponentFixture<ListadoPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
