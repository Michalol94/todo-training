import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { of } from "rxjs";


@Component({ selector: 'lib-our-team', templateUrl: './our-team.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class OurTeamComponent {

    // public name: string;
    // public description: string;
    // public imagePath: string;

    // constructor(name: string, desc: string, imagePath: string) {
    //     this.name = name;
    //     this.description = desc;
    //     this.imagePath = imagePath;
    // }

    employees$ = of([
        {
            src: 'https://fwcdn.pl/fph/07/49/120749/185892.3.jpg',
            name: 'Zygzak Mcqueen',
            description: 'Zygzak McQueen jest najszybszą wyścigówką świata. Dawniej był lekko arogancki. Liczyła się dla niego głowne wygrane oraz dobre wrażenie.Twierdził że nie potrzebuje przyjaciół, bo ma sporo fanów na trybunach. Wszystko to się jednak zmieniło gdy pewnego dnia trafił do Chłodnicy Górskiej gdzie przypadkowo zniszczył drogę i musiał ją naprawić.Tam poznał przyjaciół i zmienił swój charakter.',
        },

        {
            src: 'https://inforiders.pl/wp-content/uploads/2015/12/TheStig_00.jpg',
            name: 'Stig',
            description: 'Tożsamość Stiga od wielu lat była tajemnicą. O wcielanie się w jego rolę wielokrotnie podejrzewani byli m.in. Damon Hill, Russ Swift, Mark Blundell i Julian Bailey. Jednak 19 stycznia 2009 roku brytyjska gazeta The Times podała, iż za białym kaskiem od zawsze krył się słynny kierowca wyścigowy Ben Collins.',
        },

        {
            src: 'https://www.youandi.com/sites/default/files/styles/lead_image_800x500/public/field/image/Daniel%20Craig_0.jpg',
            name: 'James Bond',
            description: 'James Bond, także agent 007 – postać fikcyjna, szpieg brytyjskiej Secret Intelligence Service (MI6), bohater szeregu powieści Iana Fleminga, protagonista w wielu powieściach i opowiadaniach autorstwa Iana Flemina.',
        }

    ]);
}