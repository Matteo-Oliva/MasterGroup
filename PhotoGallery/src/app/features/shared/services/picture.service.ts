import { IPicture } from './../../../shared/model/picture';
import { PICTURES } from './../../../shared/model/mock-data/mock-pictures';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class PictureService {

  pictures = PICTURES;
  private picturesUrl = 'api/pictures';  // URL to web api
  constructor(private http: HttpClient,) { }

  getPictures(): Observable<IPicture[]> {
    return this.http.get<IPicture[]>(this.picturesUrl)
  };
  
  getTopLiked(numOfElements: number): Observable<Array<IPicture>> {
    return this.http.get<IPicture[]>(this.picturesUrl).pipe(
      map(pictures => pictures.sort((a, b) => b.like - a.like).slice(0, numOfElements)));


  }
}

