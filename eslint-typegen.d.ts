/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * Enforce using String() instead of single-member template expressions.
   * @see https://github.com/sxzz/eslint-plugin-sxzz/blob/main/src/rules/prefer-string-function.md
   */
  'sxzz/prefer-string-function'?: Linter.RuleEntry<[]>
  /**
   * Require specific fields in package.json
   * @see https://github.com/sxzz/eslint-plugin-sxzz/blob/main/src/rules/require-package-field.test.ts
   */
  'sxzz/require-package-field'?: Linter.RuleEntry<SxzzRequirePackageField>
}

/* ======= Declarations ======= */
// ----- sxzz/require-package-field -----
type SxzzRequirePackageField = []|[{
  fields?: string[]
  [k: string]: unknown | undefined
}]