import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {

    param$ = this.activatedRoute.params;
    constructor(private activatedRoute: ActivatedRoute) { }

    images = {

        image1: {
            src: 'https://fwcdn.pl/fph/07/49/120749/185892.3.jpg',
            alt: 'Zygzak Mcqueen'
        },

        image2: {
            src: 'https://inforiders.pl/wp-content/uploads/2015/12/TheStig_00.jpg',
            alt: 'Stig'
        },

        image3: {
            src: 'https://www.youandi.com/sites/default/files/styles/lead_image_800x500/public/field/image/Daniel%20Craig_0.jpg',
            alt: 'Bond'
        }
    };
}