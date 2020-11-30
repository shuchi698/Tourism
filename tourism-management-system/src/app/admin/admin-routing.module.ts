import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AttractionCreateComponent } from './attraction-create/attraction-create.component';
import { AttractionEditComponent } from './attraction-edit/attraction-edit.component';
import { AttractionListComponent } from './attraction-list/attraction-list.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminPanelComponent,
    children: [
      {
        path: 'admin-panel',
        component: AdminPanelComponent
      },
      {
        path: 'attraction-create',
        component: AttractionCreateComponent
      },
      {
        path: 'attraction-edit/:id',
        component: AttractionEditComponent
      },
      {
        path: 'attraction-list',
        component: AttractionListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
    AdminPanelComponent
  ]
})
export class AdminRoutingModule { }
