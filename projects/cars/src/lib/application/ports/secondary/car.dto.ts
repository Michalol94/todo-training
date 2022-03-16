export interface CarDTO {
  readonly id: string;
  readonly brand: string;
  readonly model: string;
  readonly wheels: number;
  readonly color?: string;
}
