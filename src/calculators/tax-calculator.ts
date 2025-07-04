import { ItemObject } from "../type";

export interface TaxCalculator {
    calculate(item: ItemObject): number;
}