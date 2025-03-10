import { sxzz } from '@sxzz/eslint-config'

export default sxzz().append({
  rules: {
    'import/no-default-export': 'off',
    'sxzz/require-package-field': 'error',
  },
})
