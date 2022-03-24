import type { Diff } from 'diff-match-patch'
import { diff_match_patch as DMP } from 'diff-match-patch'
import type { Patch } from './type'

export const diff = (a: string, b: string): Diff[] => {
  const differ = new DMP()
  const delta = differ.diff_main(a, b)
  differ.diff_cleanupSemantic(delta)
  return delta
}

export const calculatePatch = (diff: Diff[]): Patch[] => {
  const patches: Patch[] = []
  let index = 0
  for (const change of diff) {
    if (change[0] === 0) {
      index += change[1].length
      continue
    }
    if (change[0] === -1) {
      const length = change[1].length
      patches.push({
        type: 'removal',
        // 因为是从后往前删除，所以删除的位置是index + 删除的长度
        from: index + length,
        length,
      })
      // 删除后，index不变，即光标位置不变
    }
    if (change[0] === 1) {
      patches.push({
        type: 'insert',
        from: index,
        text: change[1],
      })
      index += change[1].length
    }
  }
  return patches
}
export const applyPatches = (input: string, patches: Patch[]) => {
  let output = input
  for (const patch of patches) {
    if (patch.type === 'insert')
      // 插入的时候，拿到index前所有字符，拼接当前插入字符 加上剩下字符
      output = output.slice(0, patch.from) + patch.text + output.slice(patch.from)

    else if (patch.type === 'removal')
      // 删除的时候，拿到当前index - 删除长度的字符，加上剩下字符
      output = output.slice(0, patch.from - patch.length) + output.slice(patch.from)
  }
  return { output }
}
