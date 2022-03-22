import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationDTO } from '../../../application/ports/secondary/navigation.dto';

@Component({ selector: 'lib-navbar', templateUrl: './navbar.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class NavbarComponent {


    navbarItems$: Observable<NavigationDTO[]> = of([
        {
            text: 'O nas',
            link: "/o-nas"
        },
        {
            text: 'Pracownicy',
            link: '/pracownik'
        },
        {
            text: 'Skontaktuj się z nami',
            link: '/kontakt'
        },

        {
            text: 'test form',
            link: '/testKontakt'
        },
        {
            text: 'cars',
            link: '/cars'
        }
    ])
}
