import { expect, it } from 'vitest'
import { applyPatches, calculatePatch, createAnimator, diff } from '../src'

import { input, output } from './fixture'
it('animator', () => {
  const delta = diff(input, output)
  const patches = calculatePatch(delta)
  const applied = applyPatches(input, patches)
  const animator = createAnimator(applied.output, patches)
  expect([...animator]).toMatchSnapshot('animator')
})
