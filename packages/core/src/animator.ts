import { calculatePatch, diff } from './patch'
import type { Patch } from './type'

interface AnimatorStep {
  cursor: number
  content: string
  patch: Patch
  patchIndex: number
  char?: string
}
export function* createAnimator(input: string, patches: Patch[]): Generator<AnimatorStep> {
  let output = input
  let cursor = 0
  for (let patchIndex = 0; patchIndex < patches.length; patchIndex++) {
    const patch = patches[patchIndex]
    if (patch.type === 'insert') {
      cursor = patch.from
      const head = output.slice(0, patch.from)
      const tail = output.slice(patch.from)

      let selection = ''
      for (const char of patch.text) {
        selection += char
        yield {
          char,
          cursor: cursor + selection.length,
          content: head + selection + tail,
          patch,
          patchIndex,
        }
      }
      // 插入的时候，拿到index前所有字符，拼接当前插入字符 加上剩下字符
      output = head + patch.text + tail
    }

    else if (patch.type === 'removal') {
      cursor = patch.from - patch.length // 获取最前的光标位置
      const head = output.slice(0, cursor)
      const tail = output.slice(patch.from)
      const selection = output.slice(cursor, patch.from) // 选中删除的内容
      for (let i = selection.length - 1; i >= 0; i--)
        yield { cursor: cursor + i, content: head + selection.slice(0, i) + tail, patch, patchIndex }

      // 删除的时候，拿到当前index - 删除长度的字符，加上剩下字符
      output = head + tail
    }
  }
}
export function simpleAnimator(input: string, output: string) {
  const delta = diff(input, output)
  const patches = calculatePatch(delta)
  return createAnimator(input, patches)
}
