import { Component, OnInit } from '@angular/core';
import { IPicture } from './../../../shared/model/picture';
import { PictureService } from './../../../shared/services/picture.service';


@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {

  pictures: IPicture[];

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    this.getPictures();
  }

  getPictures(): void {
    this.pictureService.getPictures()
      .subscribe(pictures => this.pictures = pictures);
  }

}
