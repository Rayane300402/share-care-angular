import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContainerComponent } from './about-container.component';

describe('AboutContainerComponent', () => {
  let component: AboutContainerComponent;
  let fixture: ComponentFixture<AboutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
