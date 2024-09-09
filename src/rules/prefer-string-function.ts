import { createEslintRule } from '../utils'

export const RULE_NAME = 'prefer-string-function'
export type MessageIds = 'stringFunction'
export type Options = []

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'layout',
    docs: {
      description:
        'Enforce using String() instead of single-member template expressions.',
    },
    fixable: 'code',
    schema: [],
    messages: {
      stringFunction: 'Prefer `String()` instead of template expression',
    },
  },
  defaultOptions: [],
  create(context) {
    return {
      TemplateLiteral(node) {
        if (
          node.expressions.length === 1 &&
          node.quasis.length === 2 &&
          node.quasis.every((quasi) => quasi.value.raw === '')
        ) {
          const expression = node.expressions[0]
          return context.report({
            messageId: 'stringFunction',
            node,
            fix(fixer) {
              return [
                fixer.replaceTextRange(
                  [node.range[0], expression.range[0]],
                  'String(',
                ),
                fixer.replaceTextRange(
                  [expression.range[1], node.range[1]],
                  ')',
                ),
              ]
            },
          })
        }
      },
    }
  },
})
