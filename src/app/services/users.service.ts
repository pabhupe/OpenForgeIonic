import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { 

  }

  getUsers(sinceU){
    return this.http.get<any>(`https://api.github.com/users?since=${sinceU}`)
  }

  getUser(username){
    return this.http.get<any>(`https://api.github.com/users/${username}`)
  }
}
