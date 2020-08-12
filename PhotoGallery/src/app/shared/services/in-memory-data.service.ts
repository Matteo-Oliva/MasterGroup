import { IPicture } from './../model/picture';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

 createDb() {

const pictures = [  
{
  id:1,
  name:"La bellezza",
  author:"Giuseppe Rossi",
  like:4,
  imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
  description:"La bellezza nel mondo",
  isSold:false
},
{
   id:2,
   name:"La Morte",
   author:"Giuseppe Bianchi",
   like:2,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"La morte in natura",
   isSold:true
},
{
   id:3,
   name:"Il Sorriso",
   author:"Gianni Trenti",
   like:6,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"Uno squarcio",
   isSold:false
},
{
   id:4,
   name:"La disperazione",
   author:"Gianni Trenti",
   like:6,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"Stati umani",
   isSold:true
},
{
   id:5,
   name:"La sorte",
   author:"Vinz Persico",
   like:1,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"Cose che capitano",
   isSold:true
},
{
   id:6,
   name:"Il vino",
   author:"Abdul Saras",
   like:10,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"Bere responsabilmente",
   isSold:false
},
{
   id:7,
   name:"La grappa",
   author:"Abdul Saras",
   like:5,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"Bere molto responsabilmente",
   isSold:false
},
{
   id:8,
   name:"Il bacio",
   author:"Sarah Amore",
   like:5,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"Unione tra corpi",
   isSold:true
},
{
   id:9,
   name:"Camurria",
   author:"Mario Rossi",
   like:8,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"Ogni tanto capita",
   isSold:true
},
{
   id:10,
   name:"Pasta al forno",
   author:"Mario Bordò",
   like:10,
   imgPath:"https://cdn.pixabay.com/photo/2018/05/10/22/37/the-framework-3388998_960_720.jpg",
   description:"Le cose belle della vita",
   isSold:false
}
];

return {pictures}
   
 }
}
