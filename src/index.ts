import pkg from '../package.json' with { type: 'json' }
import preferStringFunction from './rules/prefer-string-function.ts'
import requirePackageField from './rules/require-package-field.ts'
import type { ESLint, Linter } from 'eslint'

export const plugin = {
  meta: {
    name: 'sxzz',
    version:pkg.version,
  },
  // @keep-sorted
  rules: {
    'prefer-string-function': preferStringFunction,
    'require-package-field': requirePackageField,
  },
} satisfies ESLint.Plugin

export default plugin

type RuleDefinitions = (typeof plugin)['rules']

export type RuleOptions = {
  [K in keyof RuleDefinitions]: RuleDefinitions[K]['defaultOptions']
}

export type Rules = {
  [K in keyof RuleOptions]: Linter.RuleEntry<RuleOptions[K]>
}
