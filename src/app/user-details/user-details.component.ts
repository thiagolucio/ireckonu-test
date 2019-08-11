import { Component, OnInit } from '@angular/core';
import {UsersListService} from '../users-list/users-list.service';
import { UsersList } from '../users-list/users-list';
import { ActivatedRoute, Router } from "@angular/router";
import { url } from 'inspector';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  
  subscribedParam = "initial value";

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.subscribedParam = params.get("usersList");
    });
  }


  routerLink(usersList: []): void {
    this.router.navigate(["userDetails", usersList]);
  }
       
  


}
