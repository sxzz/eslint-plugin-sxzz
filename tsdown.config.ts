import { rollup } from 'rollup'
import { dts } from 'rollup-plugin-dts'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm'],
  target: 'node18.12',
  clean: true,
  platform: 'node',
  async onSuccess() {
    const bundle = await rollup({
      input: ['./src/index.ts'],
      plugins: [
        dts({
          compilerOptions: { preserveSymlinks: false },
        }),
      ],
    })
    await bundle.write({ file: 'dist/index.d.ts' })
  },
})
