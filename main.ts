import TypeIt from 'typeit'
import { applyPatches, calculatePatch, diff } from './src'

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

let typeIt: any
function start() {
  if (typeIt)
    typeIt.reset()

  typingEl.textContent = ''
  // @ts-expect-error
  typeIt = new TypeIt(typingEl, {
    speed: 50,
    waitUntilVisible: true,
  })
  typeIt.type(input, { instant: true })
  const patches = calculatePatch(diff(input, output))

  for (const patch of patches) {
    typeIt.pause(800)
    if (patch.type === 'insert') {
      typeIt.move(null, { to: 'START', instant: true })
        .move(patch.from, { instant: true })
        .type(patch.text, { delay: 300 })
        .move(-3)
    }
    else {
      typeIt.move(null, { to: 'START', instant: true })
        .move(patch.from, { instant: true }).delete(patch.length)
    }
  }
  typeIt.go()
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
