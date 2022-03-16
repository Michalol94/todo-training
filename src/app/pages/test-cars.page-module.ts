import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestCarsPage } from './test-cars.page';
import { CarListComponentModule } from '@cars';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestCarsPage,
      }
    ]),
    CarListComponentModule
  ],
  declarations: [TestCarsPage],
  providers: [],
  exports: []
})
export class TestCarsPageModule {
}
