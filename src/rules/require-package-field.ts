import path from 'node:path'
import { createEslintRule } from '../utils'
import type { AST } from 'jsonc-eslint-parser'

export const RULE_NAME = 'require-package-field'
export type MessageIds = 'requirePackageField' | 'packageJsonNotObject'
export type Options = [
  {
    /** @default ['description', 'type', 'license', 'homepage', 'bugs', 'repository', 'author', 'funding'] */
    fields: (
      | (string & {})
      | 'description'
      | 'type'
      | 'license'
      | 'homepage'
      | 'bugs'
      | 'repository'
      | 'author'
      | 'funding'
    )[]
  },
]

const DEFAULT_FIELDS = [
  'description',
  'type',
  'license',
  'homepage',
  'bugs',
  'repository',
  'author',
  'funding',
]

export default createEslintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'layout',
    docs: {
      description: 'Require specific fields in package.json',
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: { fields: { type: 'array', items: { type: 'string' } } },
      },
    ],
    messages: {
      requirePackageField: 'Missing required field "{{field}}" in package.json',
      packageJsonNotObject: 'package.json must be an object',
    },
  },
  defaultOptions: [{ fields: DEFAULT_FIELDS }],
  create(context, options) {
    if (path.basename(context.filename) !== 'package.json') {
      return {}
    }
    const fields = options[0]?.fields || DEFAULT_FIELDS
    return {
      JSONExpressionStatement(node: AST.JSONExpressionStatement) {
        if (node.expression.type !== 'JSONObjectExpression') {
          return context.report({
            messageId: 'packageJsonNotObject',
            node: node as any,
          })
        }
        const obj = node.expression

        for (const field of fields) {
          const has = obj.properties.some((prop) => {
            return (
              prop.type === 'JSONProperty' &&
              prop.key.type === 'JSONLiteral' &&
              prop.key.value === field
            )
          })
          if (!has) {
            context.report({
              messageId: 'requirePackageField',
              node: node as any,
              data: { field },
            })
          }
        }
      },
    }
  },
})
