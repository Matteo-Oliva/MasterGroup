import { Component, OnInit } from '@angular/core';
import { IPicture } from './../../../shared/model/picture';
import { PICTURES } from './../../../shared/model/mock-data/mock-pictures';


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {

  pictures = PICTURES;

  constructor() { }

  ngOnInit(): void {
  }

}
