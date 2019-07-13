import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecaOGameComponent } from './conheca-o-game.component';

describe('ConhecaOGameComponent', () => {
  let component: ConhecaOGameComponent;
  let fixture: ComponentFixture<ConhecaOGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConhecaOGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecaOGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
