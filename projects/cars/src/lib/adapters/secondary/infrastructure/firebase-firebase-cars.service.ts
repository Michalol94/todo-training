import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCarDtoPort } from '../../../application/ports/secondary/gets-all-car.dto-port';
import { CarDTO } from '../../../application/ports/secondary/car.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseFirebaseCarsService implements GetsAllCarDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(criterion: Partial<CarDTO>): Observable<CarDTO[]> {
    return this._client.collection<CarDTO>('cars-list').valueChanges(({ idField: 'id' })).pipe(map((data: CarDTO[]) => filterByCriterion(data, criterion)));
  }
}
