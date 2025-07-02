import { BaseTaxCalculator } from "./calculators/base-tax-calculator";
import { ImportTaxCalculator } from "./calculators/import-tax-calculator";
import { SalesTaxCalculator } from "./calculators/sales-tax-calculator";
import { parseInput } from "./inputParser";
import { ItemObject } from "./type";

class Main {
    private base: BaseTaxCalculator;
  
    constructor() {
      this.base = new ImportTaxCalculator(new SalesTaxCalculator(new BaseTaxCalculator()));
    }
  
    calculate(): number {
      return this.base.calculate({price: 100, isExempt: false, isImported: true});
    }

    parseInput(inputArray: string[]): ItemObject[] {
        let item: ItemObject[] = [];
        inputArray.forEach(line=>{
            item.push(parseInput(line));
        })
        return item;
    }
  }

  const a = new Main();
//   console.log(a.calculate());
console.log(a.parseInput([" 1 book at home at    15.55", "1   violin lessons at 559"]));
