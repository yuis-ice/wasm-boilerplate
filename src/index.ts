import { WasmMath } from './wasmMath';

async function main(): Promise<void> {
  console.log('🚀 Starting Node.js TypeScript WebAssembly Application...\n');

  try {
    // Initialize WebAssembly module
    const wasmMath = new WasmMath();
    await wasmMath.initialize();

    console.log(`✨ Math Module Demo (${wasmMath.isUsingWasm() ? 'WebAssembly' : 'JavaScript Fallback'}) ✨\n`);

    // Addition test
    console.log('--- Addition Test ---');
    const a = 15;
    const b = 27;
    const sum = wasmMath.add(a, b);
    console.log(`${a} + ${b} = ${sum}`);
    
    // Multiplication test
    console.log('\n--- Multiplication Test ---');
    const x = 8;
    const y = 9;
    const product = wasmMath.multiply(x, y);
    console.log(`${x} × ${y} = ${product}`);

    // Fibonacci sequence test
    console.log('\n--- Fibonacci Sequence Test ---');
    const fibNumbers = [0, 1, 5, 10, 15, 20];
    
    fibNumbers.forEach(n => {
      const result = wasmMath.fibonacci(n);
      console.log(`fibonacci(${n}) = ${result}`);
    });

    // Performance test
    console.log('\n--- Performance Test ---');
    const iterations = 10000; // Adjusted to a more realistic number
    const testNumber = 20;    // Smaller number for stable testing
    
    // Measure execution time of current engine (WebAssembly or JavaScript)
    const engineName = wasmMath.isUsingWasm() ? 'WebAssembly' : 'JavaScript (in class)';
    console.time(`${engineName} fibonacci`);
    for (let i = 0; i < iterations; i++) {
      wasmMath.fibonacci(testNumber);
    }
    console.timeEnd(`${engineName} fibonacci`);

    // Pure JavaScript fibonacci function for comparison
    function jsFibonacci(n: number): number {
      if (n < 2) return n;
      let a = 0, b = 1;
      for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
      }
      return b;
    }

    // Measure execution time of JavaScript version
    console.time('JavaScript fibonacci');
    for (let i = 0; i < iterations; i++) {
      jsFibonacci(testNumber);
    }
    console.timeEnd('JavaScript fibonacci');

    console.log('\n🎉 Application completed successfully!');
    
  } catch (error) {
    console.error('❌ Application failed:', error);
    process.exit(1);
  }
}

// Error handling
process.on('unhandledRejection', (reason: any, promise: any) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

process.on('uncaughtException', (error: any) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Run application
if (require.main === module) {
  main().catch(console.error);
}
