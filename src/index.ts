import { TaxCalculator } from "./tax-calculator";

class main implements TaxCalculator{
    calculator(){
        console.log("Hello World!")
    }

}

const a = new main();
a.calculator();
