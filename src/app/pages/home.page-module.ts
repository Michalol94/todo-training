import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FirebaseEmployeesServiceModule, OurTeamComponentModule } from '@team';

@NgModule({
  imports: [CommonModule, FirebaseEmployeesServiceModule, CarouselModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      }
    ]), OurTeamComponentModule],
  declarations: [HomePage],
  providers: [],
  exports: []
})
export class HomePageModule {
}
