import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm'],
  target: 'node18.12',
  clean: true,
  platform: 'node',
  dts: true,
})
