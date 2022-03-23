import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EmployeeDetailComponentModule } from '@team';

@NgModule({
  imports: [CommonModule, CarouselModule.forRoot(),
    RouterModule.forChild([
      {
        path: ':employeeId',
        component: EmployeeDetailsPage,
      }
    ]), EmployeeDetailComponentModule],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: []
})
export class EmployeeDetailsPageModule {
}
