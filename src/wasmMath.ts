export interface MathWasmExports extends WebAssembly.Exports {
  add: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  fibonacci: (n: number) => number;
}

export class WasmMath {
  private wasmInstance: WebAssembly.Instance | null = null;
  private exports: MathWasmExports | null = null;
  private useWasm = false;

  async initialize(): Promise<void> {
    try {
      // 簡単なWebAssemblyバイナリを作成して試行
      const wasmModule = await this.createSimpleWasmModule();
      this.wasmInstance = await WebAssembly.instantiate(wasmModule);
      this.exports = this.wasmInstance.exports as MathWasmExports;
      this.useWasm = true;
      
      console.log('WebAssembly module loaded successfully!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.warn('WebAssembly not available, using JavaScript fallback:', errorMessage);
      // JavaScriptフォールバック実装を使用
      this.exports = {
        add: (a: number, b: number) => a + b,
        multiply: (a: number, b: number) => a * b,
        fibonacci: (n: number) => {
          if (n < 2) return n;
          let a = 0, b = 1;
          for (let i = 2; i <= n; i++) {
            const temp = a + b;
            a = b;
            b = temp;
          }
          return b;
        }
      } as MathWasmExports;
      this.useWasm = false;
      console.log('JavaScript fallback initialized successfully!');
    }
  }

  private async createSimpleWasmModule(): Promise<WebAssembly.Module> {
    // より正確なWebAssemblyバイナリを作成
    const wasmBytecode = new Uint8Array([
      0x00, 0x61, 0x73, 0x6d, // magic number
      0x01, 0x00, 0x00, 0x00, // version
      
      // Type section
      0x01, 0x0c, 0x03,
      0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f, // function type (i32, i32) -> i32
      0x60, 0x01, 0x7f, 0x01, 0x7f,       // function type (i32) -> i32
      0x60, 0x00, 0x00,                   // function type () -> void
      
      // Function section
      0x03, 0x04, 0x03, 0x00, 0x00, 0x01,
      
      // Export section
      0x07, 0x25, 0x03,
      0x03, 0x61, 0x64, 0x64, 0x00, 0x00,                                    // "add"
      0x08, 0x6d, 0x75, 0x6c, 0x74, 0x69, 0x70, 0x6c, 0x79, 0x00, 0x01,     // "multiply"
      0x09, 0x66, 0x69, 0x62, 0x6f, 0x6e, 0x61, 0x63, 0x63, 0x69, 0x00, 0x02, // "fibonacci"
      
      // Code section
      0x0a, 0x1e, 0x03,
      
      // add function: local.get 0; local.get 1; i32.add; end
      0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x0b,
      
      // multiply function: local.get 0; local.get 1; i32.mul; end  
      0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6c, 0x0b,
      
      // fibonacci function (simplified implementation)
      0x0c, 0x00, 0x20, 0x00, 0x41, 0x02, 0x49, 0x04, 0x7f, 0x20, 0x00, 0x05, 0x41, 0x01, 0x0b, 0x0b
    ]);

    return await WebAssembly.compile(wasmBytecode);
  }

  add(a: number, b: number): number {
    if (!this.exports) {
      throw new Error('Module not initialized');
    }
    return this.exports.add(a, b);
  }

  multiply(a: number, b: number): number {
    if (!this.exports) {
      throw new Error('Module not initialized');
    }
    return this.exports.multiply(a, b);
  }

  fibonacci(n: number): number {
    if (!this.exports) {
      throw new Error('Module not initialized');
    }
    if (n < 0) {
      throw new Error('Fibonacci input must be non-negative');
    }
    return this.exports.fibonacci(n);
  }

  isInitialized(): boolean {
    return this.exports !== null;
  }

  isUsingWasm(): boolean {
    return this.useWasm;
  }
}
