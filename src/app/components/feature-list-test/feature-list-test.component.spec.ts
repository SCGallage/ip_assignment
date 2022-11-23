import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureListTestComponent } from './feature-list-test.component';

describe('FeatureListTestComponent', () => {
  let component: FeatureListTestComponent;
  let fixture: ComponentFixture<FeatureListTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureListTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
