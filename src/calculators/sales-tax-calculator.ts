import { TaxCalculator } from "./tax-calculator";

export class SalesTaxCalculator implements TaxCalculator{
    private calculator;
    constructor(calculator: TaxCalculator) {
        this.calculator = calculator;
    }
    calculate(item: any) {
        const baseTax: number = this.calculator.calculate(item) as number;
        return item.isExempt ? baseTax : baseTax + (item.price* 0.10);
    }
}