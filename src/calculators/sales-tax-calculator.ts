import { ItemObject } from "../type";
import { TaxCalculator } from "./tax-calculator";
import { roundTax } from "./utility";

export class SalesTaxCalculator implements TaxCalculator{
    private calculator;
    constructor(calculator: TaxCalculator) {
        this.calculator = calculator;
    }
    calculate(item: ItemObject) {
        const baseTax: number = this.calculator.calculate(item) as number;
        return item.isExempt ? baseTax : baseTax + roundTax(item.price * 0.10);
    }
}