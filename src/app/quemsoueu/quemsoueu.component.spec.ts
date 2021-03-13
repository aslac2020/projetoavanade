import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemsoueuComponent } from './quemsoueu.component';

describe('QuemsoueuComponent', () => {
  let component: QuemsoueuComponent;
  let fixture: ComponentFixture<QuemsoueuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuemsoueuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemsoueuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
