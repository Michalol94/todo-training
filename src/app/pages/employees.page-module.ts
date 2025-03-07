import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { FirebaseEmployeesServiceModule, OurTeamComponentModule } from '@team';

@NgModule({
  imports: [CommonModule, FirebaseEmployeesServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesPage,
      },
      {
        path: 'wsrodku',
        component: EmployeesPage,
      }
    ]),
    OurTeamComponentModule
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: []
})
export class EmployeesPageModule {
}
