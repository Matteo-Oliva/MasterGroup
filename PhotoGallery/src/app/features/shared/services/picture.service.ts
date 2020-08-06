import { IPicture } from './../../../shared/model/picture';
import { PICTURES } from './../../../shared/model/mock-data/mock-pictures';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }
  
  getPictures():Observable<IPicture[]> {
    return of(PICTURES);
  }
}
