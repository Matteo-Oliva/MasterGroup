import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IPicture } from './../model/pictures';
import { PICTURES } from './../model/mock-data/mock-pictures'



@Injectable({
  providedIn: 'root'
})
export class PictureService {



  constructor() { }


getPictures(): Observable<IPicture[]> {
  return of (PICTURES);
}


}
