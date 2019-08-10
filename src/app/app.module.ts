import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { NavsComponent } from './navs/navs.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsersListComponent } from './users-list/users-list.component';
import { UsertableComponent } from './usertable/usertable.component';
import { TableHttpExampleComponent } from './table-http-example/table-http-example.component';



@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    UsersListComponent,
    UsertableComponent,
    TableHttpExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule 
  ],
  exports: [
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
