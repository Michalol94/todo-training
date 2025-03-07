import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Observable, of } from 'rxjs';
import { CarDTO } from '../../../application/ports/secondary/car.dto';
import { OrderDTO } from '../../../application/ports/secondary/order.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { GETS_ALL_CAR_DTO, GetsAllCarDtoPort } from '../../../application/ports/secondary/gets-all-car.dto-port';

@Component({ selector: 'lib-car-list', templateUrl: './car-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CarListComponent {
  cars$: Observable<CarDTO[]> = this._getsAllCarDto.getAll();

  constructor(@Inject(GETS_ALL_CAR_DTO) private _getsAllCarDto: GetsAllCarDtoPort) {
  }
 }













    // list$: Observable<CarDTO[]> = of([
    //     {
    //         id: '1',
    //         brand: 'Ferrari',
    //         model: 'Pista',
    //         wheels: 4,
    //         color: 'red'
    //     },
    //     {
    //         id: '2',
    //         brand: 'Seat',
    //         model: 'Leon',
    //         wheels: 4,
    //         color: 'white'
    //     },
    //     {
    //         id: '3',
    //         brand: 'Mercedes',
    //         model: 'G-Wagon 6x6',
    //         wheels: 6

    //     }

    // ]);
    // order$: Observable<OrderDTO> = of(
    //     {
    //         clientName: 'Michal',
    //         cars: [
    //             {
    //                 id: '1',
    //                 brand: 'Ferrari',
    //                 model: 'Pista',
    //                 wheels: 4,
    //                 color: 'red'
    //             },
    //             {
    //                 id: '2',
    //                 brand: 'Seat',
    //                 model: 'Leon',
    //                 wheels: 4,
    //                 color: 'white'
    //             },
    //             {
    //                 id: '3',
    //                 brand: 'Mercedes',
    //                 model: 'G-Wagon 6x6',
    //                 wheels: 6

    //             }
    //         ]
    //     }
    // );
