import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPicture } from './../model/picture';
import { PICTURES } from './../model/mock-data/mock-pictures';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PictureService {

  pictures = PICTURES;
  private picturesUrl = 'api/pictures';

  constructor( private http: HttpClient ) { }

  getPictures(): Observable<IPicture[]> {
    return this.http.get<IPicture[]>(this.picturesUrl);
  }

  findMostVoted(numOfElements: number): Observable<IPicture[]> {
    return this.http.get<IPicture[]>(this.picturesUrl)
    .pipe(
      map( pictures => pictures.sort((a, b) => b.like - a.like).slice(0, numOfElements))
    );
  }
}
