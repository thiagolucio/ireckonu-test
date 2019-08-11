import { Injectable } from '@angular/core';
import {UserCobList} from './user-cob-list';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserCobListService {

  constructor(private _httpClient: HttpClient) {}
  
  getRepoIssues(sort: string, order: string, page: number): Observable<UserCobList> {
    const href = 'https://profiles-list.firebaseio.com/Data.json';
    const requestUrl =
        `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    return this._httpClient.get<UserCobList>(requestUrl);
  }
}
