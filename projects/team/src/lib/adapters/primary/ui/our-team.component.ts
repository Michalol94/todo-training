import { DepartmentDTO } from '../../../application/ports/secondary/department.dto';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../application/ports/secondary/gets-all-employee.dto-port';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();

  constructor(@Inject(GETS_ALL_EMPLOYEE_DTO) private _getsAllEmployeeDto: GetsAllEmployeeDtoPort) {
  }
 }


    // employees$: Observable<EmployeeDTO[]> = of([
    //     {
    //         id: '1',
    //         imageUrl: 'https://fwcdn.pl/fph/07/49/120749/185892.3.jpg',
    //         name: 'Zygzak Mcqueen',
    //         bio: 'Zygzak McQueen jest najszybszą wyścigówką świata. Dawniej był lekko arogancki. Liczyła się dla niego głowne wygrane oraz dobre wrażenie.Twierdził że nie potrzebuje przyjaciół, bo ma sporo fanów na trybunach. Wszystko to się jednak zmieniło gdy pewnego dnia trafił do Chłodnicy Górskiej gdzie przypadkowo zniszczył drogę i musiał ją naprawić.Tam poznał przyjaciół i zmienił swój charakter.',
    //         department: [
    //             {
    //                 name: 'Nascar masters',
    //                 employeeCount: 95
    //             },
    //             {
    //                 name: 'Nascar masters2',
    //                 employeeCount: 95
    //             }
    //         ]


    //     },

    //     {
    //         id: '2',
    //         imageUrl: 'https://inforiders.pl/wp-content/uploads/2015/12/TheStig_00.jpg',
    //         name: 'Stig',
    //         bio: 'Tożsamość Stiga od wielu lat była tajemnicą. O wcielanie się w jego rolę wielokrotnie podejrzewani byli m.in. Damon Hill, Russ Swift, Mark Blundell i Julian Bailey. Jednak 19 stycznia 2009 roku brytyjska gazeta The Times podała, iż za białym kaskiem od zawsze krył się słynny kierowca wyścigowy Ben Collins.',
    //         department: [
    //             {
    //                 name: 'Anonymous',
    //                 employeeCount: 1
    //             }
    //         ]
    //     },

    //     {
    //         id: '3',
    //         imageUrl: 'https://www.youandi.com/sites/default/files/styles/lead_image_800x500/public/field/image/Daniel%20Craig_0.jpg',
    //         name: 'James Bond',
    //         bio: 'James Bond, także agent 007 – postać fikcyjna, szpieg brytyjskiej Secret Intelligence Service (MI6), bohater szeregu powieści Iana Fleminga, protagonista w wielu powieściach i opowiadaniach autorstwa Iana Flemina.',
    //         department: [
    //             {
    //                 name: 'Secret Service',
    //                 employeeCount: 0o7
    //             }
    //         ]
    //     }

    // ]);

    // onEmployeeClicked(employee) {
    //     alert(employee.name);
    // }
