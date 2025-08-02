# WebAssembly Node.js TypeScript Boilerplate

[![GitHub license](https://img.shields.io/github/license/yuis-ice/wasm-boilerplate)](https://github.com/yuis-ice/wasm-boilerplate/blob/main/LICENSE)
[![Node.js CI](https://img.shields.io/badge/Node.js-v16%2B-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue)](https://www.typescriptlang.org/)
[![WebAssembly](https://img.shields.io/badge/WebAssembly-supported-orange)](https://webassembly.org/)

A modern, production-ready boilerplate for building Node.js applications with TypeScript and WebAssembly integration. This project demonstrates best practices for combining the performance of WebAssembly with the flexibility of Node.js and the type safety of TypeScript.

## 🌟 Features

- **WebAssembly Integration**: Hand-crafted WebAssembly modules with TypeScript bindings
- **Graceful Fallback**: Automatic JavaScript fallback when WebAssembly is unavailable
- **Mathematical Functions**: Optimized implementations for:
  - Addition and multiplication operations
  - Fibonacci sequence calculation
- **Performance Benchmarking**: Built-in performance comparison between WebAssembly and JavaScript
- **Type Safety**: Full TypeScript support with strict type checking
- **Modern Development**: ES2020 target with modern JavaScript features
- **Production Ready**: Comprehensive error handling and logging

## 🚀 Quick Start

### Prerequisites

- Node.js v16 or higher
- npm or yarn package manager
- (Optional) WABT (WebAssembly Binary Toolkit) for custom WebAssembly modules

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yuis-ice/wasm-boilerplate.git
cd wasm-boilerplate
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Run the application:
```bash
npm start
```

Or build and run in one command:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── index.ts          # Main application entry point
├── wasmMath.ts       # WebAssembly wrapper class with TypeScript bindings
└── math.wat          # WebAssembly module source (WAT format)

dist/                 # Compiled output directory
├── index.js          # Compiled JavaScript
├── wasmMath.js       # Compiled WebAssembly wrapper
└── math.wasm         # Compiled WebAssembly binary (if WABT available)

.github/              # GitHub configuration
├── ISSUE_TEMPLATE/   # Issue templates
├── DISCUSSIONS.md    # Discussions guidelines
└── PULL_REQUEST_TEMPLATE.md
```

## 🛠️ Available Scripts

- `npm run build` - Compile TypeScript and WebAssembly modules
- `npm run build:wasm` - Compile WebAssembly modules only (requires WABT)
- `npm run build:full` - Full build including WebAssembly compilation
- `npm start` - Run the compiled application
- `npm run dev` - Build and run in development mode
- `npm run clean` - Clean the dist directory

## 🔧 WebAssembly Integration

This project demonstrates how to integrate WebAssembly with Node.js and TypeScript:

### WebAssembly Module

The WebAssembly module (`math.wat`) provides optimized mathematical functions:

- `add(a, b)` - Addition of two integers
- `multiply(a, b)` - Multiplication of two integers  
- `fibonacci(n)` - Calculate the nth Fibonacci number

### TypeScript Wrapper

The `WasmMath` class provides a clean TypeScript interface to the WebAssembly module with:

- Type-safe method signatures
- Automatic initialization
- Graceful fallback to JavaScript implementation
- Error handling and validation

## 📊 Performance

The application includes built-in performance benchmarking to compare WebAssembly and JavaScript implementations. Generally, WebAssembly provides better performance for computation-intensive tasks, especially with larger datasets.

Example output:
```
--- Performance Test ---
WebAssembly fibonacci: 2.341ms
JavaScript fibonacci: 3.892ms
```

## 🔨 Development

### Installing WABT (Optional)

For custom WebAssembly development, install the WebAssembly Binary Toolkit:

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install wabt

# macOS (Homebrew)
brew install wabt

# or via npm
npm install -g wabt
```

### Creating Custom WebAssembly Modules

1. Write your module in WebAssembly Text format (`.wat`)
2. Compile using WABT: `wat2wasm module.wat -o module.wasm`
3. Load in TypeScript using the WebAssembly API

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](https://github.com/yuis-ice/wasm-boilerplate/wiki)
- 💬 [Discussions](https://github.com/yuis-ice/wasm-boilerplate/discussions)
- 🐛 [Report Issues](https://github.com/yuis-ice/wasm-boilerplate/issues)

## 🏷️ Keywords

`nodejs` `typescript` `webassembly` `wasm` `boilerplate` `template` `performance` `mathematics`

---

Made with ❤️ by [.fumiya.tsx](https://github.com/yuis-ice)
