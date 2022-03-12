import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [CommonModule, CarouselModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      }
    ])
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: []
})
export class EmployeeDetailsPageModule {
}
