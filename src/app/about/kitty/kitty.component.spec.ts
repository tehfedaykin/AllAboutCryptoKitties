import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittyComponent } from './kitty.component';

describe('KittyComponent', () => {
  let component: KittyComponent;
  let fixture: ComponentFixture<KittyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
