import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: {
    tsconfig: './tsconfig.build.json',
    tsgo: true,
  },
})
