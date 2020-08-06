import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPicture } from './../model/picture';
import { PICTURES } from './../model/mock-data/mock-pictures';


@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  getPictures(): Observable<IPicture[]> {
    return of(PICTURES);
  }
}
