import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContainerComponent } from './blog-container.component';

describe('BlogContainerComponent', () => {
  let component: BlogContainerComponent;
  let fixture: ComponentFixture<BlogContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
