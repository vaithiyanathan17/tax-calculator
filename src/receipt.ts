import { BaseTaxCalculator } from "./calculators/base-tax-calculator";
import { ImportTaxCalculator } from "./calculators/import-tax-calculator";
import { SalesTaxCalculator } from "./calculators/sales-tax-calculator";
import { ItemObject } from "./type";

export class Receipt {
    private lineItems: string[];
    private totalTax;
    private totalPrice;
    constructor(){
        this.lineItems = [];
        this.totalTax = 0;
        this.totalPrice = 0;
    }
    addItem(item: ItemObject){
        let calculator = new ImportTaxCalculator(new SalesTaxCalculator(new BaseTaxCalculator()));
        const itemTax = calculator.calculate(item);
        const itemTotal = item.quantity * (item.price + itemTax);
        this.totalTax += itemTax * item.quantity;
        this.totalPrice += itemTotal;
        this.lineItems.push(`${item.quantity} ${item.name} : ${itemTotal.toFixed(2)}`);
    }

    generateReceipt(){
        const generatedReceipt = [...this.lineItems, `Sales Taxes : ${this.totalTax.toFixed(2)}`, `Total : ${this.totalPrice.toFixed(2)}`];
        console.log(generatedReceipt.join("\n"));
        return generatedReceipt;
    }
}