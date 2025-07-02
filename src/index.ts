import { BaseTaxCalculator } from "./calculators/base-tax-calculator";
import { ImportTaxCalculator } from "./calculators/import-tax-calculator";
import { SalesTaxCalculator } from "./calculators/sales-tax-calculator";

class Main {
    private base: BaseTaxCalculator;
  
    constructor() {
      this.base = new ImportTaxCalculator(new SalesTaxCalculator(new BaseTaxCalculator()));
    }
  
    calculate(): number {
      return this.base.calculate({price: 100, isExempt: false, isImported: true});
    }
  }

  const a = new Main();
  console.log(a.calculate());
