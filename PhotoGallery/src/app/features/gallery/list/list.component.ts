import { GalleryStatus } from './../../../shared/model/enum/filter.enum';
import { PictureService } from './../../shared/services/picture.service';
import { IPicture } from './../../../shared/model/picture';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/internal/operators';
import { MatInput } from '@angular/material/input';


@Component({
   selector: 'app-list',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

   pictures: Array<IPicture>;
   originalPictures: Array<IPicture>;
   galleryStatus = GalleryStatus;
   @Input() cardTitle: string;
   @ViewChild('#searchInput') input: MatInput;

   searchModel: string;
   statusModel: string;

   constructor(private pictureService: PictureService, private route: ActivatedRoute) {

   }

   ngOnInit(): void {
      const routePath = this.route.snapshot.url[0].path;

      if (routePath === 'gallery') {
         this.pictureService.getPictures().subscribe(data => { this.managePictures(data) });
         this.cardTitle = 'Pictures';
      } else {
         this.pictureService.getTopLiked(4).subscribe(data => { this.managePictures(data) });
         this.cardTitle = 'Top Liked';
      }
   }

   managePictures(data) {
      this.pictures = data;
      this.originalPictures = data;
   }

   filterData(picture: IPicture) {
      let bSearchInput = this.searchModel ? picture.name.toLowerCase().includes(this.searchModel.toLowerCase()) || picture.author.toLowerCase().includes(this.searchModel.toLowerCase()) : true;
      let bStatus = this.statusModel && this.statusModel === 'SOLD' ?  picture.status === true : this.statusModel && this.statusModel === 'NOTSOLD' ? picture.status === false : true;
      
      return bSearchInput && bStatus;
   }

   pictureSearch(searchEvent: KeyboardEvent): void {
      of(searchEvent)
         .pipe(debounceTime(300), distinctUntilChanged(),
            map((event) => (event.target as HTMLInputElement).value)
         )
         .subscribe(searchTerm => {
            this.searchModel = searchTerm;
            this.pictures = this.originalPictures.filter(picture => { return this.filterData(picture) });
         });
   }

   onStatusChanged(event: any): void {
      this.statusModel = event.value && event.value === 'ALL' ? null : event.value;
      this.pictures = this.originalPictures.filter(picture => { return this.filterData(picture) })

      // switch (event.value) {
      //    case 'SOLD':
      //       // this.pictures = this.pictures.filter(picture => picture.status);
      //       break;
      //    case 'NOTSOLD':
      //       this.pictures = this.originalPictures.filter(picture => { return this.filterData(picture, event.value) })
      //       // this.pictures = this.pictures.filter(picture => !picture.status);
      //       break;
      //    default:
      //       this.pictures = this.originalPictures
      //       break;
      // }
   }


   // pictureSearch(searchEvent: KeyboardEvent): void {
   //    of(searchEvent)
   //       .pipe(debounceTime(300), distinctUntilChanged(),
   //          map((event) => (event.target as HTMLInputElement).value)
   //       )
   //       .subscribe(searchTerm => {
   //          this.pictures$ = this.filteredPictures$.pipe(
   //             map(pictures =>
   //                pictures.filter(picture => (picture.name.toLowerCase().includes(searchTerm.toLowerCase()) || picture.author.toLowerCase().includes(searchTerm.toLowerCase())))))
   //       });
   // }

   // onStatusChanged(event: any): void {
   //    switch (event.value) {
   //       case 'SOLD':
   //          this.pictures$ = this.pictures$.pipe(
   //             map(pictures => pictures.filter(picture => picture.status)))
   //          break;
   //       case 'NOTSOLD':
   //          this.pictures$ = this.pictures$.pipe(
   //             map(pictures => pictures.filter(picture => !picture.status)))
   //          break;
   //       default: this.pictures$ = this.filteredPictures$
   //          break;
   //    }
   // }



}



