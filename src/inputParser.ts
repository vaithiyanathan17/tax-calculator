import { ItemObject } from "./type";

export function parseInput(input: string): ItemObject{
    const atIndex = input.lastIndexOf(' at ');
    if(atIndex === -1) throw new Error("error no at");
    const priceString = input.slice(atIndex + 4).trim();
    const price = parseFloat(priceString);
    if (isNaN(price)) throw new Error("error price is not a number");
    if(price < 0) throw new Error("error price cannot be less than 0");
    const leftString = input.slice(0, atIndex+1).trim();
    const firstSpace = input.trim().indexOf(' ');
    const quantityString = leftString.trim().slice(0, firstSpace).trim();
    const quantity = parseFloat(quantityString);
    if (isNaN(quantity)) throw new Error("error quantity is not a number");
    if(quantity <= 0) throw new Error("error quantity cannot be negative or 0");
    const name = leftString.slice(firstSpace, atIndex).trim();
    const isImported = input.toLowerCase().includes('imported');
    const exemptwords = ['book', 'medical', 'food', 'chocolate', 'chocolates', "pill", "pills"];
    const isExempt = exemptwords.some(k => name.includes(k));
    return {quantity, name, price, isExempt, isImported};
}