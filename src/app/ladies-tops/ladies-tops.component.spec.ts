import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesTopsComponent } from './ladies-tops.component';

describe('LadiesTopsComponent', () => {
  let component: LadiesTopsComponent;
  let fixture: ComponentFixture<LadiesTopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LadiesTopsComponent]
    });
    fixture = TestBed.createComponent(LadiesTopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
