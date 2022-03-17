import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestCarsPage } from './test-cars.page';
import { CarListComponentModule } from '@cars';
import { FirebaseFirebaseCarsServiceModule } from '../../../projects/cars/src/lib/adapters/secondary/infrastructure/firebase-firebase-cars.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestCarsPage,
      }
    ]),
    CarListComponentModule,
    FirebaseFirebaseCarsServiceModule
  ],
  declarations: [TestCarsPage],
  providers: [],
  exports: []
})
export class TestCarsPageModule {
}
