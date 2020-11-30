/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
import { NgModule, QueryList } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component'; 
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserhomeComponent } from './auth/userhome/userhome.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import {AttractionCreateComponent} from './admin/attraction-create/attraction-create.component';
import {AttractionEditComponent} from './admin/attraction-edit/attraction-edit.component';
import {AttractionListComponent} from './admin/attraction-list/attraction-list.component'
import { TaCreateComponent } from './admin/ta-create/ta-create.component';
import { TaEditComponent } from './admin/ta-edit/ta-edit.component';
import { TaListComponent } from './admin/ta-list/ta-list.component';
import { QueryComponent } from './components/query/query.component';
import { QueryListComponent } from './admin/query-list/query-list.component';
import { FindAgentComponent } from './components/find-agent/find-agent.component';
import { TemplesComponent } from './attractions/temples/temples.component';
import { CuisinesComponent } from './attractions/cuisines/cuisines.component';
import { VfiveComponent } from './components/vfive/vfive.component';
const routes: Routes = [
  { path: '' , component : HomeComponent },
  {path:'find-agent',component:FindAgentComponent},
  { path:'auth/login', component:LoginComponent},
  {path:'auth/register',component:RegisterComponent},
  {path:'auth/userhome',component:UserhomeComponent},
  {path:'admin/admin-panel',component:AdminPanelComponent},
  {path:'admin/admin-create',component:AttractionCreateComponent},
  {path:'admin/admin-edit/:id',component:AttractionEditComponent},
  {path:'admin/admin-list',component:AttractionListComponent},
  {path:'admin/ta-create',component:TaCreateComponent},
  {path:'admin/ta-edit/:id',component:TaEditComponent},
  {path:'admin/ta-list',component:TaListComponent},
  {path:'query',component:QueryComponent},
  {path:'admin/query-list',component:QueryListComponent},
  {path:'attractions/temples',component:TemplesComponent},
  {path:'attractions/cuisines',component:CuisinesComponent},
  {path:'vfive',component:VfiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
