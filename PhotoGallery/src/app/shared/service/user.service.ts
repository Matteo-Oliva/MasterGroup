import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'api/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  registerUser(user:User){
    const body: User = {
      name: user.name,
      surname: user.surname,
      address: user.address,
      email: user.email,
      password: user.password
    }
return this.http.post<User>(this.usersUrl, user, this.httpOptions);
   

}
}
