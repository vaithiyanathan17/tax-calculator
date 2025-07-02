import { TaxCalculator } from "./tax-calculator";

export class BaseTaxCalculator implements TaxCalculator{
    calculate(item: any) {
        return 0;
    }
}