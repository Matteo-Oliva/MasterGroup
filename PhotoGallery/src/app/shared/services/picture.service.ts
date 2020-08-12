import { PICTURES } from './../model/mock-data/mock-pictures';
import { IPicture } from './../model/picture';
import { Injectable } from '@angular/core';
import { Observable, of, pipe, } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  pictures = PICTURES;

  private picturesUrl = 'api/pictures';

  constructor(private http: HttpClient) { }

  getPictures(): Observable<IPicture[]> {
    return this.http.get<IPicture[]>(this.picturesUrl)
  }

  getSold(picture:IPicture ): Observable<IPicture>{
    return this.http.get<IPicture>(this.picturesUrl)
    .pipe(
      filter(index => index.isSold ===true)
    );
  }

  getNotSold(picture: IPicture): Observable<IPicture>{
    return this.http.get<IPicture>(this.picturesUrl)
    .pipe(
      filter(index => index.isSold ===false)
    );
  }


}
