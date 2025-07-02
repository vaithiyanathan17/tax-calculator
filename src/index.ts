import { parseInput } from "./inputParser";
import { Receipt } from "./receipt";
import { ItemObject } from "./type";

export function main(inputArray: string[]): string[] {
    const receipt = new Receipt();
    inputArray.forEach((line)=>{
        try{
            const parsedItem: ItemObject = parseInput(line);
            receipt.addItem(parsedItem);
        } catch(error: any) {
            console.error({
                line,
                message: error.message
            });
        }
    })
    return receipt.generateReceipt();
}

main(["1 imported box of chocolates at 10.00", "1 imported bottle of perfume at 47.50"]);

main(["1 imported bottle of perfume at 27.99", "1 bottle of perfume at 18.99", "1 packet of headache pills at 9.75", "1 box of imported chocolates at 11.25"]);
