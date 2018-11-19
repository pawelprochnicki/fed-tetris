import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiscoreComponent } from './hiscore.component';

describe('HiscoreComponent', () => {
  let component: HiscoreComponent;
  let fixture: ComponentFixture<HiscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
