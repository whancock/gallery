import { Component } from '@angular/core';
import { Photo } from './photo';

@Component({
  selector: 'photo',
  inputs: ['photo'],
  template: `
  	<h1>photo title</h1>
  	<img src="{{photo.url}}" />
	`
})
export class PhotoComponent { }