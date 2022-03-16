import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CarListComponent],
  	providers: [],
  	exports: [CarListComponent] })
export class CarListComponentModule {
}
