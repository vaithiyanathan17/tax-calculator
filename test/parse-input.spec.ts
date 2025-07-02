import { expect } from 'chai';
import { parseInput } from '../src/inputParser'; // Adjust the import as necessary

describe('parseInput Function', () => {
  it('should parse normal exempt item correctly', () => {
    const result = parseInput("1 book at 12.49");
    expect(result).to.deep.equal({
      quantity: 1,
      name: "book",
      price: 12.49,
      isImported: false,
      isExempt: true,
    });
  });

  it('should parse normal non-exempt item', () => {
    const result = parseInput("1 music CD at 14.99");
    expect(result).to.deep.equal({
      quantity: 1,
      name: "music CD",
      price: 14.99,
      isImported: false,
      isExempt: false,
    });
  });

  it('should parse imported exempt item', () => {
    const result = parseInput("1 imported box of chocolates at 10.00");
    expect(result).to.deep.equal({
      quantity: 1,
      name: "imported box of chocolates",
      price: 10.00,
      isImported: true,
      isExempt: true,
    });
  });

  it('should parse imported non-exempt item', () => {
    const result = parseInput("1 imported bottle of perfume at 47.50");
    expect(result).to.deep.equal({
      quantity: 1,
      name: "imported bottle of perfume",
      price: 47.50,
      isImported: true,
      isExempt: false,
    });
  });

  it('should handle multi-word item names and quantity > 1', () => {
    const result = parseInput("2 imported boxes of pills at 5.00");
    expect(result).to.deep.equal({
      quantity: 2,
      name: "imported boxes of pills",
      price: 5.00,
      isImported: true,
      isExempt: true,
    });
  });

  it('should throw error if "at" is missing', () => {
    expect(() => parseInput("1 chocolate bar 0.85")).to.throw("error no at");
  });

  it('should throw error for negative price', () => {
    expect(() => parseInput("1 book at -5.00")).to.throw("error price cannot be less than 0");
  });

  it('should throw error for invalid quantity 0', () => {
    expect(() => parseInput("0 book at 12.49")).to.throw("error quantity cannot be negative or 0");
  });

  it('should throw error for invalid quantity -1', () => {
    expect(() => parseInput("-1 music CD at 14.99")).to.throw("error quantity cannot be negative or 0");
  });

  it('should parse when "Imported" is in different case', () => {
    const result = parseInput("1 IMPORTED box of chocolates at 10.00");
    expect(result.isImported).to.be.true;
  });

  it('should parse when item name contains exempt word as part', () => {
    const result = parseInput("1 chocolate-coated candy at 2.00");
    expect(result.isExempt).to.be.true;
  });
});
