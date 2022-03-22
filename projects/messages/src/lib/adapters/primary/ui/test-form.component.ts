import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-test-form', templateUrl: './test-form.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TestFormComponent {
    readonly testForm: FormGroup = new FormGroup({
        name: new FormControl(),
        image: new FormControl()
    });

    onFormSubmited(testForm: FormGroup) {
        alert(
            `name: ${testForm.value.name} text: ${testForm.value.image}`
        );
    }

}
