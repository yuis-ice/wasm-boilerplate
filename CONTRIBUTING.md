# Contributing to WebAssembly Node.js TypeScript Boilerplate

Thank you for your interest in contributing to this project! We welcome contributions from the community and are grateful for any help you can provide.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Contributor License Agreement (CLA)](#contributor-license-agreement-cla)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [jobs.fumiya@pm.me](mailto:jobs.fumiya@pm.me).

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/wasm-boilerplate.git
   cd wasm-boilerplate
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Setup

### Prerequisites

- Node.js v16 or higher
- npm or yarn package manager
- Git
- (Optional) WABT for WebAssembly development

### Environment Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Run the application:
   ```bash
   npm start
   ```

4. Run in development mode:
   ```bash
   npm run dev
   ```

## 💡 How to Contribute

### Types of Contributions

We welcome several types of contributions:

- **Bug Reports**: Found a bug? Please report it!
- **Feature Requests**: Have an idea for a new feature?
- **Code Contributions**: Bug fixes, new features, optimizations
- **Documentation**: Improvements to README, code comments, or examples
- **Performance Optimizations**: WebAssembly or JavaScript performance improvements

### Reporting Bugs

Before creating bug reports, please check the issue tracker as you might find that the issue has already been reported. When creating a bug report, please include:

- **Description**: A clear and concise description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the behavior
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**: OS, Node.js version, npm version
- **Additional Context**: Screenshots, logs, or other relevant information

### Suggesting Features

Feature requests are welcome! Please provide:

- **Description**: A clear description of the feature
- **Use Case**: Why this feature would be useful
- **Implementation Ideas**: Any thoughts on how it could be implemented
- **Alternatives**: Any alternative solutions you've considered

## 🔄 Pull Request Process

1. **Ensure your code follows our coding standards** (see below)
2. **Update documentation** if necessary
3. **Add or update tests** for your changes
4. **Ensure all tests pass**: `npm test` (when available)
5. **Update the README.md** if needed
6. **Create a Pull Request** with a clear title and description

### Pull Request Guidelines

- **Title**: Use a clear and descriptive title
- **Description**: Explain what changes you made and why
- **Reference Issues**: Link to any related issues
- **Breaking Changes**: Clearly mark any breaking changes
- **Testing**: Describe how you tested your changes

## 📝 Coding Standards

### TypeScript Guidelines

- Use **TypeScript strict mode**
- Follow **ESLint** rules (when configured)
- Use **meaningful variable names**
- Add **type annotations** where helpful
- Document **complex functions** with JSDoc comments

### Code Style

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings
- **Semicolons**: Always use semicolons
- **Line Length**: Max 100 characters
- **Naming**: camelCase for variables and functions, PascalCase for classes

### WebAssembly Guidelines

- **Comment WAT code** clearly
- **Optimize for performance** when appropriate
- **Provide JavaScript fallbacks** for all WebAssembly functions
- **Test both WASM and JS paths**

## 🧪 Testing

Currently, this project uses manual testing. We encourage contributors to:

- **Test all functionality** after making changes
- **Test both WebAssembly and JavaScript fallback paths**
- **Verify performance improvements** where applicable
- **Test on multiple Node.js versions** when possible

Future plans include automated testing with Jest or similar frameworks.

## 📚 Documentation

When contributing, please ensure:

- **Code is self-documenting** where possible
- **Complex logic is commented**
- **README.md is updated** for new features
- **API changes are documented**
- **Examples are provided** for new functionality

## ⚖️ Contributor License Agreement (CLA)

By submitting a pull request or contribution, you agree to the following:

> You grant the project founder a **non-exclusive, irrevocable, worldwide, royalty-free license** to use, modify, sublicense, and relicense your contribution, including the right to incorporate it into dual-licensed or commercial versions of the project.

This ensures that the project can grow sustainably while preserving creator rights.  
If you are contributing on behalf of a company or organization, please contact us in advance.

### Why We Need a CLA

The CLA ensures:
- **Project Sustainability**: The project can evolve and be maintained long-term
- **Legal Clarity**: Clear rights and responsibilities for all contributors
- **Commercial Viability**: Ability to create commercial offerings while keeping the open-source version free
- **Protection**: Legal protection for both contributors and maintainers

## 📞 Getting Help

If you need help or have questions:

- **Discussions**: Use [GitHub Discussions](https://github.com/yuis-ice/wasm-boilerplate/discussions) for general questions
- **Issues**: Create an issue for bug reports or feature requests
- **Email**: Contact [jobs.fumiya@pm.me](mailto:jobs.fumiya@pm.me) for private matters

## 🙏 Recognition

All contributors will be recognized in our README and release notes. We appreciate every contribution, no matter how small!

Thank you for contributing to the WebAssembly Node.js TypeScript Boilerplate! 🎉
