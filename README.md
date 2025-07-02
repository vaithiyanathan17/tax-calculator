# Tax Calculator

A dynamic, runtime tax calculator for products, featuring a flexible architecture using the **Decorator Pattern**. This project allows you to easily compute sales and import taxes for various products, with a user-friendly CLI and robust test coverage.

## Features

- **Decorator Pattern for Tax Calculation**  
  The tax calculation logic is implemented using the decorator pattern, allowing dynamic composition of tax rules at runtime. Each tax (sales, import) is a decorator that can be layered, making the system highly extensible and maintainable.

- **Dynamic Runtime Behavior**  
  Tax rules are applied dynamically at runtime, enabling flexible combinations and easy future extensions.

- **Tax Rules**  
  - **Sales Tax**: 10% for all non-exempt products.
  - **Import Tax**: Additional 5% for all imported products.

- **CLI for User Interaction**  
  A command-line interface is provided for easy user input and interaction. Users can enter product details line by line, and receive a formatted receipt with calculated taxes and totals.

- **Comprehensive Tests**  
  The repository includes tests for all major functionalities, ensuring correctness and reliability.

## How It Works

- **Decorator Pattern Example**:  
  The core tax calculation is composed as follows:
  ```
  ImportTaxCalculator(
    SalesTaxCalculator(
      BaseTaxCalculator()
    )
  )
  ```
  Each calculator decorates the previous one, adding its own tax logic.

- **Runtime Composition**:  
  At runtime, the system determines which taxes apply to each product and calculates the total accordingly.

## Getting Started

### Installation

```bash
npm install
```

### Usage

#### CLI

To use the interactive CLI:

```bash
npm run cli
```

You will be prompted to enter items one per line (e.g., `1 imported bottle of perfume at 47.50`). Type `done` to finish and see the receipt.

#### Programmatic Usage

You can also use the main function directly:

```typescript
import { main } from './src';

const input = [
  "1 imported box of chocolates at 10.00",
  "1 imported bottle of perfume at 47.50"
];
const receipt = main(input);
console.log(receipt.join('\n'));
```

### Running Tests

```bash
npm test
```

## Example

**Input:**
```
1 imported box of chocolates at 10.00
1 imported bottle of perfume at 47.50
```

**Output:**
```
1 imported box of chocolates : 10.50
1 imported bottle of perfume : 54.65
Sales Taxes : 7.65
Total : 65.15
```

## Project Structure

- `src/calculators/` - Tax calculator classes using the decorator pattern
- `src/cli.ts` - Command-line interface
- `src/receipt.ts` - Receipt generation logic
- `src/main.ts` - Programatic interface for creating receipt
- `test/` - Test cases for all major functionalities

## Extending

To add new tax rules, simply create a new calculator class implementing the `TaxCalculator` interface and compose it as needed.

