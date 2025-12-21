import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: {
    tsgo: true,
  },
  exports: true,
  inlineOnly: [],
  plugins: [
    {
      name: 'inject-eslint-typegen',
      renderChunk(code, chunk) {
        if (chunk.fileName.endsWith('index.d.ts')) {
          return `/// <reference path="../eslint-typegen.d.ts" />\n${code}`
        }
      },
    },
  ],
})
