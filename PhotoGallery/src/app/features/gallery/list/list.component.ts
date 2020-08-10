import { PictureService } from './../../shared/services/picture.service';
import { IPicture } from './../../../shared/model/picture';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FilterSelection } from './../../../shared/model/enum/filter.enum'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/internal/operators';
import { MatInput } from '@angular/material/input';


@Component({
   selector: 'app-list',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   pictures$: Observable<Array<IPicture>>;
   filteredPictures$: Observable<Array<IPicture>>;
   filterSel = FilterSelection;
   @Input() cardTitle: string;
   pictures: IPicture[];
   @ViewChild('#searchInput') input: MatInput;

   constructor(private pictureService: PictureService, private route: ActivatedRoute) { }

   ngOnInit(): void {
      const routePath = this.route.snapshot.url[0].path;

      if (routePath === 'gallery') {
         this.pictures$ = this.pictureService.getPictures();
         this.cardTitle = 'Pictures';

      } else {
         this.pictures$ = this.pictureService.getTopLiked(4);
         this.cardTitle = 'Top Liked';
      }
      this.filteredPictures$ = this.pictures$;

   }
   pictureSearch(searchEvent: KeyboardEvent): void {
      of(searchEvent)
         .pipe(debounceTime(300), distinctUntilChanged(),
            map((event) => (event.target as HTMLInputElement).value)
         )
         .subscribe(searchTerm => {
            this.pictures$ = this.filteredPictures$.pipe(
               map(pictures =>
                  pictures.filter(picture => (picture.name.toLowerCase().includes(searchTerm.toLowerCase()) || picture.author.toLowerCase().includes(searchTerm.toLowerCase())))))


         });


   }
   
   



}



