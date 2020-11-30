/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserhomeComponent } from '../app/auth/userhome/userhome.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AttractionCreateComponent } from './admin/attraction-create/attraction-create.component';
import { AttractionEditComponent } from './admin/attraction-edit/attraction-edit.component';
import { AttractionListComponent } from './admin/attraction-list/attraction-list.component';
import { TaCreateComponent } from './admin/ta-create/ta-create.component';
import { TaEditComponent } from './admin/ta-edit/ta-edit.component';
import { TaListComponent } from './admin/ta-list/ta-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { MatFormFieldModule, MatInputModule } from '@angular/material';*/
import {  MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AttractionsModule } from './attractions/attractions.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { QueryComponent } from './components/query/query.component';
import { QueryListComponent } from './admin/query-list/query-list.component';
import { FindAgentComponent } from './components/find-agent/find-agent.component';
import { VfiveComponent } from './components/vfive/vfive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    AdminPanelComponent,
    AttractionListComponent,
    AttractionCreateComponent,
    AttractionEditComponent,
    TaCreateComponent, TaEditComponent, TaListComponent, QueryComponent,QueryListComponent, FindAgentComponent, VfiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    AttractionsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

