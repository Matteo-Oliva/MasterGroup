import { Component, OnInit } from '@angular/core';
import { IPicture } from './../../../shared/model/picture';
import { PictureService } from './../../../shared/services/picture.service';
import { FilterSold } from './../../../shared/model/enum/filter-sold.enum';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {

  pictures: IPicture[];
  filterSold =  FilterSold;

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    this.getPictures();
  }

  getPictures(): void {
    this.pictureService.getPictures()
      .subscribe(pictures => this.pictures = pictures);
  }

  soldItText(picture: IPicture): string {
    return picture.isSoldIt ? 'Sold-It' : 'Not-Sold';
  }

  isSoldIt(picture: IPicture): any {
    return {
      'sold-it': picture.isSoldIt,
      'not-sold': !picture.isSoldIt
    };
  }

  filterSoldIt(filterSold: FilterSold = FilterSold.ALL): void {
    if (filterSold === FilterSold.ALL) {
      this.pictureService.getPictures().subscribe( pictures => {
        this.pictures = pictures;
      });
      return;
    }

    const isSold = filterSold === FilterSold.SOLDIT ? true : false;
    const soldPicturePredicate = (picture: IPicture) => picture.isSoldIt === isSold;

    this.pictureService
      .getPictures()
      .subscribe(
        pictures => this.pictures = pictures.filter(soldPicturePredicate)
      );
  }

}
