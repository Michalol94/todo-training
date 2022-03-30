import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_EMPLOYEE_DTO, AddsEmployeeDtoPort } from '../../../application/ports/secondary/adds-employee.dto-port';

@Component({ selector: 'lib-create-employee', templateUrl: './create-employee.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CreateEmployeeComponent {
  readonly createEmployee: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    imageUrl: new FormControl(),
    bio: new FormControl(),
    department: new FormGroup({
      name: new FormControl(),
      employeeCount: new FormControl(),

    })
  });

  constructor(@Inject(ADDS_EMPLOYEE_DTO) private _addsEmployeeDto: AddsEmployeeDtoPort) {
  }

  onCreateEmployeeSubmited(createEmployee: FormGroup): void {
    if (createEmployee.invalid) {
      return;
    }
    // this._addsEmployeeDto.add(createEmployee.getRawValue());
    this._addsEmployeeDto.add({
      id: createEmployee.get('id').value,
      name: createEmployee.get('name').value,
      imageUrl: createEmployee.get('imageUrl').value,
      bio: createEmployee.get('bio').value,
      department: {
        name: createEmployee.get('department.name').value,
        employeeCount: createEmployee.get('department.employeeCount').value
      }
    });
    this.createEmployee.reset();
  }

}

