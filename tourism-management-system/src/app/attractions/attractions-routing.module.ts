import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplesComponent } from './temples/temples.component';
import { CuisinesComponent } from './cuisines/cuisines.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttractionsRoutingModule { }
