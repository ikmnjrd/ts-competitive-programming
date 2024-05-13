import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.ts',],
    exclude: [...configDefaults.exclude, 'packages/template/*'],
  },
})