import { AuthServiceService } from './../shared/services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogged$: Subject<boolean>;

  constructor(public authService:AuthServiceService) { }

  ngOnInit(): void {
    this.isLogged$ = this.authService.isLogged$();
  }

}
