import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PICTURES } from 'src/app/shared/model/mock-data/mock-pictures';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const pictures = [
      {id:1 , name:"Raffaello la madonna", author:"Pippo", like:1, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg" , description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ratione corporis voluptatum neque ",status:false},
      {id:2 , name:"Quadro 2", author:"Pippo2", like:20, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractclouds02025.jpg",description:"Descrizione 2", status:true},
      {id:3 , name:"Quadro 3", author:"Raffaello", like:3, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg",description:"Descrizione 3", status:true},
      {id:4 , name:"Quadro 4", author:"Pippo4", like:47, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg",description:"Descrizione 4", status:true},
      {id:5 , name:"Quadro 5", author:"Pippo5", like:54, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg",description:"Descrizione 5", status:false},
      {id:6 , name:"Quadro 6", author:"Pippo6", like:6, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg",description:"Descrizione 6", status:true},
      {id:7 , name:"Quadro 7", author:"Pippo7", like:72, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg",description:"Descrizione 7", status:false},
      {id:8 , name:"Quadro 8", author:"Pippo8", like:8, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg",description:"Descrizione 8", status:true},
      {id:9 , name:"Quadro 9", author:"Pippo9", like:91, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg",description:"Descrizione 9", status:false},
      {id:10 , name:"Quadro 10", author:"Pippo10", like:10, imgPath:"http://www.freeimageslive.com/galleries/backdrops/abstract/preview/abstractcarnationnegative.jpg",description:"Descrizione 10", status:true},
  ];
return {pictures};

  }
}
