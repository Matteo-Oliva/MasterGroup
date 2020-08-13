import { Observable } from 'rxjs';
import { IPicture } from './../../../shared/model/picture';
import { PICTURES } from './../../../shared/model/mock-data/mock-pictures';
import { PictureService } from './../../../shared/services/picture.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pictures: IPicture;
  constructor(private pictureService:PictureService) { }

  ngOnInit(): void {
    this.getPictures();
  }

  getPictures():void{
    this.pictureService.getMostVoted(4)
    .subscribe(pictures => this.pictures = pictures)
  }

}
