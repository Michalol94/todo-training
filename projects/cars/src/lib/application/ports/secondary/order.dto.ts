import { CarDTO } from './car.dto';

export interface OrderDTO {
  readonly clientName: string;
  readonly cars: CarDTO[];
}
