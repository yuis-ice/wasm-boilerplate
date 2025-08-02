# Pull Request Template

## 📋 Description

**What does this PR do?**
<!-- Provide a brief description of your changes -->

**Related Issue(s)**
<!-- Link to any related issues using "Fixes #123" or "Closes #123" -->

## 🔄 Type of Change

Please mark the relevant option(s):

- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📚 Documentation update
- [ ] 🎨 Code style/formatting changes
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvements
- [ ] 🧪 Adding or updating tests
- [ ] 🔧 Build system changes
- [ ] 🌐 WebAssembly improvements

## 🧪 Testing

**How has this been tested?**
<!-- Describe how you tested your changes -->

- [ ] Manual testing
- [ ] Automated tests (if available)
- [ ] Performance testing
- [ ] Cross-platform testing

**Test Configuration:**
- Node.js version: 
- Operating System: 
- WebAssembly support: Yes/No

## 📝 Checklist

Please review and check all applicable items:

### General
- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings or errors

### WebAssembly Specific
- [ ] WebAssembly modules compile correctly (if applicable)
- [ ] JavaScript fallback works properly (if applicable)
- [ ] Performance improvements are documented (if applicable)
- [ ] Type definitions are updated (if applicable)

### Documentation
- [ ] README.md updated (if needed)
- [ ] Code comments added/updated
- [ ] API documentation updated (if applicable)
- [ ] Examples updated (if applicable)

### Breaking Changes
- [ ] This PR contains no breaking changes
- [ ] Breaking changes are clearly documented
- [ ] Migration guide provided (if applicable)

## 📊 Performance Impact

**Does this change affect performance?**
- [ ] No performance impact
- [ ] Performance improvement
- [ ] Performance regression (please explain why this trade-off is necessary)

**If performance is affected, please provide:**
<!-- Include benchmark results, profiling data, etc. -->

```
Before: X ms
After: Y ms
Improvement: Z%
```

## 🔍 Code Review Notes

**Areas that need special attention:**
<!-- Highlight any complex changes or areas where you'd like focused review -->

**Questions for reviewers:**
<!-- Any specific questions or concerns you have -->

## 📸 Screenshots/Examples

**Before:**
<!-- Screenshots or code examples of the current behavior -->

**After:**
<!-- Screenshots or code examples of the new behavior -->

## 🔗 Additional Context

**Links:**
<!-- Any relevant links to issues, documentation, or external resources -->

**Dependencies:**
<!-- Any new dependencies or version updates -->

## ⚖️ Contributor License Agreement

By submitting this pull request, I confirm that:

- [ ] I have read and agree to the [Contributor License Agreement](../CONTRIBUTING.md#contributor-license-agreement-cla)
- [ ] I grant the project founder a non-exclusive, irrevocable, worldwide, royalty-free license to use, modify, sublicense, and relicense my contribution
- [ ] I am authorized to make this contribution (if contributing on behalf of an organization)

---

**Thank you for your contribution!** 🎉

<!-- 
Review Guidelines for Maintainers:
- Verify all checklist items are completed
- Test both WebAssembly and JavaScript fallback paths
- Check for TypeScript compilation errors
- Verify documentation is updated
- Consider performance implications
- Ensure backward compatibility (unless breaking change is justified)
-->
