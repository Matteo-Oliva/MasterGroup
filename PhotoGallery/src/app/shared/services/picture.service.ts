import { PICTURES } from './../model/mock-data/mock-pictures';
import { IPicture } from './../model/picture';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  getPictures(): Observable<IPicture[]> {
    return of(PICTURES);
  }
}
