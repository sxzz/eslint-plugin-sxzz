import * as parser from 'jsonc-eslint-parser'
import { run } from './_test'
import rule, { RULE_NAME } from './require-package-field'
import type { InvalidTestCase, ValidTestCase } from 'eslint-vitest-rule-tester'

function make(data: any, fields: string[], errs: string[] = []) {
  return {
    code: JSON.stringify(data),
    filename: './package.json',
    options: [{ fields }],
    errors: errs.map((err) => ({ messageId: err })),
  }
}

const valids: ValidTestCase[] = [make({ x: true }, ['x'])]

// Check snapshot for fixed code
const invalids: InvalidTestCase[] = [
  make(0, ['x'], ['packageJsonNotObject']),
  make({ y: true }, ['x'], ['requirePackageField']),
  make(
    { a: 1 },
    ['a', 'b', 'c'],
    ['requirePackageField', 'requirePackageField'],
  ),
]

run({
  name: RULE_NAME,
  rule,
  valid: valids,
  invalid: invalids,
  parser,
})
