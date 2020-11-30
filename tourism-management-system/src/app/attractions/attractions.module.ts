import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { TemplesComponent } from './temples/temples.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CuisinesComponent } from './cuisines/cuisines.component';



@NgModule({
  declarations: [TemplesComponent, CuisinesComponent],
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    AttractionsRoutingModule
  ]
})
export class AttractionsModule { }
