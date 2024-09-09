import { expect } from 'vitest'
import { run } from './_test'
import rule, { RULE_NAME } from './prefer-string-function'
import type { InvalidTestCase, ValidTestCase } from 'eslint-vitest-rule-tester'

const valids: ValidTestCase[] = ['String(foo)', '`str${foo}`', '`${foo}${bar}`']

// Check snapshot for fixed code
const invalid: InvalidTestCase[] = [
  {
    code: '`${foo}`',
    output: (o) => expect(o).toMatchInlineSnapshot(`"String(foo)"`),
  },
  {
    code: '`${[]}`',
    output: (o) => expect(o).toMatchInlineSnapshot(`"String([])"`),
  },
]

run({
  name: RULE_NAME,
  rule,

  valid: valids,
  invalid: invalid.map(
    (i): InvalidTestCase =>
      typeof i === 'string'
        ? {
            code: i,
            output: (o) => expect(o).toMatchSnapshot(),
          }
        : i,
  ),
})
