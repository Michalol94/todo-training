import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormComponent } from './test-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [TestFormComponent],
	providers: [],
	exports: [TestFormComponent]
})
export class TestFormComponentModule {
}
