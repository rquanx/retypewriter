import type { Patch } from './type'
export function* createAnimator(input: string, patches: Patch[]) {
  let output = input
  let cursor = 0
  for (const patch of patches) {
    if (patch.type === 'insert') {
      cursor = patch.from
      const head = output.slice(0, patch.from)
      const tail = output.slice(patch.from)

      let selection = ''
      for (const char of patch.text) {
        selection += char
        yield { cursor: cursor + selection.length, output: head + selection + tail }
      }
      // 插入的时候，拿到index前所有字符，拼接当前插入字符 加上剩下字符
      output = head + patch.text + tail
    }

    else if (patch.type === 'removal') {
      cursor = patch.from + patch.length
      const head = output.slice(0, patch.from - patch.length)
      const tail = output.slice(patch.from)
      const selection = output.slice(patch.from - patch.length, patch.from)
      for (let i = selection.length; i >= 0; i--)
        yield { cursor: cursor + 1, output: head + selection.slice(0, i) + tail }

      // 删除的时候，拿到当前index - 删除长度的字符，加上剩下字符
      output = head + tail
    }
  }
}
