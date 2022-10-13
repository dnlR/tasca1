import { Isholiday } from "../interfaces/isholiday.js";

export class holiday implements Isholiday {
  constructor(
    readonly name:string,
    readonly price: number,
    readonly country: string,
    readonly description: string,
  ) { }
}