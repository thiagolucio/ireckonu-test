import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-user-cob-list',
  templateUrl: './user-cob-list.component.html',
  styleUrls: ['./user-cob-list.component.scss']
})
export class UserCobListComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'photo',
    'localid',
    'email',
    'first_name',    
    'phone',
    'address',
    'modified'
  ];
  exampleDatabase: ExampleHttpDatabase | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit() {
    this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

     // If the user changes the sort order, reset back to the first page.
     this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

     merge(this.sort.sortChange, this.paginator.page)
     .pipe(
       startWith({}),
       switchMap(() => {
         this.isLoadingResults = true;
         return this.exampleDatabase!.getRepoIssues(
           this.sort.active, this.sort.direction, this.paginator.pageIndex);
       }),
       map(data => {
         // Flip flag to show that loading has finished.
         this.isLoadingResults = false;
         this.isRateLimitReached = false;
         this.resultsLength = data.total_count;

         return data.items;
       }),
       catchError(() => {
         this.isLoadingResults = false;
         // Catch if the GitHub API has reached its rate limit. Return empty data.
         this.isRateLimitReached = true;
         return observableOf([]);
       })
     ).subscribe(data => this.data = data);
 }

}


export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
    photo: String,
    localid: Number,
    first_name: String,
    last_name: String,
    email: String,
    email2: String,
    prefix: String,
    loyalty_member_id: number,
    phone: Number,
    address: String,
    birthdate: Date 
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
  constructor(private _httpClient: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://profiles-list.firebaseio.com/Data.json';
    const requestUrl =
        `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}