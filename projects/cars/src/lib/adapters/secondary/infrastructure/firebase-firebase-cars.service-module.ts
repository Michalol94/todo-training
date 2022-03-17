import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseFirebaseCarsService } from './firebase-firebase-cars.service';
import { GETS_ALL_CAR_DTO } from '../../../application/ports/secondary/gets-all-car.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseFirebaseCarsService, { provide: GETS_ALL_CAR_DTO, useExisting: FirebaseFirebaseCarsService }],
  	exports: [] })
export class FirebaseFirebaseCarsServiceModule {
}
