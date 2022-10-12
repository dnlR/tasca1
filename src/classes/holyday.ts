import { IsHolyday } from "../interfaces/isholyday.js";

export class Holyday implements IsHolyday {
  constructor(
    readonly name:string,
    readonly price: number,
    readonly country: string,
    readonly description: string,
  ) { }
}