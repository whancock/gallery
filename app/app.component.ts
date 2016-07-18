import { Component } from '@angular/core';
import {PhotosComponent} from './photos.component';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: '<h1>HEADER GOES HERE</h1><my-photos></my-photos>',
  directives: [
    PhotosComponent
  ]
})
export class AppComponent { }
