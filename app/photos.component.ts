import { Component, OnInit } from '@angular/core';

import { Photo } from './photo';
//import { PhotoComponent } from './photo.component';
import { PhotoService } from './photo.service';


@Component({
  selector: 'my-photos',
  templateUrl: 'app/photos.component.html',
  providers: [PhotoService]
})

export class PhotosComponent implements OnInit {

  photos: Photo[];
  mode = 'Observable';

  constructor(
    private _photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this._photoService.getPhotos().subscribe(photos => this.photos = photos);
  }

}