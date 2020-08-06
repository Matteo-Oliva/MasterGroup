import { PictureService } from './../../shared/services/picture.service';
import { IPicture } from './../../../shared/model/picture';
import { PICTURES } from './../../../shared/model/mock-data/mock-pictures';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() picture: IPicture;
  pictures : IPicture[];
  selectedPicture: IPicture;
  
  
  constructor(private pictureService:PictureService) { }

  ngOnInit(): void {
    this.getPictures();
  }

  isSold(picture: IPicture): string {
    return picture.status ? 'Venduto' : 'Disponibile';
  }

  soldedClass(picture: IPicture): any {
    return { solded: picture.status, 'non-venduto': !picture.status };
  }

  getPictures():void {
    this.pictureService.getPictures()
    .subscribe(pictures => this.pictures = pictures);
  }
    
  }
  


