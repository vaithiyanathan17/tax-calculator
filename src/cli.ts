import * as readline from 'readline';
import { main } from './index';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputArray: string[] = [];

console.log('Enter items one per line (type "done" to finish):');

rl.on('line', (line) => {
  if (line.trim().toLowerCase() === 'done') {
    rl.close();
    const result = main(inputArray);
    console.log('\n--- Receipt ---');
    result.forEach(line => console.log(line));
    return;
  }

  inputArray.push(line.trim());
});
