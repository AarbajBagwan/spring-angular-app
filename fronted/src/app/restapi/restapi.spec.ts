import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restapi } from './restapi';

describe('Restapi', () => {
  let component: Restapi;
  let fixture: ComponentFixture<Restapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
