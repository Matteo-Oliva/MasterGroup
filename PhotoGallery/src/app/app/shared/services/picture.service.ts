import { Injectable } from '@angular/core';
import { PICTURES } from './../../../shared/model/mock-data/mock-pictures';
import { IPicture } from './../../../shared/model/pictures';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  getPictures(): Observable<IPicture[]>{
    return of(PICTURES);
  }
}


