import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import {UsersList} from './users-list';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  getUserDetails() {
    throw new Error("Method not implemented.");
  }

  private readonly APIUSERLIST = `${environment.API}/Data.json`;

  constructor(private http: HttpClient) {}

  getUsersList(): Observable<UsersList[]> {
    return this.http.get<UsersList[]>(this.APIUSERLIST)
    .pipe (      
      tap(console.log));
  }
}
