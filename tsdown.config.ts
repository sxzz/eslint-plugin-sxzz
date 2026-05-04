import { nodeLib } from 'tsdown-preset-sxzz'

export default nodeLib(
  {},
  {
    dts: { tsgo: true },
    deps: {
      neverBundle: [/^@typescript-eslint\//],
    },
    treeshake: {
      moduleSideEffects: false,
    },
    plugins: [
      {
        name: 'inject-eslint-typegen',
        renderChunk(code, chunk) {
          if (chunk.fileName.endsWith('index.d.mts')) {
            return `/// <reference path="../eslint-typegen.d.ts" />\n${code}`
          }
        },
      },
    ],
  },
)
