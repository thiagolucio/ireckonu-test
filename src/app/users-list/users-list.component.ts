import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UsersListService } from './users-list.service';
import { UsersList } from './users-list';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subscriber } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersListArray = [];
  dataSource: any;
  data: any;
  public errorMsg: any;

  // dataSource = new UsersListDataSource(this.usersListService);
  // data = DataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public displayedColumns: string[] = [
    'photo',
    'localid',
    'email',
    'first_name',    
    'phone',
    'address',
    'modified'
  ];

   
  constructor(private usersListService: UsersListService) { }

  ngOnInit() {
    this.usersListService.getUsersList()


    .subscribe((data: UsersList[]) => {
      this.usersListArray = data;
      data = this.usersListArray;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('Que merda é essa 1', data);
      console.log('Que merda é essa 2', this.usersListArray);
      console.log('Que merda é essa 3', this.dataSource);
    });   

  } 

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
export class UsersListDataSource extends DataSource<any> {
  paginator: MatPaginator;
  sort: MatSort;
  filter: string;

  constructor(private userListService: UsersListService) {
    super();
  }

  connect(): Observable<UsersList[]> {
    return this.userListService.getUsersList();
  }
  disconnect() { }

}
