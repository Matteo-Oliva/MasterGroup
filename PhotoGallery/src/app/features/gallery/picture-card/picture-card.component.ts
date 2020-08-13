import { IPicture } from './../../../shared/model/picture';
import { Component, OnInit, Input } from '@angular/core';

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

  soldText(picture: IPicture): string {
    return picture.isSold ? 'Venduta' : 'Disponibile';
  }

  isSold(picture: IPicture): any {
    return {
      'Venduta': picture.isSold,
      'Disponibile': !picture.isSold
    };
  }

}
