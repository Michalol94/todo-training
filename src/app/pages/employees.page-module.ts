import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';

@NgModule({
  imports: [CommonModule,
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
