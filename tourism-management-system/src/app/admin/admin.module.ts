import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AttractionCreateComponent } from './attraction-create/attraction-create.component';
import { AttractionEditComponent } from './attraction-edit/attraction-edit.component';
import { AttractionListComponent } from './attraction-list/attraction-list.component';
import { TaCreateComponent } from './ta-create/ta-create.component';
import { TaEditComponent } from './ta-edit/ta-edit.component';
import { TaListComponent } from './ta-list/ta-list.component';
import { QueryListComponent } from './query-list/query-list.component';


@NgModule({
  declarations: [AdminPanelComponent, AttractionCreateComponent, AttractionEditComponent, AttractionListComponent, TaCreateComponent, TaEditComponent, TaListComponent, QueryListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
