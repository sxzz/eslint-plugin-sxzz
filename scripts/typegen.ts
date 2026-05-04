import fs from 'node:fs/promises'
import { pluginsToRulesDTS } from 'eslint-typegen/core'
import plugin from '../src/index.ts'

const dts = await pluginsToRulesDTS({
  sxzz: plugin,
})

await fs.writeFile('eslint-typegen.d.ts', dts)
