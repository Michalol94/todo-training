import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule, ReactiveFormsModule],
	declarations: [ContactFormComponent],
	providers: [],
	exports: [ContactFormComponent]
})
export class ContactFormComponentModule {
}
