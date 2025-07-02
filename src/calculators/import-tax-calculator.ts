import { TaxCalculator } from "./tax-calculator";

export class ImportTaxCalculator implements TaxCalculator{
    private calculator;
    constructor(calculator: TaxCalculator){
        this.calculator = calculator;
    }
    calculate(item: any) {
        const salesTax: number = this.calculator.calculate(item) as number;
        return item.isImported ? salesTax + (item.price * 0.5) : salesTax;
    }
}