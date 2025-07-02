import { TaxCalculator } from "./tax-calculator";
import { roundTax } from "./utility";

export class ImportTaxCalculator implements TaxCalculator{
    private calculator;
    constructor(calculator: TaxCalculator){
        this.calculator = calculator;
    }
    calculate(item: any) {
        const salesTax: number = this.calculator.calculate(item) as number;
        return item.isImported ? salesTax + roundTax(item.price * 0.05) : salesTax;
    }
}