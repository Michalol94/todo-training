import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';


@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {
    images = {

        image1: {
            src: 'https://fwcdn.pl/fph/07/49/120749/185892.3.jpg',
            name: 'Zygzak Mcqueen'
        },

        image2: {
            src: 'https://inforiders.pl/wp-content/uploads/2015/12/TheStig_00.jpg',
            name: 'Stig'
        },

        image3: {
            src: 'https://www.youandi.com/sites/default/files/styles/lead_image_800x500/public/field/image/Daniel%20Craig_0.jpg',
            name: 'Bond'
        }
    };
}