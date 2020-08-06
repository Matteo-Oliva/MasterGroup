import { PICTURES } from './../../../shared/model/mock-data/mock-pictures';
import { IPicture } from './../../../shared/model/picture';
import { Component, OnInit } from '@angular/core';


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
