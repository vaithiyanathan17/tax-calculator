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
