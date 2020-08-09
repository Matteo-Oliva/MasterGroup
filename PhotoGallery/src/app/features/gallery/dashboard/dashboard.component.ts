import { Component, OnInit } from '@angular/core';
import { PictureService } from './../../../shared/services/picture.service';
import { PICTURES } from './../../../shared/model/mock-data/mock-pictures';
import { Observable } from 'rxjs';
import { IPicture } from 'src/app/shared/model/picture';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pictures$: Observable<IPicture[]>;

  constructor( private pictureService: PictureService) { }

  ngOnInit(): void {
    this.findMostVoted();
  }

  // tslint:disable-next-line: typedef
  findMostVoted(): void {
    this.pictures$ = this.pictureService.findMostVoted(4);
  }

}
