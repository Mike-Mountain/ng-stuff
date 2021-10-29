import { Component, OnInit, TemplateRef } from '@angular/core';
import { UnsplashWeatherImage } from '@ng-stuff/data';
import { UnsplashService } from '../../store/unsplash.service';
import { UnsplashQuery } from '../../store/unsplash.query';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'uns-unsplash-gallery',
  templateUrl: './unsplash-gallery.component.html',
  styleUrls: ['./unsplash-gallery.component.scss'],
})
export class UnsplashGalleryComponent implements OnInit {
  public gallery: UnsplashWeatherImage | undefined;
  public selectedImage: string | undefined;

  constructor(
    private unsplashService: UnsplashService,
    private unsplashQuery: UnsplashQuery,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const localGallery = localStorage.getItem('unsplashImage');
    if (localGallery) {
      this.gallery = JSON.parse(localGallery);
    } else {
      this.unsplashService.get('johannesburg').subscribe();
      this.unsplashQuery.selectAll().subscribe((gallery) => {
        localStorage.setItem('unsplashImage', JSON.stringify(gallery[0]));
        localStorage.setItem('unsplashTime', JSON.stringify(new Date()));
        this.gallery = gallery[0] as UnsplashWeatherImage;
      });
    }

    // this.unsplashService.get('johannesburg').subscribe();
    // this.unsplashQuery.selectAll().subscribe((gallery) => {
    //   localStorage.setItem('unsplashImage', JSON.stringify(gallery[0]));
    //   localStorage.setItem('unsplashTime', JSON.stringify(new Date()));
    //   this.gallery = gallery[0] as UnsplashWeatherImage;
    // });
  }

  openDialog(template: TemplateRef<any>, image: string) {
    this.selectedImage = image;
    this.dialog.open(template);
  }
}
