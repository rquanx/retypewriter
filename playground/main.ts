import { calculatePatch, createAnimator, diff } from '../packages/core/src'

const inputEl = document.getElementById('input') as HTMLTextAreaElement
const outputEl = document.getElementById('output') as HTMLTextAreaElement
const typingEl = document.getElementById('typing') as HTMLParagraphElement
let input = `
import { describe, expect, it } from 'vitest'
import { one } from '../src'

describe('should', () => {
  it('exported', () => {
    expect(one).toEqual(1)
  })
})
`
let output = `
import { describe, expect, it } from 'vitest'

describe('should', () => {
  it('one', () => {
    expect(one).toEqual(1)
    expect(two).toEqual(2)
  })
})
`

inputEl.value = input
outputEl.value = output

inputEl.addEventListener('input', () => {
  input = inputEl.value
  start()
})

outputEl.addEventListener('input', () => {
  output = outputEl.value
  start()
})

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function start() {
  const _input = input
  const patches = calculatePatch(diff(_input, output))
  const animator = createAnimator(_input, patches)

  for (const result of animator) {
    typingEl.textContent = result.content
    await sleep(Math.random() * 100)
  }
}
start()
//   typeIt.type('Nvver', { delay: 300 })
//     .move(-3)
//     .delete(1)
//     .type('e')
//     .move(null, { to: 'END' })
//     .type(' let yees')
//     .pause(300)
//     .delete(2)
//     .type('sterday use up to muc')
//     .move(-4)
//     .type('o')
//     .move(null, { to: 'END' })
//     .type('h of today.')
//     .pause(500)
//     .break({ delay: 500 })
//     .break({ delay: 500 })
//     .type('<em>- Will Rogers</em>')
//     .go()
// }
// start()
