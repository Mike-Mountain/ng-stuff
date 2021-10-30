import { Component, OnInit, TemplateRef } from '@angular/core';
import { UnsplashImage, UnsplashWeatherImage } from '@ng-stuff/data';
import { UnsplashService } from '../../store/unsplash.service';
import { UnsplashQuery } from '../../store/unsplash.query';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { RandomNumberPipe } from '@ng-stuff/shared-ui';

@Component({
  selector: 'uns-unsplash-gallery',
  templateUrl: './unsplash-gallery.component.html',
  styleUrls: ['./unsplash-gallery.component.scss'],
})
export class UnsplashGalleryComponent implements OnInit {
  public gallery: UnsplashWeatherImage | undefined;
  public selectedImage: string | undefined;
  public headerImage: UnsplashImage | undefined;
  public currentPage = 1;
  private randomImagePipe = new RandomNumberPipe();

  constructor(
    private unsplashService: UnsplashService,
    private unsplashQuery: UnsplashQuery,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // TODO: Set each page as a page in the store
    if (!this.unsplashQuery.getHasCache()) {
      this.unsplashService.get('', { params: { city: 'johannesburg', page: this.currentPage.toString() } }).subscribe();
    }
    this.unsplashQuery.selectAll().subscribe((gallery) => {
      this.gallery = gallery[0] as UnsplashWeatherImage;
      if (this.gallery?.images && !this.headerImage) {
        this.headerImage = this.randomImagePipe.transform(this.gallery.images);
      }
    });
  }

  openDialog(template: TemplateRef<any>, image: string) {
    this.selectedImage = image;
    this.dialog.open(template);
  }

  page(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.unsplashService.get('', {params: {city: 'johannesburg', page: this.currentPage.toString()}}).subscribe()
  }
}
