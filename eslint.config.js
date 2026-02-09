import { sxzz } from '@sxzz/eslint-config'

export default sxzz({
  baseline: {
    ignoreFeatures: ['top-level-await'],
  },
}).append(
  {
    rules: {
      'import/no-default-export': 'off',
      'sxzz/require-package-field': 'error',
    },
  },
  {
    ignores: ['eslint-typegen.d.ts'],
  },
)
