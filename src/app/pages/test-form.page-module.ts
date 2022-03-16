import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestFormPage } from './test-form.page';
import { TestFormComponentModule } from '@messages';

@NgModule({
  imports: [CommonModule, TestFormComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestFormPage,
      }
    ]),],
  declarations: [TestFormPage],
  providers: [],
  exports: []
})
export class TestFormPageModule {
}
