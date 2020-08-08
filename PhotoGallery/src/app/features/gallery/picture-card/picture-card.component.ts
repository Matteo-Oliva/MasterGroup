import { Component, Input, OnInit } from '@angular/core';
import { IPicture } from './../../../shared/model/picture';
import { PictureService } from './../../../shared/services/picture.service';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent implements OnInit {

  @Input() picture: IPicture;

  constructor() { }

  ngOnInit(): void {
  }

  soldItText(picture: IPicture): string {
    return picture.isSoldIt ? 'Sold-It' : 'Not-Sold';
  }

  isSoldIt(picture: IPicture): any {
    return {
      'sold-it': picture.isSoldIt,
      'not-sold': !picture.isSoldIt
    };
  }

}
