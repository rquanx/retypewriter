import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  externals: [
    'vscode',
  ],
  clean: true,
  rollup: {
    inlineDependencies: true,
    emitCJS: true,
  },
})
