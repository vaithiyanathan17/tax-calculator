import { expect } from 'chai';
import { main } from '../src';
import { describe, it } from 'mocha';

describe('Sales Tax Receipt', () => {

  it('should process basic input without imported items', () => {
    const input = ["1 book at 12.49", "1 music CD at 14.99", "1 chocolate bar at 0.85"];
    const output = main(input);

    expect(output).to.include("1 book : 12.49");
    expect(output).to.include("1 music CD : 16.49");
    expect(output).to.include("1 chocolate bar : 0.85");
    expect(output).to.include("Sales Taxes : 1.50");
    expect(output).to.include("Total : 29.83");
  });

  it('should process imported exempt and non-exempt items', () => {
    const input = ["1 imported box of chocolates at 10.00", "1 imported bottle of perfume at 47.50"];
    const output = main(input);

    expect(output).to.include("1 imported box of chocolates : 10.50");
    expect(output).to.include("1 imported bottle of perfume : 54.65");
    expect(output).to.include("Sales Taxes : 7.65");
    expect(output).to.include("Total : 65.15");
  });

  it('should process a mixed set of exempt, non-exempt, imported and non-imported items', () => {
    const input = [
      "1 imported bottle of perfume at 27.99",
      "1 bottle of perfume at 18.99",
      "1 packet of headache pills at 9.75",
      "1 box of imported chocolates at 11.25"
    ];
    const output = main(input);

    expect(output).to.include("1 imported bottle of perfume : 32.19");
    expect(output).to.include("1 bottle of perfume : 20.89");
    expect(output).to.include("1 packet of headache pills : 9.75");
    expect(output).to.include("1 box of imported chocolates : 11.85");
    expect(output).to.include("Sales Taxes : 6.70");
    expect(output).to.include("Total : 74.68");
  });

  it('should skip invalid line and process valid items only', () => {
    const input = [
      "1 book at 12.49",
      "invalid line no at symbol",
      "1 music CD at 14.99"
    ];
    const output = main(input);

    expect(output).to.include("1 book : 12.49");
    expect(output).to.include("1 music CD : 16.49");
    expect(output).to.include("Sales Taxes : 1.50");
    expect(output).to.include("Total : 28.98");
  });

  it('should handle multiple quantities correctly', () => {
    const input = [
      "2 imported bottles of perfume at 27.99",
      "3 books at 12.49"
    ];
    const output = main(input);

    expect(output).to.include("2 imported bottles of perfume : 64.38");
    expect(output).to.include("3 books : 37.47");
    expect(output).to.include("Sales Taxes : 8.40");
    expect(output).to.include("Total : 101.85");
  });

  it('should skip negative price item and log error', () => {
    const input = [
      "1 book at 12.49",
      "1 music CD at -14.99"
    ];
    const output = main(input);

    expect(output).to.include("1 book : 12.49");
    expect(output).to.include("Sales Taxes : 0.00");
    expect(output).to.include("Total : 12.49");
  });

  it('should parse item with extra spaces and imported in any case', () => {
    const input = ["1    IMPORTED    box of chocolates    at   10.00"];
    const output = main(input);

    expect(output).to.include("1 IMPORTED    box of chocolates : 10.50");
    expect(output).to.include("Sales Taxes : 0.50");
    expect(output).to.include("Total : 10.50");
  });

});
