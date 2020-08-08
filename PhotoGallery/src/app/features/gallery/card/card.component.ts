import { IPicture } from './../../../shared/model/picture';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() picture: IPicture;



  constructor() { }

  ngOnInit(): void {

  }

  isSold(picture: IPicture): string {
    return picture.status ? 'Venduto' : 'Disponibile';
  }

  soldedClass(picture: IPicture): any {
    return {
      solded: picture.status,
      'non-venduto': !picture.status
    };
  }
  
  likeButton():void{   
   this.picture.like++;
   
   }

  dislikeButton(){
    this.picture.like--;
    
  }

  
}

