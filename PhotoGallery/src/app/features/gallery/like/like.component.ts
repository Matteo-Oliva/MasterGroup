
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
 
  numOfLikes :number = 0 ;
  
constructor(){
  
}
  
  

  ngOnInit(): void {
     this.likeButton();
     this.dislikeButton();
  }

  likeButton():void{   
   
    this.numOfLikes++;
   }

  dislikeButton(){
    this.numOfLikes--;
    
  }
     
  
}

