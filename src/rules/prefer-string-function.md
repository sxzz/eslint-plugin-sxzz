# prefer-string-function

Enforce using `String()` instead of single-member template expressions.

## Rule Details

<!-- eslint-skip -->

```js
// 👎 bad
const str = `${foo}`
```

<!-- eslint-skip -->

```js
// 👍 good
const str = String(foo)
```
