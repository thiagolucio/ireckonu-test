import { Component, OnInit } from '@angular/core';
import {UsersListService} from '../users-list/users-list.service';
import { UsersList } from '../users-list/users-list';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
  userData: any;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private usersListService: UsersListService
  ) { }

  ngOnInit() {
    // console.log('PARAMETROS ', this.route.params['']);
    this.route.params.subscribe(params => {
      const idUser = params['localid'];
      this.usersListService.getUsersList()
      .subscribe((data: UsersList[]) => {
         let usrDetail = data.filter( user => user.localid == idUser); 
        console.log('USER DETAIL', usrDetail); 
        this.userData = usrDetail[0]; 
        console.log('USER DATA', this.userData);     
      });
      console.log(params['localid']);
    });    
  }
}
