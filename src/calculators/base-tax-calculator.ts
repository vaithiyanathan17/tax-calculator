import { ItemObject } from "../type";
import { TaxCalculator } from "./tax-calculator";

export class BaseTaxCalculator implements TaxCalculator{
    calculate(item: ItemObject) {
        return 0;
    }
}