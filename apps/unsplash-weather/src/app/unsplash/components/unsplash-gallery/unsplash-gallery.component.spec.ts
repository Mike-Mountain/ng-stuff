import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsplashGalleryComponent } from './unsplash-gallery.component';

describe('UnsplashGalleryComponent', () => {
  let component: UnsplashGalleryComponent;
  let fixture: ComponentFixture<UnsplashGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsplashGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsplashGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
